import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import NuevaTareaForm from "./partials/NuevaTareaForm";
import { Box, Grid } from "@mui/material";

export default function NuevaTarea({ auth }) {
    const title = "Crear Tarea"

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={title}
        >
            <Head title={title} />

            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <NuevaTareaForm/>
            </Box>

        </AuthenticatedLayout>
    )
}
