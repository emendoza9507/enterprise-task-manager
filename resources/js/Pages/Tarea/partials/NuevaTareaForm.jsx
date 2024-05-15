import { Box, Button, TextField } from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import { useEffect, useState } from "react";
import axios from "axios";
import SelectUser from "./SelectUser";
import { DateTimePicker, LocalizationProvider, PickersDay } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useForm } from "@inertiajs/react";

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
    const { data, post, setData } = useForm({
        responsable: '',
        descripcion: '',
        fecha_cumplimiento: ''
    })

    useEffect(() => {
        axios('/api/v1/usuario/trabajadores')
            .then(({ data }) => {
                setTrabajadores(data)
            })
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/tareas', {
            onSuccess() {

            }
        })
    }

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <LocalizationProvider dateAdapter={AdapterDayjs}>

                <SelectUser
                    label="Responsable" users={trabajadores}
                    onChange={(v) => setData('responsable', v ? v.id : null)} />

                <StyledTextField
                    label="Descripcion"
                    variant="filled"
                    value={data.descripcion}
                    onChange={(e) => setData('descripcion', e.target.value)}
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
                    onChange={(v) => setData('fecha_cumplimiento', v)}
                />

                <SelectUser label="Participantes" multiple users={trabajadores} />

                <Button type="submit" sx={{ mt: 3 }} variant="contained">Crear</Button>
            </LocalizationProvider>
        </Box>
    )
}
