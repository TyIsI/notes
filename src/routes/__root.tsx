import '@/styles/index.css'

import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import Header from '@/components/05-materials/Header/Header'
import MainSideBarMenu from '@/components/05-materials/MainSideBarMenu/MainSideBarMenu'

export const Route = createRootRoute({
    component: () => (
        <div className='container'>
            <Header />
            <div className='relative flex flex-row'>
                <div className='dark:shadow-sidemenu-dark shadow-sidemenu-light absolute top-20 bottom-0 left-0 flex w-56 gap-2 p-2'>
                    <MainSideBarMenu />
                </div>
                <div className='absolute -mt-8 ml-56 h-full w-full border'>
                    <Outlet />
                </div>
            </div>
            <TanStackRouterDevtools />
        </div>
    )
})
