import {StarIcon} from "lucide-react";

export default function FeaturesCards() {
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-3xl font-bold'>Features</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mb-20 mt-5">
                <div className=" card bg-base-200 shadow-xl m-5">
                    <div className="card-body flex flex-col justify-between">
                        <div>
                            <h2 className="card-title">
                                <StarIcon/> Feature 1
                            </h2>
                            <p className="mt-2">
                                Description
                            </p>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-200 shadow-xl m-5">
                    <div className="card-body flex flex-col justify-between">
                        <div>
                            <h2 className="card-title">
                                <StarIcon/> Feature 2
                            </h2>
                            <p className="mt-2">
                                description
                            </p>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-200 shadow-xl m-5">
                    <div className="card-body flex flex-col justify-between">
                        <div>
                            <h2 className="card-title">
                                <StarIcon/> Feature 3
                            </h2>
                            <p className="mt-2">
                                description
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}