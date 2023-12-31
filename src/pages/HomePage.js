import React, { useContext } from 'react';
import { ThemeContext } from '../components/ThemeContext';
import Education from '../components/Education';
import Footer from '../components/Footer';
import Header from '../components/Header';
import TechSummary from '../components/TechSummary';
import WorkExperience from '../components/WorkExperience';

export default function HomePage(){
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleToggle = () => {
    toggleTheme();
  };

  return (
    <>
    <div className={`custom-bg ${theme === 'dark' ? 'dark-mode' : ''}`}>
    <button onClick={handleToggle}>Switch Theme</button>
      <Header/>
      <div className="container">
        <div className="row">
          <div className="col-md">
            <WorkExperience/>
          </div>
          <div className="col-md">
            <Education/>
          </div>
            <TechSummary/>
        </div>
      </div>
      <Footer/>
      </div>
    </>
  );
}
