import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';
import { useLanguage } from '@/hook/useLanguage';
import { AnimatePresence } from 'framer-motion';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import { DefaultSeo } from 'next-seo';
import imgHero from '@/assets/hero.png';

export default function App({ Component, pageProps, router }: AppProps) {
  const [language] = useLanguage();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.querySelector('#LoadingIcon') as HTMLDivElement;
      loader ? loader.remove() : null;
    }
  }, []);

  const siteDescription =
    language === 'EN'
      ? 'Welcome to my portfolio! I specialize in Front-end, Web, and Back-end Development. Explore my skills, projects, and passion for creating meaningful web experiences.'
      : 'Bem-vindo ao meu portfólio! Sou especialista em Desenvolvimento Front-end, Web e Back-end. Explore minhas habilidades, projetos e paixão por criar experiências web significativas.';

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <title>Portfolio | Edicrei Marcondes</title>
      </Head>
      <DefaultSeo
        description={siteDescription}
        canonical=""
        openGraph={{
          type: 'website',
          locale: language === 'EN' ? 'en_US' : 'pl_PL',
          url: '',
          description: siteDescription,
          images: [
            {
              url: imgHero.src,
            },
          ],
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'Front-end Developer, Web developer, Back-end Developer, Portfolio',
          },
        ]}
      />
      <AnimatePresence mode="wait" initial={false}>
        <GoogleAnalytics trackPageViews />
        <Component {...pageProps} key={router.pathname} />
      </AnimatePresence>
    </>
  );
}
