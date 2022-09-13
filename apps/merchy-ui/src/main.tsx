import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './styles/global';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import App from './app/app';

const client = new ApolloClient({
  uri: 'http://localhost:3333/api/graphql',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
);
