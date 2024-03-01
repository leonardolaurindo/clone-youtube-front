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
import HamburguerIcon from '../../assets/icons/hamburger.png';
import Logo from '../../assets/YouTube-Logo.png';
import Lupa from '../../assets/icons/search.png';
import MicIcon from '../../assets/icons/mic.png';
import Bell from '../../assets/icons/sino.png';
import VideoIcon from '../../assets/icons/video.png';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";



interface IProps {
    openMenu: boolean,
    setOpenMenu: (openMenu: boolean) => void;
}

function Header({ openMenu, setOpenMenu }: IProps) {
    const { login, logOut } = useContext(UserContext);

    const navigate = useNavigate();

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
                {login ?
                    <>
                        <ButtonContainer margin='0 0 0 10px' >
                            P
                        </ButtonContainer>
                        <span onClick={() => logOut()}>Sair</span>
                    </>
                    :
                    <button onClick={() => navigate('/login')}>Login</button>
                }
            </HeaderButtons>
        </Container>
    )
}
export default Header;