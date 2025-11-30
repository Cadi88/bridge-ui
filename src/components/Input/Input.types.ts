import { ReactNode, InputHTMLAttributes } from 'react';

export type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
export type InputState = 'default' | 'error' | 'success';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'prefix' | 'suffix'> {
    type?: InputType;
    label?: string;
    helperText?: string;
    error?: string;
    state?: InputState;
    prefix?: ReactNode;
    suffix?: ReactNode;
    fullWidth?: boolean;
}
