import Link from "next/link";

export default function Footer() {
    return (
            <footer className="footer max-w-6xl mx-auto p-10 text-base-content">
                <nav>
                    <header className="footer-title">Services</header>
                    <Link href='/' className="link link-hover">Branding</Link>
                    <Link href='/' className="link link-hover">Design</Link>
                    <Link href='/' className="link link-hover">Marketing</Link>
                    <Link href='/' className="link link-hover">Advertisement</Link>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <Link href='/' className="link link-hover">About us</Link>
                    <Link href='/' className="link link-hover">Contact</Link>
                    <Link href='/' className="link link-hover">Jobs</Link>
                    <Link href='/' className="link link-hover">Press kit</Link>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <Link href='/' className="link link-hover">Terms of use</Link>
                    <Link href='/' className="link link-hover">Privacy policy</Link>
                    <Link href='/' className="link link-hover">Cookie policy</Link>
                </nav>
                <form>
                    <header className="footer-title">Newsletter</header>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
    )
}