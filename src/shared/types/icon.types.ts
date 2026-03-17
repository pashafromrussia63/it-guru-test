import React from 'react';

export type IconName = 'user' | 'lock' | 'cross' | 'eye' | 'eye_closed' | 'refresh';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: IconName;
    size?: number;
}