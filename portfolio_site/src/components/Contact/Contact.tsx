import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import useStyles from "./styles"

const Contact: React.FC = () => {
    const classes = useStyles()
    return (
        <Box className={classes.box} id="contact">
            <Typography color="primary" variant="h4"><strong>CONTACT</strong></Typography>
            <Button
                size="large"
                variant="outlined"
                target="_blanc"
                rel="noopener noreferrer"
                href={`mailto:emanueleguarnaccia@gmail.com`}
            >email me</Button>
        </Box>
    )
}

export default Contact