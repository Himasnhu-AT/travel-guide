import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM from 'react-dom'

import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> {/* You can wrap your entire app with React.StrictMode */}
  <div className='flex justify-center items-center max-h-full w-screen'>
    <App />
    </div>
  </React.StrictMode>
);
