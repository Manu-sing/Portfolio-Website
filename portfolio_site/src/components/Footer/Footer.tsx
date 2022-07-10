import React from 'react'
import useStyles from "./styles"
import { AiOutlineArrowUp } from "react-icons/ai";
import { Button, Typography, Link } from '@mui/material';
import { HashLink } from 'react-router-hash-link'

const Footer = () => {
    const classes = useStyles()
    return (
        // <div className={classes.footer}>
        //     <div>Created by Emanuele Guarnaccia</div>
        //     <div className={classes.div}>
        //         <Button size='large' className={classes.buttonIcons}><Link className={classes.icons}><AiOutlineArrowUp /></Link></Button>
        //     </div>

        // </div>
        <div className={classes.cont}>
            <Typography className={classes.right} variant="body1" color="primary" component="h4"><strong>Created by <Link href="https://github.com/Manu-sing" target="_blanc" rel="noreferrer">Emanuele Guarnaccia</Link></strong></Typography>
            <Button size='large' className={classes.buttonIcons}><HashLink style={{ textDecoration: 'none' }} to="#navbar" smooth className={classes.icons}><AiOutlineArrowUp /></HashLink></Button>
        </div>
    )
}

export default Footer