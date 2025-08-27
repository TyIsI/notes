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
                <div className='dark:shadow-sidemenu-dark shadow-sidemenu-light fixed top-20 bottom-0 left-0 flex h-full min-h-dvh w-56 gap-2 p-2'>
                    <MainSideBarMenu />
                </div>
                <div className='dark:shadow-main-dark shadow-main-light relative right-4 -mt-8 ml-56 min-h-1/2 w-auto min-w-7/8 border'>
                    <Outlet />
                </div>
            </div>
            <TanStackRouterDevtools />
        </div>
    )
})
