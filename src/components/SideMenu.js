import React from 'react'
import {makeStyles, withStyles} from '@material-ui/core'


const styles = {
    
        sideMenu : {
            display: 'flex',
            flexDirection: 'column',
            position: 'absolute',
            backgroundColor: '#253053',
            left: '0px',
            width: '320px',
            height: '100%'
          }  
    
}



const SideMenu = (props) => {
    const {classes} = props
    return (
        <div className={classes.sideMenu}>
            120
        </div>
    )
}


export default withStyles(styles)(SideMenu)