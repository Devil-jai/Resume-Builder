import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DrawerAppBar from "./Components/NavBar";
import Home from "./Components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WorkExperience from "./Components/MyTemplate/Forms/Work Experience/WorkExperience";
import KeySkills from "./Components/MyTemplate/Forms/Key Skills/KeySkills";
import Education from "./Components/MyTemplate/Forms/Education/Education";
import PersonalInfo from "./Components/MyTemplate/Forms/PersonalInfo/PersonalInfo";
import Template_1 from "./Components/MyTemplate/Templates/Template_1";
import Template_2 from "./Components/MyTemplate/Templates/Template_2";
import PersonalInfo2 from "./Components/MyTemplate/Forms2/PersonalInfo/PersonalInfo2";
import WorkExperience2 from "./Components/MyTemplate/Forms2/Work Experience/WorkExperience2";
import KeySkills2 from "./Components/MyTemplate/Forms2/Key Skills/KeySkills2";
import Education2 from "./Components/MyTemplate/Forms2/Education/Education2";
import AboutUs from "./Components/AboutUs/AboutUs";
import Template_3 from "./Components/MyTemplate/Templates/Template_3";
import PersonalInfo3 from "./Components/MyTemplate/Forms3/PersonalInfo/PersonalInfo3";
import WorkExperience3 from "./Components/MyTemplate/Forms3/Work Experience/WorkExperience3";
import KeySkills3 from "./Components/MyTemplate/Forms3/Key Skills/KeySkills3";
import Education3 from "./Components/MyTemplate/Forms3/Education/Education3";
import Template_4 from "./Components/MyTemplate/Templates/Template_4";
import PersonalInfo4 from "./Components/MyTemplate/Forms4/PersonalInfo/PersonalInfo4";
import WorkExperience4 from "./Components/MyTemplate/Forms4/Work Experience/WorkExperience4";
import KeySkills4 from "./Components/MyTemplate/Forms4/Key Skills/KeySkills4";
import Education4 from "./Components/MyTemplate/Forms4/Education/Education4";
import MyResumes from "./Components/MyTemplate/Templates/MyResumes";

function App() {

  
  return (
    <>
      <BrowserRouter>
        <DrawerAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Template1/WorkExperience' element={<WorkExperience />} />
          <Route path='/Template1/KeySkills' element={<KeySkills />} />
          <Route path='/Template1/Education' element={<Education />} /> 
          <Route path="/Template_1" element={<Template_1 />} />
          <Route path="/Template_2" element={<Template_2 />} />
          <Route path="/Template_3" element={<Template_3 />} />
          <Route path="/Template_4" element={<Template_4 />} />
          <Route path="/Template1/PersonalInfo" element={<PersonalInfo />} />
          <Route path="/Template2/PersonalInfo2" element={<PersonalInfo2 />} />
          <Route path='/Template2/WorkExperience2' element={<WorkExperience2 />} />
          <Route path='/Template2/KeySkills2' element={<KeySkills2/>} />
          <Route path='/Template2/Education2' element={<Education2 />} /> 
          <Route path="/Template3/PersonalInfo3" element={<PersonalInfo3  />} />
          <Route path='/Template3/WorkExperience3' element={<WorkExperience3 />} />
          <Route path='/Template3/KeySkills3' element={<KeySkills3/>} />
          <Route path='/Template3/Education3' element={<Education3 />} /> 
          <Route path="/Template4/PersonalInfo4" element={<PersonalInfo4  />} />
          <Route path='/Template4/WorkExperience4' element={<WorkExperience4 />} />
          <Route path='/Template4/KeySkills4' element={<KeySkills4/>} />
          <Route path='/Template4/Education4' element={<Education4 />} /> 
          <Route path='/about' element={<AboutUs />} /> 
          <Route path='/myresumes' element={<MyResumes />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
