import { type JSX, type ReactNode, lazy, Suspense } from 'react'

const LazyMainSideBarMenu = lazy(async () => await import('./MainSideBarMenu'))

const MainSideBarMenu = (
    props: JSX.IntrinsicAttributes & { children?: ReactNode }
) => (
    <Suspense fallback={null}>
        <LazyMainSideBarMenu {...props} />
    </Suspense>
)

export default MainSideBarMenu
