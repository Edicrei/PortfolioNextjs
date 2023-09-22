import { useId } from 'react';
import Link from 'next/link';
import { ProjectsProps } from '@/types/section/projects';
import styled from 'styled-components';
import Section from '../Section';
import Card from '@/components/Card/Card';
import { FaFileCode } from 'react-icons/fa';
import { BiLogInCircle } from 'react-icons/bi';

const Projects = ({ data }: ProjectsProps) => {
  const ID = useId();

  return (
    <Section id={data.id} title={data.title} icon={<FaFileCode />}>
      <div className="row">
        {data.projects.map((project, index) => (
          <div key={`${ID}-${index}`} className="col-12 col-md-6 col-lg-4 mb-5">
            <Card {...project} buttons={data.buttons} />
          </div>
        ))}
        <div className="d-flex">
          <StyledLink href="projects">
            {data.buttons[3]} <BiLogInCircle />
          </StyledLink>
        </div>
      </div>
    </Section>
  );
};

export default Projects;

const StyledLink = styled(Link)`
  display: flex;
  height: 55px;
  align-items: center;
  margin: 15px auto;
  padding: 0 30px;
  border: 2px solid #3498db;
  border-radius: 8px;
  text-decoration: none;
  font-size: 22px;
  font-weight: 500;
  color: #fff;
  box-shadow: 0 0 10px 4px rgba(28, 96, 141, 0.4), 0 0 40px 40px #3498db inset,
    0 0 0 0 #3498db;
  user-select: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0, 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;

    & > svg {
      transform: translateX(10px);
    }
  }

  & > svg {
    margin-left: 10px;
    font-size: 22px;
    transition: transform 0.3s ease-in-out;
  }
`;
