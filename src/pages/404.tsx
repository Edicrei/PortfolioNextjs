import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Typed from 'typed.js';

const Custom404 = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ['404, page not found.'],
      startDelay: 200,
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <Head>
        <title>404 | Łukasz Duda</title>
      </Head>
      <StyledContainer>
        <div>
          <span ref={typedElement}></span>
        </div>
        <StyledLink href="/">Go back</StyledLink>
      </StyledContainer>
    </>
  );
};

export default Custom404;

const StyledContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(76, 70, 106);
  background: linear-gradient(
    90deg,
    rgba(76, 70, 106, 1) 0%,
    rgba(91, 97, 136, 1) 50%,
    rgba(76, 70, 106, 1) 100%
  );

  & span {
    font-size: 35px;
    letter-spacing: 0.2px;
    color: #fff;
  }

  & .typed-cursor {
    color: #ffe500;
  }
`;

const StyledLink = styled(Link)`
  height: 50px;
  line-height: 50px;
  margin-top: 25px;
  padding: 0 16px;
  border-radius: 4px;
  font-size: 24px;
  text-decoration: none;
  color: #36395a;
  background-color: #fcfcfd;
  user-select: none;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  transition: all 0.15s ease-in-out;

  &:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    transform: translateY(-2px);
  }
`;
