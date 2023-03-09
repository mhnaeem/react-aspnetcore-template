import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function HomeScreen() {
    return (
        <Container component="main">
            <Box>
                <Typography variant={"h1"}>Welcome to ReactAppTemplate</Typography>
                <Typography variant={"body1"}>This template is written using Material UI and React</Typography>
            </Box>
            <Button variant="contained" href={"./sign-in"}>Sign In</Button>
        </Container>
    );
}
