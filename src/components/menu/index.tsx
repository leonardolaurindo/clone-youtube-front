import {
    ButtonIcon,
    Container,
    MenuItem,
} from "./styles";
import Bell from '../../assets/icons/sino.png';
import HomeIcon from '../../assets/icons/homepage.png';
import ShortsLogo from '../../assets/icons/shorts.png';
import SubscribeIcon from '../../assets/icons/subscribe.png'
import LibraryIcon from '../../assets/icons/history.png'
import { useNavigate } from "react-router-dom";

const items = [
    { icon: HomeIcon, description: 'Início', link: '/' },
    { icon: ShortsLogo, description: 'Shorts', link: '/shorts' },
    { icon: SubscribeIcon, description: 'Historico', link: '/history' },
    { icon: LibraryIcon, description: 'Biblioteca', link: '/library' }
]
interface IProps {
    openMenu: boolean;
}

function Menu({ openMenu }: IProps) {
    const navigate = useNavigate()
    return (
        <Container openMenu={openMenu}>
            {items.map((item, index) => (
                <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
                    <ButtonIcon alt="Hamburguer Icon" src={item.icon} />
                    <span>{item.description}</span>
                </MenuItem>
            ))}
        </Container>
    )
}
export default Menu;