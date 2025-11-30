import { forwardRef } from 'react';
import { cn } from '../../utils/classNames';
import { ButtonProps } from './Button.types';
import styles from './Button.module.css';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = 'primary',
            size = 'md',
            fullWidth = false,
            loading = false,
            leftIcon,
            rightIcon,
            children,
            className,
            disabled,
            ...props
        },
        ref
    ) => {
        const isDisabled = disabled || loading;

        return (
            <button
                ref={ref}
                className={cn(
                    styles.button,
                    styles[variant],
                    styles[size],
                    {
                        [styles.fullWidth]: fullWidth,
                        [styles.loading]: loading,
                    },
                    className
                )}
                disabled={isDisabled}
                aria-busy={loading}
                aria-disabled={isDisabled}
                {...props}
            >
                {leftIcon && <span className={styles.iconLeft}>{leftIcon}</span>}
                {children}
                {rightIcon && <span className={styles.iconRight}>{rightIcon}</span>}
            </button>
        );
    }
);

Button.displayName = 'Button';
