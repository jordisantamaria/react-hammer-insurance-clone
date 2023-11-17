import I18n from '../icons/i18n.svg'
import ArrowBottom from '../icons/arrow-bottom.svg'

export const LanguageSelect = () => {
  return (
    <div className='cursor-pointer flex items-center select text-link-white'>
      <I18n className="filter-link-white mr-2" />
      <span>SPA</span>
      <ArrowBottom className="filter-link-white" />
    </div>
  )
}
