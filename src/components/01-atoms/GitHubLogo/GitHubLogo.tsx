import type { FC } from 'react'

import type { GitHubLogoProps } from './GitHubLogo.types'

const GitHubLogo: FC<GitHubLogoProps> = () => (
    <img
        className='size-6 invert-100 dark:invert-0'
        src='/images/github-mark-white.png'
        alt='GitHub Logo'
    />
)

export default GitHubLogo
