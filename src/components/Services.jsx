import { motion } from 'framer-motion'
import ServiceCard from './ServiceCard'

const services = [
    {
        name: 'Tarot Terapeutico',
        price: 30000,
        duration: '60 minutos aprox.',
        image: '/images/tarot/tarot-1.jpeg',
        alt: 'Sesion de tarot terapeutico con cartas iluminadas para guia espiritual y autoconocimiento',
        description:
            'Una lectura profunda y transformadora que ilumina tu camino. A traves de los arcanos, descubrimos los mensajes que tu alma necesita escuchar para tomar decisiones con claridad y confianza.',
    },
    {
        name: 'Limpieza y Armonizacion de Chakras con Pendulo Hebreo',
        price: 40000,
        duration: '90 minutos aprox.',
        image: '/images/pendulo/pendulo-1.jpeg',
        alt: 'Limpieza energetica y armonizacion de chakras con pendulo hebreo para equilibrio espiritual',
        description:
            'Libera bloqueos energeticos profundos y restaura el flujo armonico de tus centros vitales. El Pendulo Hebreo trabaja con frecuencias ancestrales para devolver el equilibrio a tu campo energetico.',
    },
    {
        name: 'Sesion de Reiki',
        price: 18000,
        duration: '45 minutos aprox.',
        image: '/images/reiki/reiki-1.jpeg',
        alt: 'Sesion de reiki con imposicion de manos canalizando energia universal sanadora',
        description:
            'Canalizacion de energia universal para sanar cuerpo, mente y espiritu. Una experiencia de paz profunda donde la energia fluye exactamente hacia donde mas la necesitas.',
    },
]

export default function Services() {
    return (
        <section id="servicios" className="section-padding bg-beige-50 relative overflow-hidden">
            {/* Decorative */}
            <div className="sacred-geometry -top-32 -right-32 w-[500px] h-[500px] opacity-5" />

            <div className="container-max relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-sage-100 text-sage-500 text-sm font-medium tracking-wide mb-4">
                        Nuestros Servicios
                    </span>
                    <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl mb-4">
                        Terapias para tu{' '}
                        <span className="text-gradient-sage">bienestar integral</span>
                    </h2>
                    <p className="text-earth-300 max-w-2xl mx-auto text-lg">
                        Cada sesion esta disenada con amor y profesionalismo para guiarte en tu proceso de sanacion y crecimiento espiritual.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={service.name} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}
