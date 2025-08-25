import '@/styles/index.css'

import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import MainSideBarMenu from '@/components/05-materials/MainSideBarMenu/MainSideBarMenu'

export const Route = createRootRoute({
    component: () => (
        <>
            <div className='shadow-sidemenu absolute top-0 bottom-0 left-0 flex w-56 gap-2 p-2'>
                <MainSideBarMenu />
            </div>
            <div className='ml-56'>
                <Outlet />
            </div>
            <TanStackRouterDevtools />
        </>
    )
})
