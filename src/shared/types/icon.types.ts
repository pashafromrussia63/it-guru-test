import React from 'react';

export type IconName = 'user' | 'lock' | 'cross' | 'eye' | 'eye_closed' | 'refresh' | 'add' | 'search';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: IconName;
    size?: number;
    className?: string;
}