import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function AnimatedCounter({ target, suffix = '', duration = 2000 }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })
    const isNumber = !isNaN(parseInt(target))

    useEffect(() => {
        if (!isInView || !isNumber) return

        const end = parseInt(target)
        const startTime = performance.now()

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            const current = Math.round(eased * end)

            setCount(current)

            if (progress < 1) {
                requestAnimationFrame(animate)
            }
        }

        requestAnimationFrame(animate)
    }, [isInView, target, duration, isNumber])

    return (
        <span ref={ref}>
            {isNumber ? `+${count}` : target}{suffix}
        </span>
    )
}

const stats = [
    { target: '200', suffix: '', label: 'Sesiones realizadas' },
    { target: '5', suffix: '', label: 'Anos de experiencia' },
    { target: '100%', suffix: '', label: 'Compromiso contigo', isText: true },
]

export default function About() {
    return (
        <section id="sobre-mi" className="section-padding bg-white relative overflow-hidden">
            <div className="sacred-geometry -bottom-40 -left-40 w-[600px] h-[600px] opacity-5" />

            <div className="container-max relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Images collage */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <img
                                    src="/images/reiki/reiki-2.jpeg"
                                    alt="Terapeuta holistica realizando sesion de reiki con energia sanadora"
                                    loading="lazy"
                                    className="w-full h-48 sm:h-56 object-cover rounded-2xl shadow-md"
                                />
                                <img
                                    src="/images/pendulo/pendulo-3.jpeg"
                                    alt="Pendulo hebreo utilizado en sesion de armonizacion de chakras"
                                    loading="lazy"
                                    className="w-full h-36 sm:h-44 object-cover rounded-2xl shadow-md"
                                />
                            </div>
                            <div className="pt-8 space-y-4">
                                <img
                                    src="/images/tarot/tarot-3.jpeg"
                                    alt="Cartas de tarot terapeutico en sesion de lectura espiritual"
                                    loading="lazy"
                                    className="w-full h-36 sm:h-44 object-cover rounded-2xl shadow-md"
                                />
                                <img
                                    src="/images/reiki/reiki-3.jpeg"
                                    alt="Ambiente calmo y espiritual preparado para terapia energetica"
                                    loading="lazy"
                                    className="w-full h-48 sm:h-56 object-cover rounded-2xl shadow-md"
                                />
                            </div>
                        </div>
                        {/* Gold accent */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold-200/30 rounded-full blur-2xl" />
                    </motion.div>

                    {/* Text content */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-lavender-100 text-lavender-500 text-sm font-medium tracking-wide mb-4">
                            Sobre Mi
                        </span>
                        <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl mb-6">
                            Tu guia en el camino de la{' '}
                            <span className="text-gradient-gold">sanacion</span>
                        </h2>
                        <div className="space-y-4 text-earth-300 leading-relaxed">
                            <p>
                                Soy Sabri, terapeuta holistica apasionada por acompanar a cada persona en su proceso de transformacion interior. Mi camino espiritual me llevo a formarme en diversas disciplinas energeticas para ofrecer un abordaje integral y profundo.
                            </p>
                            <p>
                                Cada sesion es un espacio sagrado donde la energia fluye con proposito. Trabajo con <strong className="text-earth-500">Tarot Terapeutico</strong>, <strong className="text-earth-500">Pendulo Hebreo</strong> y <strong className="text-earth-500">Reiki</strong>, canalizando herramientas ancestrales con un enfoque moderno y profesional.
                            </p>
                            <p>
                                Mi mision es ayudarte a reconectar con tu esencia, liberar lo que ya no te sirve y abrir caminos de luz hacia tu bienestar pleno.
                            </p>
                        </div>

                        {/* Animated stats */}
                        <div className="grid grid-cols-3 gap-4 mt-8">
                            {stats.map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <div className="heading-serif text-2xl sm:text-3xl text-gradient-gold">
                                        {stat.isText ? (
                                            stat.target
                                        ) : (
                                            <AnimatedCounter
                                                target={stat.target}
                                                suffix={stat.suffix}
                                            />
                                        )}
                                    </div>
                                    <div className="text-earth-300 text-xs sm:text-sm mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
