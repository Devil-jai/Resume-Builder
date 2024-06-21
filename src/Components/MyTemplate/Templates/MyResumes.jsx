import React, { useRef, useState } from "react";
import profilepic from "../../../Images/profile.png";
import { Box, Button, Card, Container, Grid } from "@mui/material";
import "./Template.css";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../../redux utilities/Template_1_slice";
import jsPDF from "jspdf";
import { removeUser_Template_2 } from "../../../redux utilities/Template_2_slice";
import { removeUser_Template_3 } from "../../../redux utilities/Template_3_slice";
import { removeUser_Template_4 } from "../../../redux utilities/Template_4_slice";
function MyResumes() {
  const UserData = useSelector((data) => data.Userdata.User);

  const dispatch = useDispatch();
  const componentRef = useRef();

  const Template_2_data = useSelector(
    (data) => data.Template_2_data.Template_2_User
  );
  const Template_3_data = useSelector(
    (data) => data.Template_3_data.Template_3_User
  );
  const Template_4_data = useSelector(
    (data) => data.Template_4_data.Template_4_User
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
        doc.save("remume");
      },
      x: 10,
      y: 10,
    });
  };

  return (
    <>
    
      <Container>
          {UserData.length>0 || Template_2_data.length>0 || Template_3_data.length>0 || Template_4_data.length>0 ?
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          
          {
          UserData.map((item) => {
            return (
              <Grid item md={6}>
                <Card
                  sx={{ position: "relative" }}
                  className="main_grid"
                  ref={componentRef}
                >
                  <Box className=" main_box">
                    <Grid container spacing={3} className="px-3 ">
                      <Grid item xs={3} className="d-flex align-items-center ">
                        <img
                          style={{ borderRadius: "50%" }}
                            src={
                              item.image 
                                ? item.image
                                : profilepic
                            }
                          className="template_img"
                          alt="ProfileImg"
                        />
                      </Grid>
                      <Grid
                        item
                        xs={5}
                        className="d-flex flex-column justify-content-center ms-2"
                      >
                        <h2 className="fw-bold co_pr name">
                          {item.FirstName} {item.LastName}
                        </h2>
                        <h6 className="fw-bold  position">
                          Front End Development
                        </h6>
                      </Grid>
                      <Grid item xs={3} className="ps-1">
                        <ul className="Template_list co_pr details ">
                          {renderListItem(item.address)}
                          {renderListItem(item.city)}
                          {renderListItem(item.state)}
                          {renderListItem(item.postalcode)}
                          {renderListItem(item.Mobile)}
                        </ul>
                      </Grid>

                      <Grid item xs={12} className="mx-auto">
                        <Box className="bg_pr" height={4}></Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Box className="text-center">{item.objective}</Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Box className="bg_pr" height={4}></Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Box>
                          <h6 className="co_pr">Professional Experience</h6>
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
                  <Box className="remove_btn">
                    <Button
                      variant="contained"
                      className="me-4"
                      onClick={generatePdf}
                    >
                      Download
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => dispatch(removeUser(item.id))}
                    >
                      remove
                    </Button>
                  </Box>
                </Card>
              </Grid>
            );
          })}

          {Template_2_data.map((item, index) => {
            return (
              <Grid item md={6}>
                <Card
                  sx={{ position: "relative" }}
                  className="main_grid"
                  ref={componentRef}
                >
                  <Box className="my-5 mx-2 main_box">
                    <Grid container spacing={3}>
                      <Grid item xs={3} className="d-flex  align-items-center">
                        <img
                          src={
                            item.image 
                              ? item.image
                              : profilepic
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
                        <h6 className="fw-bold position">
                          Front End Development
                        </h6>
                      </Grid>
                      <Grid item xs={4}>
                        <ul className="Template_list t2_co details p-1 ">
                          {renderListItem(item.address)}
                          {renderListItem(item.city)}
                          {renderListItem(item.state)}
                          {renderListItem(item.postalcode)}
                          {renderListItem(item.Mobile)}
                        </ul>
                      </Grid>

                      <Grid item xs={12}>
                        <Box className="text-center">{item.objective}</Box>
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
                  <Box className="remove_btn">
                    <Button
                      variant="contained"
                      className="me-4"
                      onClick={generatePdf}
                    >
                      Download
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => dispatch(removeUser_Template_2(item.id))}
                    >
                      remove
                    </Button>
                  </Box>
                </Card>
              </Grid>
            );
          })}

          {Template_3_data.map((item) => {
            return (
              <Grid item md={6}>
                <Card
                  sx={{ position: "relative" }}
                  className="main_grid"
                  ref={componentRef}
                >
                  <Box className="my-5 mx-2 main_box">
                    <Grid container spacing={3}>
                      <Grid
                        container
                        className="bg_t3 pe-1 ps-4 pt-5 px-sm-5 text-white text-center"
                      >
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
                          <h2 className="fw-bold t3_co firstName text-white name">
                            {item.FirstName} {item.LastName}
                          </h2>
                          <h6 className="fw-bold position">
                            Front End Development
                          </h6>
                        </Grid>
                        <Grid item xs={4}>
                          <ul className="Template_list t3_co text-white details p-1">
                            {renderListItem(item.address)}
                            {renderListItem(item.city)}
                            {renderListItem(item.state)}
                            {renderListItem(item.postalcode)}
                            {renderListItem(item.Mobile)}
                          </ul>
                        </Grid>
                        <Grid item xs={12} my={2}>
                          <Box className="text-center">{item.objective}</Box>
                        </Grid>
                      </Grid>

                      <Grid item xs={12} m={1}>
                        <Box className="mb-2">
                          <h6 className="t3_co mb-1">
                            Professional Experience
                          </h6>
                          <Box className="bg_t3 " height={4}></Box>
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

                      <Grid item xs={12} m={1}>
                        <Box className="mb-2">
                          <h6 className="t3_co mb-1">Education</h6>
                          <Box className="bg_t3" height={4}></Box>
                        </Box>
                        {item.Degree} in {item.Type} {item.University} (
                        {item.StartYear} - {item.EndYear})
                      </Grid>

                      <Grid item xs={12} m={1}>
                        <Box className="mb-2">
                          <h6 className="t3_co mb-1">Key Skills</h6>
                          <Box className="bg_t3" height={4}></Box>
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
                  <Box className="remove_btn">
                    <Button
                      variant="contained"
                      className="me-4"
                      onClick={generatePdf}
                    >
                      Download
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => dispatch(removeUser_Template_3(item.id))}
                    >
                      remove
                    </Button>
                  </Box>
                </Card>
              </Grid>
            );
          })}

          {Template_4_data.map((item, index) => {
            return (
              <Grid item md={6}>
                <Card
                  sx={{ position: "relative" }}
                  className="main_grid"
                  ref={componentRef}
                >
                  <Box className="my-5 mx-2 main_box">
                    <Grid container spacing={3}>
                      <Grid container className=" px-3 pt-5 text-center">
                        <Grid
                          item
                          xs={3}
                          className="d-flex  align-items-center justify-content-center"
                        >
                          <img
                            src={
                              item.image 
                                ? item.image
                                : profilepic
                            }
                            className="template_img ms-2"
                            style={{ borderRadius: "50%" }}
                            alt="ProfileImg"
                          />
                        </Grid>

                        <Grid
                          item
                          xs={5}
                          className="d-flex flex-column justify-content-center "
                        >
                          <h2 className="fw-bold t3_co name ">
                            {item.FirstName} {item.LastName}
                          </h2>
                          <h6 className="fw-bold position">
                            Front End Development
                          </h6>
                        </Grid>
                        <Grid item xs={4}>
                          <ul className="Template_list t3_co details text-start">
                            {renderListItem(item.address)}
                            {renderListItem(item.city)}
                            {renderListItem(item.state)}
                            {renderListItem(item.postalcode)}
                            {renderListItem(item.Mobile)}
                          </ul>
                        </Grid>
                        <Grid item xs={12} my={1}>
                          <Box className="bg_t3 " height={4}></Box>
                        </Grid>
                        <Grid item xs={12} my={2}>
                          <Box className="text-center">{item.objective}</Box>
                        </Grid>
                      </Grid>
                      <Grid item xs={12} m={1}>
                        <Box className="mb-2">
                          <h6 className="t3_co mb-1">
                            Professional Experience
                          </h6>
                          <Box className="bg_t3 " height={4}></Box>
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
                      <Grid item xs={12} m={1}>
                        <Box className="mb-2">
                          <h6 className="t3_co mb-1">Education</h6>
                          <Box className="bg_t3" height={4}></Box>
                        </Box>
                        {item.Degree} in {item.Type} {item.University} (
                        {item.StartYear} - {item.EndYear})
                      </Grid>
                      <Grid item xs={12} m={1}>
                        <Box className="mb-2">
                          <h6 className="t3_co mb-1">Key Skills</h6>
                          <Box className="bg_t3" height={4}></Box>
                        </Box>
                        <ul>
                          {renderListItem(item.skill1)}
                          {renderListItem(item.skill2)}
                          {renderListItem(item.skill3)}
                          {renderListItem(item.skill4)}
                          {renderListItem(item.skill5)}
                        </ul>
                      </Grid>
                      1
                    </Grid>
                  </Box>
                  <Box className="remove_btn">
                    <Button
                      variant="contained"
                      className="me-4"
                      onClick={generatePdf}
                    >
                      Download
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => dispatch(removeUser_Template_4(item.id))}
                    >
                      remove
                    </Button>
                  </Box>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        :  <div className="row mt-5">
          <div className="col-12 text-center "><h1>First Create Resume </h1></div>
        </div>
        } 
      </Container>
    </>
  );
}

export default MyResumes;
