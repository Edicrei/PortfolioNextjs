import { FaHeart } from 'react-icons/fa';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter>
      <div className="container">
        <StyledParagraph>
          Designed With <FaHeart /> By{' '}
          <a href="https://github.com/edicrei" target="_blank">
            Edicrei Marcondes
          </a>
        </StyledParagraph>
      </div>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  display: flex;
  height: 55px;
  align-items: center;
  text-align: center;
  background-color:   #212529;
`;

const StyledParagraph = styled.span`
  letter-spacing: 1px;
  color: #fff;

  & > svg {
    margin: 0 3px;
    color: #ff0000;
    animation: pulse 0.4s infinite alternate;

    @keyframes pulse {
      to {
        transform: scale(1.2);
      }
    }
  }

  & > a {
    color: #ffae00;
    text-decoration: none;
  }
`;
