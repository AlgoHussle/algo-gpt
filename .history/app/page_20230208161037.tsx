import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline'

function Homepage() {
    return (
    <div className="flex flex-col items-center justify-center h-screen
        px-2 text-white">
            <h1 className="text-5xl font-bold mb-20">AlgoHussleGPT </h1>

        <div>
            <div>
                <div className="flex flex-col items-center justify-center mb-5">
                    {/* Sun Icon */}
                    <SunIcon className='h-8 w- text-yellow-500' />
                    <h2>Examples</h2>
                </div>

                <div className="space-y-2">
                    <p className="infoText">"Explain something to me"</p>
                    <p className="infoText">"What is the difference between shark and fish?"</p>
                    <p className="infoText">"What is the color of the planet Mercury"</p>
                </div>
            </div>

            <div>
                <div className="flex flex-col items-center justify-center mb-5">
                    {/* Sun Icon */}
                    <BoltIcon className='h-8 w- text-yellow-500' />
                    <h2>Capabilities</h2>
                </div>

                <div className="space-y-2">
                    <p className="infoText">""</p>
                    <p className="infoText">"What is the difference between shark and fish?"</p>
                    <p className="infoText">"What is the color of the planet Mercury"</p>
                </div>
            </div>

            <div>
                <div className="flex flex-col items-center justify-center mb-5">
                    {/* Sun Icon */}
                    <ExclamationTriangleIcon className='h-8 w- text-yellow-500' />
                    <h2>Limitations</h2>
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
