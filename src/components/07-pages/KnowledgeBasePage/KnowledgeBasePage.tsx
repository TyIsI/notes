import { useMemo, type FC } from 'react'

import { useLocation } from '@tanstack/react-router'
import Markdown from 'markdown-to-jsx'
import useSWR from 'swr'

import type { KnowledgeBasePageProps } from './KnowledgeBasePage.types'

import { useDocsIndexContext } from '@/components/08-providers/DocsIndexProvider/DocsIndexProvider.context'

import type { FetcherException } from '@/lib/exceptions/FetcherException'

import ErrorPage from '../ErrorPage/ErrorPage'
import LoadingPage from '../LoadingPage/LoadingPage'

const KnowledgeBasePage: FC<KnowledgeBasePageProps> = () => {
    const docsIndex = useDocsIndexContext()

    const location = useLocation()

    const pathParts = useMemo(
        () =>
            location.pathname.replace(import.meta.env.BASE_URL, '').split('/'),
        [location]
    )

    const articleFile = useMemo(() => {
        if (docsIndex.isLoading) return null

        // TODO improve this
        // @ts-expect-error -- YOLO
        return `${import.meta.env.BASE_URL}${pathParts.reduce((c, e) => c[e], docsIndex.taxonomy)}`.replace(
            '//docs',
            '/docs'
        )
    }, [pathParts])

    const { data, isLoading, error } = useSWR<string, FetcherException>(
        docsIndex.isLoading ? null : articleFile
    )

    if (docsIndex.isLoading || isLoading) return <LoadingPage />

    if (error != null) return <ErrorPage errorMessage={error} />

    if (data == null) return <ErrorPage errorMessage={'Invalid data'} />

    return (
        <div>
            <Markdown className='external max-w-full text-left text-wrap wrap-normal *:my-2.5 *:text-wrap'>
                {data}
            </Markdown>
        </div>
    )
}

export default KnowledgeBasePage
