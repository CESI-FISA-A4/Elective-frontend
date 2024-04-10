import { Card, CardContent, Typography } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
export default function MonitoringCard({ name, address, port, state, endPoint }) {
  return (
    <Card className='monitoring F-now-j-b'>
      <CardContent className='content'>
        <Typography gutterBottom variant="h5" component="div">
          Monitoring de {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          endpoint : {endPoint}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          adresse : {address}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          port : {port}
        </Typography>
      </CardContent>
      <CardContent className='content'>
        {state ? <CheckIcon/> : <CloseIcon/>}
      </CardContent>
    </Card>
  );
}