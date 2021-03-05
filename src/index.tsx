import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QueryClientProvider, QueryClient } from 'react-query'

const client = new QueryClient();
console.log(client)

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

