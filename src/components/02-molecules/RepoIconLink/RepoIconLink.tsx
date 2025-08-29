import type { FC } from 'react'

import type { RepoIconLinkProps } from './RepoIconLink.types'

import GitHubLogo from '@/components/01-atoms/GitHubLogo/GitHubLogo'

const RepoIconLink: FC<RepoIconLinkProps> = () => (
    <div>
        <a
            href='https://github.com/TyIsI/notes'
            target='_blank'
            rel='noreferrer'
        >
            <GitHubLogo />
        </a>
    </div>
)

export default RepoIconLink
