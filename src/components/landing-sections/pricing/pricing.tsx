import PricingProduct from "@/components/landing-sections/pricing/pricing-product";


export default function Pricing() {
    return (
        <section className='grid grid-cols-1 lg:grid-cols-3'>
            <PricingProduct
                name={'Free'}
                description={'Description'}
                price={0}
                features={['Feature 1', 'Feature 2', 'Feature 3']}
            />
            <PricingProduct
                name={'Personal'}
                description={'Description'}
                price={0}
                features={['Feature 1', 'Feature 2', 'Feature 3']}
            />
            <PricingProduct
                name={'Startup'}
                description={'Description'}
                price={0}
                features={['Feature 1', 'Feature 2', 'Feature 3']}
            />
        </section>
    )
}