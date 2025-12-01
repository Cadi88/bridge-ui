import { ReactNode, InputHTMLAttributes } from 'react';

/**
 * All valid HTML5 input types
 */
export type InputType =
    | 'text'
    | 'email'
    | 'password'
    | 'number'
    | 'tel'
    | 'url'
    | 'search'
    | 'date'
    | 'datetime-local'
    | 'time'
    | 'month'
    | 'week'
    | 'color'
    | 'range'
    | 'file'
    | 'hidden'
    | 'checkbox'
    | 'radio';

export type InputState = 'default' | 'error' | 'success';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'prefix' | 'suffix'> {
    /** Input type - supports all HTML5 input types */
    type?: InputType;
    /** Label text displayed above the input */
    label?: string;
    /** Helper text displayed below the input */
    helperText?: string;
    /** Error message - overrides helperText and sets error state */
    error?: string;
    /** Visual state of the input */
    state?: InputState;
    /** Content displayed before the input (e.g., icon, text) */
    prefix?: ReactNode;
    /** Content displayed after the input (e.g., icon, button) */
    suffix?: ReactNode;
    /** Whether the input should take full width of container */
    fullWidth?: boolean;
}

