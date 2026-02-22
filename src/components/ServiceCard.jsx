import { motion } from 'framer-motion'

const WHATSAPP_URL = 'https://wa.me/5493815909045'

export default function ServiceCard({ service, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="glass-card overflow-hidden group hover:shadow-xl hover:shadow-sage-200/20 transition-all duration-500"
        >
            {/* Image */}
            <div className="relative h-56 sm:h-64 overflow-hidden">
                <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-500/40 to-transparent" />
                <div className="absolute bottom-4 right-4 bg-gold-400/90 backdrop-blur-sm text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                    ${service.price.toLocaleString('es-AR')}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
                <h3 className="heading-serif text-xl sm:text-2xl mb-3 group-hover:text-sage-500 transition-colors duration-300">
                    {service.name}
                </h3>
                <p className="text-earth-300 text-sm leading-relaxed mb-6">
                    {service.description}
                </p>

                {/* Duration */}
                <div className="flex items-center gap-2 text-sage-400 text-sm mb-6">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{service.duration}</span>
                </div>

                <a
                    href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Hola, quiero agendar una sesion de ${service.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center"
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.67-1.388A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.24 0-4.31-.726-5.994-1.956l-.418-.306-2.77.824.753-2.852-.334-.437A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                    </svg>
                    Agendar por WhatsApp
                </a>
            </div>
        </motion.div>
    )
}
