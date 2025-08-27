import type { Meta, StoryObj } from '@storybook/react-vite'

import ErrorPage from './ErrorPage'

const meta = {
    component: ErrorPage
} satisfies Meta<typeof ErrorPage>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        primary: true,
        label: 'ErrorPage'
    }
}
