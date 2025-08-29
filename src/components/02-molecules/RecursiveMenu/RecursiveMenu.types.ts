import type { DocsIndexContextValue } from '@/components/08-providers/DocsIndexProvider/DocsIndexProvider.types'

export interface RecursiveMenuProps {
    taxonomy: DocsIndexContextValue['taxonomy']
    level?: number
    prefix?: string
}
