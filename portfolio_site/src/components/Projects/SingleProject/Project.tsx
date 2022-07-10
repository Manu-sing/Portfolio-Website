import React from 'react'
import { Card, CardActions, CardContent, Typography, Button, Grid, Link } from '@mui/material'
import useStyles from "./styles";
import { FiExternalLink } from "react-icons/fi";
import { SiGithub } from "react-icons/si";

interface Props {
    projectInfo: {
        title: string,
        description: string,
        stack: Array<string>,
        live: string,
        github: string
    },
    isDarkTheme: boolean
}

const Project: React.FC<Props> = ({ projectInfo, isDarkTheme }) => {
    const classes = useStyles()
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" color="primary" className={classes.text} gutterBottom>
                        <strong>{projectInfo.title}</strong>
                    </Typography>
                    <Typography variant="body2" color="primary" className={classes.text} gutterBottom>
                        {projectInfo.description}
                    </Typography>
                    <Typography variant="body2" color="primary" className={classes.stackStyle}>
                        {projectInfo.stack.map((s, i) =>
                            <p key={i}><strong>{s}</strong></p>
                        )}
                    </Typography>
                    <CardActions className={classes.stackStyle}>
                        <Button size='large' className={classes.buttonIcons}>
                            <Link className={classes.icons} target="_blank" rel="noreferrer" href={projectInfo.github}>{isDarkTheme ? <SiGithub /> : <SiGithub />}</Link>
                        </Button>
                        <Button size='large' className={classes.buttonIcons}>
                            <Link className={classes.icons} target="_blank" rel="noreferrer" href={projectInfo.live}>{isDarkTheme ? <FiExternalLink /> : <FiExternalLink />}</Link>
                        </Button>
                    </CardActions>
                </CardContent>
            </Card>
        </Grid>

    )
}

export default Project