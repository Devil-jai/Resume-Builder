import { createSlice, current, nanoid } from "@reduxjs/toolkit";

const initialState={
    Template_4_User:JSON.parse(localStorage.getItem("Template_4_User"))?JSON.parse(localStorage.getItem("Template_4_User")):[]
}

const Slice = createSlice({
    name:"Template_4_data",
    initialState,
    reducers:{
      
        addTemplate_4_User:(state,action)=>{
      
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
            state.Template_4_User.push(data);
           
            let Template_4_data = JSON.stringify(current(state.Template_4_User));
            
            localStorage.setItem("Template_4_User",Template_4_data)
        },
        removeUser_Template_4:(state,action)=>{
            const data = state.Template_4_User.filter((item)=>{
                return item.id!==action.payload
            })
            state.Template_4_User=data
            let Template_4_data = JSON.stringify(data);
            localStorage.setItem("Template_4_User",Template_4_data)
        }
    }
});

export const {addTemplate_4_User,removeUser_Template_4} = Slice.actions;
export default Slice.reducer

