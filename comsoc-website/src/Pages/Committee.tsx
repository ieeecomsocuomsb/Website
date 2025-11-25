export function Committee(){
    return (
        <section id="committee" className="py-20">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Our Committee</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                    <div className="text-center">
                        <div className="h-20 w-20 bg-gray-200 rounded-full mx-auto mb-3"></div>
                        <h4 className="font-medium">President</h4>
                    </div>
                    <div className="text-center">
                        <div className="h-20 w-20 bg-gray-200 rounded-full mx-auto mb-3"></div>
                        <h4 className="font-medium">Vice President</h4>
                    </div>
                    <div className="text-center">
                        <div className="h-20 w-20 bg-gray-200 rounded-full mx-auto mb-3"></div>
                        <h4 className="font-medium">Secretary</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}