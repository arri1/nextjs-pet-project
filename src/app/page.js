"use client";

import {
  Container,
  ImageContainer,
  Image,
  ContentContainer,
  MainContainer,
  Title,
  CenterBox,
} from "./page.styles";

export default function Home() {
  return (
    <Container>
      <MainContainer>
        <ContentContainer>
          <CenterBox>
            <Title>Hello, my name is Anya Mongul</Title>
          </CenterBox>
        </ContentContainer>
        <ImageContainer>
          <Image src={"/images/anya.jpg"} alt={"anya"}></Image>
        </ImageContainer>
      </MainContainer>
    </Container>
  );
}
