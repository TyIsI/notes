import { type JSX, type ReactNode, lazy, Suspense } from 'react'

const LazyLoadingPage = lazy(async () => await import('./LoadingPage'))

const LoadingPage = (
    props: JSX.IntrinsicAttributes & { children?: ReactNode }
) => (
    <Suspense fallback={null}>
        <LazyLoadingPage {...props} />
    </Suspense>
)

export default LoadingPage
