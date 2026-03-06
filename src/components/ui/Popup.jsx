import { useEffect } from 'react'
import { X } from 'lucide-react'
import { createPortal } from 'react-dom'

const Popup = ({
  isOpen,
  onClose,
  title,
  children,
  panelClassName = '',
  overlayClassName = '',
  closeOnOverlayClick = true,
}) => {
  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) {
    return null
  }

  return createPortal(
    <div className="fixed inset-0 z-[70] flex items-center justify-center px-4">
      <div
        className={`absolute inset-0 bg-black/45 backdrop-blur-[2px] ${overlayClassName}`}
        onClick={closeOnOverlayClick ? onClose : undefined}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={title || 'Popup'}
        className={`relative z-10 w-full max-w-md rounded-2xl bg-white p-5 shadow-[0_24px_80px_rgba(0,0,0,0.2)] ${panelClassName}`}
      >
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-bold text-[#123E56]">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[#123E56] transition-colors hover:bg-slate-100"
            aria-label="Close popup"
          >
            <X size={20} />
          </button>
        </div>

        {children}
      </div>
    </div>,
    document.body,
  )
}

export default Popup
