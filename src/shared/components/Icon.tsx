import React from 'react';
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg?react';
import { ReactComponent as LockIcon } from '../../assets/icons/lock.svg?react';
import { ReactComponent as CrossIcon } from '../../assets/icons/cross.svg?react';
import { ReactComponent as EyeIcon } from '../../assets/icons/eye.svg?react';
import { ReactComponent as EyeClosedIcon } from '../../assets/icons/eye_closed.svg?react';
import { ReactComponent as RefreshIcon } from '../../assets/icons/refresh.svg?react';

const icons = {
    user: UserIcon,
    lock: LockIcon,
    cross: CrossIcon,
    eye: EyeIcon,
    eye_closed: EyeClosedIcon,
    refresh: RefreshIcon,
} as const;

export type IconName = keyof typeof icons;

interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: IconName;
    size?: number;
    className?: string;
}

export const Icon: React.FC<IconProps> = ({ 
    name, 
    size = 20, 
    className = '', 
    ...props 
}) => {
    const IconComponent = icons[name];
  
    return (
        <IconComponent 
            width={size} 
            height={size} 
            className={className}
            {...props}
        />
    );
};