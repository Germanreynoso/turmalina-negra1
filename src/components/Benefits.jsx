import { motion } from 'framer-motion'

const benefits = [
    {
        title: 'Armonizacion Energetica',
        description: 'Restaura el equilibrio natural de tu campo energetico, permitiendo que la energia vital fluya libremente por todo tu ser.',
        icon: (
            <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
                <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
                <circle cx="32" cy="32" r="18" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
                <circle cx="32" cy="32" r="8" fill="currentColor" opacity="0.6" />
                <path d="M32 4v10M32 50v10M4 32h10M50 32h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
            </svg>
        ),
        color: 'sage',
    },
    {
        title: 'Liberacion Emocional',
        description: 'Soltar patrones emocionales que te limitan. Cada sesion te acerca a la libertad de sentir sin cargas del pasado.',
        icon: (
            <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
                <path d="M32 56c-1.5-3-6-8-12-14C14 36 8 28 8 22a10 10 0 0120-4c2.5 2.5 4 5.5 4 8a10 10 0 0120 4c0 6-6 14-12 20-6 6-10.5 11-8 14z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M26 30c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
                <circle cx="32" cy="36" r="3" fill="currentColor" opacity="0.4" />
            </svg>
        ),
        color: 'lavender',
    },
    {
        title: 'Claridad Mental',
        description: 'Despeja la mente de ruido y confusiones. Encuentra respuestas profundas y toma decisiones alineadas con tu verdad interior.',
        icon: (
            <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
                <circle cx="32" cy="24" r="16" stroke="currentColor" strokeWidth="1.5" />
                <path d="M24 40h16M26 46h12M28 52h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M32 12v8M26 16l4 4M38 16l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
            </svg>
        ),
        color: 'gold',
    },
    {
        title: 'Equilibrio Espiritual',
        description: 'Conecta con tu esencia mas pura. Encuentra paz interior y alineate con el proposito que tu alma vino a cumplir.',
        icon: (
            <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
                <path d="M32 8c4 8 16 16 16 28a16 16 0 01-32 0C16 24 28 16 32 8z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M32 20c2 4 8 8 8 14a8 8 0 01-16 0c0-6 6-10 8-14z" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
                <circle cx="32" cy="36" r="3" fill="currentColor" opacity="0.4" />
            </svg>
        ),
        color: 'earth',
    },
]

const colorMap = {
    sage: { bg: 'bg-sage-50', text: 'text-sage-500', border: 'border-sage-200' },
    lavender: { bg: 'bg-lavender-50', text: 'text-lavender-500', border: 'border-lavender-200' },
    gold: { bg: 'bg-gold-50', text: 'text-gold-500', border: 'border-gold-200' },
    earth: { bg: 'bg-earth-50', text: 'text-earth-400', border: 'border-earth-200' },
}

export default function Benefits() {
    return (
        <section id="beneficios" className="section-padding bg-beige-100/50 relative overflow-hidden">
            <div className="sacred-geometry top-10 right-10 w-[350px] h-[350px] opacity-5" />

            <div className="container-max relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-gold-100 text-gold-500 text-sm font-medium tracking-wide mb-4">
                        Beneficios
                    </span>
                    <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl mb-4">
                        Lo que las terapias energeticas{' '}
                        <span className="text-gradient-gold">pueden hacer por vos</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => {
                        const colors = colorMap[benefit.color]
                        return (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-30px' }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`group p-8 rounded-2xl ${colors.bg} border ${colors.border} hover:shadow-lg transition-all duration-500 hover:-translate-y-1`}
                            >
                                <div className={`${colors.text} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                                    {benefit.icon}
                                </div>
                                <h3 className="heading-serif text-xl mb-3">{benefit.title}</h3>
                                <p className="text-earth-300 text-sm leading-relaxed">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
