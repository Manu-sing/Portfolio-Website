import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    card: {
        minWidth: 200,
        minHeight: 200,
        maxWidth: 300,
        maxHeight: 300
    },
    stackStyle: {
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        alignItems: "center"
    },
    buttonIcons: {
        width: "80px",
        height: "80px"
    },
    icons: {
        fontSize: "30px"
    },
    text: {
        textAlign: "center",
    }
}));