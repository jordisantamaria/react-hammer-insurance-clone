interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  variant: 'contained' | 'outlined'
  color: string
  rightIcon?: any
}

const defaultClassname = 'flex justify-center items-center px-[20px] rounded-lg h-[52px] font-semibold  w-[fit-content] text-lg'

export const Button = ({variant, color, children, onClick, className = '', rightIcon}: ButtonProps) => {
  return variant === 'contained' ?
  (
    <button onClick={onClick} className={`${defaultClassname} bg-${color} text-white  ${className}`}>
      {children}
      {rightIcon}
    </button>
  ) : variant === 'outlined' ? (
    <button onClick={onClick} className={`${defaultClassname} border border-${color} text-${color}  ${className}`}>
      {children}
      {rightIcon}
    </button>
  ) : null
}

