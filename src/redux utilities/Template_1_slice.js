import { createSlice, current, nanoid } from "@reduxjs/toolkit";

const initialState={
    User:JSON.parse(localStorage.getItem("User"))?JSON.parse(localStorage.getItem("User")):[]
}

const Slice = createSlice({
    name:"Userdata",
    initialState,
    reducers:{
      
        addUser:(state,action)=>{
        
            const data={
                id:nanoid(),
                image:
                // // {name : action.payload.image.name ,
                // //     size : action.payload.image.size,
                // //     lastModified : action.payload.image.lastModified , 
                // //     lastModifiedDate : action.payload.image.lastModifiedDate,  
                // //     type : action.payload.image.type,  
                // //     webkitRelativePath : action.payload.image.webkitRelativePath,  
                // // }, 
                action.payload.image,
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
            state.User.push(data);
            console.log(data);
            console.log(state.User);
            let Userdata = JSON.stringify(current(state.User));
            console.log(Userdata);
            localStorage.setItem("User",Userdata)
        },
        removeUser:(state,action)=>{
            const data = state.User.filter((item)=>{
                return item.id!==action.payload
            })
            state.User=data
            let Userdata = JSON.stringify(data);
            localStorage.setItem("User",Userdata)
        }
    }
});

export const {addUser,removeUser} = Slice.actions;
export default Slice.reducer

