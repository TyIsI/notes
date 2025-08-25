import type { FC } from 'react'

import { clsx } from 'clsx'

import type { LoadingPageProps } from './LoadingPage.types'

const LoadingPage: FC<LoadingPageProps> = () => (
    <div className='fixed top-0 right-0 bottom-0 left-0 z-10 overflow-hidden bg-white'>
        <div className='m-auto h-96 w-96'>
            <p className={clsx('animation-blink')}>Loading...</p>
        </div>
    </div>
)

export default LoadingPage
