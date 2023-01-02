import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Grid } from '@mui/material'
import styled from '@emotion/styled'
import { object, string } from 'yup';
import { useFormik } from 'formik';

const Input=styled.input` 
width:100%;
padding:10px 12px;
border-radius:5px;
border:1px solid #dddddd;
`;

const Select = styled.select`
    width:100%;
    height:40px;
`

const Container= styled.div`
background-color:#ffffff;
height:100vh;
width:100vw;
display:flex;
justify-content:center;
align-items:center;
padding: 200px 250px;
`
const InputWrap=styled.div`
display:flex;
flex-direction:column;
input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
`
const InputLabel=styled.label`
font-size: 14px;
font-weight: 500;
font-family:"Open Sans";
`

export default function FormPage() {
    const courseOptions = [
        {
          label: 'Course 1',
          value: '1',
        },
        {
          label: 'Course 2',
          value: '2',
        },
        {
          label: 'Course 3',
          value: '3',
        },
        {
          label: 'Course 4',
          value: '4',
        },
      ];
    
      const cityOptions = [
        {
          label: 'Concern 1',
          value: '1',
        },
        {
          label: 'Concern 2',
          value: '2',
        },
        {
          label: 'Concern 3',
          value: '3',
        },
        {
          label: 'Concern 4',
          value: '4',
        },
      ];
      const [loading, setLoading] = useState(false);

      var namRregex = new RegExp('^[a-zA-Z]+$');
      const phoneRegex = new RegExp('^[0-9]{10}$');
    
      const validationSchema = object({
        name: string()
          .required('Name is required')
          .matches(namRregex, 'Name should be alphabets only'),
        phone: string()
          .required('Phone is required')
          .matches(phoneRegex, 'Phone should be 10 digits'),
        email: string().email().required(),
        course: string().required('Course is required'),
        typeOfConcern: string().required('Type of Concern is required'),
        message: string(),
      });
    
      const formik = useFormik({
        initialValues: {
          name: '',
          phone: '',
          email: '',
          state: '',
          city: '',
          message: '',
          legal: false,
          marketingConsent: false,
        },
        validationSchema,
        onSubmit: async (values) => {
          setLoading(true);
    
          console.log(values);
          setLoading(false);
          formik.resetForm()
        },
      });
  return (
    <>
<Container>
      <form>
        <Grid container spacing={2} >
        <Grid item lg={6}>
            <InputWrap>
            <InputLabel>
            Full Name
            </InputLabel>
         <Input 
             id="name"
             name="name"
             type="input"
           
             value={formik.values.name}
             onChange={formik.handleChange}/>
         </InputWrap>
        </Grid>
        <Grid item lg={6}>
         <Input/>
        </Grid>
        <Grid item lg={6}>
         <Select>
         <option value=""></option>
                {cityOptions.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
         </Select>
        </Grid>
        <Grid item lg={6}>
         <Select>
         <option value=""></option>
                {cityOptions.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
         </Select>
        </Grid>
        <Grid item lg={6}>
         <Input/>
        </Grid>
        <Grid item lg={6}>
         <Input/>
        </Grid>
        </Grid>
        </form>
        </Container>
    </>
  )
}
