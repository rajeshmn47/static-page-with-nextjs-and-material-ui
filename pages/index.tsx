import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Grid } from '@mui/material'
import styled from '@emotion/styled'

const inter = Inter({ subsets: ['latin'] })

const Right = styled.div`
position:relative;
img{
  display:block;
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
top: 65%;
left: 20%;
box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
`
const DetailsA=styled.div`
position:relative;
height:100%;
padding: 20px 15px;
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
export default function Home() {
  return (
    <>
      <div>

        <Grid container >
          <Grid item lg={6}>

          </Grid>
          <Grid item lg={6}>
            <Right>
            <img src="https://timesproweb-static-backend-dev.s3.amazonaws.com/Banner_42220975ce.png"
 alt=''/>
 <Details>
  <DetailsA>

<Grid container spacing={2}>
  <Grid item lg={6}>
<p>
  Application Deadline:
</p>

  </Grid>
  <Grid item lg={6}>
  <h5>
Jan 5th , 2023
</h5>
    </Grid>
  
</Grid>
<Grid container  spacing={2}>
  <Grid item lg={6}>
<p>
  Application Deadline:
</p>

  </Grid>
  <Grid item lg={6}>
  <h5>
Jan 5th , 2023
</h5>
    </Grid>
  
</Grid>
<Grid container  spacing={2}>
  <Grid item lg={6}>
<p>
  Application Deadline:
</p>

  </Grid>
  <Grid item lg={6}>
  <h5>
Jan 5th , 2023
</h5>
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
      </div>
    </>
  )
}
