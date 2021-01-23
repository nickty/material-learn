import React, {useState, useEffect} from 'react'
import {Grid, TextField, makeStyles} from '@material-ui/core'

const useStyle = makeStyles(theme=>({
    root: {
        '& .MuiInputBase-root': {
            width: '80%',
            margin:theme.spacing(1)

        }
    }
}))

const initialFValues = {
    id: 0, 
    fullName: '', 
    email: '', 
    mobile: '', 
    city:'', 
    gendar: 'male', 
    departmentId: '', 
    hireDate: new Date(), 
    isPermanent: false
}

export default function EmployeesForm() {

   const [values, setValues] = useState(initialFValues); 

   const classes = useStyle()

   const handleInputChange = e => {
       const {name, value} = e.target
       setValues({
           ...values,
           [name] : value
       })
   }

    return (
        <form className={classes.root}>
           <Grid container>
               <Grid item xs={6}>
                   <TextField
                   variant="outlined"
                   label="Full Name"
                   name="fullName"
                   value={values.fullName}
                   onChange={handleInputChange}
                   />
                    <TextField
                   variant="outlined"
                   label="Email"
                   value={values.email}
                   />
               </Grid>
               </Grid>
               <Grid item xs={6}>
              
           </Grid>
        </form>
    )
}
