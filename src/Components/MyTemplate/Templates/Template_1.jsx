import React, { useEffect, useRef, useState } from "react";
import profilepic from "../../../Images/profile.png";
import { Box, Card, Grid, Button, Input, Container } from "@mui/material";
import "./Template.css";
import { useSelector } from "react-redux";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { useNavigate } from "react-router-dom";

function Template_1() {
  const [filename, setfilename] = useState("");
  const [screensize , setScreenSize] = useState({width:window.innerWidth,height:window.innerHeight})


  const navigate = useNavigate();
  const UserData = useSelector((data) => data.Userdata.User);
  console.log(UserData);
  const componentRef = useRef();

  const renderListItem = (content) => {
    return content ? <li>{content}</li> : null;
  };

  const renderProfessionalExperienceItem = (
    jobTitle,
    organizationName,
    startYear,
    endYear
  ) => {
    return jobTitle && organizationName && startYear && endYear ? (
      <li>
        {jobTitle} {organizationName} ({startYear} - {endYear})
      </li>
    ) : null;
  };
  const calculateoffsets = () =>{
    let xoffset , yoffset , scale;
    const width = screensize.width;

    if(width <= 480){
      xoffset = 80;
      yoffset = 10;
      scale = 1.1;
    }
    else if(width<=786){
      xoffset = 60;
      yoffset = 10;
      scale = 1;
    }
    else {
      xoffset = 20;
      yoffset = 20;
      scale = 0.8;
    }
    return {xoffset,yoffset,scale}
  }

  const generatePdf = () => {
    const doc = new jsPDF("portrait", "pt", "a4");
    const {xoffset ,yoffset , scale} = calculateoffsets();
    doc.html(componentRef.current, {
      callback: function (doc) {
        doc.save(filename);
      },
      x: xoffset ,
      y: yoffset ,
      html2canvas: {
        scale: scale,
      }
    });
  };

  useEffect(()=>{
    const handleResize = () =>{
      setScreenSize({width : window.innerWidth, height : window.innerHeight})
    };

    window.addEventListener("resize", handleResize);

    return ()=> window.removeEventListener("resize",handleResize)
  },[])
  return (
    <>
      <Container>
        <h2 className="mb-5">Resume Preview</h2>
        <Grid container spacing={4} sx={{ flexGrow: 1 }}>
          <Grid item md={7}>
            {UserData.map((item, index, array) => {
              if (index === array.length - 1) {
                return (
                  <Grid container key={index} ref={componentRef}>
                    <Grid item xs={12}>
                      <Card>
                        <Box className="my-5 mx-2">
                          <Grid container spacing={3}>
                            <Grid
                              item
                              xs={3}
                              className="d-flex align-items-center "
                            >
                              <img
                                style={{ borderRadius: "50%" }}
                                src={
                                  item.image 
                                }
                                className="template_img"
                                alt="ProfileImg"
                              />
                            </Grid>
                            <Grid
                              item
                              xs={5}
                              className="d-flex flex-column justify-content-center"
                            >
                              <h2 className="fw-bold co_pr name ">
                                {item.FirstName} {item.LastName}
                              </h2>
                              <h6 className="fw-bold">Front End Development</h6>
                            </Grid>
                            <Grid item xs={4}>
                              <ul className="Template_list co_pr details p-1">
                                {renderListItem(item.address)}
                                {renderListItem(item.city)}
                                {renderListItem(item.state)}
                                {renderListItem(item.postalcode)}
                                {renderListItem(item.Mobile)}
                              </ul>
                            </Grid>
                            <Grid item xs={12}>
                              <Box className="bg_pr" height={4}></Box>
                            </Grid>
                            <Grid item xs={12}>
                              <Box className="text-center">
                                {item.objective}
                              </Box>
                            </Grid>
                            <Grid item xs={12}>
                              <Box className="bg_pr" height={4}></Box>
                            </Grid>
                            <Grid item xs={12}>
                              <Box>
                                <h6 className="co_pr">
                                  Professional Experience
                                </h6>
                              </Box>
                              <ul>
                                {renderProfessionalExperienceItem(
                                  item.JobTitle,
                                  item.OrganizationName,
                                  item.StartYear,
                                  item.EndYear
                                )}
                                {renderProfessionalExperienceItem(
                                  item.JobTitle_2,
                                  item.OrganizationName_2,
                                  item.StartYear_2,
                                  item.EndYear_2
                                )}
                              </ul>
                            </Grid>
                            <Grid item xs={12}>
                              <Box className="bg_pr" height={4}></Box>
                            </Grid>
                            <Grid item xs={12}>
                              <Box>
                                <h6 className="co_pr">Education</h6>
                              </Box>
                              <Box>
                                {item.Degree} in {item.Type} {item.University} (
                                {item.StartYear} - {item.EndYear})
                              </Box>
                            </Grid>
                            <Grid item xs={12}>
                              <Box className="bg_pr" height={4}></Box>
                            </Grid>
                            <Grid item xs={12}>
                              <Box>
                                <h6 className="co_pr">Key Skills</h6>
                              </Box>
                              <ul>
                                {renderListItem(item.skill1)}
                                {renderListItem(item.skill2)}
                                {renderListItem(item.skill3)}
                                {renderListItem(item.skill4)}
                                {renderListItem(item.skill5)}
                              </ul>
                            </Grid>
                          </Grid>
                        </Box>
                      </Card>
                    </Grid>
                  </Grid>
                );
              }
            })}
          </Grid>
          <Grid item lg={3} md={4}>
            <Box>
              <h3>Create File Name</h3>
              <Input
                type="text"
                className="mb-3"
                fullWidth
                onChange={(e) => setfilename(e.target.value)}
              />
              <Button
                variant="outlined"
                color="primary"
                onClick={() => navigate("/Template1/Education")}
              >
                Back
              </Button>
              <Button
                variant="contained"
                className="ms-3"
                color="primary"
                onClick={generatePdf}
              >
                Save
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Template_1;
