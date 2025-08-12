import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon,} from 'lucide-react';
import Styles from './styles.module.css';

export function Menu() {
    return (
        <nav className={Styles.menu}>
            <a className={Styles.menuLink} href='#'>
                <HouseIcon />
            </a>
            <a className={Styles.menuLink} href='#'>
                <HistoryIcon />
            </a>
            <a className={Styles.menuLink} href='#'>
                <SettingsIcon />
            </a>
            <a className={Styles.menuLink} href='#'>
                <SunIcon />
            </a>
        </nav>
    )
}