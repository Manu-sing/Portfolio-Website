import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import useStyles from './styles';
import { info } from "../../info/info";
import Project from './SingleProject/Project';

interface Props {
    isDarkTheme: boolean
}

const Projects: React.FC<Props> = ({ isDarkTheme }) => {
    const classes = useStyles()

    return (
        <Box className={classes.box} id="projects">
            <Typography color="primary" variant="h4"><strong>PROJECTS</strong></Typography>
            <Grid container spacing={6}>
                {info.portfolio.map((p, i) =>
                    <Project projectInfo={p} key={i} isDarkTheme={isDarkTheme} />
                )}
            </Grid>
        </Box>
    )
}

export default Projects