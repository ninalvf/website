import './index.css';

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { UserProvider } from '../lib/context/user';
import Layout from './Layout.jsx';
import Home from './Home.jsx';
import Portfolio from './Portfolio.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import NoMatch from './NoMatch.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <UserProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </UserProvider>
  </BrowserRouter>
);
