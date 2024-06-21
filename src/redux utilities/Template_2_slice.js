import { createSlice, current, nanoid } from "@reduxjs/toolkit";

const initialState={
    Template_2_User:JSON.parse(localStorage.getItem("Template_2_User"))?JSON.parse(localStorage.getItem("Template_2_User")):[]
}

const Slice = createSlice({
    name:"Template_2_data",
    initialState,
    reducers:{
      
        addTemplate_2_User:(state,action)=>{
       
            const data={
                id:nanoid(),
                image:action.payload.image,
                FirstName:action.payload.FirstName,
                LastName: action.payload.LastName,       
                Email: action.payload.Email,       
                Mobile: action.payload.Mobile,       
                address: action.payload.address,       
                city: action.payload.city,       
                state: action.payload.state,       
                postalcode: action.payload.postalcode,       
                objective: action.payload.objective, 
                JobTitle: action.payload.JobTitle,
                OrganizationName: action.payload.OrganizationName,
                StartYear: action.payload.StartYear,
                EndYear: action.payload.EndYear,
                JobTitle_2: action?.payload?.JobTitle_2,
                OrganizationName_2: action?.payload?.OrganizationName_2,
                StartYear_2: action?.payload?.StartYear_2,
                EndYear_2: action?.payload?.EndYear_2,      
                skill1:action.payload.skill1,
                skill2:action.payload.skill2,
                skill3:action.payload.skill3,
                skill4:action.payload.skill4,
                skill5:action.payload.skill5,
                Type:action.payload.Type,
                University:action.payload.University,
                Degree:action.payload.Degree,
                EducationStartYear:action.payload.EducationStartYear,
                EducationEndYear:action.payload.EducationEndYear,      
            }
            state.Template_2_User.push(data);
     
            let Template_2_data = JSON.stringify(current(state.Template_2_User));
            
            localStorage.setItem("Template_2_User",Template_2_data)
        },
        removeUser_Template_2:(state,action)=>{
            const data = state.Template_2_User.filter((item)=>{
                return item.id!==action.payload
            })
            state.Template_2_User=data
            let Template_2_data = JSON.stringify(data);
            localStorage.setItem("Template_2_User",Template_2_data)
        }
    }
});

export const {addTemplate_2_User,removeUser_Template_2} = Slice.actions;
export default Slice.reducer

