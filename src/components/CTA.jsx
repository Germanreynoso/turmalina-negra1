import { motion } from 'framer-motion'

const WHATSAPP_URL = 'https://wa.me/5493815909045'

export default function CTA() {
    return (
        <section className="relative py-24 sm:py-32 overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0">
                <img
                    src="/images/pendulo/pendulo-4.jpeg"
                    alt="Ambiente espiritual con cristales y velas para terapias energeticas"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-earth-500/85 via-earth-400/75 to-sage-600/70" />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-500/50 to-transparent" />
            </div>

            {/* Sacred geometry */}
            <div className="sacred-geometry top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-10 animate-[spin_90s_linear_infinite]" />
            <div className="sacred-geometry top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] opacity-15 animate-[spin_60s_linear_infinite_reverse]" />

            <div className="relative z-10 container-max px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl !text-white mb-6 drop-shadow-lg">
                        Tu energia merece ser{' '}
                        <span className="text-gradient-gold italic !text-transparent">armonizada</span>
                    </h2>
                    <p className="text-beige-100/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        No esperes mas para reconectar con tu esencia. Da el primer paso hacia una vida mas equilibrada, consciente y luminosa.
                    </p>

                    <motion.a
                        href={`${WHATSAPP_URL}?text=${encodeURIComponent('Hola, quiero armonizar mi energia')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="btn-gold inline-flex text-lg sm:text-xl"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.67-1.388A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.24 0-4.31-.726-5.994-1.956l-.418-.306-2.77.824.753-2.852-.334-.437A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                        </svg>
                        Quiero armonizar mi energia
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
}
