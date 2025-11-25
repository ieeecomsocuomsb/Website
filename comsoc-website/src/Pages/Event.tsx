export function Event(){
    return(
        <section id="events" className="bg-white py-20">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Upcoming Events</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="p-6 border rounded-lg bg-gray-50">
                        <h3 className="font-bold text-lg">Tech Talk: Modern Web</h3>
                        <p className="text-gray-600 mt-2">An overview of modern web frameworks and tooling.</p>
                    </div>
                    <div className="p-6 border rounded-lg bg-gray-50">
                        <h3 className="font-bold text-lg">Workshop: Intro to ML</h3>
                        <p className="text-gray-600 mt-2">Hands-on machine learning workshop for beginners.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}   