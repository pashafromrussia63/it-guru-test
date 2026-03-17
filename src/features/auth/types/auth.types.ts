export interface ProtectedRouteProps {
    children: React.ReactNode;
}

type InputIcon = 'user' | 'lock';
type VisibilityIcon = 'eye' | 'eye_closed';

export interface FormFieldProps {
    id: string;
    name: string;
    type: string;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    icon: InputIcon;
    showClear?: boolean;
    onClear?: () => void;
    showToggle?: boolean;
    onToggle?: () => void;
    toggleIcon?: VisibilityIcon;
}

export interface SubmitButtonProps {
    loading: boolean;
}

export interface ErrorMessageProps {
    message: string;
}

