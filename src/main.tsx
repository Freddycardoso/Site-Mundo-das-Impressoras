import { StrictMode } from 'react';
import { ViteReactSSG } from 'vite-react-ssg';
import App from './App.tsx';
import './index.css';

export const createRoot = ViteReactSSG({
  routes: [
    {
      path: '/',
      element: (
        <StrictMode>
          <App />
        </StrictMode>
      ),
    },
  ],
});
