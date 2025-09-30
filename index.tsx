
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Support for react-snap prerendering
const renderMethod = rootElement.hasChildNodes() ? ReactDOM.hydrateRoot : ReactDOM.createRoot;

// For react-snap
if (typeof window !== 'undefined' && 'ReactSnapClient' in window) {
  // Use hydrate for react-snap
  ReactDOM.hydrateRoot(
    rootElement,
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  // Use normal rendering for development
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
