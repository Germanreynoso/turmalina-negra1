import { motion } from 'framer-motion'

const WHATSAPP_URL = 'https://wa.me/5493815909045'

const steps = [
    {
        number: '01',
        title: 'Contacta',
        description: 'Escribime por WhatsApp o redes sociales. Contame como te sentis y que tipo de terapia te interesa.',
        icon: (
            <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M8 36l-2 8 8-2a20 20 0 10-6-6z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20 18h8M20 24h12M20 30h6" strokeLinecap="round" opacity="0.5" />
            </svg>
        ),
    },
    {
        number: '02',
        title: 'Agenda',
        description: 'Elegimos juntas el dia y horario ideal para tu sesion. Presencial en Tucuman u online desde donde estes.',
        icon: (
            <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="6" y="10" width="36" height="30" rx="4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 20h36M16 6v8M32 6v8" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="24" cy="30" r="4" opacity="0.5" />
            </svg>
        ),
    },
    {
        number: '03',
        title: 'Sesion',
        description: 'Vivencia una experiencia unica de sanacion energetica en un espacio seguro, amoroso y profesional.',
        icon: (
            <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M24 4c3 6 14 14 14 24a14 14 0 01-28 0C10 18 21 10 24 4z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M24 16c1.5 3 7 7 7 12a7 7 0 01-14 0c0-5 5.5-9 7-12z" opacity="0.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        number: '04',
        title: 'Transforma',
        description: 'Integra los cambios energeticos en tu dia a dia. Senti como tu vida se alinea con tu verdadera esencia.',
        icon: (
            <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M24 4l4 8 8 1-6 6 2 8-8-4-8 4 2-8-6-6 8-1z" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="24" cy="36" r="8" opacity="0.3" />
                <path d="M20 36h8M24 32v8" strokeLinecap="round" opacity="0.5" />
            </svg>
        ),
    },
]

export default function HowItWorks() {
    return (
        <section className="section-padding bg-beige-50 relative overflow-hidden">
            <div className="sacred-geometry top-1/2 -translate-y-1/2 -left-32 w-[400px] h-[400px] opacity-5" />

            <div className="container-max relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-sage-100 text-sage-500 text-sm font-medium tracking-wide mb-4">
                        Como Funciona
                    </span>
                    <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl mb-4">
                        Tu camino hacia la{' '}
                        <span className="text-gradient-gold">sanacion</span>
                    </h2>
                    <p className="text-earth-300 max-w-xl mx-auto">
                        Un proceso simple y amoroso para iniciar tu transformacion energetica.
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Connecting line (desktop) */}
                    <div className="hidden md:block absolute top-24 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-[2px] bg-gradient-to-r from-sage-200 via-gold-200 to-lavender-200" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="flex flex-col items-center text-center group"
                            >
                                {/* Icon circle */}
                                <div className="relative mb-6">
                                    <div className="w-16 h-16 rounded-full bg-white border-2 border-sage-200 flex items-center justify-center text-sage-500 shadow-md group-hover:border-gold-300 group-hover:shadow-lg group-hover:shadow-gold-200/30 transition-all duration-500 relative z-10">
                                        {step.icon}
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gold-400 text-white text-xs font-bold flex items-center justify-center shadow-sm">
                                        {step.number}
                                    </div>
                                </div>

                                {/* Mobile connector */}
                                {index < steps.length - 1 && (
                                    <div className="md:hidden w-[2px] h-8 bg-gradient-to-b from-sage-200 to-gold-200 -mt-3 mb-3" />
                                )}

                                <h3 className="heading-serif text-xl mb-2 group-hover:text-sage-500 transition-colors duration-300">
                                    {step.title}
                                </h3>
                                <p className="text-earth-300 text-sm leading-relaxed max-w-[220px]">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-center mt-14"
                >
                    <a
                        href={`${WHATSAPP_URL}?text=${encodeURIComponent('Hola, quiero iniciar mi camino de sanacion')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.67-1.388A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.24 0-4.31-.726-5.994-1.956l-.418-.306-2.77.824.753-2.852-.334-.437A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                        </svg>
                        Dar el primer paso
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
