import { Icon } from "./Icon"

function Footer() {
  return (
    <footer className="bg-surface-elevated text-muted mt-48">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left side - Contact grid */}
          <div className="grid grid-cols-3 gap-4">
            <a href="mailto:contact@example.com" className="hover:opacity-70 transition-opacity">
              <div className="flex gap-2"><Icon icon="mail" size="small" variant="ghost"></Icon> nickrmanha@gmail.com</div>
            </a>
            <a href="https://stackoverflow.com/users/14644022/nicholasm" className="hover:opacity-70 transition-opacity">
              <div className="flex gap-2"><Icon icon="StackOverflow" size="small" variant="ghost"></Icon> NicholasM</div>
            </a>
            <a href="https://www.linkedin.com/in/nicholas-manha/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <div className="flex gap-2"><Icon icon="Linkedin" size="small" variant="ghost"></Icon> Nicholas Manha</div>
            </a>
            <p>
              <div className="flex gap-2"><Icon icon="phone" size="small" variant="ghost"></Icon> (530) 410-9658 </div>
            </p>
            <a href="https://github.com/nicholasmanha" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <div className="flex gap-2"><Icon icon="GitHub" size="small" variant="ghost"></Icon> nicholasmanha </div>
            </a>
            <a href="https://app.joinhandshake.com/profiles/nctxta" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <div className="flex gap-2"><Icon icon="Handshake" size="small" variant="ghost"></Icon> Nicholas Manha </div>
            </a>
          </div>

          {/* Right side - Copyright */}
          <div className="text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Nicholas Manha. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer