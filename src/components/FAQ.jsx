import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
    {
        question: 'Las sesiones son presenciales u online?',
        answer: 'Ofrezco ambas modalidades. Las sesiones presenciales se realizan en mi consultorio en Tucuman, y las online se hacen por videollamada. Ambas tienen la misma efectividad energetica, ya que la energia no conoce distancias.',
    },
    {
        question: 'Necesito alguna preparacion previa?',
        answer: 'No es necesaria ninguna preparacion especial. Solo te recomiendo venir con ropa comoda, hidratarte bien y mantener una actitud abierta y receptiva. Es ideal evitar comidas pesadas justo antes de la sesion.',
    },
    {
        question: 'Cuantas sesiones necesito para ver resultados?',
        answer: 'Cada persona es diferente. Muchas personas sienten cambios desde la primera sesion. Sin embargo, para un trabajo mas profundo, recomiendo un minimo de 3 a 4 sesiones espaciadas segun tu proceso individual.',
    },
    {
        question: 'Que metodos de pago aceptas?',
        answer: 'Acepto efectivo, transferencia bancaria y Mercado Pago. El pago se realiza al momento de la sesion o puede reservarse con una sena previa por transferencia.',
    },
    {
        question: 'Puedo combinar diferentes terapias en una misma sesion?',
        answer: 'Si, de hecho muchas veces las terapias se complementan. Por ejemplo, una lectura de Tarot puede acompanarse con Reiki para integrar los mensajes recibidos. Consultame y armamos un plan personalizado.',
    },
    {
        question: 'Es seguro para cualquier persona?',
        answer: 'Las terapias energeticas son completamente seguras y no invasivas. Son complementarias a la medicina tradicional, no la reemplazan. Personas de cualquier edad y condicion pueden beneficiarse.',
    },
]

function FAQItem({ faq, isOpen, onToggle }) {
    return (
        <div className="border-b border-beige-200/80 last:border-b-0">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between py-5 sm:py-6 text-left group"
                aria-expanded={isOpen}
            >
                <span className="heading-serif text-lg sm:text-xl text-earth-500 group-hover:text-sage-500 transition-colors duration-300 pr-4">
                    {faq.question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-sage-50 flex items-center justify-center group-hover:bg-sage-100 transition-colors duration-300"
                >
                    <svg className="w-4 h-4 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12M6 12h12" />
                    </svg>
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-earth-300 leading-relaxed max-w-3xl">
                            {faq.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null)

    return (
        <section id="preguntas" className="section-padding bg-white relative overflow-hidden">
            <div className="sacred-geometry -bottom-32 -right-32 w-[500px] h-[500px] opacity-5" />

            <div className="container-max relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-beige-100 text-earth-400 text-sm font-medium tracking-wide mb-4">
                        Preguntas Frecuentes
                    </span>
                    <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl mb-4">
                        Resolvemos tus{' '}
                        <span className="text-gradient-sage">dudas</span>
                    </h2>
                    <p className="text-earth-300 max-w-xl mx-auto">
                        Todo lo que necesitas saber antes de comenzar tu camino de sanacion.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-3xl mx-auto glass-card p-6 sm:p-10"
                >
                    {faqs.map((faq, i) => (
                        <FAQItem
                            key={i}
                            faq={faq}
                            isOpen={openIndex === i}
                            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
