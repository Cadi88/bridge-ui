import { ReactNode, SelectHTMLAttributes } from 'react';

export type SelectState = 'default' | 'error' | 'success';

export interface SelectOption {
    /** Value of the option */
    value: string | number;
    /** Display label for the option */
    label: string;
    /** Whether the option is disabled */
    disabled?: boolean;
}

export interface SelectOptionGroup {
    /** Label for the option group */
    label: string;
    /** Options in this group */
    options: SelectOption[];
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'prefix' | 'suffix'> {
    /** Label text displayed above the select */
    label?: string;
    /** Helper text displayed below the select */
    helperText?: string;
    /** Error message - overrides helperText and sets error state */
    error?: string;
    /** Visual state of the select */
    state?: SelectState;
    /** Array of options or option groups */
    options?: (SelectOption | SelectOptionGroup)[];
    /** Placeholder text when no option is selected */
    placeholder?: string;
    /** Content displayed before the select (e.g., icon) */
    prefix?: ReactNode;
    /** Content displayed after the select (e.g., icon) */
    suffix?: ReactNode;
    /** Whether the select should take full width of container */
    fullWidth?: boolean;
    /** Whether to allow multiple selections */
    multiple?: boolean;
    /** Number of visible options (for multiple select) */
    size?: number;
}
