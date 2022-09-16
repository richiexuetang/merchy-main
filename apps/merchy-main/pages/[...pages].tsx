import { Layout } from '../components';
import { useRouter } from 'next/router';

export default function Pages() {
  const router = useRouter();

  return router.isFallback ? (
    <h1>Loading...</h1> // TODO (BC) Add Skeleton Views
  ) : (
    <div className="">Hello</div>
  );
}

Pages.Layout = Layout;
