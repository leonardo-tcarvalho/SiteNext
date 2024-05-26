'use client'

import styled from "styled-components"
import Image from "next/image"
import FecharCarrinho from "/public/images/Close_cart.svg"

export default function CarrinhoDeCompra() {
  return (
    <CarrinhoNav>
      <CarrinhoHeader>
        <CarrinhoH1>Carrinho de Compras</CarrinhoH1>
        <ContainerImg>
          <Image src={FecharCarrinho} />
        </ContainerImg>
      </CarrinhoHeader>
      <ValorCompra>
        <PrecoTotal>Total:</PrecoTotal>
        <PrecoTotal>VALOR</PrecoTotal>
      </ValorCompra>
      <CaixaFinalizar>
        <BotaoFinalizar>Finalizar Compra</BotaoFinalizar>
      </CaixaFinalizar>
    </CarrinhoNav>
  )
}

const CarrinhoNav = styled.nav `
  display: flex;
  flex-direction: column;
  z-index: 999;
  position: absolute;
  right: 0;
  top: 0;
  width:  30.4rem;
  height: 100%;
  background-color: #0F52BA;
  box-shadow: 4px 0px 10px black;
`

const CarrinhoHeader = styled.div `
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 10rem;
`

const CarrinhoH1 = styled.h1 `
  width: 12rem;
  margin-top: 2.2rem;
  margin-left: 3rem;
  font-family: 'Montserrat';
  font-size: 1.7rem;
  font-weight: 700;
  color: white;
`

const ContainerImg = styled.div `
  margin-top: 2.8rem;
  margin-right: 2.1rem;
`

const CaixaFinalizar = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: end;
  width: 100%;
  height: 6rem;
  background-color: black;
`

const BotaoFinalizar = styled.a `
  font-family: 'Montserrat';
  font-size: 1.7rem;
  font-weight: 700;
  color: white;
`

const ValorCompra = styled.div `
  display: flex;
  margin-top: auto;
  justify-content: center;
  align-items: center;
  align-self: end;
  gap: 8rem;
  width: 100%;
  height: 6rem;
`

const PrecoTotal = styled.h1 `
  font-family: 'Montserrat';
  font-size: 1.7;
  font-weight: 700;
  color: white;
`