import React, { useState } from 'react'
import "../../Forms/Key Skills/KeySkills.css"
import SideBar3 from "../../Sidebar/SideBar3";
import { useForm } from 'react-hook-form'
import { Button, Grid, MenuItem, Select, TextField } from '@mui/material'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function KeySkills3() {
 const [show,hide] = useState()
  const navigate = useNavigate()
  const location = useLocation()
  const keyskilldata = location.state;

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
    const WorkE_PersI_KeyS = {...data , ...keyskilldata }
    navigate("/Template3/Education3",{state: WorkE_PersI_KeyS})
  }

  
   const AddNewSkills = () =>{
      const ex = document.getElementById("KeySkills_2")
      const btn = document.getElementById("addNewbtn")
      ex.style.display = "block"
      btn.style.display = "none"
      hide(true)
   }

  return (
    <>
      <SideBar3 />
      <div className='d-flex justify-content-center  ps-lg-5 mt-lg-4 mb-5 '  >
        <div className='KeySkills_div ms-lg-5   py-4 pt-5 mt-2'>
          <div style={{ width: "85% " }} className='mx-auto'>
            <h3 className='fw-bold'>Key Skills</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>

                  <TextField fullWidth  {...register("skill1", { required: true })}
                    area-invalid={errors.skill1 ? "true" : "false"} />
                  {errors.skill1 && <span className="text-danger">skill is required</span>}
                </Grid>
                <Grid item xs={12} md={6}>

                  <TextField fullWidth   {...register("skill2", { required: true })}
                    area-invalid={errors.skill2 ? "true" : "false"} />
                  {errors.skill2 && <span className="text-danger">skill is required</span>}
                </Grid>
                <Grid item xs={12} md={6} >

                  <TextField fullWidth  {...register("skill3", { required: true })}
                    area-invalid={errors.skill3 ? "true" : "false"} />
                  {errors.skill3 && <span className="text-danger">skill is required</span>}
                </Grid>
                <Grid item xs={12} md={6} >

                  <TextField fullWidth placeholder='Add additional skill'   {...register("skill4")}
                    area-invalid={errors.skill4 ? "true" : "false"} />
                  {errors.skill4 && <span className="text-danger">skill is required</span>}
                </Grid>
                <Grid item xs={12} md={6} id="KeySkills_2" style={{display:"none"}}>

                  <TextField fullWidth placeholder='Add additional skill'   {...register("skill5")}
                    area-invalid={errors.skill5 ? "true" : "false"} />
                  {errors.skill5 && <span className="text-danger">skill is required</span>}
                </Grid>


              </Grid>
              <div className='text-primary fw-bold mt-4 ' id='addNewbtn'  ><span style={{ cursor: "pointer" }} onClick={
                AddNewSkills
              }>Add new</span></div>
              
              <hr className='mt-5 ' />
              <div className='d-flex justify-content-end me-sm-5 '>
                <Link className='btn btn-outline-primary PersonalInfo_btn mx-3' to="/Template3/WorkExperience3">Back</Link>
               
                <Button type='submit' variant="contained" className='PersonalInfo_btn'>Next</Button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  )
}

export default KeySkills3