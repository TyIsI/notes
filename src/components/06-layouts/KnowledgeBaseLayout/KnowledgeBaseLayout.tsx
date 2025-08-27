import { useMemo, type FC, type JSX } from 'react'

import { ChevronDoubleRightIcon } from '@heroicons/react/16/solid'
import { Outlet, useLocation } from '@tanstack/react-router'

import type { KnowledgeBaseLayoutProps } from './KnowledgeBaseLayout.types'

import { capitalizeFirstLetter } from '@/lib/utils'

const KnowledgeBaseLayout: FC<KnowledgeBaseLayoutProps> = () => {
    const location = useLocation()

    const pathParts = useMemo(
        () =>
            location.pathname
                .replace(import.meta.env.BASE_URL, '')
                .split('/')
                .splice(1),
        [location]
    )

    console.debug({ pathParts })

    return (
        <div>
            <div className='flex flex-row gap-1'>
                {pathParts.reduce<JSX.Element[]>((c, p, i) => {
                    if (i === 0)
                        return [<span key={p}>{capitalizeFirstLetter(p)}</span>]

                    return [
                        ...c,
                        <ChevronDoubleRightIcon
                            key={`chevron-${p}`}
                            className='size-6 align-middle'
                        />,
                        <span key={p}>{capitalizeFirstLetter(p)}</span>
                    ]
                }, [])}
            </div>
            <Outlet />
        </div>
    )
}

export default KnowledgeBaseLayout
