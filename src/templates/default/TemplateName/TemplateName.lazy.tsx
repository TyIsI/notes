import { type JSX, type ReactNode, lazy, Suspense } from 'react'

const LazyTemplateName = lazy(async () => await import('./TemplateName'))

const TemplateName = (
    props: JSX.IntrinsicAttributes & { children?: ReactNode }
) => (
    <Suspense fallback={null}>
        <LazyTemplateName {...props} />
    </Suspense>
)

export default TemplateName
