import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Link as RouterLink} from 'react-router-dom'
import { useForm } from 'react-hook-form';
import * as React from 'react';
import { Grid } from '@mui/material';




export const SignupForm = () =>{
    const [title, setTitle] = React.useState('');
    const [relationship, setRelationship] = React.useState('');
    const {register, formState: {errors}, handleSubmit} = useForm();

    const onSubmit = () => {

        console.log("form submitted");
    };

    const handleChange = (event) => {
        setTitle(event.target.value);
        setRelationship(event.target.value);
      };

    const ValidateForm = (formErrors) =>{
        return !!formErrors.email || !!formErrors.password || !!formErrors.title;
    }

    return  (
    <Box component="form" sx={{marginTop:8, display:"flex", flexDirection: "row", alignItems: "center"}} spacing={2} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
    <Grid item xs={12} md={6}>
        <FormControl sx={{ width: 420 }} error={!!errors.title}>
        <InputLabel id="title">Title</InputLabel>
        <Select
          labelId="title"
          id="title"
          value={title}
          onChange={handleChange}
          label="Title"
        >
          <MenuItem value="mr">Mr</MenuItem>
          <MenuItem value="mrs">Mrs</MenuItem>
          <MenuItem value="miss">Miss</MenuItem>
          <MenuItem value="ms">Ms</MenuItem>
          <MenuItem value="dr">Dr</MenuItem>
        </Select>
      </FormControl>
        <TextField margin="normal" id="firstName" label="First Name" variant="outlined" name="firstNAme" autoFocus fullWidth {...register("firstName", {required: true})} error={!!errors.firstName}/>
        <TextField margin="normal" id="lastName" label="Last Name" variant="outlined" name="lastName" autoFocus fullWidth {...register("lastName", {required: true})} error={!!errors.lastName}/>
        <TextField margin="normal" id="email" label="Email" variant="outlined" name="email" autoFocus fullWidth {...register("email", {required: true})} error={!!errors.email}/>
        <TextField margin="normal" id="password" label="Password" variant="outlined" name="password" type="password" autoFocus fullWidth {...register("password", {required: true})} error={!!errors.password}/>
        <TextField margin="normal" id="confirmPassword" label="Confirm Password" variant="outlined" name="confirmPassword" type="confirmPassword" autoFocus fullWidth {...register("confirmPassword", {required: true})} error={!!errors.confirmPassword}/>
    </Grid>

    <Grid item xs={12} md={6}>
        <FormControl sx={{  width: 420 }} error={!!errors.relationship}>
        <InputLabel id="relationship">Relationship</InputLabel>
        <Select
          labelId="relationship"
          id="relationship"
          value={relationship}
          onChange={handleChange}
          fullWidth
          label="Relationship"
        >
          <MenuItem value="mother">Mother</MenuItem>
          <MenuItem value="father">Father</MenuItem>
          <MenuItem value="guardian">Guardian</MenuItem>
        </Select>
      </FormControl>
        <TextField margin="normal" id="houseNumber" label="House Number" variant="outlined" name="houseNumber" autoFocus fullWidth {...register("houseNumber", {required: true})} error={!!errors.houseNumber}/>
        <TextField margin="normal" id="Street" label="Street Name" variant="outlined" name="Street" autoFocus fullWidth {...register("Street", {required: true})} error={!!errors.Street}/>
        <TextField margin="normal" id="city" label="City" variant="outlined" name="city" autoFocus fullWidth {...register("city", {required: true})} error={!!errors.city}/>
        <TextField margin="normal" id="postCode" label="Post Code" variant="outlined" name="postCode" autoFocus fullWidth {...register("postCode", {required: true})} error={!!errors.postCode}/>
        <TextField margin="normal" id="phoneNumber" label="Phone Number" variant="outlined" name="phoneNumber" autoFocus fullWidth {...register("phoneNumber", {required: true})} error={!!errors.phoneNumber}/>
    </Grid>

    <Grid item xs={12} md={12} sx={{textAlign: "center"}}>
        <Button type="submit" variant="contained" sx={{mt:3, mb:2}}>Next</Button>
        </Grid>
        <Grid item xs={12} md={12} sx={{textAlign: "center"}}>
        <Link component={RouterLink} variant="body2" to="/login" underline='none'>
            Already have a account? Login
        </Link>
        </Grid>
        <Grid item xs={12} md={12} sx={{textAlign: "center"}}>
        { ValidateForm(errors) && (<Typography variant="subtitle2" gutterBottom component="div" sx={{mt: 2, color: "#d32f2f"}}>
        Form incomplete. All fields are required*
      </Typography>)}
      </Grid>
      </Grid>
    </Box>
    )

};