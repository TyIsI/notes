import { createFileRoute } from '@tanstack/react-router'

import CssCategoryPage from '@/components/07-pages/CSSCategoryPage/CSSCategoryPage.lazy'

export const Route = createFileRoute('/_kb/css/$')({
    component: CssCategoryPage
})
