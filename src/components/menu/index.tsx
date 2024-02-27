import {
    ButtonIcon,
    Container,
    MenuItem,
} from "./styles";
import Bell from '../../assets/icons/sino.png';
import HomeIcon from '../../assets/icons/homepage.png';

const items = [
    { icon: HomeIcon, description: 'Início', link: '/' },
    { icon: ShortsLogo, description: 'Shorts', link: '/shorts' },
    { icon: SubscribeIcon, description: 'Inscrições', link: '/subscribe' },
    { icon: LibraryIcon, description: 'Biblioteca', link: '/library' }
]
interface IProps {
    openMenu: boolean;
}

function Menu({ openMenu }: IProps) {
    return (
        <Container openMenu={openMenu}>
            {items.map((item, index) => (
                <MenuItem openMenu={openMenu}>
                    <ButtonIcon alt="Hamburguer Icon" src={item.icon} />
                    <span>{item.description}</span>
                </MenuItem>
            ))}
        </Container>
    )
}
export default Menu;