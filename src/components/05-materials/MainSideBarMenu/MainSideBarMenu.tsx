import { useContext, useMemo, type FC } from 'react'

import type { MainSideBarMenuProps } from './MainSideBarMenu.types'

import { DocsIndexContext } from '@/components/08-providers/DocsIndexProvider/DocsIndexProvider.context'

import { generateMenu } from './MainSideBarMenu.ui'

const MainSideBarMenu: FC<MainSideBarMenuProps> = () => {
    const docsIndexContext = useContext(DocsIndexContext)

    const menu = useMemo(
        async () =>
            docsIndexContext != null
                ? await generateMenu(docsIndexContext.taxonomy)
                : null,
        [docsIndexContext]
    )

    return (
        <div className='h-max w-full'>
            <ul className='*:block *:border-b *:border-b-slate-500'>{menu}</ul>
        </div>
    )
}

export default MainSideBarMenu
