import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

function NotFound() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
      <div className="absolute left-[-100px] top-[-120px] h-60 w-60 rounded-full bg-secondary/20 blur-3xl" />
      <div className="absolute bottom-[-140px] right-[-120px] h-72 w-72 rounded-full bg-primary-light/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-[65vh] w-full max-w-5xl flex-col items-center justify-center gap-3 lg:gap-5 px-6 py-16 text-center">
        <p className="text-btn uppercase tracking-[0.18em] text-secondary">Error 404</p>
        <h1 className="text-h1 text-[#18181B]">404 Not Found</h1>

        <p className="max-w-xl text-body text-grey-text-secondary">
          The page you are looking for does not exist or may have been moved.
        </p>

        <Link
          to="/"
          className="inline-flex h-[52px] min-w-[138px] items-center justify-center gap-3 rounded-[10px] border border-secondary-light px-7 text-base font-semibold text-secondary-light transition-colors duration-200 hover:bg-secondary-light hover:text-white"
        >
          Back To Website
        </Link>
      </div>
    </section>
  )
}

export default NotFound
