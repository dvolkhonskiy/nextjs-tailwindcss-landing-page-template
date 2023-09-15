import Link from "next/link";
import Image from "next/image";


export default function NavbarClient({}: {}) {
    return (
        <div className="drawer">
            <input id="navbar-drawer" type="checkbox" className="drawer-toggle"/>
            <div className="drawer-content flex flex-col">
                <div className="navbar bg-neutral text-neutral-content">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="navbar-drawer" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 className="inline-block w-6 h-6 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                    </div>
                    <Link
                        className="btn btn-ghost normal-case text-xl"
                        href="/"
                    >
                        <Image src="/images/logo.svg" alt="Too Long Logo" width="40" height="40"></Image>
                        Company Name
                    </Link>
                    <div className='hidden lg:block space-x-2'>
                        <Link
                            className="btn normal-case text-xl"
                            href='/'
                        >
                            Link 1
                        </Link>
                        <Link
                            className="btn normal-case text-xl"
                            href='/'
                        >
                            Link 2
                        </Link>
                    </div>
                </div>
            </div>
            <div className="drawer-side z-50">
                <label htmlFor="navbar-drawer" className="drawer-overlay"></label>
                <ul className=" p-4 w-80 h-full bg-base-200">
                    <li>
                        <Link
                            className="btn normal-case text-xl"
                            href='/'
                        >
                            Link 1
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="btn normal-case text-xl"
                            href='/'
                        >
                            Link 2
                        </Link>
                    </li>

                </ul>
            </div>
        </div>
    )
}