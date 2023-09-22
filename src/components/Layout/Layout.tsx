import { motion } from 'framer-motion';
import { LayoutProps } from '@/types/layout';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Navbar data={props.navbar} onChangeLanguage={props.onChangeLanguage} />
      <motion.div
        initial={{ x: 0, y: 300, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        exit={{ x: 0, y: 300, opacity: 0 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
     
      >
        <main>{props.children}</main>
      </motion.div>
      <Footer />
    </>
  );
};

export default Layout;
