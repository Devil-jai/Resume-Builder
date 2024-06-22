import React, { useState } from "react";
import { useForm } from "react-hook-form";
import img from "../../../../Images/profile.png";
import "../../Forms/PersonalInfo/PersonalInfo.css";
import SideBar3 from "../../Sidebar/SideBar3";
import { useNavigate } from "react-router-dom";


function PersonalInfo3() {
  const navigate = useNavigate();;
  const [image, setimage] = useState("");
  const {
    register,
    handleSubmit,    
    formState: { errors },
  } = useForm();

  const imageupload = (e) => {
    let file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () =>{

      setimage(reader.result);
    }
    reader.readAsDataURL(file)
  };


  const onSubmit = (data) => {
    data.image = image
    navigate("/Template3/WorkExperience3",{state : data});
  };


  return (
    <>
      <SideBar3 />
      <div className="d-flex justify-content-center ps-lg-5 mt-lg-4 mb-5">
        <div className="PersonalInfo_div ms-lg-5 px-sm-4 py-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="my-4 PersonalInfo_img mx-sm-5">
              <img src={image ? image : img} />
              <div
                className="input-group custom-file-button d-flex justify-content-center mt-2"
                style={{ width: "180px" }}
              >
                <label htmlFor="inputField" className="image_input">
                  Change Profile Photo
                </label>
                <input
                  id="inputField"
                  style={{ display: "none" }}
                  type="file"
                  className="image_input"
                  {...register("image", { required: true })}
                  onChange={imageupload}
                  aria-invalid={errors.image ? "true" : "false"}
                />
                {errors.image && (
                  <span className="text-danger">Image is required</span>
                )}
              </div>
            </div>

            <div className="row PersonalInfo_form px-sm-5 px-3">
              <div className="col-lg-6 mt-4">
                <label className="d-block">First Name</label>
                <input
                  type="text"
                  name="FirstName"
                  {...register("FirstName", { required: 
                    "First Name is required" ,pattern:  {value :  /^[A-Za-z\s]*$/ ,message: "Enter character only"}  , minLength: {value : 3 , message : "length is too short"}})}
                    aria-invalid={errors.FirstName ? "true" : "false"}
                />
                {errors.FirstName && <span className="text-danger">{errors.FirstName.message}</span>}
              </div>

              <div className="col-lg-6 mt-4">
                <label className="d-block">Last Name</label>
                <input
                  type="text"
                  {...register("LastName", { required: "Last Name is required",pattern:  {value :  /^[A-Za-z\s]*$/ ,message: "Enter character only"}   ,minLength: {value : 3 , message : "length is too short"}})}
                  aria-invalid={errors.LastName ? "true" : "false"}
                />
                {errors.LastName && (
                  <span className="text-danger">{errors.LastName.message}</span>
                )}
              </div>

              <div className="col-lg-6 mt-4">
                <label className="d-block">Email</label>
                <input
                  type="email"
                  {...register("Email", { required: true , pattern: {value : /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid Email"}})}
                  aria-invalid={errors.Email ? "true" : "false"}
                />
                {errors.Email && (
                  <span className="text-danger">{errors.Email.message}</span>
                )}
              </div>

              <div className="col-lg-6 mt-4">
                <label className="d-block">Mobile</label>
                <input
                  type="number"
                  {...register("Mobile", { required: "Mobile is required"  , maxLength:{value : 10 , message : "length is too long"} ,minLength: {value : 10 , message : "length is too short"}})}
                  aria-invalid={errors.Mobile ? "true" : "false"}
                />
                {errors.Mobile && (
                  <span className="text-danger">{errors.Mobile.message}</span>
                )}
              </div>

              <div className="col-lg-6 mt-4">
                <label className="d-block">Address</label>
                <input
                  type="text"
                  {...register("address", { required: true })}
                  aria-invalid={errors.address ? "true" : "false"}
                />
                {errors.address && (
                  <span className="text-danger">Address is required</span>
                )}
              </div>

              <div className="col-lg-6 mt-4">
                <label className="d-block">City</label>
                <input
                  type="text"
                  {...register("city", { required: "City is required" ,pattern:  {value :  /^[A-Za-z\s]*$/ ,message: "Enter character only"} })}
                  aria-invalid={errors.city ? "true" : "false"}
                />
                {errors.city && (
                  <span className="text-danger">{errors.city.message}</span>
                )}
              </div>

              <div className="col-lg-6 mt-4">
                <label className="d-block">State</label>
                <input
                  type="text"
                  {...register("state", { required: "State is required" ,pattern:  {value :  /^[A-Za-z\s]*$/ ,message: "Enter character only"} })}
                  aria-invalid={errors.state ? "true" : "false"}
                />
                {errors.state && (
                  <span className="text-danger">{errors.state.message}</span>
                )}
              </div>

              <div className="col-lg-6 mt-4">
                <label className="d-block">PostalCode</label>
                <input
                  type="number"
                  {...register("postalcode", { required: "PostalCode is required" , minLength: {value : 6 , message : "length is too short"}, maxLength: {value : 6 , message : "length is too long"}})}
                  aria-invalid={errors.postalcode ? "true" : "false"}
                />
                {errors.postalcode && (
                  <span className="text-danger">{errors.postalcode.message}</span>
                )}
              </div>

              <div className="col-12 mt-4">
                <label className="d-block">Objective</label>
                <textarea
                  rows={6}
                  className="text-area"
                  {...register("objective", { required: true })}
                  aria-invalid={errors.objective ? "true" : "false"}
                ></textarea>
                {errors.objective && (
                  <span className="text-danger">Objective is required</span>
                )}
              </div>
            </div>

            <hr className="mt-5 " />
            <div className="d-flex justify-content-end me-sm-5 ">
              <button className="btn btn-primary PersonalInfo_btn">Next</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default PersonalInfo3;
