import type { FC } from 'react'

import { Link } from '@tanstack/react-router'

import type { MainSideBarMenuProps } from './MainSideBarMenu.types'

const MainSideBarMenu: FC<MainSideBarMenuProps> = () => (
    <div className='h-full w-full text-center *:block *:w-full *:border-b *:border-b-slate-500 *:text-center'>
        <Link to='/'>Home</Link>
        <Link to='/css/$'>CSS</Link>
    </div>
)

export default MainSideBarMenu
