import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <GoogleOAuthProvider clientId= "635979112033-lmk9lhtqvopba3glabr2jh2i87s3drd6.apps.googleusercontent.com">
   <React.StrictMode>
    <App />
   </React.StrictMode> 
   </GoogleOAuthProvider>
);
