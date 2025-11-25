export function ContactUs(){
    return (
        <section id="contact" className="bg-gradient-to-t from-white to-gray-50 py-20">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4 text-center">Contact Us</h2>
                <p className="text-gray-600 mb-8 text-center">Have questions or want to collaborate? Send us a message.</p>

                <div className="bg-white shadow-md rounded-lg p-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">About IEEE ComSoc</h3>
                            <p className="text-gray-600 mb-4">IEEE Computer Society (ComSoc) is a student-led chapter that promotes computing knowledge through workshops, seminars, research talks and community projects. We connect students, faculty and industry to build practical skills and professional networks.</p>

                            <div className="mt-4">
                                <p className="text-sm font-medium text-gray-700 mb-2">Follow us</p>
                                <div className="flex items-center justify-start space-x-3">
                                    <a href="https://facebook.com/ieeecomsoc" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-600 hover:text-blue-600">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12a10 10 0 10-11.5 9.9v-7H7.9v-2.9h2.6V9.4c0-2.6 1.6-4 3.8-4 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6v1.9h2.8l-.4 2.9h-2.4V22A10 10 0 0022 12z"/></svg>
                                    </a>
                                    <a href="https://linkedin.com/company/ieeecomsoc" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-600 hover:text-blue-700">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM3 9h4v12H3zM9 9h3.8v1.6h.1c.5-.9 1.8-1.8 3.7-1.8 4 0 4.7 2.6 4.7 6V21h-4v-5.1c0-1.2 0-2.8-1.7-2.8-1.7 0-2 1.4-2 2.7V21H9z"/></svg>
                                    </a>
                                    <a href="https://twitter.com/ieeecomsoc" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-600 hover:text-blue-500">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 5.9c-.6.3-1.2.5-1.9.6.7-.4 1.3-1 1.6-1.8-.6.4-1.3.6-2 .8C18.5 4.8 17.6 4 16.5 4c-1.7 0-3 1.4-3 3 0 .2 0 .4.1.6-2.5-.1-4.7-1.4-6.2-3.3-.3.6-.5 1.2-.5 1.9 0 1.3.7 2.5 1.8 3.2-.6 0-1.2-.2-1.7-.5v.1c0 1.8 1.2 3.2 2.8 3.6-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.2 3.1 2.2-1.1.9-2.4 1.4-3.8 1.4H6c1.6 1 3.4 1.6 5.3 1.6 6.3 0 9.8-5.2 9.8-9.8v-.4c.7-.5 1.2-1.1 1.6-1.8-.7.3-1.4.5-2.2.6z"/></svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center">
                            <p className="text-gray-700">We do not collect messages or user details on this site. For inquiries, please email us directly or reach out via our social channels listed here.</p>
                            <div className="mt-6">
                                <a href="mailto:info@ieeecomsoc.example" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Email Us</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 text-center text-sm text-gray-500">
                    <p>Email: <a href="mailto:info@ieeecomsoc.example" className="text-blue-600 hover:underline">info@ieeecomsoc.example</a></p>
                    <p className="mt-1">Location: University Campus</p>
                </div>
            </div>
        </section>
    )
}
