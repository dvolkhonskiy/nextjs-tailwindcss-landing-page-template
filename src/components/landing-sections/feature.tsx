import Link from "next/link";
import Image from "next/image";


export default function Feature({isImageFirst} : {
    isImageFirst: boolean,
}) {
    return (
        <section
            className="my-20 flex flex-col md:flex-row justify-center items-center text-center ">
            {
                isImageFirst &&
                <div
                    className="relative w-full md:w-5/12 flex flex-col justify-center items-center gap-16 md:gap-24">
                    <Image src='/images/feature-img.png'
                           width="400" height="400"
                           className="rounded-xl"
                           alt="Supalaunch"
                    ></Image>
                </div>
            }

            <div className="w-full md:w-7/12 md:mr-8">
                <h1 className="text-4xl font-bold">Feature title</h1>
                <p className="text-xl py-6">
                   Feature details
                </p>
            </div>

            {
                !isImageFirst &&
                <div
                    className="relative w-full md:w-5/12 flex flex-col justify-center items-center gap-16 md:gap-24">
                    <Image src='/images/feature-img.png'
                           width="400" height="400"
                           className="rounded-xl"
                           alt="Supalaunch"
                    ></Image>
                </div>
            }

        </section>
    )
}