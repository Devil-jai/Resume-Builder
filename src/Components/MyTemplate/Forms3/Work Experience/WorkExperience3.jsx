import React, { useState } from 'react'
import "./WorkExperience.css"
import SideBar3 from "../../Sidebar/SideBar3";
import { useForm } from 'react-hook-form'
import { Button, Grid, MenuItem, Select, TextField } from '@mui/material'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function WorkExperience3() {

  const [show, hide] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const pi = location.state;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    for (const key in data) {
      if (data[key] == "") {
        delete data[key]
      }

    }
    const WorkE_PersI = {...data , ...pi}
    navigate("/Template3/KeySkills3",{state : WorkE_PersI})
  }

  const AddNewExperience = () => {
    const ex = document.getElementById("WorkExperience_2")
    const btn = document.getElementById("addNewbtn")

    ex.style.display = "block"
    btn.style.display = "none"
    hide(true)

  }

  return (
    <>
      <SideBar3 />
      <div className='d-flex justify-content-center  ps-lg-5 mt-lg-4 mb-5'  >
        <div className='WorkExperience_div ms-lg-5   py-4 pt-5 mt-2'>
          <div style={{ width: "85% " }} className='mx-auto'>
            <h3 className='fw-bold'>Work Experience</h3>
            <h5 className='fw-bold'>Experience 1</h5>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)}>

              <Grid container spacing={2}>

                <Grid item xs={12} md={6} >
                  <label htmlFor="" className='d-block mb-1'>Job Title</label>
                  <TextField fullWidth  {...register("JobTitle", { required: true })}
                    area-invalid={errors.JobTitle ? "true" : "false"} />
                  {errors.JobTitle && <span className="text-danger">Job Title is required</span>}
                </Grid>

                <Grid item xs={12} md={6} >
                  <label htmlFor="" className='d-block mb-1'>Organization Name</label>
                  <TextField fullWidth   {...register("OrganizationName", { required: true })}
                    area-invalid={errors.OrganizationName ? "true" : "false"} />
                  {errors.OrganizationName && <span className="text-danger">Organization Name is required</span>}
                </Grid>
                <Grid item xs={12} md={6} >
                  <label htmlFor="" className='d-block mb-1'>Start Year</label>

                  <Select
                    fullWidth
                    {...register("StartYear", { required: true })}
                    area-invalid={errors.StartYear ? "true" : "false"}
                  >
                     <MenuItem value={2014}>2014</MenuItem>
                    <MenuItem value={2015}>2015</MenuItem>
                    <MenuItem value={2016}>2016</MenuItem>
                    <MenuItem value={2017}>2017</MenuItem>
                    <MenuItem value={2018}>2018</MenuItem>
                    <MenuItem value={2019}>2019</MenuItem>
                    <MenuItem value={2020}>2020</MenuItem>
                    <MenuItem value={2021}>2021</MenuItem>
                    <MenuItem value={2022}>2022</MenuItem>
                    <MenuItem value={2023}>2023</MenuItem>
                  </Select>
                  {errors.StartYear && <span className="text-danger">StartYear is required</span>}
                </Grid>
                <Grid item xs={12} md={6} >
                  <label htmlFor="" className='d-block mb-1'>End Year</label>

                  <Select
                    fullWidth
                    {...register("EndYear", { required: true })}
                    area-invalid={errors.EndYear ? "true" : "false"}
                  >
                     <MenuItem value={"Present"}>Present</MenuItem>
                    <MenuItem value={2014}>2014</MenuItem>
                    <MenuItem value={2015}>2015</MenuItem>
                    <MenuItem value={2016}>2016</MenuItem>
                    <MenuItem value={2017}>2017</MenuItem>
                    <MenuItem value={2018}>2018</MenuItem>
                    <MenuItem value={2019}>2019</MenuItem>
                    <MenuItem value={2020}>2020</MenuItem>
                    <MenuItem value={2021}>2021</MenuItem>
                    <MenuItem value={2022}>2022</MenuItem>
                    <MenuItem value={2023}>2023</MenuItem>
                  </Select>
                  {errors.EndYear && <span className="text-danger">EndYear is required</span>}
                </Grid>
              </Grid>


              <div id='WorkExperience_2' style={{ display: "none" }} >
                <h5 className='fw-bold mt-5 '>Experience 2</h5>
                <hr />
                <Grid container spacing={2} className="mt-5">

                  <Grid item xs={12} md={6} >
                    <label htmlFor="" className='d-block mb-1'>Job Title</label>
                    <TextField fullWidth  {...register("JobTitle_2", { required: show })}
                      area-invalid={errors.JobTitle_2 ? "true" : "false"} />
                    {errors.JobTitle_2 && <span className="text-danger">Job Title is required</span>}
                  </Grid>

                  <Grid item xs={12} md={6} >
                    <label htmlFor="" className='d-block mb-1'>Organization Name</label>
                    <TextField fullWidth   {...register("OrganizationName_2", { required: show })}
                      area-invalid={errors.OrganizationName_2 ? "true" : "false"} />
                    {errors.OrganizationName_2 && <span className="text-danger">Organization Name is required</span>}
                  </Grid>
                  <Grid item xs={12} md={6} >
                    <label htmlFor="" className='d-block mb-1'>Start Year</label>

                    <Select
                      fullWidth
                      {...register("StartYear_2", { required: show })}
                      area-invalid={errors.StartYear_2 ? "true" : "false"}
                    >
                     <MenuItem value={2014}>2014</MenuItem>
                    <MenuItem value={2015}>2015</MenuItem>
                    <MenuItem value={2016}>2016</MenuItem>
                    <MenuItem value={2017}>2017</MenuItem>
                    <MenuItem value={2018}>2018</MenuItem>
                    <MenuItem value={2019}>2019</MenuItem>
                    <MenuItem value={2020}>2020</MenuItem>
                    <MenuItem value={2021}>2021</MenuItem>
                    <MenuItem value={2022}>2022</MenuItem>
                    <MenuItem value={2023}>2023</MenuItem>
                    </Select>
                    {errors.StartYear_2 && <span className="text-danger">StartYear is required</span>}
                  </Grid>
                  <Grid item xs={12} md={6} >
                    <label htmlFor="" className='d-block mb-1'>End Year</label>

                    <Select
                      fullWidth
                      {...register("EndYear_2", { required: show })}
                      area-invalid={errors.EndYear_2 ? "true" : "false"}
                    >
                     <MenuItem value={"Present"}>Present</MenuItem>
                    <MenuItem value={2014}>2014</MenuItem>
                    <MenuItem value={2015}>2015</MenuItem>
                    <MenuItem value={2016}>2016</MenuItem>
                    <MenuItem value={2017}>2017</MenuItem>
                    <MenuItem value={2018}>2018</MenuItem>
                    <MenuItem value={2019}>2019</MenuItem>
                    <MenuItem value={2020}>2020</MenuItem>
                    <MenuItem value={2021}>2021</MenuItem>
                    <MenuItem value={2022}>2022</MenuItem>
                    <MenuItem value={2023}>2023</MenuItem>
                    </Select>
                    {errors.EndYear_2 && <span className="text-danger">EndYear is required</span>}
                  </Grid>
                </Grid>
              </div>

              <div className='text-primary text-center fw-bold mt-4 ' id='addNewbtn'  ><span style={{ cursor: "pointer" }} onClick={
                AddNewExperience
              }>Add new</span></div>
              <hr className='mt-5 ' />
              <div className='d-flex justify-content-end me-sm-5 '>
              <Link className='btn btn-outline-primary PersonalInfo_btn mx-3' to="/Template3/PersonalInfo3">Back</Link>
                <Button type='submit' variant="contained" className='PersonalInfo_btn'>Next</Button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  )
}

export default WorkExperience3