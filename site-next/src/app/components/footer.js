import styled from "styled-components"

export default function Footer() {
  return (
    <ContainerFooter>MKS Sistemas &copy; Todos os direitos reservados</ContainerFooter>
  )
}

const ContainerFooter = styled.footer `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0;
  height: 1.1rem;
  background-color: #EEEEEE;
`