import { TextLink } from '@/components/TextLink'

export const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-center bg-red-200/0 px-6 pt-40 pb-12">
      <div className="flex w-full max-w-xl items-center justify-between text-sm">
        <p className="text-neutral-500">© 2025</p>
        <nav className="flex gap-4">
          <TextLink external href="https://x.com/logan_liffick" title="X" />
          <TextLink
            external
            href="https://github.com/loganliffick"
            title="Github"
          />
          <TextLink
            external
            href="https://github.com/loganliffick"
            title="Email"
          />
        </nav>
      </div>
    </footer>
  )
}
