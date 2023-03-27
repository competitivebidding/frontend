import React from 'react';
import { createRoot } from "react-dom/client";
import App from './components/app/App.jsx';

import './style/input.css'

const app = <App/>

createRoot(document.getElementById('root')).render(app);
