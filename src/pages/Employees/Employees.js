import { makeStyles, Paper } from '@material-ui/core'
import { People, PeopleAltTwoTone, PeopleOutline } from '@material-ui/icons'
import React from 'react'
import PageHeader from '../../components/PageHeader'
import EmployeesForm from './EmployeesForm'

const useStyles = makeStyles(theme => ({
    pageContent : {
        margin: theme.spacing(5), 
        padding: theme.spacing(3)
    }
}))

export default function Employees() {

    const classes = useStyles()
    return (
        <>
             <PageHeader
        title="New Employee"
        subTitle="Form Design"
        icon = {<PeopleAltTwoTone fontSize="large" />}
        />
        <Paper className={classes.pageContent}>
            <EmployeesForm />
        </Paper>    
        </>
    )
}
