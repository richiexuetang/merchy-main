// import dynamic from 'next/dynamic';
import Navbar from '../Navbar';
import { chakra } from '@chakra-ui/react';

// const Loading = () => {
//   <div>Loading...</div>;
// };

// const dynamicProps = {
//   loading: Loading,
// };

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
  pageProps: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    pages?: any;
  };
}

const Layout: React.FC<Props> = ({ children, pageProps }) => {
  return (
    <chakra.div minH="100vh">
      <Navbar />
    </chakra.div>
  );
};

export default Layout;
