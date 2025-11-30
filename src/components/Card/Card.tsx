import { forwardRef } from 'react';
import { cn } from '../../utils/classNames';
import { CardProps, CardSectionProps } from './Card.types';
import styles from './Card.module.css';

export const Card = forwardRef<HTMLDivElement, CardProps>(
    (
        {
            elevation = 1,
            padding = 'none',
            hoverable = false,
            children,
            className,
            ...props
        },
        ref
    ) => {
        return (
            <div
                ref={ref}
                className={cn(
                    styles.card,
                    styles[`elevation${elevation}`],
                    styles[`padding${padding.charAt(0).toUpperCase() + padding.slice(1)}`],
                    {
                        [styles.hoverable]: hoverable,
                    },
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Card.displayName = 'Card';

export const CardHeader = forwardRef<HTMLDivElement, CardSectionProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <div ref={ref} className={cn(styles.header, className)} {...props}>
                {children}
            </div>
        );
    }
);

CardHeader.displayName = 'CardHeader';

export const CardBody = forwardRef<HTMLDivElement, CardSectionProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <div ref={ref} className={cn(styles.body, className)} {...props}>
                {children}
            </div>
        );
    }
);

CardBody.displayName = 'CardBody';

export const CardFooter = forwardRef<HTMLDivElement, CardSectionProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <div ref={ref} className={cn(styles.footer, className)} {...props}>
                {children}
            </div>
        );
    }
);

CardFooter.displayName = 'CardFooter';
