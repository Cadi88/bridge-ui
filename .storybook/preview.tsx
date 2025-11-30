import type { Preview } from '@storybook/react';
import { ThemeProvider } from '../src/hooks/useTheme';
import { I18nextProvider } from 'react-i18next';
import i18n from '../src/i18n/config';
import '../src/styles/tokens.css';
import '../src/styles/themes.css';
import '../src/styles/global.css';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        backgrounds: {
            default: 'light',
            values: [
                {
                    name: 'light',
                    value: '#f8f9fa',
                },
                {
                    name: 'dark',
                    value: '#1a1d23',
                },
            ],
        },
    },
    decorators: [
        (Story) => (
            <I18nextProvider i18n={i18n}>
                <ThemeProvider>
                    <Story />
                </ThemeProvider>
            </I18nextProvider>
        ),
    ],
    globalTypes: {
        theme: {
            description: 'Global theme for components',
            defaultValue: 'light',
            toolbar: {
                title: 'Theme',
                icon: 'circlehollow',
                items: ['light', 'dark', 'system'],
                dynamicTitle: true,
            },
        },
        locale: {
            description: 'Internationalization locale',
            defaultValue: 'en',
            toolbar: {
                title: 'Locale',
                icon: 'globe',
                items: [
                    { value: 'en', title: 'English' },
                    { value: 'es', title: 'Español' },
                ],
                dynamicTitle: true,
            },
        },
    },
};

export default preview;
