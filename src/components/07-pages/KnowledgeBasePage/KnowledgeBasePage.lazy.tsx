import { type JSX, type ReactNode, lazy, Suspense } from 'react'

const LazyKnowledgeBasePage = lazy(async () => await import('./KnowledgeBasePage'))

const KnowledgeBasePage = (
    props: JSX.IntrinsicAttributes & { children?: ReactNode }
) => (
    <Suspense fallback={null}>
        <LazyKnowledgeBasePage {...props} />
    </Suspense>
)

export default KnowledgeBasePage
