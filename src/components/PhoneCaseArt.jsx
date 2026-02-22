import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WHATSAPP_URL = 'https://wa.me/5493815909045'

const cases = [
    { src: '/images/arte/funda-1.jpeg', alt: 'Funda de celular personalizada con arte espiritual y cristales' },
    { src: '/images/arte/funda-2.jpeg', alt: 'Funda artesanal con diseno de mandalas y geometria sagrada' },
    { src: '/images/arte/funda-3.jpeg', alt: 'Funda de celular con arte holistico y simbolos energeticos' },
    { src: '/images/arte/funda-4.jpeg', alt: 'Funda personalizada con diseno de chakras y energia' },
    { src: '/images/arte/funda-5.jpeg', alt: 'Funda artistica para celular con motivos espirituales' },
    { src: '/images/arte/funda-6.jpeg', alt: 'Funda de celular unica con arte terapeutico hecho a mano' },
    { src: '/images/arte/funda-7.jpeg', alt: 'Funda con diseno exclusivo de cristales y cuarzos' },
    { src: '/images/arte/funda-8.jpeg', alt: 'Funda artesanal para celular con tematica de sanacion' },
    { src: '/images/arte/funda-9.jpeg', alt: 'Funda personalizada con arte sagrado y proteccion energetica' },
    { src: '/images/arte/funda-10.jpeg', alt: 'Funda de celular con diseno espiritual y turmalina negra' },
    { src: '/images/arte/funda-11.jpeg', alt: 'Funda artistica con motivos de naturaleza y sanacion' },
    { src: '/images/arte/funda-12.jpeg', alt: 'Funda exclusiva hecha a mano con arte energetico' },
]

const AUTOPLAY_INTERVAL = 4000
const ITEMS_VISIBLE = { mobile: 1, tablet: 2, desktop: 3 }

const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0, scale: 0.9 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir) => ({ x: dir < 0 ? 300 : -300, opacity: 0, scale: 0.9 }),
}

export default function PhoneCaseArt() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(1)
    const [isPaused, setIsPaused] = useState(false)
    const [visibleCount, setVisibleCount] = useState(1)

    useEffect(() => {
        const updateVisible = () => {
            const w = window.innerWidth
            if (w >= 1024) setVisibleCount(ITEMS_VISIBLE.desktop)
            else if (w >= 640) setVisibleCount(ITEMS_VISIBLE.tablet)
            else setVisibleCount(ITEMS_VISIBLE.mobile)
        }
        updateVisible()
        window.addEventListener('resize', updateVisible)
        return () => window.removeEventListener('resize', updateVisible)
    }, [])

    const totalPages = Math.ceil(cases.length / visibleCount)

    const goNext = useCallback(() => {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % totalPages)
    }, [totalPages])

    const goPrev = useCallback(() => {
        setDirection(-1)
        setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)
    }, [totalPages])

    const goTo = useCallback((index) => {
        setDirection(index > currentIndex ? 1 : -1)
        setCurrentIndex(index)
    }, [currentIndex])

    useEffect(() => {
        if (isPaused) return
        const timer = setInterval(goNext, AUTOPLAY_INTERVAL)
        return () => clearInterval(timer)
    }, [isPaused, goNext])

    const visibleCases = cases.slice(
        currentIndex * visibleCount,
        currentIndex * visibleCount + visibleCount
    )

    return (
        <section
            id="arte"
            className="section-padding relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, var(--color-beige-50) 0%, var(--color-lavender-50) 50%, var(--color-beige-50) 100%)' }}
        >
            {/* Decorative elements */}
            <div className="sacred-geometry -top-20 -right-20 w-[400px] h-[400px] opacity-[0.07]" />
            <div className="sacred-geometry -bottom-32 -left-32 w-[500px] h-[500px] opacity-[0.05]" />

            <div className="container-max relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-lavender-100 text-lavender-500 text-sm font-medium tracking-wide mb-4">
                        Arte en Fundas
                    </span>
                    <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl mb-5">
                        Lleva tu{' '}
                        <span className="text-gradient-gold">energia</span>
                        {' '}a todas partes
                    </h2>
                    <p className="text-earth-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Fundas de celular unicas, pintadas a mano con arte espiritual y simbolos de proteccion.
                        Cada pieza es irrepetible, cargada con intencion y energia positiva.
                    </p>
                </motion.div>

                {/* Carousel */}
                <div
                    className="relative"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Navigation arrows */}
                    <button
                        onClick={goPrev}
                        className="absolute left-0 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/80 backdrop-blur-sm shadow-lg shadow-earth-200/30 flex items-center justify-center text-earth-400 hover:text-lavender-500 hover:bg-white hover:shadow-xl transition-all duration-300"
                        aria-label="Anterior"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={goNext}
                        className="absolute right-0 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/80 backdrop-blur-sm shadow-lg shadow-earth-200/30 flex items-center justify-center text-earth-400 hover:text-lavender-500 hover:bg-white hover:shadow-xl transition-all duration-300"
                        aria-label="Siguiente"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Slides container */}
                    <div className="overflow-hidden mx-8 sm:mx-10">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.12}
                                onDragEnd={(_, info) => {
                                    if (info.offset.x > 60) goPrev()
                                    else if (info.offset.x < -60) goNext()
                                }}
                                className={`grid gap-5 ${visibleCount === 3 ? 'grid-cols-3' :
                                        visibleCount === 2 ? 'grid-cols-2' :
                                            'grid-cols-1'
                                    }`}
                            >
                                {visibleCases.map((item, i) => (
                                    <motion.div
                                        key={item.src}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1, duration: 0.4 }}
                                        className="group relative"
                                    >
                                        <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg shadow-earth-200/20 hover:shadow-2xl hover:shadow-lavender-200/30 transition-all duration-500">
                                            {/* Image */}
                                            <div className="aspect-[3/4] overflow-hidden">
                                                <img
                                                    src={item.src}
                                                    alt={item.alt}
                                                    loading="lazy"
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                                />
                                            </div>

                                            {/* Hover overlay with CTA */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-earth-500/80 via-earth-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-5 rounded-2xl">
                                                <motion.a
                                                    href={`${WHATSAPP_URL}?text=${encodeURIComponent('Hola! Me interesa encargar una funda personalizada como las que vi en la pagina')}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.03 }}
                                                    whileTap={{ scale: 0.97 }}
                                                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-white/95 backdrop-blur-sm text-earth-500 font-semibold text-sm hover:bg-white transition-colors duration-300 shadow-lg"
                                                >
                                                    <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.67-1.388A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.24 0-4.31-.726-5.994-1.956l-.418-.306-2.77.824.753-2.852-.334-.437A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                                                    </svg>
                                                    Encargar esta funda
                                                </motion.a>
                                            </div>

                                            {/* Sparkle badge */}
                                            <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-lavender-500/90 backdrop-blur-sm text-white text-xs font-semibold shadow-lg">
                                                Hecho a mano
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Dot indicators */}
                <div className="flex items-center justify-center gap-2 mt-8">
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            aria-label={`Ir a pagina ${i + 1}`}
                            className={`transition-all duration-300 rounded-full ${i === currentIndex
                                    ? 'w-8 h-3 bg-gradient-to-r from-lavender-400 to-lavender-500 shadow-md shadow-lavender-300/40'
                                    : 'w-3 h-3 bg-earth-200 hover:bg-lavender-300'
                                }`}
                        />
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center mt-12"
                >
                    <p className="text-earth-400/80 text-sm sm:text-base mb-5 max-w-lg mx-auto">
                        Cada funda es una obra de arte unica. Encarga la tuya y lleva contigo la proteccion y la energia que necesitas.
                    </p>
                    <motion.a
                        href={`${WHATSAPP_URL}?text=${encodeURIComponent('Hola! Quiero encargar una funda personalizada')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="btn-primary inline-flex items-center gap-2.5 !bg-gradient-to-r !from-lavender-400 !to-lavender-500 !shadow-lavender-300/30 hover:!shadow-lavender-400/40 !text-base sm:!text-lg !py-3.5 !px-8"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.67-1.388A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.24 0-4.31-.726-5.994-1.956l-.418-.306-2.77.824.753-2.852-.334-.437A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                        </svg>
                        Quiero mi funda personalizada
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
}
