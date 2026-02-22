import { motion } from 'framer-motion'

const WHATSAPP_URL = 'https://wa.me/5493815909045'
const EMAIL = 'sabritarot1122@gmail.com'

const socialLinks = [
    {
        name: 'Instagram',
        href: '#',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
        ),
    },
    {
        name: 'Facebook',
        href: '#',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
        ),
    },
    {
        name: 'TikTok',
        href: '#',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            </svg>
        ),
    },
]

export default function Footer() {
    return (
        <footer id="contacto" className="bg-earth-500 text-beige-100 relative overflow-hidden">
            {/* Decorative top border */}
            <div className="h-1 bg-gradient-to-r from-sage-400 via-gold-400 to-lavender-400" />

            <div className="sacred-geometry bottom-0 right-0 w-[400px] h-[400px] opacity-5 !border-beige-200/10" />

            <div className="container-max px-6 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-1"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src="/images/logo/logo.jpeg"
                                alt="Logo Sabri Terapias Holisticas"
                                className="w-12 h-12 rounded-full object-cover ring-2 ring-gold-400/50"
                            />
                            <span className="heading-serif text-2xl text-beige-100">Sabri</span>
                        </div>
                        <p className="text-beige-200/70 text-sm leading-relaxed">
                            Terapias holisticas y energeticas para tu bienestar integral. Cada sesion es un paso hacia tu mejor version.
                        </p>
                    </motion.div>

                    {/* Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h3 className="heading-serif text-lg mb-4 text-gold-300">Servicios</h3>
                        <ul className="space-y-2.5">
                            <li>
                                <a href="#servicios" className="text-beige-200/70 hover:text-gold-300 transition-colors text-sm">
                                    Tarot Terapeutico
                                </a>
                            </li>
                            <li>
                                <a href="#servicios" className="text-beige-200/70 hover:text-gold-300 transition-colors text-sm">
                                    Pendulo Hebreo
                                </a>
                            </li>
                            <li>
                                <a href="#servicios" className="text-beige-200/70 hover:text-gold-300 transition-colors text-sm">
                                    Reiki
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="heading-serif text-lg mb-4 text-gold-300">Contacto</h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href={`${WHATSAPP_URL}?text=${encodeURIComponent('Hola, quiero mas informacion sobre las terapias')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-beige-200/70 hover:text-gold-300 transition-colors text-sm group"
                                >
                                    <svg className="w-4 h-4 text-sage-400 group-hover:text-gold-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                    </svg>
                                    +54 9 3815 90-9045
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`mailto:${EMAIL}`}
                                    className="flex items-center gap-2 text-beige-200/70 hover:text-gold-300 transition-colors text-sm group"
                                >
                                    <svg className="w-4 h-4 text-sage-400 group-hover:text-gold-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    {EMAIL}
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Social & CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h3 className="heading-serif text-lg mb-4 text-gold-300">Seguime</h3>
                        <div className="flex gap-3 mb-6">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    aria-label={social.name}
                                    className="w-10 h-10 rounded-full bg-earth-400/50 flex items-center justify-center text-beige-200/70 hover:bg-gold-400 hover:text-white transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                        <a
                            href={`${WHATSAPP_URL}?text=${encodeURIComponent('Hola, quiero reservar una sesion')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary !text-sm !py-2.5"
                        >
                            Reservar Sesion
                        </a>
                    </motion.div>
                </div>

                {/* Bottom */}
                <div className="mt-14 pt-8 border-t border-earth-400/30 text-center">
                    <p className="text-beige-200/40 text-sm italic font-light heading-serif text-lg mb-2">
                        &ldquo;La energia que das al universo, vuelve a vos multiplicada&rdquo;
                    </p>
                    <p className="text-beige-200/30 text-xs mt-4">
                        &copy; {new Date().getFullYear()} Sabri Terapias Holisticas. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}
