'use client'

import styled from "styled-components";
import { useState, useEffect } from "react";
import Image from "next/image";
import AdicionarShop from '/public/images/shopping-bag.svg'

const getApi = async () => {
  const data = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC')
  const result = await data.json()
  console.log(result)
  
  return result
}

export default function Main() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getApi();
      setResult(data.products); // Certifique-se de acessar a propriedade correta
    };

    fetchData();
  }, []);
  return (
    <Container>
      {result.map(item => (
        <Card key={item.id}>
          <ImageCard src={item.photo}/>
          <NomePreco>
            <NomeDoProduto>{item.name}</NomeDoProduto>
            <PrecoDoProduto>R${Math.floor(item.price)}</PrecoDoProduto>
          </NomePreco>
          <Descricao>{item.description}</Descricao>
          <AdicionarNoCarrinho>
            <Image src={AdicionarShop}/>
            <ConfirmarCompra>COMPRAR</ConfirmarCompra>
          </AdicionarNoCarrinho>
        </Card>
      ))}
    </Container>
  );
}

const Container = styled.main `
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  min-width: 65rem;
  width: 65rem;
  height: 36rem;
  margin: auto;
`

const Card = styled.div `
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15rem;
  background-color: white;
  border-radius: 0.5rem;
`

const ImageCard = styled.img `
  width: 60%;
  margin: 0 auto;
  margin-top: 0.5rem;
`

const NomePreco = styled.div `
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`

const NomeDoProduto = styled.h2 `
  width: 60%;
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 1rem;
  color: #2C2C2C;
`

const PrecoDoProduto = styled.p `
  display: flex;
  height: 1rem;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.4rem;
  border-radius: 0.5rem;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 1rem;
  background-color: #373737;
  color: white;
`

const Descricao = styled.p `
  width: 90%;
  margin-top: 0.5rem;
  text-align: justify;
  font-family: 'Montserrat';
  font-weight: 300;
  font-size: 0.6rem;
`

const AdicionarNoCarrinho = styled.div `
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  bottom: 0;
  width: 100%;
  height: 2rem;
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  background-color: #0f52ba;
`

const ConfirmarCompra = styled.h1 `
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 0.9rem;
  color: white;
`