import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
    {
        name: 'Carolina M.',
        location: 'Tucuman',
        text: 'Llegue a la sesion de Reiki sintiendome completamente agotada emocionalmente. Sabri tiene una energia increible, desde el primer momento me senti contenida y segura. Al terminar, senti una ligereza que no sentia hace meses. Fue como si me hubieran sacado un peso enorme de encima. Ahora vuelvo cada mes.',
        service: 'Sesion de Reiki',
        stars: 5,
    },
    {
        name: 'Lucia P.',
        location: 'San Miguel de Tucuman',
        text: 'La lectura de Tarot con Sabri fue reveladora. No solo me dio claridad sobre una decision laboral que venia postergando, sino que me ayudo a entender patrones que repetia sin darme cuenta. Cada carta cobro un significado profundo. Sali de la sesion con una paz y una determinacion que cambiaron mi rumbo.',
        service: 'Tarot Terapeutico',
        stars: 5,
    },
    {
        name: 'Mariela R.',
        location: 'Yerba Buena',
        text: 'La limpieza con Pendulo Hebreo fue una experiencia unica. Podia sentir fisicamente como la energia se movia, fue muy intenso pero a la vez tan liberador. Sabri me guio con una paciencia y profesionalismo admirables. Mis dolores de cabeza cronicos disminuyeron notablemente despues de esa sesion.',
        service: 'Pendulo Hebreo',
        stars: 5,
    },
]

function StarRating({ count }) {
    return (
        <div className="flex gap-1">
            {Array.from({ length: count }).map((_, i) => (
                <svg key={i} className="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    )
}

export default function Testimonials() {
    const [active, setActive] = useState(0)

    return (
        <section id="testimonios" className="section-padding bg-white relative overflow-hidden">
            <div className="sacred-geometry -top-20 -left-20 w-[400px] h-[400px] opacity-5" />

            <div className="container-max relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-lavender-100 text-lavender-500 text-sm font-medium tracking-wide mb-4">
                        Testimonios
                    </span>
                    <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl mb-4">
                        Experiencias que{' '}
                        <span className="text-gradient-sage">transforman</span>
                    </h2>
                    <p className="text-earth-300 max-w-xl mx-auto">
                        Personas que confiaron en el proceso y encontraron su equilibrio.
                    </p>
                </motion.div>

                {/* Testimonial cards */}
                <div className="max-w-3xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="glass-card p-8 sm:p-12 text-center"
                        >
                            {/* Quote icon */}
                            <div className="text-lavender-300 mb-6">
                                <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
                                </svg>
                            </div>

                            <StarRating count={testimonials[active].stars} />

                            <p className="text-earth-400 text-lg leading-relaxed mt-6 mb-8 italic font-light">
                                &ldquo;{testimonials[active].text}&rdquo;
                            </p>

                            <div>
                                <div className="heading-serif text-xl text-earth-500">
                                    {testimonials[active].name}
                                </div>
                                <div className="text-sage-400 text-sm mt-1">
                                    {testimonials[active].service} &middot; {testimonials[active].location}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation dots */}
                    <div className="flex justify-center gap-3 mt-8">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActive(i)}
                                aria-label={`Ver testimonio ${i + 1}`}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${i === active
                                        ? 'bg-sage-400 w-8'
                                        : 'bg-earth-200 hover:bg-sage-200'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
