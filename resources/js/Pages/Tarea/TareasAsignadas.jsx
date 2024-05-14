import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { MoreVert } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import { Avatar, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Menu, MenuItem, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';


const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 4px 4px -3px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));

export default function TarasAsignadas({ auth }) {
    const [tareas, setTareas] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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
                    <ListItem key={index} alignItems='flex-start' sx={{
                        ":hover": { boxShadow: 'rgba(0, 0, 0, 0.5) 0px 4px 10px -3px' },
                        transition: "0.5s",
                        '& .MuiListItemSecondaryAction-root': {
                            top: '22%'
                        }
                    }}
                        secondaryAction={
                            <React.Fragment>
                                <IconButton onClick={handleClick}>
                                    <MoreVert />
                                </IconButton>
                                <StyledMenu
                                    id="demo-customized-menu"
                                    MenuListProps={{
                                        'aria-labelledby': 'demo-customized-button',
                                    }}
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose} disableRipple>
                                        <EditIcon />
                                        Editar
                                    </MenuItem>
                                    <MenuItem onClick={handleClose} disableRipple>
                                        <FileCopyIcon />
                                        Detalles
                                    </MenuItem>
                                    <Divider sx={{ my: 0.5 }} />
                                    <MenuItem onClick={handleClose} disableRipple>
                                        <DeleteIcon />
                                        Eliminar
                                    </MenuItem>
                                </StyledMenu>
                            </React.Fragment>
                        }
                    >
                        <Grid container direction='row'>
                            <Grid item xs={0} className='sm:block hidden'>
                                <ListItemAvatar>
                                    <Avatar />
                                </ListItemAvatar>
                            </Grid>
                            <Grid item xs container columns={3} direction="row">
                                <Grid item xs={3}>
                                    <ListItemText
                                        primary={tarea.responsable.name}
                                        secondary={tarea.descripcion}
                                    />
                                </Grid>
                                <Grid item container direction="row" justifyContent="space-between" >
                                    <Grid item>
                                        <ListItemText
                                            secondaryTypographyProps={{ variant: 'body2', component: 'span', fontWeight: 700 }}
                                            secondary={"creada: "+(new Date).toDateString()}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <ListItemText
                                            secondaryTypographyProps={{ variant: 'body2', fontWeight: 700 }}
                                            secondary={"a cumplir el: "+(new Date(tarea.fecha_cumplimiento)).toLocaleString()}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </ListItem>
                ))}

            </List>
        </AuthenticatedLayout>
    );
}
