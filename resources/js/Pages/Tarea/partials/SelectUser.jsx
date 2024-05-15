import { styled, alpha } from '@mui/material/styles';
import { Autocomplete, Avatar, Box, TextField } from "@mui/material";

const StyledTextField = styled(({key, ...props}) => (
    <TextField
        fullWidth
        variant='filled'
        sx={{my: 3, maxWidth: 500}}
        {...props}
    />
))(({theme}) => ({
    '& > input': { boxShadow: 'none' }
}))

export default function SelectUser({ users, label, onChange, multiple }) {


    return (
        <Autocomplete
            fullWidth
            variant="filled"
            options={users}
            multiple={multiple}
            autoHighlight
            getOptionLabel={(option) => option.name}
            getOptionKey={(option) => option.id}
            onChange={(_, v) => onChange && onChange(v)}
            renderOption={({key, ...props}, option) => (
                <Box key={key} component="li" sx={{ '& > .MuiAvatar-root': { mr: 2, flexShrink: 0 } }} {...props}>
                    <Avatar/>
                    {option.name}
                </Box>
            )}
            renderInput={({key, ...params}) => (
                <StyledTextField
                    {...params}
                    label={label}
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                />
            )}
        />
    )
}
