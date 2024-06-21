import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import template1 from '../../Images/sample_1.jpg'
import template2 from '../../Images/sample_2.jpg'
import template3 from '../../Images/sample_3.jpg'
import template4 from '../../Images/sample_4.jpg'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
     
      <Box padding={4}>
        <Typography variant='h4' marginBottom={2}>Templates</Typography>
        <Typography>Select a template to get started</Typography>
        <Grid container spacing={3} mt={3}>
          <Grid item lg={3} md={6}>
            <Link to="/Template1/PersonalInfo"><img src={template1} alt="template1" width="75%" /></Link>
          </Grid>
          <Grid item lg={3} md={6}>
            <Link to="/Template2/PersonalInfo2"> <img src={template2} alt="template2" width="75%" /></Link>
          </Grid>
          <Grid item lg={3} md={6}>
            <Link to="/Template3/PersonalInfo3"><img src={template3} alt="template3" width="75%" /></Link>
          </Grid>
          <Grid item lg={3} md={6}>
            <Link to="/Template4/PersonalInfo4"><img src={template4} alt="template4" width="75%"/></Link>
          </Grid>
        </Grid >
      </Box>
     
    </>
  )
}

export default Home