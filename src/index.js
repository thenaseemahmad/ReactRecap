import React from 'react';
import ReactDOM from 'react-dom/client';

const header = ReactDOM.createRoot(document.getElementById('root'));
header.render(
  <h1>Header elements here</h1>
);

const midbody = ReactDOM.createRoot(document.getElementById('midbody'));
midbody.render(
  <h1>Body elements here</h1>
);

const footer = ReactDOM.createRoot(document.getElementById('footer'));
footer.render(
  <h1>Footer elements here</h1>
);

