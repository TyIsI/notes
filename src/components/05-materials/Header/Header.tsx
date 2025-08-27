import type { FC } from 'react'

import { Link } from '@tanstack/react-router'

import type { HeaderProps } from './Header.types'

import ThemeSelector from '@/components/00-hypotheticals/ThemeSelector/ThemeSelector'

const Header: FC<HeaderProps> = () => (
    <div className='shadow-nav-dark dark:shadow-nav-light fixed top-0 right-0 left-0 z-10 grid h-10 grid-cols-2 *:w-fit *:min-w-32 *:p-1.5 *:align-middle'>
        <div className='justify-self-start'>
            <Link to='/'>Ty&apos;s Notes</Link>
        </div>
        <div className='justify-self-end'>
            <ThemeSelector />
        </div>
    </div>
)

export default Header
