import { type JSX, type ReactNode, lazy, Suspense } from 'react'

const LazyTopLevelTopicLayout = lazy(async () => await import('./TopLevelTopicLayout'))

const TopLevelTopicLayout = (
    props: JSX.IntrinsicAttributes & { children?: ReactNode }
) => (
    <Suspense fallback={null}>
        <LazyTopLevelTopicLayout {...props} />
    </Suspense>
)

export default TopLevelTopicLayout
