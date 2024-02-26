import styled from "styled-components";

export const Container = styled.div<{ openMenu: boolean }>`
    width: ${({ openMenu }) => openMenu ? '250px' : '100px'};
    height: 100vh;
    box-sizing: border-box;
    padding: 65px 10px 10px 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: auto;
`;

export const MenuItem = styled.div<{ openMenu: boolean }>`
    width: 90%;
    min-height:  ${({ openMenu }) => openMenu ? '40px' : '70px'};
    border-radius: 10px;
    cursor: pointer;
    padding: 2px 17px;
    box-sizing: border-box;
    display: flex;
    flex-direction:  ${({ openMenu }) => openMenu ? 'row' : 'column'};
    align-items: center;
    justify-content:  ${({ openMenu }) => openMenu ? 'none' : 'cemter'};
    
    span {
        font-weight:  ${({ openMenu }) => openMenu ? '600' : '400'};
        margin-left:  ${({ openMenu }) => openMenu ? '20px' : 'none'};
        font-size:  ${({ openMenu }) => openMenu ? '16px' : '12px'};
    }

    &:hover {
        background-color: #D3D3D3;
    }
`;


export const ButtonIcon = styled.img`
    width: 25px;
`;
