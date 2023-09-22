import Image from 'next/image';
import { useId } from 'react';
import { SkillsProps } from '@/types/section/skills';
import styled from 'styled-components';
import Section from '../Section';
import { FaLaptopCode } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

const Skills = ({ data }: SkillsProps) => {
  const ID = useId();

  return (
    <Section
      id={data.id}
      title={data.title}
      icon={<FaLaptopCode />}
      colorHeading="#fff"
      style={{
        background: 'linear-gradient(to bottom, #212529, #212529)',
      }}
    >
      <BoxSkills>
        {data.skills.map((skill, index) => (
          <Tilt
            key={`${ID}-${index}`}
            tiltMaxAngleX={14}
            tiltMaxAngleY={14}
            scale={1.08}
            transitionSpeed={1000}
          >
            <motion.div whileTap={{ scale: 0.9 }}>
              <Skill>
                <Image
                  src={skill.icon}
                  alt="Icon skill"
                  width={48}
                  height={48}
                />
                <h3>{skill.name}</h3>
              </Skill>
            </motion.div>
          </Tilt>
        ))}
      </BoxSkills>
    </Section>
  );
};

const BoxSkills = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  border-radius: 10px;
  background-color: rgba(0, 0, 22, 0.4);

  @media (min-width: 476px) {
    padding: 30px;
  }

  @media (min-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 0;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 22, 0.9);

  & > h3 {
    margin: 10px 0 0;
    font-size: 21px;
    font-weight: 500;
    text-align: center;
    color: #fff;
  }
`;

export default Skills;
