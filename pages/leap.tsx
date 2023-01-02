import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Button, Grid, Rating, Typography, useTheme } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import styled from '@emotion/styled'
import { useFormik } from 'formik';
import Slider from '@mui/material/Slider';
import { useState } from 'react'

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
const DetailsA = styled.div`
position:relative;
height:100%;
padding: 12px 30px;
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
const BorderDetails = styled.div`
height:2px;
background-color:#dddddd;
margin: 3px 0;
`
const RightBorder = styled.div`
height: 3px;
width: 100%;
background: #d92128;
`

const LeftBorder = styled.div`
height:3px;
width: 100%;
background: #00008c;
`
const Left = styled.div`
  padding: 30px 30px;
  h3{
    color: #00008c;
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
const GridRoot = styled(Grid)`
margin: 50px auto;
text-align:center;
`;

const Heading = styled.div`
h1{
font-family:"Montserrat";
color:#00008c;
font-weight: 600;
font-size: 36px;
text-align: center;
width: 100%;
}
`;

const Calculator = styled.div`

width:100%;
margin: 50px 0;
display:flex;
${(props) => props.theme.breakpoints.down('sm')} {
flex-direction:column;
}

`;
const Main = styled.div`
margin:30px 0;
 background: rgba(217, 33, 40, 0.09);
padding: 15px 20px;
width:100%;
.MuiSlider-track{
  background:red; 
  border:none;
} 
.MuiSlider-thumb{
  background:red; 
  border:none;
} 
.MuiSlider-rail{
  background: currentColor;
  border:none;
} 
.MuiSlider-root{
color:red;
  border:none;
} 
`
const Cal = styled.div`
  background: red;
  padding: 20px 20px;
  margin:10px 10px;
  color:#ffffff;
  flex:1;
  p{
      font-family:'Open Sans';
      font-size:14px;
      font-weight:600;
  }
`;
const Top = styled.div`
`
const Middle = styled.div`
  
`
const Last = styled.div`
`
const SliderChanges = styled.div`
    display:flex;
    margin:30px 0;
h1{
    margin:1px 0;
    color:red;
    font-weight:700 !important;
    font-size:36px !important;
}
p{
    margin:1px 0;
    font-weight:600;
    font-size:14px;
}
`
const MonthlySalary = styled.div`
    flex:1;
`
const YearlySalary = styled.div`
      flex:1;
`
const MonthlyPayment = styled.div`
      flex:1;
`
const NoPayments = styled.div`
      flex:1;
`

const Eligibility= styled.div`
width:100%;
h1{
    font-family:"Montserrat";
    font-size:36px;
    color:#00008c;
    text-align:left;
}
`
const ElContainer = styled(Grid)`
width:100%;
text-align:left;
`;
const Title=styled.h1`
    font-family:"Montserrat";
    font-size:36px;
    color:#00008c;
    text-align:left;
`
const Description=styled.p`
text-align:left;
`

const SubTitle=styled.h3`
font-family:'Montserrat';
color: hsl(0,75%,60%);`

function calculateValue(value) {
    return 24000 * value;
}


export default function Home() {
    const [value, setValue] = useState(0)
    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

  

    const marks = [
     {
        value: 0,
        label: '₹0',
      },
   
      {
        value: 100,
        label: '₹24,00,000',
      },
 
]



    return (
        <>
            <GridRoot item container md={11} lg={11}>
                <Heading>
                    <h1>
                        Payment that you will make towards your LEAP in various earning scenarios
                    </h1></Heading>
                <Typography variant='body2'>
                    This calculator will show how ISA monthly payments work based on different possible annual incomes you may have.
                    For more information on the Timespro ISA please see our FAQs.
                </Typography>
                <Main>
                    <Calculator>

                        <Cal>

                            <Top>
                                <p>
                                    Income share percentage
                                </p>
                            </Top>
                            <Middle>
                                <h1>
                                    15.00%
                                </h1>
                            </Middle>
                            <Last>
                                <p>

                                    (Plus GST@ 18%)
                                </p>
                            </Last>
                        </Cal>
                        <Cal>

                            <Top>
                                <p>
                                    Required Payment
                                </p>
                            </Top>
                            <Middle>
                                <h1>
                                    24
                                </h1>
                            </Middle>
                            <Last>
                                <p>
                                    24
                                    Monthly Payment
                                </p>
                            </Last>
                        </Cal>
                        <Cal>

                            <Top>
                                <p>
                                    Payment Cap
                                </p>
                            </Top>
                            <Middle>
                                <h1>
                                    ₹2,00,000
                                </h1>
                            </Middle>
                            <Last>
                                <p>
                                    (Excluding 18% GST)
                                </p>
                            </Last>
                        </Cal>
                        <Cal>

                            <Top>
                                <p>
                                    Minimum Income
                                </p>
                            </Top>
                            <Middle>
                                <h1>

                                    ₹41,667
                                </h1>

                            </Middle>
                            <Last>
                                <p>
                                    Minimum Income
                                </p>
                            </Last>
                        </Cal>

                    </Calculator>
                    <SliderChanges>
                        <MonthlySalary>
                            <p>Potential Monthly Salary:</p>

                            <h1>
                                {(value*24000)/12}
                            </h1>
                        </MonthlySalary>
                        <YearlySalary>
                            <p>Potential Yearly Salary:</p>

                            <h1>{value*24000}</h1>
                        </YearlySalary>
                        <MonthlyPayment>
                            <p>Monthly Payment:</p>

                            <h1>{Math.round(((value*24000)/12)>40000&&
                            ((value*24000)/12)*(18.154/100))}</h1>
                        </MonthlyPayment>
                        <NoPayments>
                            <p>No. of monthly payments:</p>

                            <h1>
                            {Math.round(((value*24000)/12)>40000&&
                          236000/(((value*24000)/12)*(18.154/100))) }
                            </h1>
                        </NoPayments>
                    </SliderChanges>
                    <p style={{ textAlign: 'left' }}>
                        Choose Income Amount
                    </p>
                    <Slider

                        value={typeof value === 'number' ? value : 0}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                        marks={marks}
                        scale={calculateValue}

                        defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />

                </Main>
            <Eligibility>
                <h1>
                Eligibility Criteria
                </h1>
        <ElContainer item container md={11} lg={11}>
        <Grid item lg={6}>
                <SubTitle>
                Education Qualification
                </SubTitle>
                <p>
                B.E. / B.Tech - Computer Science / IT</p>
<p>
BSc CS / MSc CS</p>
<p>BSc IT / MSc IT</p>
<p>
BCA/MCA</p>
                </Grid>
                <Grid item lg={6}>
                <SubTitle>
                Who can apply from above mentioned streams?
                </SubTitle>
                <p>
                Final Year College Students - Expecting to graduate in 2022
                </p>
                <p>
                Fresher Graduates - Passed out in 2021</p>
                <p>
                Working Professionals - Graduated in 2019/2020</p>
                </Grid>
                </ElContainer>

            </Eligibility>
    <Title>Extra Content Section
    </Title>
    <Description>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</Description>
<Description>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</Description>
            </GridRoot>


        </>
    )
}
