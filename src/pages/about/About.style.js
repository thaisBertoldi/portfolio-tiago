import styled from "styled-components";

export const DivPrincipal = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DivUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImgCustom = styled.img`
  border-radius: 50%;
  width: 300px;
  position: absolute;
  top: 150px;
`;

export const DivIcons = styled.div`
  display: flex;
  gap: 15px;
  color: #3957FF;
  font-size: 40px;
`;

export const TitlePrincipal = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap");
  margin-top: 170px;
  font-family: "Indie Flower", cursive;
  font-size: 50px;
  color: #8F8F8F;
`;

export const Paragraph = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap");
  font-family: "Indie Flower", cursive;
  font-size: 25px;
  color: #8F8F8F;
`;

export const DivTitleParagraph = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 15px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const LinkIcon = styled.a`
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  :hover {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    color: #0202bd;
  }
`;
