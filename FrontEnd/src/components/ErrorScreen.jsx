import {useRouteError} from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function ErrorScreen() {
    const error = useRouteError();
    console.error(error);

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <Typography variant="h1">
                404
            </Typography>
            <Typography variant={"h6"}>
                The page you’re looking for doesn’t exist.
            </Typography>
            <Typography variant={"body1"}>Here is the error message:</Typography>
            <Typography variant={"body2"}>
                {error.statusText || error.message}
            </Typography>
            <Button variant="contained" href={"/"}>Back Home</Button>
        </Box>
    );
}
