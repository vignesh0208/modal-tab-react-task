export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode | string;
  disabled?: boolean;
  name?: string;
  autoFocus?: boolean;
  onClick?: () => void;
  className?: string;
  extraStyles?: React.CSSProperties;
  id?: string;
}
