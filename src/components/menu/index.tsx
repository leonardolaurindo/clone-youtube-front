import {
    ButtonIcon,
    Container,
    MenuItem
} from "./styles";
import Bell from '../../assets/sino.png';

const items = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

interface IProps {
    openMenu: boolean;
}

function Menu({ openMenu }: IProps) {
    return (
        <Container openMenu={openMenu}>
            {items.map(() => (
                <MenuItem openMenu={openMenu}>
                    <ButtonIcon alt="Hamburguer Icon" src={Bell} />
                    <span>Inicio</span>
                </MenuItem>
            ))}
        </Container>
    )
}
export default Menu;