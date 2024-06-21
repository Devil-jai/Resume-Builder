import React from "react";
import aboutimg from "../../Images/aboutCV.jpg";
import facebook from '../../Images/icons/facebook.png'
import insta from '../../Images/icons/insta.png'
import linkdin from '../../Images/icons/linkedin.png'
import mail from '../../Images/icons/mail.png'
import telegram from '../../Images/icons/telegram.png'
import './AboutUs.css'
function AboutUs() {
  return (
    <>
      <>
        <div className="container my-5">
          <div className="row">
            <h1 className="fw-bold">Resume Builder</h1>
            <div className="row about_row">
              <div className="col-xl-9 mb-5">
                Resume Building made easy and efficient. A Free, Quick and Easy
                Way to Create Your Professional Resume. ResumeBuilder is created
                to help the users save time in building resumes. With
                ResumeBuilder, a versatile resume can be made instantly with a
                potential from standing out of the crowd to landing the dream
                job. One can select the template best fit for the purpose,
                upload the good profile picture, fill out the details regarding
                qualifications and work experience. and save the resume that is
                instantly built. As simple as that. Saving all the time and
                efforts to make a resume. One may also access the resumes pre
                made at any time with the My Resumes tab. May all your dreams
                come true. All the very best!
              </div>
              <div className="col-xl-3 text-center my-3">
                <img src={aboutimg} width={300} />
              </div>
            </div>
          </div>
          <div className="col-12 mb-4">
            <h4 className="fw-bold">Share with your friends</h4>
          </div>
          <div className="d-flex justify-content-between" style={{width:"250px"}}>
            <img src={facebook} width={25} alt="" />
            <img src={insta} width={25} alt="" />
            <img src={linkdin} width={25} alt="" />
            <img src={mail} width={25} alt="" />
            <img src={telegram} width={25} alt="" />
          </div>
        </div>
      </>
    </>
  );
}

export default AboutUs;
