import { ComponentProps } from 'react';
import { Content } from '@/app/types';

export type ContentCardProps = ComponentProps<'div'> & { value: Content }