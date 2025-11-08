import { useState } from "react";
export default function NavbarGlass () {
  // State to manage the mobile menu's open/closed status
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation links data
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav className="  top-0 z-50 w-full sticky z-99999999999999999999999999999999999999999999999999999   ">
      {/* Glassmorphism effect:
        - bg-white/10: Semi-transparent white background
        - backdrop-blur-lg: Applies the blur effect to the content behind it
        - border-b border-white/20: Subtle bottom border for definition
        - shadow-sm: A very light shadow to lift it
      */}
      <div className="  bg-blue-400/10 backdrop-blur-lg border-b border-white/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo or Brand Name */}
            <div className= "shrink-0">
              <a href="#" className="text-white text-2xl font-bold transition-opacity hover:opacity-80">
               Hai
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-gray-200 transition-colors duration-200 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle mobile menu"
              >
                <span className="sr-only">Open main menu</span>
                {!isMobileMenuOpen ? (
                  // Hamburger Icon
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  // Close (X) Icon
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
            
          </div>
        </div>
      </div>

      {/* Mobile Menu
        - Uses the same glass effect
        - Conditionally rendered based on `isMobileMenuOpen`
        - `md:hidden` ensures it only shows on mobile
      */}
      <div
        className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden absolute w-full bg-blue-200/10 backdrop-blur-lg shadow-lg border-b border-white/20`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-gray-200 hover:bg-white/20 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};