import React from 'react';
import UserIcon from '../../assets/icons/user.svg?react';
import LockIcon from '../../assets/icons/lock.svg?react';
import CrossIcon from '../../assets/icons/cross.svg?react';
import EyeIcon from '../../assets/icons/eye.svg?react';
import EyeClosedIcon from '../../assets/icons/eye_closed.svg?react';
import RefreshIcon from '../../assets/icons/refresh.svg?react';

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