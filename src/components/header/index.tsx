import {
    Container,
    LogoContainer,
    ButtonContainer,
    ButtonIcon,
    SearchContainer,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    HeaderButtons
} from "./styles";
import HamburguerIcon from '../../assets/hamburger.png';
import Logo from '../../assets/YouTube-Logo.png';
import Lupa from '../../assets/search.png';
import MicIcon from '../../assets/mic.png';
import Bell from '../../assets/sino.png';
import VideoIcon from '../../assets/video.png';


interface IProps {
    openMenu: boolean,
    setOpenMenu: (openMenu: boolean) => void;
}

function Header({ openMenu, setOpenMenu }: IProps) {
    return (
        <Container>
            <LogoContainer>
                <ButtonContainer onClick={() => setOpenMenu(!openMenu)} margin='0 10px 0 0'>
                    <ButtonIcon alt="Hamburguer Icon" src={HamburguerIcon} />
                </ButtonContainer>
                <img
                    style={{ cursor: 'pointer', width: '100px' }}
                    alt="YouTube Logo"
                    src={Logo}
                />
            </LogoContainer>
            <SearchContainer>
                <SearchInputContainer>
                    <SearchInput placeholder="Pesquisar..." />
                </SearchInputContainer>
                <SearchButton>
                    <ButtonIcon alt="Search Icon" src={Lupa} />
                </SearchButton>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="Mic Icon" src={MicIcon} />
                </ButtonContainer>
            </SearchContainer>
            <HeaderButtons>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="Videos Icon" src={VideoIcon} />
                </ButtonContainer>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="Notifications Icon" src={Bell} />
                </ButtonContainer>
                <ButtonContainer margin='0 0 0 10px'>
                    P
                </ButtonContainer>
            </HeaderButtons>
        </Container>
    )
}
export default Header;