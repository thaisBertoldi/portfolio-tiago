import { contactAnimations } from "animations";
import Title from "components/Title";
import { motion } from "framer-motion";
import Notiflix from "notiflix";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import styled from "styled-components";
import { useScroll } from "./useScroll";

function Contact() {
  const [element, controls] = useScroll();
  
  const sendMessage = () => {
    Notiflix.Notify.success('Mensagem enviada com sucesso!')
  }

  return (
    <Section id="contact" ref={element}>
      <Title value="contact" />
      <motion.div
        className="contact"
        animate={controls}
        variants={contactAnimations}
        transition={{
          delay: 0.03,
          type: "tween",
          duration: 0.8,
        }}
      >
        <div className="contact__title">
          <p>Contato</p>
          <h2>Continue em contato comigo!</h2>
        </div>
        <div className="contact__data">
          <div className="contact__data__description">
            <h4>Use o espaço à direita para me enviar críticas ou sugestões</h4>
            <p>
            Continue em contato comigo através das redes sociais ou envie-me uma mensagem
            através da caixa ao lado.
            </p>
            <div className="links-contact">
              <LinkIcon  href="https://www.facebook.com/tiaguinho.almeida.90" rel="noreferrer" target="_blank">
                <BsFacebook />
              </LinkIcon >
              <LinkIcon  href="https://contate.me/tiago.almeida" rel="noreferrer" target="_blank">
                <BsWhatsapp />
              </LinkIcon >
              <LinkIcon  href="https://www.instagram.com/tiagobzp/" rel="noreferrer" target="_blank">
                <BsInstagram />
              </LinkIcon >
            </div>
          </div>
          <div className="contact__data__form">
            <input type="text" placeholder="nome" />
            <input type="email" placeholder="email" />
            <textarea placeholder="mensagem"></textarea>
            <button onClick={() => sendMessage()} type="submit">Enviar mensagem</button>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  .contact {
    color: var(--primary-color);
    margin: 0 23rem;
    &__title {
      margin: 6rem 0;
      p {
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        color: var(--primary-color);
      }
      h2 {
        color: var(--secondary-color);
        font-size: 2rem;
      }
    }
    &__data {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 4rem;
      &__description {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        h4 {
          font-size: 1.5rem;
        }
        p {
          letter-spacing: 0.1rem;
          text-align: justify;
        }
        div {
          p {
            strong {
              text-transform: uppercase;
            }
          }
        }
      }

      &__form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        input,
        textarea {
          text-transform: uppercase;
          border: none;
          border-bottom: 0.1rem solid var(--secondary-color);
          width: 100%;
          color: var(--secondary-color);
          letter-spacing: 0.2rem;
          padding-bottom: 0.7rem;
          &:focus {
            outline: none;
          }
          &::placeholder {
            color: var(--secondary-color);
            letter-spacing: 0.4rem;
          }
        }
        textarea {
          width: 100% !important;
          height: 50%;

          resize: none;
        }
        button {
          width: 100%;
          background-color: transparent;
          border: 0.1rem solid var(--secondary-color);
          height: 3rem;
          color: var(--secondary-color);
          text-transform: uppercase;
          letter-spacing: 0.2rem;
          cursor: pointer;
          transition: 0.5s ease-in-out;
          &:hover {
            background-color: var(--secondary-color);
            color: var(--primary-color);
          }
        }
      }
    }
    .links-contact {
      display: flex;
      gap: 15px;
      font-size: 40px;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .contact {
      margin: 1rem;
      padding: 0 1rem;
      &__title {
        margin: 0;
        text-align: center;
        p {
          font-size: 0.8rem;
        }
        h2 {
          font-size: 1.3rem;
        }
      }
      &__data {
        grid-template-columns: 1fr;
        margin: 0;
        p {
          text-align: left;
        }
        &__form {
          input {
          }
          button {
            height: 6rem;
          }
        }
      }
    }
  }
`;

const LinkIcon = styled.a`
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  color: var(--primary-color);
  :hover {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    color: var(--secondary-color);
  }
`;

export default Contact;
