import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}) {
    const INI_URL=
    "https://images.unsplash.com/photo-1572687413625-cb2c4d9c4d32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
     
    const HOT_URL = "https://images.unsplash.com/photo-1493936734716-77ba6da66365?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1425100599170-85ec4f00a6ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = "https://media.istockphoto.com/id/958956522/photo/rain-drops-on-window-glass-outside-texture-background-water-of-wonderful-heavy-rainy-day-with.webp?b=1&s=170667a&w=0&k=20&c=LHQokwedGmNemXoZXR3FgNj1zzMGhNsXB_QbswtUGPk=";


return (
    <div className="InfoBox flex justify-center">
    <div className= 'cardContainer'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? RAIN_URL :info.temp>15 ? HOT_URL : COLD_URL }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity>80 ? <ThunderstormIcon/> :info.temp>15 ? <WbSunnyIcon/> : <AcUnitIcon/> }
        </Typography>
       <Typography variant="body2" color="text.secondary" component="span">       {/*remember to avoid error --> component "sapn" */}
        <p>Temperature = {info.temp}&deg;C</p>               
        <p>Humidity = {info.humidity}</p> 
        <p>Min Temp = {info.tempMin}&deg;C</p>
        <p>Max Temp = {info.tempMax}&deg;C</p>
        <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;</p>
        </Typography>
      </CardContent>
   
    </Card>
    </div>
    </div>

)
};