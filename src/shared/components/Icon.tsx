import React from 'react';
import UserIcon from '../../assets/icons/user.svg';
import LockIcon from '../../assets/icons/lock.svg';
import CrossIcon from '../../assets/icons/cross.svg';
import EyeIcon from '../../assets/icons/eye.svg';
import EyeClosedIcon from '../../assets/icons/eye_closed.svg';
import RefreshIcon from '../../assets/icons/refresh.svg';
import AddIcon from '../../assets/icons/add.svg';
import SearchIcon from '../../assets/icons/search.svg';
import type { IconName, IconProps } from '../types/icon.types';

const icons: Record<IconName, React.FC<React.SVGProps<SVGSVGElement>>> = {
    user: UserIcon,
    lock: LockIcon,
    cross: CrossIcon,
    eye: EyeIcon,
    eye_closed: EyeClosedIcon,
    refresh: RefreshIcon,
    add: AddIcon,
    search: SearchIcon,
};

export const Icon: React.FC<IconProps> = ({
    name,
    size = 20,
    className
}) => {
    const IconComponent = icons[name];
  
    return (
        <IconComponent 
            width={size} 
            height={size}
            className={className}
        />
    );
};