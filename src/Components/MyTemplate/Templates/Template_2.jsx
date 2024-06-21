import React, { useRef, useState } from "react";
import profilepic from "../../../Images/profile.png";
import { Box, Card, Container, Grid, Input, Button } from "@mui/material";
import "./Template.css";

import { useSelector } from "react-redux";
import jsPDF from "jspdf";
import { useNavigate } from "react-router-dom";

function Template_2() {
  const [filename, setfilename] = useState("");
  const navigate = useNavigate();
  const componentRef = useRef();
  const Template_2_data = useSelector(
    (data) => data.Template_2_data.Template_2_User
  );



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

  const generatePdf = () => {
    const doc = new jsPDF("p", "pt", "a4");
    doc.html(componentRef.current, {
      callback: function (doc) {
        doc.save(filename);
      },
      x: 10,
      y: 10,
    });
  };

  return (
    <>
      <Container>
        <h2 className="mb-5">Resume Preview</h2>
        <Grid container spacing={4} sx={{ flexGrow: 1 }}>
          <Grid item md={7}>
            {Template_2_data.map((item, index, array) => {
              if (index === array.length - 1) {
                return (
                  <Grid container spacing={2} key={index} ref={componentRef}>
                    <Grid item xs={12}>
                      <Card>
                        <Box className="my-5 mx-2 ">
                          <Grid container spacing={3}>
                            <Grid
                              item
                              xs={3}
                              className="d-flex  align-items-center"
                            >
                              <img
                                src={
                                  item.image 
                                }
                                className="template_img"
                                style={{ borderRadius: "50%" }}
                                alt="ProfileImg"
                              />
                            </Grid>

                            <Grid
                              item
                              xs={5}
                              className="d-flex flex-column justify-content-center "
                            >
                              <h2 className="fw-bold t2_co  name">
                                {item.FirstName} {item.LastName}
                              </h2>
                              <h6 className="fw-bold position">Front End Development</h6>
                            </Grid>
                            <Grid item xs={4} >
                              <ul className="Template_list t2_co details p-1 ">  
                              {renderListItem(item.address)}
                                {renderListItem(item.city)}
                                {renderListItem(item.state)}
                                {renderListItem(item.postalcode)}
                                {renderListItem(item.Mobile)}
                              </ul>
                            </Grid>

                            <Grid item xs={12}>
                              <Box className="text-center">
                                {item.objective}
                              </Box>
                            </Grid>

                            <Grid item xs={12}>
                              <Box className="mb-2">
                                <h6 className="t2_co mb-1">
                                  Professional Experience
                                </h6>
                                <Box className="bg_t2 " height={4}></Box>
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
                              <Box className="mb-2">
                                <h6 className="t2_co mb-1">Education</h6>
                                <Box className="bg_t2" height={4}></Box>
                              </Box>
                              {item.Degree} in {item.Type} {item.University} (
                              {item.StartYear} - {item.EndYear})
                            </Grid>

                            <Grid item xs={12}>
                              <Box className="mb-2">
                                <h6 className="t2_co mb-1">Key Skills</h6>
                                <Box className="bg_t2" height={4}></Box>
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
              } else {
                return null; // Ensure that null is returned for non-last items
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

export default Template_2;
