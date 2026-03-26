import { useLayoutEffect, useRef } from 'react'
import { animate, inView, stagger } from 'motion'
import { useReducedMotion } from 'motion/react'
import { useLocation } from 'react-router-dom'

import { cn } from '@/lib/utils'

const GENERIC_WRAPPER_TAGS = new Set(['DIV', 'MAIN', 'HEADER', 'FOOTER'])
const DIRECT_TARGET_TAGS = new Set([
  'H1',
  'H2',
  'H3',
  'H4',
  'H5',
  'H6',
  'P',
  'IMG',
  'VIDEO',
  'A',
  'BUTTON',
  'FORM',
  'ARTICLE',
  'FIGURE',
  'UL',
  'OL',
  'DL',
  'BLOCKQUOTE',
])
const SECTION_SELECTOR = 'section, [data-page-reveal-section]'
const TARGET_SELECTOR = '[data-page-reveal-item]'
const MAX_TARGETS_PER_SECTION = 12
const STAGGER_DELAY_SECONDS = 0.08
const REVEAL_OFFSET_PX = 28
const REVEAL_BLUR_PX = 8
const REVEAL_DURATION_SECONDS = 0.58
const REVEAL_EASING = [0.22, 1, 0.36, 1]
const IN_VIEW_OPTIONS = {
  amount: 0.2,
  margin: '0px 0px -12% 0px',
}

function isRevealElement(element) {
  return element instanceof HTMLElement && !element.hasAttribute('hidden')
}

function getVisibleChildren(element) {
  return Array.from(element.children).filter(
    (child) => isRevealElement(child) && child.getAttribute('aria-hidden') !== 'true',
  )
}

function isDirectTarget(element) {
  return element.hasAttribute('data-page-reveal-item') || DIRECT_TARGET_TAGS.has(element.tagName)
}

function getExplicitTargets(section) {
  const explicitTargets = Array.from(section.querySelectorAll(TARGET_SELECTOR)).filter(
    isRevealElement,
  )

  return explicitTargets.filter(
    (target) =>
      !explicitTargets.some(
        (otherTarget) => otherTarget !== target && otherTarget.contains(target),
      ),
  )
}

function collectHeuristicTargets(element, depth = 0) {
  if (!isRevealElement(element)) {
    return []
  }

  if (element.hasAttribute('data-page-reveal-lock') || depth >= 3) {
    return [element]
  }

  if (isDirectTarget(element) && !GENERIC_WRAPPER_TAGS.has(element.tagName)) {
    return [element]
  }

  const children = getVisibleChildren(element)

  if (!children.length) {
    return []
  }

  const directTargetChildren = children.filter(isDirectTarget)

  if (children.length === 1 && GENERIC_WRAPPER_TAGS.has(element.tagName)) {
    return collectHeuristicTargets(children[0], depth + 1)
  }

  if (directTargetChildren.length === children.length) {
    if (children.length > 1) {
      return [element]
    }

    return collectHeuristicTargets(children[0], depth + 1)
  }

  return children.flatMap((child) => {
    if (isDirectTarget(child) && !GENERIC_WRAPPER_TAGS.has(child.tagName)) {
      return [child]
    }

    const nestedTargets = collectHeuristicTargets(child, depth + 1)

    return nestedTargets.length ? nestedTargets : [child]
  })
}

function getRevealTargets(section) {
  const explicitTargets = getExplicitTargets(section)

  if (explicitTargets.length) {
    return Array.from(new Set(explicitTargets)).slice(0, MAX_TARGETS_PER_SECTION)
  }

  let topLevelTargets = getVisibleChildren(section)

  while (
    topLevelTargets.length === 1 &&
    GENERIC_WRAPPER_TAGS.has(topLevelTargets[0].tagName) &&
    !topLevelTargets[0].hasAttribute('data-page-reveal-lock')
  ) {
    topLevelTargets = getVisibleChildren(topLevelTargets[0])
  }

  return Array.from(
    new Set(topLevelTargets.flatMap((target) => collectHeuristicTargets(target))),
  ).slice(0, MAX_TARGETS_PER_SECTION)
}

function resetRevealTarget(target) {
  target.removeAttribute('data-page-reveal-target')
  target.style.removeProperty('opacity')
  target.style.removeProperty('transform')
  target.style.removeProperty('filter')
  target.style.removeProperty('will-change')
}

function prepareRevealTarget(target) {
  target.setAttribute('data-page-reveal-target', '')
  target.style.setProperty('opacity', '0')
  target.style.setProperty('transform', `translateY(${REVEAL_OFFSET_PX}px)`)
  target.style.setProperty('filter', `blur(${REVEAL_BLUR_PX}px)`)
  target.style.setProperty('will-change', 'opacity, transform, filter')
}

function isSectionVisible(section) {
  const rect = section.getBoundingClientRect()
  const triggerLine = window.innerHeight * 0.88

  return rect.top <= triggerLine && rect.bottom >= 0
}

function PageReveal({ children, className }) {
  const scopeRef = useRef(null)
  const { pathname } = useLocation()
  const prefersReducedMotion = useReducedMotion()

  useLayoutEffect(() => {
    const container = scopeRef.current

    if (!container) {
      return undefined
    }

    const sections = Array.from(container.querySelectorAll(SECTION_SELECTOR)).filter(
      isRevealElement,
    )

    if (!sections.length) {
      return undefined
    }

    if (prefersReducedMotion) {
      sections.forEach((section) => {
        getRevealTargets(section).forEach(resetRevealTarget)
      })

      return undefined
    }

    const cleanups = sections.map((section) => {
      const targets = getRevealTargets(section)

      if (!targets.length) {
        return () => {}
      }

      targets.forEach(prepareRevealTarget)

      let controls = null
      let hasAnimated = false

      const playAnimation = () => {
        if (hasAnimated) {
          return
        }

        hasAnimated = true
        controls = animate(
          targets,
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
          },
          {
            duration: REVEAL_DURATION_SECONDS,
            ease: REVEAL_EASING,
            delay: stagger(STAGGER_DELAY_SECONDS, { startDelay: 0.04 }),
          },
        )

        controls.then(() => {
          targets.forEach(resetRevealTarget)
        })
      }

      const stopInView = inView(section, playAnimation, IN_VIEW_OPTIONS)

      if (isSectionVisible(section)) {
        playAnimation()
      }

      return () => {
        controls?.cancel()
        stopInView()
        targets.forEach(resetRevealTarget)
      }
    })

    return () => {
      cleanups.forEach((cleanup) => cleanup())
    }
  }, [pathname, prefersReducedMotion])

  return (
    <div ref={scopeRef} className={cn('w-full', className)}>
      {children}
    </div>
  )
}

export default PageReveal
