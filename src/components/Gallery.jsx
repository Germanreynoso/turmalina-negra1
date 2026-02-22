import { motion } from 'framer-motion'

const images = [
    { src: '/images/tarot/tarot-4.jpeg', alt: 'Cartas de tarot iluminadas con velas en sesion terapeutica de guia espiritual' },
    { src: '/images/reiki/reiki-4.jpeg', alt: 'Cristales y cuarzos utilizados en sesiones de reiki y sanacion energetica' },
    { src: '/images/pendulo/pendulo-5.jpeg', alt: 'Pendulo hebreo en sesion de limpieza y armonizacion de chakras energeticos' },
    { src: '/images/pendulo/pendulo-6.jpeg', alt: 'Ambiente preparado con elementos sagrados para terapia con pendulo hebreo' },
    { src: '/images/reiki/reiki-5.jpeg', alt: 'Espacio zen de sanacion con incienso y cristales para sesion de reiki' },
    { src: '/images/pendulo/pendulo-7.jpeg', alt: 'Herramientas de terapia holistica con pendulo y cristales de cuarzo' },
]

export default function Gallery() {
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
                            className={`relative overflow-hidden rounded-2xl group ${i === 0 || i === 5 ? 'row-span-2 h-64 md:h-full' : 'h-48 md:h-56'
                                }`}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-earth-500/0 group-hover:bg-earth-500/20 transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
