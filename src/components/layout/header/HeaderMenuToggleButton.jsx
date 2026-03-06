import menuToggler from '../../../assets/MenuToggler/MenuTogler.png'

const HeaderMenuToggleButton = ({ onClick, className = '' }) => (
  <button type="button" className={className} onClick={onClick} aria-label="Open menu">
    <img src={menuToggler} alt="" aria-hidden="true" className="object-contain" />
  </button>
)

export default HeaderMenuToggleButton
