import React from 'react'
import Box from '@mui/material/Box';
import { Button, Typography, Link, Avatar } from '@mui/material';
import { info } from '../../info/info';
import { TbBrandGithub } from "react-icons/tb";
import { AiOutlineLinkedin, AiFillLinkedin } from "react-icons/ai";
import { SiGithub } from "react-icons/si";
import useStyles from './styles';




interface Props {
    isDarkTheme: boolean;
}

export const PersonalInfo: React.FC<Props> = ({ isDarkTheme }) => {
    const classes = useStyles();
    return (
        <Box className={classes.box} id="about">
            <Typography variant="h2" component="div" gutterBottom color="primary" style={{ marginBottom: "35px" }}>
                <strong>Hi, I am {info.firstName} {info.lastName}.</strong>
            </Typography>
            <Typography variant="h4" component="div" gutterBottom color="primary" style={{ marginBottom: "35px" }}>
                <strong>{info.position}</strong>
            </Typography>
            <Typography variant="h6" component="div" gutterBottom color="primary" style={{ maxWidth: "600px", marginBottom: "30px" }}>
                {info.bio}
            </Typography>
            <Box>
                <Button size='large' variant="outlined"><Link href={require('../Documents/Document.pdf')} target="_blank" underline="hover">resume</Link></Button>
                <Button size='large' className={classes.buttonIcons}><Link className={classes.icons} target="_blank" rel="noreferrer" href="https://github.com/Manu-sing">{isDarkTheme ? <SiGithub /> : <SiGithub />}</Link></Button>
                <Button size='large' className={classes.buttonIcons}><Link className={classes.icons} target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/emanueleguarnaccia/">{isDarkTheme ? <AiOutlineLinkedin /> : <AiFillLinkedin />}</Link></Button>
            </Box>
        </Box >
    )
}

