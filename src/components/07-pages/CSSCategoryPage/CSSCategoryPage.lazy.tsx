import { type JSX, type ReactNode, lazy, Suspense } from 'react'

const LazyCSSCategoryPage = lazy(async () => await import('./CSSCategoryPage'))

const CSSCategoryPage = (
    props: JSX.IntrinsicAttributes & { children?: ReactNode }
): JSX.Element => (
    <Suspense fallback={null}>
        <LazyCSSCategoryPage {...props} />
    </Suspense>
)

export default CSSCategoryPage
