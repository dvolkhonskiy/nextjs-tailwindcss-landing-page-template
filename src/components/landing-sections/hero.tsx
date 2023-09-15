import Link from "next/link";
import Image from "next/image";


export default function Hero() {
    return (
        <section
            className="my-20 flex flex-col md:flex-row justify-center items-center text-center md:text-left">
            <div className="w-full md:w-7/12 md:mr-8">
                <h1 className="text-5xl font-bold">The most <span
                    className='text-primary'>important text</span> on the page</h1>
                <p className="text-xl py-6">
                    Some details about your product that makes the first impression even stronger.
                </p>
                <Link
                    href='/'
                    className="btn btn-primary"
                >
                    Call to action
                </Link>
            </div>
            <div
                className="relative w-full md:w-5/12 flex flex-col justify-start items-center gap-16 md:gap-24">
                <Image src='/images/hero-img.png'
                       width="400" height="400"
                       className="rounded-xl"
                       alt="Supalaunch"
                ></Image>
            </div>
        </section>

    )
}