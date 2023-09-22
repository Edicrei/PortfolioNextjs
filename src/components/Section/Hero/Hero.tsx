import Image from 'next/image';
import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import parse from 'html-react-parser';
import { HeroProps } from '@/types/section/hero';
import Particle from '../../Particles/Particles';
import { FaArrowCircleDown, FaGithub, FaEnvelope } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import imgHero from '@/assets/coding.png';

const Hero = ({ data }: HeroProps) => {
  const scrollToSkills = () => {
    const nextSection = document.querySelectorAll('section')[1];

    nextSection.scrollIntoView();
  };

  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ['Front-End Developer', 'Web Developer', 'Back-End Developer', `Full Stack Developer`],
      startDelay: 200,
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <StyledHero id="home">
      <Particle />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <StyledH2>{parse(data.heading)}</StyledH2>
            <StyledParagraph>
              {data.paragraph} <span ref={typedElement}></span>
            </StyledParagraph>
            <StyledButton onClick={scrollToSkills}>
              {data.button}
              <FaArrowCircleDown />
            </StyledButton>
            <BoxLinks className="d-flex">
              <a href={data.github} target="_blank">
                <FaGithub />
              </a>
              <a href={`mailto:${data.mail}`}>
                <FaEnvelope />
              </a>
            </BoxLinks>
          </div>
          <div className="col-md-6 mt-5 mt-md-0">
            <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.07}>
              <Image
                src={imgHero}
                alt="Hero"
                className="img-fluid"
                priority={true}
              />
            </Tilt>
          </div>
        </div>
      </div>
    </StyledHero>
  );
};

export default Hero;

const StyledHero = styled.section`
  display: flex;
  min-height: 100vh;
  padding-top: 140px;
  align-items: center;
  background-color: #212529;

  @media (min-width: 992px) {
    padding-top: 90px;
  }

  & > .container {
    z-index: 5;
  }
`;

const StyledH2 = styled.h2`
  font-size: 50px;
  font-weight: 800;
  color: #ffff;

  @media (min-width: 992px) {
    font-size: 60px;
  }

  & > span {
    color: #ff7b00;
  }
`;

const StyledParagraph = styled.p`
  font-size: 25px;
  color: #fff;
  font-weight: 600;

  & > span {
    color: #c10808;
  }
`;

const StyledButton = styled.button`
  margin-top: 10px;
  padding: 13px 35px;
  border: none;
  border-radius: 30px;
  font-size: 19px;
  color: #fff;
  background-color: #2506ad;
  box-shadow: 0px 5px 18px rgba(48, 68, 247, 0.8);
  user-select: none;
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: #1a047e;

    & > svg {
      transform: translateX(6px);
    }
  }

  & > svg {
    margin-left: 10px;
    transition: all 0.2s ease-in-out;
  }
`;

const BoxLinks = styled.div`
  margin: 25px 0 0 20px;
  & > a {
    width: 46px;
    height: 46px;
    line-height: 46px;
    margin-left: 12px;
    border-radius: 50%;
    text-align: center;
    font-size: 20px;
    color: #00d9ff;
    background-color: #09011b;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: #fff;
      background-color: #0685da;
    }
  }
`;
