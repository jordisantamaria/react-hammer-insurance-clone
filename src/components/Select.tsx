import ArrowBottom from '../icons/arrow-bottom.svg'

export const Select = ({ children }: any) => {
  return (
    <div className="flex select cursor-pointer font-bold">
      {children}
      <ArrowBottom className="filter-primary" />
    </div>
  )
}
