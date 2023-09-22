import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { ISourceOptions, Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import styled from 'styled-components';
import particlesOptions from './particles.json';

const Particle = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // console.log(engine);

    await loadFull(engine);
  }, []);

  return (
    <StyledParticles
      id="tsparticles"
      options={particlesOptions as ISourceOptions}
      init={particlesInit}
    />
  );
};

export default Particle;

const StyledParticles = styled(Particles)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
