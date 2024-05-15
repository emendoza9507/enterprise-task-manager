import React, { useEffect, useState } from 'react';
import { Avatar, Grid, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import MenuTarea from './MenuTarea';


export default function TareaItem({ tarea }) {

    return (
        <ListItem alignItems='flex-start' sx={{
            ":hover": { boxShadow: 'rgba(0, 0, 0, 0.5) 0px 4px 10px -3px' },
            transition: "0.5s",
            '& .MuiListItemSecondaryAction-root': {
                top: '22%'
            }
        }}
            secondaryAction={<MenuTarea tarea={tarea} />}
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
                                secondary={"creada: " + (new Date).toDateString()}
                            />
                        </Grid>
                        <Grid item>
                            <ListItemText
                                secondaryTypographyProps={{ variant: 'body2', fontWeight: 700 }}
                                secondary={"a cumplir el: " + (new Date(tarea.fecha_cumplimiento)).toLocaleString()}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </ListItem>
    )
}
