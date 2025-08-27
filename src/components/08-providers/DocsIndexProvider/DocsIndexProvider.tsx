import { useMemo, type FC } from 'react'

import useSWR from 'swr'

import type {
    DocsIndexContextValue,
    DocsIndexProviderProps
} from './DocsIndexProvider.types'

import ErrorPage from '@/components/07-pages/ErrorPage/ErrorPage'
import LoadingPage from '@/components/07-pages/LoadingPage/LoadingPage'

import { DocsIndexContext } from './DocsIndexProvider.context'

const DocsIndexProvider: FC<DocsIndexProviderProps> = ({ children }) => {
    const { data, isLoading, error } = useSWR<DocsIndexContextValue, Error>(
        `${import.meta.env.BASE_URL}docs/index.json`
    )

    const val = useMemo<DocsIndexContextValue>(
        () => ({ ...(data ?? { taxonomy: {}, isLoading }) }),
        [data]
    )

    if (isLoading && data == null) return <LoadingPage />

    if (error != null) return <ErrorPage />

    return (
        <DocsIndexContext.Provider value={val}>
            {children}
        </DocsIndexContext.Provider>
    )
}

export default DocsIndexProvider
