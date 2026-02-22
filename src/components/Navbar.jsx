import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WHATSAPP_URL = 'https://wa.me/5493815909045'

const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Sobre Mi', href: '#sobre-mi' },
    { label: 'Beneficios', href: '#beneficios' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleLinkClick = () => setIsOpen(false)

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'bg-beige-50/95 backdrop-blur-md shadow-lg shadow-earth-200/20'
                    : 'bg-transparent'
                }`}
        >
            <div className="container-max mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-18 md:h-20">
                    {/* Logo */}
                    <a href="#inicio" className="flex items-center gap-3 group">
                        <img
                            src="/images/logo/logo.jpeg"
                            alt="Logo Sabri Terapias Holisticas"
                            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover ring-2 ring-gold-300/50 group-hover:ring-gold-400 transition-all duration-300"
                        />
                        <span className="heading-serif text-lg md:text-xl text-earth-500 group-hover:text-gold-500 transition-colors duration-300">
                            Sabri
                        </span>
                    </a>

                    {/* Desktop links */}
                    <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-earth-400 hover:text-sage-500 transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-sage-400 after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href={`${WHATSAPP_URL}?text=${encodeURIComponent('Hola, quiero reservar una sesion')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary !py-2.5 !px-5 !text-sm"
                        >
                            Reservar
                        </a>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden flex flex-col gap-1.5 p-2 group"
                        aria-label="Menu de navegacion"
                    >
                        <motion.span
                            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                            className="block w-6 h-[2px] bg-earth-400 group-hover:bg-sage-500 transition-colors"
                        />
                        <motion.span
                            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="block w-6 h-[2px] bg-earth-400 group-hover:bg-sage-500 transition-colors"
                        />
                        <motion.span
                            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                            className="block w-6 h-[2px] bg-earth-400 group-hover:bg-sage-500 transition-colors"
                        />
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden overflow-hidden bg-beige-50/98 backdrop-blur-lg border-t border-beige-200"
                    >
                        <div className="px-6 py-6 flex flex-col gap-4">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    onClick={handleLinkClick}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="text-earth-400 hover:text-sage-500 font-medium transition-colors py-1"
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                            <a
                                href={`${WHATSAPP_URL}?text=${encodeURIComponent('Hola, quiero reservar una sesion')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={handleLinkClick}
                                className="btn-primary text-center mt-2"
                            >
                                Reservar Sesion
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}
