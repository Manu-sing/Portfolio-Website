import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import useStyles from "./styles"
import { info } from "../../info/info";

const Skills: React.FC = () => {
    const classes = useStyles()
    return (
        <Box className={classes.box} id="skills">
            <Typography color="primary" variant="h4"><strong>SKILLS</strong></Typography>
            <ul className={classes.skillsList}>
                {info.skills.map((s, i) =>
                    <li key={i} className={classes.skillListItem}>
                        <Button size="large" variant="contained">{s}</Button>
                    </li>
                )}
            </ul>
        </Box>
    )
}

export default Skills