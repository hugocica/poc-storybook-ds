import { ReactNode } from 'react';
import { Placement } from '@popperjs/core';
export interface IPopoverProps {
    content: ReactNode;
    offset?: {
        horizontal: number;
        vertical: number;
    };
    placement?: Placement;
    trigger?: 'hover' | 'click';
}
