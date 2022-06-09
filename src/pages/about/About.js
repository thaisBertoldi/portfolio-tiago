import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import {
  DivIcons,
  DivPrincipal,
  DivTitleParagraph,
  DivUser,
  ImgCustom,
  LinkIcon,
  Paragraph,
  TitlePrincipal,
} from "./About.style";
import { BsGithub, BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import CardAbout from "../../components/cardAbout/CardAbout";

function About() {
  const { dataUser } = useContext(UserContext);

  return (
    <DivPrincipal>
      <DivUser>
        <ImgCustom
          src={dataUser.avatar_url}
          alt="Imagem de perfil"
          radius={"50%"}
          width={"400px"}
          displayMedia={"none"}
        />
        <DivTitleParagraph>
          <TitlePrincipal>{dataUser.name}</TitlePrincipal>
          <Paragraph>Desenvolvedor de Sistemas</Paragraph>
        </DivTitleParagraph>
        <DivIcons>
          <LinkIcon href="https://github.com/TiagoAlmeidaPoa" target="_blank">
            <BsGithub />
          </LinkIcon>
          <LinkIcon href="https://contate.me/tiago.almeida" target="_blank">
            <BsWhatsapp />
          </LinkIcon>
          <LinkIcon
            href="https://www.facebook.com/tiaguinho.almeida.90"
            target="_blank"
          >
            <BsFacebook />
          </LinkIcon>
          <LinkIcon href="https://www.instagram.com/tiagobzp/" target="_blank">
            <BsInstagram />
          </LinkIcon>
        </DivIcons>
      </DivUser>
      <CardAbout />
      <DivTitleParagraph>
        <Paragraph>Skills</Paragraph>
      </DivTitleParagraph>
    </DivPrincipal>
  );
}

export default About;
