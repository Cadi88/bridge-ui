import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta = {
    title: 'Components/Select',
    component: Select,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
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
        multiple: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const countries = [
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'mx', label: 'Mexico' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'fr', label: 'France' },
    { value: 'de', label: 'Germany' },
    { value: 'jp', label: 'Japan' },
    { value: 'cn', label: 'China' },
];

const fruits = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' },
    { value: 'grape', label: 'Grape' },
    { value: 'mango', label: 'Mango' },
];

const groupedOptions = [
    {
        label: 'Fruits',
        options: [
            { value: 'apple', label: 'Apple' },
            { value: 'banana', label: 'Banana' },
            { value: 'orange', label: 'Orange' },
        ],
    },
    {
        label: 'Vegetables',
        options: [
            { value: 'carrot', label: 'Carrot' },
            { value: 'broccoli', label: 'Broccoli' },
            { value: 'spinach', label: 'Spinach' },
        ],
    },
    {
        label: 'Grains',
        options: [
            { value: 'rice', label: 'Rice' },
            { value: 'wheat', label: 'Wheat' },
            { value: 'oats', label: 'Oats' },
        ],
    },
];

export const Default: Story = {
    args: {
        options: countries,
        placeholder: 'Select a country',
    },
};

export const WithLabel: Story = {
    args: {
        label: 'Country',
        options: countries,
        placeholder: 'Select a country',
    },
};

export const WithHelperText: Story = {
    args: {
        label: 'Favorite Fruit',
        options: fruits,
        placeholder: 'Choose your favorite',
        helperText: 'Select the fruit you like most',
    },
};

export const Required: Story = {
    args: {
        label: 'Country',
        options: countries,
        placeholder: 'Select a country',
        required: true,
    },
};

export const WithError: Story = {
    args: {
        label: 'Country',
        options: countries,
        placeholder: 'Select a country',
        error: 'Please select a country',
    },
};

export const Success: Story = {
    args: {
        label: 'Country',
        options: countries,
        defaultValue: 'us',
        state: 'success',
        helperText: 'Selection confirmed!',
    },
};

export const Disabled: Story = {
    args: {
        label: 'Country',
        options: countries,
        defaultValue: 'us',
        disabled: true,
    },
};

export const WithDisabledOptions: Story = {
    args: {
        label: 'Fruit',
        options: [
            { value: 'apple', label: 'Apple' },
            { value: 'banana', label: 'Banana (Out of stock)', disabled: true },
            { value: 'orange', label: 'Orange' },
            { value: 'grape', label: 'Grape (Out of stock)', disabled: true },
            { value: 'mango', label: 'Mango' },
        ],
        placeholder: 'Select a fruit',
    },
};

export const WithOptionGroups: Story = {
    args: {
        label: 'Food Category',
        options: groupedOptions,
        placeholder: 'Select a food',
    },
};

export const MultipleSelection: Story = {
    args: {
        label: 'Select Multiple Countries',
        options: countries,
        multiple: true,
        size: 5,
        helperText: 'Hold Ctrl/Cmd to select multiple',
    },
};

export const MultipleWithGroups: Story = {
    args: {
        label: 'Select Multiple Foods',
        options: groupedOptions,
        multiple: true,
        size: 8,
        helperText: 'Hold Ctrl/Cmd to select multiple',
    },
};

export const FullWidth: Story = {
    args: {
        label: 'Full Width Select',
        options: countries,
        placeholder: 'Select a country',
        fullWidth: true,
    },
    parameters: {
        layout: 'padded',
    },
};

export const AllStates: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '300px' }}>
            <Select label="Default" options={countries} placeholder="Select a country" />
            <Select
                label="Error"
                options={countries}
                placeholder="Select a country"
                error="This field is required"
            />
            <Select
                label="Success"
                options={countries}
                defaultValue="us"
                state="success"
                helperText="Selection confirmed!"
            />
            <Select
                label="Disabled"
                options={countries}
                defaultValue="us"
                disabled
            />
        </div>
    ),
    parameters: {
        layout: 'padded',
    },
};

export const Playground: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '400px' }}>
            <Select
                label="Simple Select"
                options={fruits}
                placeholder="Choose a fruit"
                helperText="Select your favorite fruit"
            />

            <Select
                label="Grouped Options"
                options={groupedOptions}
                placeholder="Choose a food"
                helperText="Options are organized by category"
            />

            <Select
                label="Multiple Selection"
                options={countries}
                multiple
                size={6}
                helperText="Hold Ctrl/Cmd to select multiple countries"
            />

            <Select
                label="With Disabled Options"
                options={[
                    { value: 'option1', label: 'Available Option 1' },
                    { value: 'option2', label: 'Disabled Option', disabled: true },
                    { value: 'option3', label: 'Available Option 2' },
                ]}
                placeholder="Select an option"
            />
        </div>
    ),
    parameters: {
        layout: 'padded',
    },
};
