import type { Meta } from '@storybook/react-vite'

import Header from './Header'

const meta = {
    name: '05-materials/Header',
    component: Header
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        primary: true,
        label: 'Header'
    }
}
