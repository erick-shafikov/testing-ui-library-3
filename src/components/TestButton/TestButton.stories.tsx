import type { Meta, StoryObj } from '@storybook/react'

import { MantineProvider } from '@/components/MainProvider'
import { TestButton } from '@/components/TestButton'
import { ButtonProps } from '@mantine/core'

// ----------------------------------------------------------------------

const meta = {
  title: 'Components/MyButton',
  component: TestButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: (Story) => (
    <MantineProvider>
      <Story />
    </MantineProvider>
  ),
} satisfies Meta<typeof TestButton>

type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    size: 'xl',
    children: 'Button',
  } as ButtonProps,
}

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Button',
  } as ButtonProps,
}

// ----------------------------------------------------------------------

export default meta
