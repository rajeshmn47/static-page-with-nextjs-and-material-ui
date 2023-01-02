import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Button, Grid, Rating, Typography } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import styled from '@emotion/styled'
import { useFormik } from 'formik';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Navigation from '../components/Navigation'

const inter = Inter({ subsets: ['latin'] })

const Container = styled.div`
background-color:#ffffff;
emptyStar: {
    color: "red"
  }
`
const Right = styled.div`
position:relative;
img{
  display:block;
  width:100%;
  height:500px;
  object-fit:cover;
}
h1{
  white-space:nowrap;
  font-size:14px;
}
`;

const Details = styled.div`
position:absolute;
background-color:#ffffff;
width: 400px;
border-radius: 10px;
top: 50%;
left: -2px;
box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
`
const DetailsA=styled.div`
position:relative;
height:100%;
padding: 17px 30px;
::after{
    content:'';
    position: absolute;
    bottom: 0;
    width: 70%;
    height: 4px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  background-color:#d92128;
}
p{
  margin:0;
  font-size:14px;
  color:#222;
  letter-spacing: 0.03071em;
}
h6{
  color: #00008C;
  margin: 0;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.00938em;
}
.MuiGrid-root{
  margin-bottom:15px 0 !important;
  
}
`
const BorderDetails=styled.div`
height:2px;
background-color:#dddddd;
margin: 5px 0;
`
const RightBorder= styled.div`
height: 3px;
width: 100%;
background: #d92128;
`

const LeftBorder= styled.div`
height:3px;
width: 100%;
background: #00008c;
`
const Left = styled.div`
  padding: 30px 30px;
  h1,h3{
    color: #00008c;
    font-family:"Montserrat";
  }
  p{
    letter-spacing: 0.03071em;
    color:#222;
    margin:15px 0;
  }
  label{
    color:#DA2128 !important;
  
  }
`

const NavigationContainer=styled.div`
  margin:30px 25px;
`

const Links = styled.div`
  display:flex;
  margin:40px 0;
  a{
    color:blue;
  }
`

export default function Home() {
  return (
    <>
      <Container>

        <Grid container >
          <Grid item lg={7}>
            <Left>
              <Links>
            <a>Home</a>
            <KeyboardArrowRightIcon/>
<a>Executive Education Courses</a>
<KeyboardArrowRightIcon/>
Logistics Course-99
</Links>
<Typography variant='h1'>
  Logistics Course-1
</Typography>
<Typography   variant='body2'>
The Senior Management Programme (SMP) is IIM Calcutta’s longest-running, flagship management 
development 
programme running continuously for the last 19 years
</Typography>
<p>Class Timings :

Sunday 9.00 AM - 12.00 PM</p>
<div>
<Rating name="size-large" defaultValue={2} size="large"/>
</div>

<Button style={{backgroundColor:'#DA2128',color:'#ffffff',width:'350px'
,textTransform:'capitalize',padding: '12px 0',margin: '10px 0'}}>
  Enroll Now
</Button>
<p>
Refer & get ₹ 1500.
<a style={{color:'blue'}}> Refer Now</a>

</p>
</Left>
          </Grid>
          <Grid item lg={5}>
            <Right>
            <img src='https://timesproweb-static-backend-dev.s3.amazonaws.com/Rectangle_53_22_c2f22929c9.png'
  alt=''/>
 <Details>
  
  <DetailsA>

<Grid container spacing={2} alignItems='center'>
  <Grid item lg={6}>
<Typography   variant='body2'>
  Application Deadline :
</Typography>

  </Grid>
  <Grid item lg={6}>
  <Typography variant='subtitle1'>
  Nov 23rd , 2022
</Typography>
    </Grid>
  
</Grid>
<BorderDetails/>
<Grid container  spacing={2} alignItems='center'>
  <Grid item lg={6}>
  <Typography   variant='body2'>
  Course Fee :
</Typography>

  </Grid>
  <Grid item lg={6}>
  <Typography variant='subtitle1'>
  ₹ 35,000 + Taxes
</Typography>
    </Grid>

</Grid>
<BorderDetails/>
<Grid container  spacing={2} alignItems='center'>
  <Grid item lg={6}>
  <Typography   variant='body2'>
  Duration :
</Typography>

  </Grid>
  <Grid item lg={6}>
  <Typography variant='subtitle1'>
  3
</Typography>
    </Grid>
  
</Grid>
</DetailsA>
 </Details>
 </Right>
      </Grid>
        </Grid>

        <Grid container>
          <Grid item lg={6}>
<LeftBorder/>
          </Grid>
          <Grid item lg={6}>
            <RightBorder>
              </RightBorder>
            </Grid>
        </Grid>
   
      <Grid container item lg={12}>
        <NavigationContainer>
        <Navigation/>
        </NavigationContainer>
    
      </Grid>
      </Container>
    </>
  )
}
