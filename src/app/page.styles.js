import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  @media screen and (max-width: 1200px) {
    height: auto;
  }
`;
export const Image = styled.img`
  border-radius: 20px;
  width: 100%;
  height: max-content;
  object-fit: contain;
  @media screen and (max-width: 1200px) {
    border-radius: 50%;
  }
`;
export const ImageContainer = styled.div`
  flex: 1;
  @media screen and (max-width: 1200px) {
    margin-bottom: 40px;
  }
`;
export const ContentContainer = styled.div`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  @media screen and (max-width: 1200px) {
    min-height: 300px;
  }
`;
export const MainContainer = styled.div`
  flex: 1;
  gap: 10px;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;
export const Title = styled.div`
  color: var(--font-high-emphasis, #25282b);

  /* title/h1 */
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 76.8px */
`;
export const CenterBox = styled.div`
  flex-direction: column;
`;
