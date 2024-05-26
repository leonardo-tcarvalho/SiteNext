'use client'

import styled from "styled-components";
import "./globals.css";
import Image from "next/image";
import CarrinhoSVG from "/public/images/Vector.svg";
import Footer from "./components/footer";
import Main from "./page";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <body>
        <Header>
          <LogoDiv>
            <LogoH1>
              MKS
            </LogoH1>
            <LogoP>
              Sistemas
            </LogoP>
          </LogoDiv>
          <ButtonCarrinho>
            <Image src={CarrinhoSVG}/>
            <ContadorCarrinho>0</ContadorCarrinho>
          </ButtonCarrinho>
        </Header>
        <Main>
          {children}
        </Main>
        <Footer></Footer>
      </body>
    </html>
  );
}

const Header = styled.header `
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6.3rem;
  background-color: #0F52BA;
`


const LogoDiv = styled.div `
  display: flex;
`

const LogoH1 = styled.h1 `
  margin-left: 4.1rem;
  font-family: 'Montserrat';
  font-size: 40px;
  font-weight: 600;
  color: white;
`

const LogoP = styled.p `
  margin-left: 0.2rem;
  margin-top: 1.2rem;
  font-family: 'Montserrat';
  font-size: 1.3;
  font-weight: 300;
  color: white;
`

const ButtonCarrinho = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 5.6rem;
  height: 2.8rem;
  margin-right: 5.5rem;
  margin-left: 0;
  border-radius: 0.5rem;
  background-color: white;
  border: none;
`

const ContadorCarrinho = styled.p `
  font-family: 'Montserrat';
  font-size: 1.2rem;
  font-weight: 800;
  color: black;
`