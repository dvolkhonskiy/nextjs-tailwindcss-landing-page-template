import Hero from "@/components/landing-sections/hero";
import FAQ from "@/components/landing-sections/faq";
import FeaturesCards from "@/components/landing-sections/features-cards";
import Feature from "@/components/landing-sections/feature";
import Pricing from "@/components/landing-sections/pricing/pricing";

export default function Home() {
    return (
        <main className="max-w-6xl mx-auto px-4">
            <Hero/>
            <Feature isImageFirst={true}/>
            <Feature isImageFirst={false}/>
            <FeaturesCards/>
            <FAQ/>
            <Pricing/>
        </main>
    )
}
