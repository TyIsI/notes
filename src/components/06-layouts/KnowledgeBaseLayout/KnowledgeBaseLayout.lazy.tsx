import { type JSX, type ReactNode, lazy, Suspense } from 'react'

const LazyKnowledgeBaseLayout = lazy(async () => await import('./KnowledgeBaseLayout'))

const KnowledgeBaseLayout = (
    props: JSX.IntrinsicAttributes & { children?: ReactNode }
) => (
    <Suspense fallback={null}>
        <LazyKnowledgeBaseLayout {...props} />
    </Suspense>
)

export default KnowledgeBaseLayout
