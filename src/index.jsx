import React from 'react';
import Analyst from './component/analyst';
import Card from './component/card';
import Footer from './component/footer';
import Hero from './component/hiro';
import Navbar from './component/navbar';
import Newsletter from './component/newsletter';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analyst />
      <Newsletter />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
