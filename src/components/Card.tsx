export const Card = ({ children, className }: any) => {
  return (
    <div className={`p-6 shadow-xl rounded-[20px] ${className}`}>
      {children}
    </div>
  )
}
