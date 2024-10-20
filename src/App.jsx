import React from 'react';
import FirstSection from './FirstSection'; // Assuming this is your Home component
import Footer from './Footer';
import ThirdSection from './ThirdSection';
import SecondSection from './SecondSection';
import NavSection from './NavSection';

function App() {
  return (
    <>
      <NavSection />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Footer />
    </>
  );
}

export default App;
