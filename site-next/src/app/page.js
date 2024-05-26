'use client'

import styled from "styled-components";
import { useState, useEffect } from "react";

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
        </Card>
      ))}
    </Container>
  );
}

const Container = styled.main `
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 0.5rem;
  min-width: 65rem;
  width: 65rem;
  height: 36rem;
  margin: auto;
`

const Card = styled.div `
  display: flex;
  flex-direction: column;
  width: 13rem;
  height: 17rem;
  background-color: white;
  border-radius: 0.5rem;
`

const ImageCard = styled.img `
  width: 80%;
  margin: 0 auto;
  margin-top: 1.3rem;
`