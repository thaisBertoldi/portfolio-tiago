import { skillsBarAnimations } from "animations";
import { motion } from "framer-motion";
import styled from "styled-components";
import Title from "./Title";
import { useScroll } from "./useScroll";

function HardSkills() {
  const [element, controls] = useScroll();
  const skillsData = [
    {
      name: "Docker",
      amount: 75,
    },
    {
      name: "Java",
      amount: 50,
    },
    {
      name: "Spring",
      amount: 90,
    },
    {
      name: "MongoDB",
      amount: 70,
    },
    {
      name: "Postman",
      amount: 30,
    },
  ];
  return (
    <Section id="skills" ref={element}>
      <Title value="hard skills" />
      <div className="skills__title">
        <p>Minhas Skills</p>
        <h2>Estas são minhas hard skills atualmente</h2>
      </div>
      <div className="skills">
        <div className="skills__bars">
          {skillsData.map(({ name, amount }) => {
            return (
              <motion.div
                className="skills__bars__bar"
                key={name}
                variants={skillsBarAnimations}
                animate={controls}
                transition={{
                  delay: 0.03,
                  type: "tween",
                  duration: 0.8,
                }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="container">
                  <progress value={amount} max="100" />
                  <span>{name}</span>
                </div>
                <h3>{amount}%</h3>
              </motion.div>
            );
          })}
        </div>
        <div className="skills__content">
          <p className="title">
            Competências técnicas
          </p>
          <p className="description">
          Trabalho diariamente com tecnologias como: 
          MongoDB, Oracle, Java, JavaScript, monitoração de filas via RabbitMQ e Zabbix, 
          analisando a saúde do sistema, criando documentação utilizando 
          confluence, referenciando tarefas em cards utilizando Jira
          </p>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  height: 140vh;
  background-color: var(--secondary-color);
  .background {
    position: relative;
    .design1 {
      position: absolute;
      right: 0;
      z-index: 1;
    }
    .design2 {
      position: absolute;
      left: 0;
      z-index: 1;
      top: 20rem;
    }
  }
  .sideTitle {
    h1 {
      color: white;
      font-size: 9rem;
      z-index: 2;
    }
  }
  .skills__title {
    padding: 6rem 10rem;
    p {
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      color: var(--primary-color);
    }
    h2 {
      color: white;
      font-size: 2rem;
    }
  }
  .skills {
    display: flex;
    padding: 0 20rem;
    gap: 10rem;
    &__bars {
      transform: rotate(-90deg);
      width: max-content;
      height: max-content;
      display: flex;
      flex-direction: column;
      gap: 4rem;
      &__bar {
        display: flex;
        flex-direction: row-reverse;

        gap: 1rem;

        .container {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          span {
            text-transform: uppercase;
            letter-spacing: 0.2rem;
            color: var(--primary-color);
          }
          progress {
            width: 30rem;
            -webkit-appearance: none;
            appearance: none;
            &::-webkit-progress-bar {
              height: 3rem;
              background-color: white;
            }
            &::-webkit-progress-value {
              background-color: var(--primary-color);
            }
          }
        }
        h3 {
          transform: rotate(90deg);
          color: white;
          font-size: 2rem;
        }
      }
    }
    &__content {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      color: white;
      z-index: 2;
      .title {
        font-weight: bolder;
        letter-spacing: 0.1rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    overflow-x: hidden;
    padding: 2rem 0;
    .background {
      display: none;
    }
    .skills__title {
      padding: 2rem;
      text-align: center;
      h2 {
        font-size: 1.5rem;
      }
    }
    .skills {
      padding: 0;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      &__bars {
        padding: 0.2rem;
        gap: 0rem;
        align-items: center;
        justify-content: center;
        &__bar {
          .container {
            gap: 1rem;
            progress {
              width: 12rem;
              height: 0.5rem;
              &::-webkit-progress-bar {
                height: 0.3rem;
              }
            }
          }
          h3 {
            font-size: 1rem;
          }
        }
      }
      &__content {
        padding: 0 2rem;
      }
    }
  }
`;

export default HardSkills;
