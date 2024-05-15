import { Box, Button, TextField } from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import { useEffect, useState } from "react";
import axios from "axios";
import SelectUser from "./SelectUser";
import { DateTimePicker, LocalizationProvider, PickersDay } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const StyledDay = styled(PickersDay)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius
}));

const StyledTextField = styled((props) => (
    <TextField
        fullWidth
        sx={{ mb: 3 }}
        {...props}
    />
))(({ theme }) => ({
    '& textarea, & input': { boxShadow: 'none' }
}))

export default function NuevaTareaForm() {

    const [trabajadores, setTrabajadores] = useState([]);

    useEffect(() => {
        axios('/api/v1/usuario/trabajadores')
            .then(({ data }) => {
                setTrabajadores(data)
            })
    }, []);

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
        >
            <LocalizationProvider dateAdapter={AdapterDayjs}>

                <SelectUser label="Responsable" users={trabajadores} />

                <StyledTextField
                    label="Descripcion"
                    variant="filled"
                    multiline
                />

                <DateTimePicker
                    label="Fecha de cumplimiento"
                    slots={{
                        day: StyledDay,
                    }}
                    slotProps={{
                        textField: {
                            variant: 'filled'
                        }
                    }}
                    sx={{ width: '100%' }}
                />

                <SelectUser label="Participantes" multiple users={trabajadores} />

                <Button sx={{ mt: 3 }} variant="contained">Crear</Button>
            </LocalizationProvider>
        </Box>
    )
}
