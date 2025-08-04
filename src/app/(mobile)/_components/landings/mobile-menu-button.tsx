import '../../../styles/menu.scss'
import styles from '../../styles/mobile-menu-button-landings.module.scss'

const LandingsMobileMenuButton = (
    {
        onClick,
        isOpen
    }: {
        onClick: any,
        isOpen: boolean
    }
) => {  
    return (
      <button onClick={onClick} className={styles.menuButton} aria-label = "Hamburger menu">
        <div className={`${styles.burger} ${isOpen ? styles.open : ''}`}>
          <span className='bg-black'></span>
          <span className='bg-black'></span>
          <span className='bg-black'></span>
        </div>
      </button>
    );
};

export default LandingsMobileMenuButton;