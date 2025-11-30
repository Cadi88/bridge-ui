import { forwardRef, useId } from 'react';
import { cn } from '../../utils/classNames';
import { InputProps } from './Input.types';
import styles from './Input.module.css';

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            type = 'text',
            label,
            helperText,
            error,
            state = 'default',
            prefix,
            suffix,
            fullWidth = false,
            className,
            disabled,
            required,
            ...props
        },
        ref
    ) => {
        const id = useId();
        const inputId = props.id || id;
        const helperTextId = `${inputId}-helper`;
        const errorId = `${inputId}-error`;

        const currentState = error ? 'error' : state;
        const describedBy = error ? errorId : helperText ? helperTextId : undefined;

        return (
            <div className={cn(styles.container, { [styles.fullWidth]: fullWidth }, className)}>
                {label && (
                    <label htmlFor={inputId} className={styles.label}>
                        {label}
                        {required && <span className={styles.required}>*</span>}
                    </label>
                )}

                <div
                    className={cn(styles.inputWrapper, {
                        [styles.error]: currentState === 'error',
                        [styles.success]: currentState === 'success',
                        [styles.disabled]: disabled,
                    })}
                >
                    {prefix && <span className={styles.prefix}>{prefix}</span>}

                    <input
                        ref={ref}
                        id={inputId}
                        type={type}
                        className={styles.input}
                        disabled={disabled}
                        required={required}
                        aria-invalid={currentState === 'error'}
                        aria-describedby={describedBy}
                        aria-required={required}
                        {...props}
                    />

                    {suffix && <span className={styles.suffix}>{suffix}</span>}
                </div>

                {error && (
                    <span id={errorId} className={styles.errorText} role="alert">
                        {error}
                    </span>
                )}

                {!error && helperText && (
                    <span id={helperTextId} className={styles.helperText}>
                        {helperText}
                    </span>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';
