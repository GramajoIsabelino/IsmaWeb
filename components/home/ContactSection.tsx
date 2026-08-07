export function ContactSection() {
    return (

        <section
            id="contact"
            className="contact-container"
            aria-label="Datos de contacto"
        >
            <div className="contact-container">

                <div className="flex mt-4 sm:justify-center sm:mt-0">
                    <span
                        className="text-sm text-body sm:text-center followSpielberg"> Follow & share
                    </span>
                    <a href="https://vimeo.com/ismaelkrall" className="text-body hover:text-heading" target="_blank">
                        <svg
                            className="contact-icon"
                            // className="w-5 h-10 contact-icon "
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M21.8 6.5c-.1 2.8-2.1 6.6-6 11.4-4 4.9-7.3 7.4-9.9 7.4-1.6 0-3-1.5-4.1-4.6-.7-2.8-1.4-5.6-2.1-8.4C-1 9.2-.3 7.7 1.8 7c1-.4 2-.8 3-1.2.8-.3 1.3.2 1.5 1.4.3 1.6.6 3.2.9 4.8.4 2.1.9 3.2 1.5 3.2.5 0 1.2-.8 2.2-2.3 1-1.6 1.5-2.8 1.6-3.6.1-1.4-.4-2.1-1.7-2.1-.6 0-1.2.1-1.8.4 1.2-3.8 3.5-5.7 6.9-5.6 2.5.1 3.8 1.6 3.9 4.5Z" />
                        </svg>
                        <span className="sr-only">Vimeo</span>
                    </a>

                    <a href="https://www.youtube.com/@ismaelkrall" className="text-body hover:text-heading ms-5" target="_blank">
                        <svg
                            className="contact-icon"
                            // className="w-5 h-10 contact-icon "
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.5V8.5l6.3 3.5-6.3 3.5Z" />
                        </svg>
                        <span className="sr-only">YouTube</span>
                    </a>

                    <a href="https://www.instagram.com/isma_krall/" className="text-body hover:text-heading ms-5" target="_blank">
                        <svg
                            className="contact-icon"
                            // className="w-5 h-10 contact-icon "
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7Zm5 4a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm6.5-.8a1.3 1.3 0 1 1-2.6 0 1.3 1.3 0 0 1 2.6 0Z" />
                        </svg>
                        <span className="sr-only">Instagram</span>
                    </a>

                    <a href="https://www.imdb.com/es-es/name/nm12377195/" className="text-body hover:text-heading ms-5" target="_blank">
                        <svg
                            className="contact-icon"
                            // className="w-5 h-10 contact-icon "
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M2 6c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6Zm3 2v8h2V8H5Zm3 0v8h1.8v-5l1 5h1.5l1-5v5H15V8h-2.6l-.8 4-.8-4H8Zm8 0v8h3.2c1.6 0 2.8-.9 2.8-2.7v-2.6C22 8.9 20.8 8 19.2 8H16Zm2 1.6h1c.7 0 1 .3 1 1v2.8c0 .7-.3 1-1 1h-1V9.6Z" />
                        </svg>
                        <span className="sr-only">IMDb</span>
                    </a>
                </div>

            </div>
        </section>

    );
};