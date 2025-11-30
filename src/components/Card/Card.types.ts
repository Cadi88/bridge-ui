import { ReactNode, HTMLAttributes } from 'react';

export type CardElevation = 0 | 1 | 2 | 3 | 4;
export type CardPadding = 'none' | 'sm' | 'md' | 'lg';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    elevation?: CardElevation;
    padding?: CardPadding;
    hoverable?: boolean;
    children: ReactNode;
}

export interface CardSectionProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}
