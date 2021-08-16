import styled from "styled-components/macro";

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ direction }) => direction};
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Container = styled.div``;

export const Pane = styled.div`
  width : 50%;

  @media(max-width:1000px){
      align-items:center;
      text-align:center;
      width:100%;
      padding: 0 20px;
  }

`;

export const Title = styled.h1`
  font-size: 3.125rem;
  margin-bottom:8px;
  padding: 0 3rem 0 0;

  @media (max-width:600px){
      font-size:1.625rem;
  }

`;

export const Subtitle = styled.h2`
    font-size: 1.625rem;
    font-weight: 400;
    padding: 0 3rem 0 0;
`;

export const Image = styled.img`
  max-width:100%;
  height:auto;
`;

export const Item = styled.div`
  display:flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: #fff:
  overflow: hidden;
`;