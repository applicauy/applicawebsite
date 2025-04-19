import '../../styles/menu.scss'
import styles from '../styles/mobile-menu-buton.module.scss';

const MobileMenuButton = (
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
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    );
};

export default MobileMenuButton;