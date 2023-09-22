import Image from 'next/image';
import { useId } from 'react';
import styled from 'styled-components';
import { CardProps } from '@/types/card';
import { FaCode, FaRegEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';

const Card = (props: CardProps) => {
  const ID = useId();

  const css = { width: '100%', height: 'auto' };

  return (
    <StyledCard>
      <Image
        src={`/img/${props.img}`}
        alt="Project img"
        width={100}
        height={100}
        sizes="100vw"
        style={css}
        placeholder="blur"
        blurDataURL={
          'data:image/jpeg;base64,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'
        }
      />
      <CardOverlay>
        <CardHeader>
          <svg xmlns="http://www.w3.org/2000/svg">
            <path></path>
          </svg>
          <h3>{props.title}</h3>
          <div className="text-center">
            {props.stack.map((stack, index) => (
              <span
                key={`${ID}-${index}`}
                className="badge text-bg-secondary me-1"
              >
                {stack}
              </span>
            ))}
          </div>
          <StyledBoxBtn>
            {props.live ? (
              <a href={props.live} target="_blank">
                {props.buttons[0]} <FaRegEye />
              </a>
            ) : (
              <button disabled>
                {props.buttons[2]} <IoEyeOff />
              </button>
            )}
            {props.code && (
              <a href={props.code} target="_blank">
                {props.buttons[1]} <FaCode />
              </a>
            )}
          </StyledBoxBtn>
        </CardHeader>
      </CardOverlay>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  position: relative;
  display: block;
  height: 100%;
  min-height: 250px;
  max-height: 410px;
  border-radius: 20px;
  background-color: #fff;
  overflow: hidden;
  box-shadow: 6px 6px 15px 0 rgba(66, 68, 90, 0.6);

  &:hover > div {
    transform: translateY(0);
  }
`;

const CardOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  transform: translateY(90px);
  border-radius: 40px 0 0 0;
  background-color: #fff;
  box-shadow: 0px -1px 5px 0px rgba(66, 68, 90, 0.3);
  z-index: 1;
  transition: 0.2s ease-in-out;
`;

const CardHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 26px;
  user-select: none;

  & > svg {
    width: 80px;
    height: 80px;
    position: absolute;
    bottom: 99%;
    right: 0;
    z-index: 1;

    & > path {
      fill: #fff;
      d: path('M 40 80 c 22 0 40 -22 40 -40 v 40 Z');
    }
  }

  & > h3 {
    text-align: center;
  }
`;

const StyledBoxBtn = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-top: 30px;

  & > a,
  button {
    padding: 12px;
    border: 2px solid #000;
    border-top-left-radius: 255px 15px;
    border-top-right-radius: 15px 225px;
    border-bottom-left-radius: 15px 255px;
    border-bottom-right-radius: 225px 15px;
    text-decoration: none;
    color: #41403e;
    outline: none;
    box-shadow: 15px 28px 25px -18px rgba(0, 0, 0, 0.2);
    user-select: none;
    transition: all 0.2s ease-in-out;

    &:hover:not([disabled]) {
      box-shadow: 2px 8px 8px -5px rgba(0, 0, 0, 0.6);
      transform: translate3d(0, 2px, 0);
    }

    &:focus {
      box-shadow: 2px 8px 4px -6px rgba(0, 0, 0, 0.3);
    }
  }
`;

export default Card;
