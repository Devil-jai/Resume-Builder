import React from "react";
import SideBar3 from "../../Sidebar/SideBar3";
import { useForm } from "react-hook-form";
import "../../Forms/Education/Education.css";
import { Button, Grid, MenuItem, Select, TextField } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTemplate_3_User } from "../../../../redux utilities/Template_3_slice";


function Education3() {
  const navigate = useNavigate()
  

  const dispatch = useDispatch()
  const location = useLocation()

  const mergedata = location.state

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const startYear = watch("StartYear")
  const onSubmit = (data) => {
    for (const key in data) {
      if (data[key] == "") {
        delete data[key];
      }
    }
    const allformsdata = {...data,...mergedata}
    dispatch(addTemplate_3_User(allformsdata))
    navigate('/Template_3')
  };

  return (
    <>
      <SideBar3 />
      <div className="d-flex justify-content-center  ps-lg-5 mt-lg-4 mb-5 ">
        <div className="Education_div ms-lg-5   py-4 pt-5 mt-2">
          <div style={{ width: "85% " }} className="mx-auto">
            <h3 className="fw-bold">Education</h3>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}  >
                <label htmlFor="" className="d-block mb-1">
                  Type
                </label>
                <TextField
                  className="Type_input"
                  {...register("Type", { required: true })}
                  area-invalid={errors.Type ? "true" : "false"}
                />
                {errors.Type && <div className="text-danger">Type is required</div>}
              </Grid>

              <Grid item xs={12} md={6}>
                <label htmlFor="" className="d-block mb-1">
                  University
                </label>
                <TextField
                  fullWidth
                  {...register("University", { required: true })}
                  area-invalid={errors.University ? "true" : "false"}
                />
                {errors.University && (
                  <span className="text-danger"> University is required</span>
                )}
              </Grid>

              <Grid item xs={12} md={6} >
                <label htmlFor="" className="d-block mb-1">
                  Degree
                </label>
                <TextField
                  fullWidth
                  {...register("Degree", { required: true })}
                  area-invalid={errors.Degree ? "true" : "false"}
                />
                {errors.Degree && (
                  <span className="text-danger">Degree is required</span>
                )}
              </Grid>
              <Grid item xs={12} md={6} >
                <label htmlFor="" className="d-block mb-1">
                  Start Year
                </label>

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
                {errors.StartYear && <span className="text-danger"> StartYear is required</span>}
              </Grid>
              <Grid item xs={12} md={6} >
                <label htmlFor="" className="d-block mb-1">
                  End Year
                </label>

                <Select
                  fullWidth
                  {...register("EndYear", { required: "End Year is required",
                    validate : value => (startYear && value && startYear < value || "EndYear must be greater than Start Year")
                   })}
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
                {errors.EndYear && <span className="text-danger">{errors.EndYear.message  }</span>}
              </Grid>
            </Grid>
                <hr className='mt-5 ' />
              <div className='d-flex justify-content-end me-sm-5 '>
              <Link className='btn btn-outline-primary PersonalInfo_btn mx-3' to="/Template3/KeySkills3">Back</Link>
                <Button type='submit' variant="contained" className='PersonalInfo_btn'>Next</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education3;
