import '../styles/tailwind.css';
import { ApolloProvider } from '@apollo/client';
import { client } from '../lib/apollo';
import { AppProps } from 'next/App';
import MainPage from '../components/MainPage';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <MainPage>
        <Component {...pageProps} />
      </MainPage>
    </ApolloProvider>
  );
};

export default App;
