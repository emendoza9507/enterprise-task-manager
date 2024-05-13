import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function MisTareas({ auth, ...props }) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={"Mis Tareas"}
        >
            <Head title="Asiganadas" />

            <div>
                Mis Tareas
            </div>
        </AuthenticatedLayout>
    );
}
