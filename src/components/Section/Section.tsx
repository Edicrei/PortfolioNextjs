import styled from 'styled-components';
import parse from 'html-react-parser';
import { SectionProps } from '../../types/section';

const Section = (props: SectionProps) => {
  const styleSection = props.style ? props.style : {};
  const colorHeading = props.colorHeading ? { color: props.colorHeading } : {};

  return (
    <StyledSection id={props.id} style={styleSection}>
      <StyledH2 style={colorHeading}>
        {props.icon} {parse(props.title)}
      </StyledH2>
      <div className="container">{props.children}</div>
    </StyledSection>
  );
};

export default Section;

const StyledSection = styled.section`
  position: relative;
  padding-top: 70px;
  padding-bottom: 70px;
  scroll-margin-top: 74px;
  background: #212529;
`;

export const StyledH2 = styled.h2`
  margin-bottom: 40px;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;
