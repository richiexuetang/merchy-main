import { getLayout } from '../../components';
import { useRouter } from 'next/router';
import LogIn from './login';
import SignUp from './signup';

const Authentication = () => {
  const router = useRouter();
  const { slug } = router.query;

  if (slug === 'login') {
    return <LogIn />;
  } else {
    return <SignUp />;
  }
};

Authentication.getLayout = getLayout;
export default Authentication;
