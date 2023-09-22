import { useId } from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';
import { useLanguage } from '@/hook/useLanguage';
import Layout from '@/components/Layout/Layout';
import Card from '@/components/Card/Card';
import { FaLaptopCode } from 'react-icons/fa';
import { ProjectData } from '@/types/projects';

const ProjectPage = (data: any) => {
  const [language, setLanguage] = useLanguage();
  const ID = useId();

  return (
    <>
      <Layout
        navbar={data[language].navbar}
        onChangeLanguage={(lang: string) => setLanguage(lang)}
      >
        <ProjectContainer className="container">
          <StyledTitle>
            <FaLaptopCode /> {parse(data[language].projects.projectsTitle)}
          </StyledTitle>
          <BoxProjects className="row py-4 px-md-2">
            {data.projects.map((project: ProjectData, index: number) => (
              <div
                key={`${ID}-${index}`}
                className="col-12 col-md-6 col-lg-4 mb-5"
              >
                <Card
                  {...project}
                  title={language == 'PT' ? project.titlePL : project.titleEN}
                  buttons={data[language].projects.buttons}
                />
              </div>
            ))}
          </BoxProjects>
        </ProjectContainer>
      </Layout>

      <style jsx global>{`
        body {
          background-color: #212529;;
          background-image: radial-gradient(
            circle,
            rgba(89, 131, 252, 1) 0%,
            rgba(41, 53, 86, 1) 100%
          );
        }
      `}</style>
    </>
  );
};

export default ProjectPage;

export async function getStaticProps() {
  const dataPL = await import('@/data/dataLanguagePL.json');
  const dataEN = await import('@/data/dataLanguageEN.json');
  const dataProjects = await import('@/data/dataProjects.json');

  return {
    props: {
      PT: dataPL.default,
      EN: dataEN.default,
      projects: dataProjects.projects,
    },
  };
}

const ProjectContainer = styled.section`
  padding-top: 140px;
  padding-bottom: 30px;
  background-color:#212529;
`;

const BoxProjects = styled.div`
  border-radius: 15px;
  background-color:#212529;

  & > div:last-of-type {
    margin-bottom: 0 !important;
  }
`;

const StyledTitle = styled.p`
  margin-bottom: 40px;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  color: #fff;

  & > span {
    color: #212529;;
  }
`;
