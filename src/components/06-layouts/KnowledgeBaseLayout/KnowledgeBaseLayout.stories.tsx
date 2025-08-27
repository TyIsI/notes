import type { Meta, StoryObj } from '@storybook/react-vite'

import KnowledgeBaseLayout from './KnowledgeBaseLayout'

const meta = {
    component: KnowledgeBaseLayout
} satisfies Meta<typeof KnowledgeBaseLayout>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        primary: true,
        label: 'KnowledgeBaseLayout'
    }
}
