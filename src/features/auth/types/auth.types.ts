export interface ProtectedRouteProps {
    children: React.ReactNode;
  }

export interface FormFieldProps {
    id: string;
    name: string;
    type: string;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    icon: 'user' | 'lock';
    showClear?: boolean;
    onClear?: () => void;
    showToggle?: boolean;
    onToggle?: () => void;
    toggleIcon?: 'eye' | 'eye_closed';
}

export interface SubmitButtonProps {
    loading: boolean;
}

export interface ErrorMessageProps {
    message: string;
}

