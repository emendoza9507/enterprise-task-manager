import { createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";

const defaultTheme = createTheme({
    palette: {
        primary: blue,
        secondary: {
            main: '#d50000'
        }
    }
});

export default defaultTheme;
