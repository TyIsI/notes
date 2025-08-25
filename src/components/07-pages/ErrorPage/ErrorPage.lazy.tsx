import { type JSX, type ReactNode, lazy, Suspense } from 'react'

const LazyErrorPage = lazy(async () => await import('./ErrorPage'))

const ErrorPage = (
    props: JSX.IntrinsicAttributes & { children?: ReactNode }
) => (
    <Suspense fallback={null}>
        <LazyErrorPage {...props} />
    </Suspense>
)

export default ErrorPage
