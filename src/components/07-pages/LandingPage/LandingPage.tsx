import type { FC } from 'react'

import type { LandingPageProps } from './LandingPage.types'

const LandingPage: FC<LandingPageProps> = () => (
    <main className='p-2'>
        <h1 className='my-3 text-center'>Welcome to Ty&apos;s notes!</h1>

        <div className='my-3'>
            Ty&apos;s Notes is a collection of notes for easy referral/lookup on
            a wide range of topics.
        </div>

        <div className='my-3'>
            Notes in this collection will often have been written in ways that
            make it easier to understand.
        </div>

        <div className='my-3'>
            <p>
                The intention is to make this fully open and accessible for
                anyone to use.
            </p>

            <p>
                Please feel free to contribute through the{' '}
                <a href='https://github.com/TyIsI/notes'>GitHub</a> repository.
            </p>
        </div>
    </main>
)
export default LandingPage
