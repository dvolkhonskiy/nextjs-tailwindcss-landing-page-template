export default function PricingProduct({name, description, price, features}: {
    name: string,
    description: string,
    price: number,
    features: string[]
}) {
    return (
        <div className="card bg-base-100 shadow-xl h-full p-5">
            <div className="card-body">
                <h3 className="mb-4 text-2xl font-semibold">{name}</h3>
                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">{description}</p>
                <div className="flex justify-center items-baseline my-8">
                    <span className="mr-2 text-5xl font-extrabold">
                        {price}$
                    </span>
                    <span>
                        /month
                    </span>
                </div>
                <ul role="list" className="mb-8 space-y-4 text-left">
                    {
                        features.map((feature, index) => {
                            return (
                                <li className="flex items-center space-x-3" key={feature + '-' + index}>
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                                    </svg>
                                    <span><b className='text-lg'></b> {feature} </span>
                                </li>
                            )
                        })
                    }
                </ul>

                <div className="card-actions justify-center">
                    <button
                        className="btn btn-primary"
                    >
                        Start
                    </button>
                </div>
            </div>
        </div>
    )
}