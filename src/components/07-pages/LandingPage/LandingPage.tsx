import { useState, type FC } from 'react'

import type { LandingPageProps } from './LandingPage.types'

import reactLogo from '@/assets/react.svg'
import tailwindLogo from '@/assets/tailwind.svg'
import tanstackLogo from '@/assets/tanstack.png'
import viteLogo from '@/assets/vite.svg'

const LandingPage: FC<LandingPageProps> = () => {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className='flex items-center justify-center gap-x-6'>
                <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
                    <img src={viteLogo} className='logo' alt='Vite logo' />
                </a>
                <a href='https://react.dev' target='_blank' rel='noreferrer'>
                    <img
                        src={reactLogo}
                        className='logo react'
                        alt='React logo'
                    />
                </a>
                <a href='https://tanstack.com' target='_blank' rel='noreferrer'>
                    <img
                        src={tanstackLogo}
                        className='logo'
                        alt='TanStack logo'
                    />
                </a>
                <a href='https://tailwind.com' target='_blank' rel='noreferrer'>
                    <img
                        src={tailwindLogo}
                        className='logo'
                        alt='Tailwind logo'
                    />
                </a>
            </div>
            <div className='my-2 min-h-14 py-2'>
                <h1>React HTGR Template 1.0</h1>
            </div>
            <div className='my-2 min-h-14 py-2'>
                <h2>A Vite React TS template to hit the ground running.</h2>
                (Or how I do it at least.)
            </div>
            <div className='w-half mx-auto my-2 flex flex-wrap justify-center font-bold *:m-2 *:rounded-lg *:border *:border-x-4 *:p-1.5 *:align-middle'>
                <span>React</span>
                <span>Vite</span>
                <span>TypeScript</span>
                <span>TanStack</span>
                <span>Tailwind</span>
                <span>Atomic React</span>
                <span>Generate-React-Cli</span>
                <span>Just</span>
                <span>Wireit</span>
            </div>
            <div className='card'>
                <button
                    onClick={() => {
                        setCount((count) => count + 1)
                    }}
                    className='mb-6'
                >
                    count is {count}
                </button>
                <p>
                    Edit{' '}
                    <code>
                        src/components/07-pages/LandingPage/LandingPage.tsx
                    </code>{' '}
                    and save to test HMR
                </p>
            </div>
            <p className='read-the-docs'>
                Click on the Vite, React, TanStack or Tailwind logos to learn
                more.
            </p>
        </>
    )
}
export default LandingPage
