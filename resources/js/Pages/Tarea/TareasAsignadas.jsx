import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { Avatar, Grid, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MenuTarea from './partials/MenuTarea';
import TareaItem from './partials/TareaItem';


export default function TarasAsignadas({ auth }) {
    const [tareas, setTareas] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let active = true
        setLoading(loading)
        axios('/api/v1/tareas/asignadas')
            .then(({ data }) => {
                setTareas(data.data)
            })
            .finally(() => {
                setLoading(false)
            })

        return () => {
            active = false
        }
    }, []);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={"Tareas Asignadas"}
        >
            <Head title="Asiganadas" />

            <List>
                {tareas.map((tarea, index) => (
                    <TareaItem key={index} tarea={tarea}/>
                ))}
            </List>
        </AuthenticatedLayout>
    );
}
