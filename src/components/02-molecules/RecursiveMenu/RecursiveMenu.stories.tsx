import type { Meta, StoryObj } from '@storybook/react-vite'

import RecursiveMenu from './RecursiveMenu'

const meta = {
    component: RecursiveMenu
} satisfies Meta<typeof RecursiveMenu>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {}
}
