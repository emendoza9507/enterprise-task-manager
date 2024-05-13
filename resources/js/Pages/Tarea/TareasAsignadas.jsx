import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { MoreVert } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
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
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
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
    const [loading , setLoading] = useState(false);

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
            .then(({data}) => {
                setTareas(data.data)
            })
            .finally(() => {
                setLoading(false)
            })

        return () => {
            active = false
        }
    },[]);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={"Tareas Asignadas"}
        >
            <Head title="Asiganadas" />

            <List>
                {Array.from({length: 10}).map((_, index) => (
                    <ListItem key={index} alignItems='flex-start'
                        secondaryAction={
                            <React.Fragment>
                                <IconButton onClick={handleClick}>
                                    <MoreVert/>
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
                                    Edit
                                    </MenuItem>
                                    <MenuItem onClick={handleClose} disableRipple>
                                    <FileCopyIcon />
                                    Duplicate
                                    </MenuItem>
                                    <Divider sx={{ my: 0.5 }} />
                                    <MenuItem onClick={handleClose} disableRipple>
                                    <ArchiveIcon />
                                    Archive
                                    </MenuItem>
                                    <MenuItem onClick={handleClose} disableRipple>
                                    <MoreHorizIcon />
                                    More
                                    </MenuItem>
                                </StyledMenu>
                            </React.Fragment>
                        }
                    >
                        <Grid container columns={4} direction='row'>
                            <Grid item xs={0.3} sx={{minWidth: 45}}>
                                <ListItemAvatar>
                                    <Avatar  src='https://mui.com/static/images/avatar/3.jpg'/>
                                </ListItemAvatar>
                            </Grid>
                            <Grid item xs={3}>
                                <ListItemText
                                    primary="Summer BBQ"
                                    secondary={
                                        "Wish I could come, but I'm out, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda facere repellendus veniam sunt quis natus, nemo aperiam porro officia praesentium consequatur delectus placeat, deleniti dolor molestiae quidem ea itaque! of town this…"
                                    }
                                />
                            </Grid>
                            <Grid item xs>
                                <ListItemText
                                    primaryTypographyProps={{variant: 'body2', fontWeight: 700}}
                                    primary="ETA:"
                                    secondary={(new Date).toDateString()}
                                />
                            </Grid>
                        </Grid>
                    </ListItem>
                ))}

            </List>
        </AuthenticatedLayout>
    );
}
