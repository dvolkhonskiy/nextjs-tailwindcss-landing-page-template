import PricingProduct from "@/components/landing-sections/pricing/pricing-product";


export default function Pricing() {
    return (
        <div className='my-20'>
            <h1 className='text-4xl font-bold text-center mb-5'>Pricing</h1>
            <section className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                <PricingProduct
                    name={'Free'}
                    description={'Description'}
                    price={0}
                    features={['Feature 1', 'Feature 2', 'Feature 3']}
                />
                <PricingProduct
                    name={'Personal'}
                    description={'Description'}
                    price={9}
                    features={['Feature 1', 'Feature 2', 'Feature 3']}
                />
                <PricingProduct
                    name={'Startup'}
                    description={'Description'}
                    price={19}
                    features={['Feature 1', 'Feature 2', 'Feature 3']}
                />
            </section>
        </div>
    )
}