export default function FAQ() {
    const QAs = [
        {
            question: 'Question 1?',
            answer: 'Answer 1.'
        },
        {
            question: 'Question 2?',
            answer: 'Answer 2.'
        },
        {
            question: 'Question 3?',
            answer: 'Answer 3.'
        }
    ]

    return (
        <div className='my-20'>
            <div className='text-center mb-10'>
                <h1 className='text-3xl font-bold'>Frequently Asked Questions
                </h1>
            </div>

            <div>

                {
                    QAs.map((qa) => {
                        return (
                            <div
                                className="collapse collapse-arrow bg-base-100 my-2"
                                key={'q-' + qa.question}
                            >
                                <input type="radio" name="my-accordion-1"/>
                                <div className="collapse-title text-xl font-medium">
                                    {qa.question}
                                </div>
                                <div className="collapse-content">
                                    <p>
                                        {qa.answer}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

