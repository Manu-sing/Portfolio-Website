import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    box: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "50px"
    },
    skillsList: {
        maxWidth: "600px",
        width: "95%",
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
    },
    skillListItem: {
        margin: "0.5em",
        listStyle: "none",
    }
}));