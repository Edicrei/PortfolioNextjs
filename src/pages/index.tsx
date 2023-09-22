import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useLanguage } from '@/hook/useLanguage';
import Layout from '@/components/Layout/Layout';
import Hero from '@/components/Section/Hero/Hero';
import Skills from '@/components/Section/Skills/Skills';
import Projects from '@/components/Section/Projects/Projects';
import Contact from '@/components/Section/Contact/Contact';

export default function Home(data: any) {
  const [language, setLanguage] = useLanguage();
  const router = useRouter();

  useEffect(() => {
    if (router.asPath.indexOf('#') !== -1) {
      const handler = setInterval(() => {
        const section = document.getElementById(router.asPath.split('#')[1]);

        if (section) {
          section?.scrollIntoView({ behavior: 'smooth' });

          clearInterval(handler);
        }
      }, 500);
    }
  }, []);

  return (
    <Layout
      navbar={data[language].navbar}
      onChangeLanguage={(lang: string) => setLanguage(lang)}
    >
      <Hero data={data[language].hero} />
      <Skills data={data[language].skills} />
      <Projects data={data[language].projects} />
      <Contact data={data[language].contact} />
    </Layout>
  );
}

export async function getStaticProps() {
  const dataPL = await import('@/data/dataLanguagePL.json');
  const dataEN = await import('@/data/dataLanguageEN.json');

  return {
    props: {
      PT: dataPL.default,
      EN: dataEN.default,
    },
  };
}
