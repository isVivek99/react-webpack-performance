require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const appEle = document.getElementById('app');
const root = createRoot(appEle);

root.render(<App />);
