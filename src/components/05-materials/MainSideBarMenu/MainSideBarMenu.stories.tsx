import type { Meta, StoryObj } from '@storybook/react-vite'

import MainSideBarMenu from './MainSideBarMenu'

const meta = {
    component: MainSideBarMenu
} satisfies Meta<typeof MainSideBarMenu>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        primary: true,
        label: 'MainSideBarMenu'
    }
}
