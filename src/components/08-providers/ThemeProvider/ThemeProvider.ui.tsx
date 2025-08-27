import type { ThemeTypes } from './ThemeProvider.types'

import { isThemeType } from './ThemeProvider.guards'

export const enforceTheme = (): void => {
    const storedTheme = isThemeType(localStorage.theme)
        ? localStorage.theme
        : 'system'

    switch (storedTheme) {
        case 'dark':
            document.documentElement.classList.toggle('dark', true)
            document.documentElement.classList.toggle('light', false)
            break
        case 'light':
            document.documentElement.classList.toggle('dark', false)
            document.documentElement.classList.toggle('light', true)
            break
        case 'system':
            document.documentElement.classList.toggle(
                'dark',
                window.matchMedia('(prefers-color-scheme: dark)').matches
            )
            document.documentElement.classList.toggle(
                'light',
                window.matchMedia('(prefers-color-scheme: light)').matches
            )
    }
}

export const saveTheme = (theme: ThemeTypes): void => {
    console.debug(`saving theme`, theme)

    switch (theme) {
        case 'light':
            localStorage.theme = 'light'
            break
        case 'dark':
            localStorage.theme = 'dark'
            break
        case 'system':
            localStorage.removeItem('theme')
            break
    }

    console.log('stored theme is:', localStorage.theme)

    enforceTheme()
}
