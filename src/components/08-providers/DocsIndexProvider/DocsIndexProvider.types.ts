import type { ReactNode } from 'react'

type RecursiveRecord<
    T extends Record<string, unknown> = Record<string, unknown>
> = Record<string, T | Record<string, T>>

export interface DocsIndexContextValue {
    taxonomy: RecursiveRecord
    isLoading: boolean
}

export interface DocsIndexProviderProps {
    children?: ReactNode
}
