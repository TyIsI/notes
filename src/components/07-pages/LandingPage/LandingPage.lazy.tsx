import { type JSX, type ReactNode, lazy, Suspense } from 'react'

const LazyLandingPage = lazy(async () => await import('./LandingPage'))

const LandingPage = (
    props: JSX.IntrinsicAttributes & { children?: ReactNode }
) => (
    <Suspense fallback={null}>
        <LazyLandingPage {...props} />
    </Suspense>
)

export default LandingPage
