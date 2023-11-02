import React from 'react';
import ReactDOM from 'react-dom/client';
import Heading from './Heading';
import Body from './Body';
import Footer from './Footer';


const header = ReactDOM.createRoot(document.getElementById('header'));
header.render(
  <Heading />
);

const midbody = ReactDOM.createRoot(document.getElementById('midbody'));
midbody.render(
  <Body />
);

const footer = ReactDOM.createRoot(document.getElementById('footer'));
footer.render(
  
  <Footer />
);

