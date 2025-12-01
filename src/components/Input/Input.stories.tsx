import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
    title: 'Components/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'select',
            options: [
                'text',
                'email',
                'password',
                'number',
                'tel',
                'url',
                'search',
                'date',
                'datetime-local',
                'time',
                'month',
                'week',
                'color',
                'range',
                'file',
            ],
        },
        state: {
            control: 'select',
            options: ['default', 'error', 'success'],
        },
        disabled: {
            control: 'boolean',
        },
        required: {
            control: 'boolean',
        },
        fullWidth: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: 'Enter text...',
    },
};

export const WithLabel: Story = {
    args: {
        label: 'Email Address',
        type: 'email',
        placeholder: 'you@example.com',
    },
};

export const WithHelperText: Story = {
    args: {
        label: 'Username',
        placeholder: 'Enter username',
        helperText: 'Choose a unique username',
    },
};

export const Required: Story = {
    args: {
        label: 'Full Name',
        placeholder: 'John Doe',
        required: true,
    },
};

export const WithError: Story = {
    args: {
        label: 'Email',
        type: 'email',
        placeholder: 'you@example.com',
        error: 'Please enter a valid email address',
    },
};

export const Success: Story = {
    args: {
        label: 'Username',
        placeholder: 'johndoe',
        state: 'success',
        helperText: 'Username is available!',
    },
};

export const Disabled: Story = {
    args: {
        label: 'Disabled Input',
        placeholder: 'Cannot edit',
        disabled: true,
    },
};

export const WithPrefix: Story = {
    args: {
        label: 'Website',
        type: 'url',
        placeholder: 'example.com',
        prefix: 'https://',
    },
};

export const WithSuffix: Story = {
    args: {
        label: 'Email',
        type: 'text',
        placeholder: 'username',
        suffix: '@company.com',
    },
};

export const Password: Story = {
    args: {
        label: 'Password',
        type: 'password',
        placeholder: 'Enter your password',
        helperText: 'Must be at least 8 characters',
    },
};

export const Number: Story = {
    args: {
        label: 'Age',
        type: 'number',
        placeholder: '18',
        min: 0,
        max: 120,
    },
};

export const Search: Story = {
    args: {
        label: 'Search',
        type: 'search',
        placeholder: 'Search...',
    },
};

export const DateInput: Story = {
    args: {
        label: 'Birth Date',
        type: 'date',
    },
};

export const TimeInput: Story = {
    args: {
        label: 'Appointment Time',
        type: 'time',
    },
};

export const DateTimeLocal: Story = {
    args: {
        label: 'Event Date & Time',
        type: 'datetime-local',
    },
};

export const MonthInput: Story = {
    args: {
        label: 'Select Month',
        type: 'month',
    },
};

export const WeekInput: Story = {
    args: {
        label: 'Select Week',
        type: 'week',
    },
};

export const ColorPicker: Story = {
    args: {
        label: 'Choose Color',
        type: 'color',
        defaultValue: '#6366f1',
    },
};

export const RangeSlider: Story = {
    args: {
        label: 'Volume',
        type: 'range',
        min: 0,
        max: 100,
        defaultValue: 50,
    },
};

export const FileInput: Story = {
    args: {
        label: 'Upload File',
        type: 'file',
        helperText: 'Select a file to upload',
    },
};

export const FullWidth: Story = {
    args: {
        label: 'Full Width Input',
        placeholder: 'This input takes full width',
        fullWidth: true,
    },
    parameters: {
        layout: 'padded',
    },
};

export const AllStates: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '300px' }}>
            <Input label="Default" placeholder="Default state" />
            <Input label="Error" placeholder="Error state" error="This field has an error" />
            <Input label="Success" placeholder="Success state" state="success" helperText="Looks good!" />
            <Input label="Disabled" placeholder="Disabled state" disabled />
        </div>
    ),
    parameters: {
        layout: 'padded',
    },
};

export const AllInputTypes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '400px' }}>
            <Input label="Text" type="text" placeholder="Text input" />
            <Input label="Email" type="email" placeholder="email@example.com" />
            <Input label="Password" type="password" placeholder="••••••••" />
            <Input label="Number" type="number" placeholder="123" />
            <Input label="Tel" type="tel" placeholder="+1 (555) 000-0000" />
            <Input label="URL" type="url" placeholder="https://example.com" />
            <Input label="Search" type="search" placeholder="Search..." />
            <Input label="Date" type="date" />
            <Input label="Time" type="time" />
            <Input label="DateTime Local" type="datetime-local" />
            <Input label="Month" type="month" />
            <Input label="Week" type="week" />
            <Input label="Color" type="color" defaultValue="#6366f1" />
            <Input label="Range" type="range" min={0} max={100} defaultValue={50} />
            <Input label="File" type="file" />
        </div>
    ),
    parameters: {
        layout: 'padded',
    },
};
