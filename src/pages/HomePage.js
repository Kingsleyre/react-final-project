import React from 'react';
import Education from '../components/Education';
import Footer from '../components/Footer';
import Header from '../components/Header';
import TechSummary from '../components/TechSummary';
import WorkExperience from '../components/WorkExperience';

export default function HomePage(){
  return (
    <>
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
    </>
  );
}
