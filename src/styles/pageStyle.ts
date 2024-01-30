import styled from "@emotion/styled";

const Main = styled.main`
    width: 100vw;

    height: 100vh;

    display: flex;

    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

const Header = styled.header`
    width: 50%;
    padding: 50px;

    border-radius: 20px;
    border-top: 10px solid rgb(0, 170, 170);
    color: rgb(0, 170, 170);

    box-shadow: rgba(0, 0, 0, 0.85) 0px 0px 5px;
`

const Footer = styled.footer`
    background-color: rgb(0, 170, 170);
    width: 100%;
    height: 20px;

    position: fixed;
    bottom: 0;
    left: 0;
`

const DivHome = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    width: 70%;
`

export {
    Header,
    Main,
    DivHome,
    Footer
}