import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const WHATSAPP_URL = 'https://wa.me/5493815909045'

export default function Hero() {
    const sectionRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end start'],
    })

    const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
    const textY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

    return (
        <section
            id="inicio"
            ref={sectionRef}
            className="relative min-h-screen flex items-center overflow-hidden"
        >
            {/* Parallax background */}
            <motion.div className="absolute inset-0" style={{ y: bgY }}>
                <img
                    src="/images/tarot/tarot-2.jpeg"
                    alt="Sesion de tarot terapeutico con cartas y cristales en ambiente espiritual"
                    className="w-full h-[120%] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-earth-500/80 via-earth-400/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-beige-50/90 via-transparent to-earth-500/30" />
            </motion.div>

            {/* Sacred geometry decorative elements */}
            <div className="sacred-geometry top-20 -right-32 opacity-20 animate-[spin_60s_linear_infinite]" />
            <div className="sacred-geometry -bottom-20 -left-20 w-[400px] h-[400px] opacity-10 animate-[spin_80s_linear_infinite_reverse]" />

            <motion.div
                style={{ y: textY, opacity }}
                className="relative z-10 section-padding container-max w-full"
            >
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-6"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-gold-100/80 text-gold-500 text-sm font-medium tracking-wide backdrop-blur-sm">
                            Terapias Holisticas
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="heading-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 !text-white drop-shadow-lg"
                    >
                        Transforma tu{' '}
                        <span className="text-gradient-gold !text-transparent">energia</span>,{' '}
                        <br className="hidden sm:block" />
                        transforma tu{' '}
                        <span className="italic font-light">vida</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-lg md:text-xl text-beige-100/90 mb-10 max-w-lg leading-relaxed"
                    >
                        Descubri el poder de las terapias energeticas para sanar, equilibrar
                        y elevar tu ser. Cada sesion es un viaje hacia tu mejor version.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-wrap gap-4"
                    >
                        <a
                            href={`${WHATSAPP_URL}?text=${encodeURIComponent('Hola, quiero reservar una sesion')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary !bg-gradient-to-r !from-gold-400 !to-gold-500 !shadow-gold-400/30"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.67-1.388A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.24 0-4.31-.726-5.994-1.956l-.418-.306-2.77.824.753-2.852-.334-.437A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                            </svg>
                            Reservar Sesion
                        </a>
                        <a
                            href="#servicios"
                            className="btn-secondary !border-beige-100/50 !text-beige-100 hover:!bg-beige-100/10"
                        >
                            Ver Servicios
                        </a>
                    </motion.div>
                </div>
            </motion.div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-beige-50 to-transparent" />
        </section>
    )
}
