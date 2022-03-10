import { AppointmentForm } from "../components/AppointmentForm/AppointmentForm"
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


export const Appointment = () =>{
    return <Container component="main" maxWidth="md">
         <Typography variant="h3" gutterBottom component="div" sx={{textAlign:"center"}}>
        Appointments
      </Typography>
        <AppointmentForm/>
    </Container>
}