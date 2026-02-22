import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function BackToTop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => setVisible(window.scrollY > 600)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToTop}
                    aria-label="Volver arriba"
                    className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-earth-500/80 backdrop-blur-md text-beige-100 flex items-center justify-center shadow-lg hover:bg-earth-500 transition-colors duration-300 border border-earth-400/30"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                    </svg>
                </motion.button>
            )}
        </AnimatePresence>
    )
}
