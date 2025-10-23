
function Footer() {
  return (
    <footer className="bg-surface-elevated text-muted mt-48">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left side - Contact grid */}
          <div className="grid grid-cols-3 gap-4">
            <a href="mailto:contact@example.com" className="hover:opacity-70 transition-opacity">
              nickrmanha@gmail.com
            </a>
            <a href="https://stackoverflow.com/users/14644022/nicholasm" className="hover:opacity-70 transition-opacity">
              NicholasM
            </a>
            <a href="https://www.linkedin.com/in/nicholas-manha/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              Nicholas Manha
            </a>
            <p>
              (530) 410-9658
            </p>
            <a href="https://github.com/nicholasmanha" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              nicholasmanha
            </a>
            <a href="https://app.joinhandshake.com/profiles/nctxta" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              Nicholas Manha
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