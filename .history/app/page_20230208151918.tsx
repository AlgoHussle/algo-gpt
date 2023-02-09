

function Homepage() {
    return (
    <div className="flex flex-col items-center justify-center h-screen
        px-2 text-white">
            <h1 className="text-5xl font-bold mb-20">AlgoHussleGPT </h1>

        <div>
            <div>
                <div>
                    {/* Sun Icon */}
                    <h2 className="">Examples</h2>
                </div>

                <div className="space-y-2">
                    <p className="infoText">"Explain something to me"</p>
                    <p className="infoText">"What is the difference between shark and fish?"</p>
                    <p className="infoText">"What is the color of the planet Mercury"</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Homepage
