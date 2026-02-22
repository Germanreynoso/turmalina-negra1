import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const images = [
    { src: '/images/tarot/tarot-4.jpeg', alt: 'Cartas de tarot iluminadas con velas en sesion terapeutica de guia espiritual' },
    { src: '/images/reiki/reiki-4.jpeg', alt: 'Cristales y cuarzos utilizados en sesiones de reiki y sanacion energetica' },
    { src: '/images/pendulo/pendulo-5.jpeg', alt: 'Pendulo hebreo en sesion de limpieza y armonizacion de chakras energeticos' },
    { src: '/images/pendulo/pendulo-6.jpeg', alt: 'Ambiente preparado con elementos sagrados para terapia con pendulo hebreo' },
    { src: '/images/reiki/reiki-5.jpeg', alt: 'Espacio zen de sanacion con incienso y cristales para sesion de reiki' },
    { src: '/images/pendulo/pendulo-7.jpeg', alt: 'Herramientas de terapia holistica con pendulo y cristales de cuarzo' },
]

function Lightbox({ image, onClose, onPrev, onNext }) {
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape') onClose()
            if (e.key === 'ArrowLeft') onPrev()
            if (e.key === 'ArrowRight') onNext()
        }
        document.body.style.overflow = 'hidden'
        window.addEventListener('keydown', handleKey)
        return () => {
            document.body.style.overflow = ''
            window.removeEventListener('keydown', handleKey)
        }
    }, [onClose, onPrev, onNext])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-earth-500/95 backdrop-blur-lg flex items-center justify-center p-4"
            onClick={onClose}
        >
            {/* Close */}
            <button
                onClick={onClose}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-beige-100 hover:bg-white/20 transition-colors"
                aria-label="Cerrar"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Prev */}
            <button
                onClick={(e) => { e.stopPropagation(); onPrev() }}
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-beige-100 hover:bg-white/20 transition-colors"
                aria-label="Anterior"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            {/* Next */}
            <button
                onClick={(e) => { e.stopPropagation(); onNext() }}
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-beige-100 hover:bg-white/20 transition-colors"
                aria-label="Siguiente"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Image */}
            <motion.img
                key={image.src}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                src={image.src}
                alt={image.alt}
                className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            />

            {/* Caption */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-beige-100/70 text-sm text-center max-w-md">
                {image.alt}
            </div>
        </motion.div>
    )
}

export default function Gallery() {
    const [lightboxIndex, setLightboxIndex] = useState(null)

    const openLightbox = (index) => setLightboxIndex(index)
    const closeLightbox = () => setLightboxIndex(null)

    const goNext = useCallback(() => {
        setLightboxIndex((prev) => (prev + 1) % images.length)
    }, [])

    const goPrev = useCallback(() => {
        setLightboxIndex((prev) => (prev - 1 + images.length) % images.length)
    }, [])

    return (
        <section className="section-padding bg-beige-100/30 relative overflow-hidden">
            <div className="container-max relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-earth-100 text-earth-400 text-sm font-medium tracking-wide mb-4">
                        Galeria
                    </span>
                    <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl mb-4">
                        Un vistazo a nuestro{' '}
                        <span className="text-gradient-gold">espacio sagrado</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: '-30px' }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            onClick={() => openLightbox(i)}
                            className={`relative overflow-hidden rounded-2xl group cursor-pointer ${i === 0 || i === 5 ? 'row-span-2 h-64 md:h-full' : 'h-48 md:h-56'
                                }`}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                loading="lazy"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-earth-500/0 group-hover:bg-earth-500/30 transition-all duration-500 flex items-center justify-center">
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <Lightbox
                        image={images[lightboxIndex]}
                        onClose={closeLightbox}
                        onPrev={goPrev}
                        onNext={goNext}
                    />
                )}
            </AnimatePresence>
        </section>
    )
}
