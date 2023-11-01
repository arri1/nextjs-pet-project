"use client";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;
const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`;
const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 10px;
`;
export default function Home() {
  return (
    <Container>
      <ImageContainer>
        <Image src={"/images/anya.jpg"} alt={"anya"}></Image>
      </ImageContainer>
    </Container>
  );
}
