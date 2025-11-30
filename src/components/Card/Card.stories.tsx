import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardBody, CardFooter } from './Card';
import { Button } from '../Button';

const meta = {
    title: 'Components/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        elevation: {
            control: 'select',
            options: [0, 1, 2, 3, 4],
        },
        padding: {
            control: 'select',
            options: ['none', 'sm', 'md', 'lg'],
        },
        hoverable: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <>
                <CardHeader>Card Title</CardHeader>
                <CardBody>
                    This is the card body with some content. Cards are versatile containers for
                    displaying grouped information.
                </CardBody>
            </>
        ),
    },
};

export const WithFooter: Story = {
    args: {
        children: (
            <>
                <CardHeader>Complete Card</CardHeader>
                <CardBody>
                    This card has a header, body, and footer section. Perfect for forms or
                    content with actions.
                </CardBody>
                <CardFooter>
                    <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                        <Button variant="ghost" size="sm">Cancel</Button>
                        <Button size="sm">Save</Button>
                    </div>
                </CardFooter>
            </>
        ),
    },
};

export const WithPadding: Story = {
    args: {
        padding: 'md',
        children: (
            <div>
                <h3 style={{ marginBottom: '0.5rem' }}>Card with Padding</h3>
                <p style={{ margin: 0 }}>
                    This card has medium padding applied directly to the card container.
                </p>
            </div>
        ),
    },
};

export const Hoverable: Story = {
    args: {
        hoverable: true,
        children: (
            <>
                <CardHeader>Hoverable Card</CardHeader>
                <CardBody>
                    Hover over this card to see the elevation effect. Great for clickable items.
                </CardBody>
            </>
        ),
    },
};

export const NoElevation: Story = {
    args: {
        elevation: 0,
        children: (
            <>
                <CardHeader>Flat Card</CardHeader>
                <CardBody>This card has no shadow elevation.</CardBody>
            </>
        ),
    },
};

export const HighElevation: Story = {
    args: {
        elevation: 4,
        children: (
            <>
                <CardHeader>High Elevation</CardHeader>
                <CardBody>This card has maximum elevation for emphasis.</CardBody>
            </>
        ),
    },
};

export const AllElevations: Story = {
    args: {
        children: null,
    },
    render: () => (
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {[0, 1, 2, 3, 4].map((elevation) => (
                <Card key={elevation} elevation={elevation as 0 | 1 | 2 | 3 | 4}>
                    <CardHeader>Elevation {elevation}</CardHeader>
                    <CardBody>Shadow level {elevation}</CardBody>
                </Card>
            ))}
        </div>
    ),
    parameters: {
        layout: 'padded',
    },
};

export const ProductCard: Story = {
    args: {
        children: null,
    },
    render: () => (
        <Card hoverable style={{ width: '300px' }}>
            <div style={{
                height: '200px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '3rem'
            }}>
                📦
            </div>
            <CardBody>
                <h3 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Product Name</h3>
                <p style={{ margin: 0, fontSize: '0.875rem' }}>
                    A beautiful product description that highlights the key features and benefits.
                </p>
                <div style={{ marginTop: '1rem', fontSize: '1.5rem', fontWeight: 'bold' }}>
                    $99.99
                </div>
            </CardBody>
            <CardFooter>
                <Button fullWidth>Add to Cart</Button>
            </CardFooter>
        </Card>
    ),
};
