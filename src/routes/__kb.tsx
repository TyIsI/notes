import type { JSX } from 'react'

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/__kb')({
    component: RouteComponent
})

function RouteComponent(): JSX.Element {
    return <div>Hello &quot;/__kb&quot;!</div>
}
