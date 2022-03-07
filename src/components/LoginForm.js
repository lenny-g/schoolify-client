import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import {Link as RouterLink} from 'react-router-dom'




export const LoginForm = () =>{
    return  (
        <Box component="form" sx={{marginTop:8, display:"flex", flexDirection: "column", alignItems: "center"}}>
            <TextField margin="normal" id="email" label="Email" variant="outlined" name="email" autoFocus fullWidth/>
            <TextField margin="normal" id="password" label="Password" variant="outlined" name="password" type="password" autoFocus fullWidth/>
            <Button type="submit" variant="contained" sx={{mt:3, mb:2}}>Login</Button>
      <Link component={RouterLink} variant="body2" to="/sign-up" underline='none'>
        Dont have an account? Signup
      </Link>
        </Box>
    )

}