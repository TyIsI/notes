import { StrictMode } from 'react'

import { createRouter, RouterProvider } from '@tanstack/react-router'
import ReactDOM from 'react-dom/client'
import { SWRConfig } from 'swr'

import ErrorPage from '@/components/07-pages/ErrorPage/ErrorPage'
import LoadingPage from '@/components/07-pages/LoadingPage/LoadingPage'
import DocsIndexProvider from '@/components/08-providers/DocsIndexProvider/DocsIndexProvider'
import ThemeProvider from '@/components/08-providers/ThemeProvider/ThemeProvider'

import { getRootElement } from './main.ui'
import { routeTree } from './routeTree.gen'

// Create a new router instance
const router = createRouter({
    routeTree,
    context: {},
    defaultPreload: 'intent',
    scrollRestoration: true,
    defaultStructuralSharing: true,
    defaultPreloadStaleTime: 0,
    defaultPendingComponent: () => <LoadingPage />,
    defaultErrorComponent: ({ error }) => (
        <ErrorPage errorMessage={error.message} />
    )
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

// Render the app
const rootElement = getRootElement('root')

const root = ReactDOM.createRoot(rootElement)

root.render(
    <StrictMode>
        <SWRConfig
            value={{
                refreshInterval: 3000,
                fetcher: async (
                    resource: RequestInfo | URL,
                    init?: RequestInit
                ) =>
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-return -- YOLO
                    await fetch(resource, init).then(
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-return -- YOLO
                        async (res) => await res.json()
                    )
            }}
        >
            <ThemeProvider>
                <DocsIndexProvider>
                    <RouterProvider router={router} />
                </DocsIndexProvider>
            </ThemeProvider>
        </SWRConfig>
    </StrictMode>
)
