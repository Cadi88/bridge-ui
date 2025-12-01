import { forwardRef, useId } from 'react';
import { cn } from '../../utils/classNames';
import { SelectProps, SelectOption, SelectOptionGroup } from './Select.types';
import styles from './Select.module.css';

/**
 * Type guard to check if an item is a SelectOptionGroup
 */
function isOptionGroup(item: SelectOption | SelectOptionGroup): item is SelectOptionGroup {
    return 'options' in item && Array.isArray(item.options);
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
    (
        {
            label,
            helperText,
            error,
            state = 'default',
            options = [],
            placeholder,
            prefix,
            suffix,
            fullWidth = false,
            className,
            disabled,
            required,
            multiple = false,
            size,
            ...props
        },
        ref
    ) => {
        const id = useId();
        const selectId = props.id || id;
        const helperTextId = `${selectId}-helper`;
        const errorId = `${selectId}-error`;

        const currentState = error ? 'error' : state;
        const describedBy = error ? errorId : helperText ? helperTextId : undefined;

        return (
            <div className={cn(styles.container, { [styles.fullWidth]: fullWidth }, className)}>
                {label && (
                    <label htmlFor={selectId} className={styles.label}>
                        {label}
                        {required && <span className={styles.required}>*</span>}
                    </label>
                )}

                <div
                    className={cn(styles.selectWrapper, {
                        [styles.error]: currentState === 'error',
                        [styles.success]: currentState === 'success',
                        [styles.disabled]: disabled,
                    })}
                >
                    {prefix && <span className={styles.prefix}>{prefix}</span>}

                    <select
                        ref={ref}
                        id={selectId}
                        className={cn(styles.select, {
                            [styles.hasPrefix]: !!prefix,
                            [styles.hasSuffix]: !!suffix,
                            [styles.multiple]: multiple,
                        })}
                        disabled={disabled}
                        required={required}
                        multiple={multiple}
                        size={size}
                        aria-invalid={currentState === 'error'}
                        aria-describedby={describedBy}
                        aria-required={required}
                        {...props}
                    >
                        {placeholder && !multiple && (
                            <option value="" disabled>
                                {placeholder}
                            </option>
                        )}

                        {options.map((item, index) => {
                            if (isOptionGroup(item)) {
                                return (
                                    <optgroup key={`group-${index}`} label={item.label}>
                                        {item.options.map((option) => (
                                            <option
                                                key={option.value}
                                                value={option.value}
                                                disabled={option.disabled}
                                            >
                                                {option.label}
                                            </option>
                                        ))}
                                    </optgroup>
                                );
                            } else {
                                return (
                                    <option
                                        key={item.value}
                                        value={item.value}
                                        disabled={item.disabled}
                                    >
                                        {item.label}
                                    </option>
                                );
                            }
                        })}
                    </select>

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

Select.displayName = 'Select';
