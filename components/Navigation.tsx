import styled from '@emotion/styled';
import { Grid, Slider, Tab, Tabs, Typography } from '@mui/material';
import React from 'react';
import { Link, Element } from 'react-scroll';

const tabs = [
  {
    name: 'Overview',
    value: 'overview',
  },
  {
    name: 'Content',
    value: 'content',

  },
  {
    name: 'Highlights',
    value: 'highlights'
  },
  {
    name: 'Details',
    value: 'details',

  },
  {
    name: 'Director',
    value: 'directors',

  },
  {
    name: 'Certificate',
    value: 'certificate',

  },
  {
    name: 'How It Works',
    value: 'how-it-works',

  },
  {
    name: 'Date & Fees',
    value: 'date-fees',

  },
  {
    name: 'FAQ’s',
    value: 'faq',
  },
  // {
  //   name: 'Related Courses',
  //   value: 'related-courses',
  //   showItem: relatedCourses.length >= 1,
  // },
];

const StyledTabs = styled(Tabs)`
  position: sticky;
  top: 0;
  z-index: 3;
  height: 70px;
  background: #fdf8f8;
  border-radius: 4px;
  width: 100%;
  .MuiTabs-flexContainer {
    height: 100%;
    justify-content: space-between;
  }
  .Mui-selected {
    color: ${(props) => props.theme.palette.colors.blue} !important;
  }
  .MuiTabs-indicator {
    background-color: ${(props) => props.theme.palette.colors.dark_blue};
  }
  .MuiTab-root {
    text-transform: none;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    height: 100%;
    font-family: ${(props) => props.theme.palette.fonts.secondary};
  }
  .Mui-disabled {
    display: none;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    display: none;
  }
`;

const StyledTab = styled(Tab)`
  ${(props) =>
    props.active && {
      color: props.theme.palette.colors.dark_blue,
    }}
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
font-family:'Open Sans';
color: hsl(0,75%,60%);`

const TabsContainer=styled(Grid)`
  p{
    font-size:14px;
    font-family:'Open Sans';
  }
`

const EnrollNow=styled.div`
  background-color:#00008c;
  color:#ffffff;
  padding:30px 20px;
  border-radius:8px;
  position:sticky;
  top:10px;
`;
const Consult = styled.div`
margin:20px 0;
width:100%;
  padding:20px 20px;
  box-shadow:0px 0px 12px rgba(0, 0, 0, 0.17);
  h1{
    font-size:18px;
  }
`
const RequestButton = styled.button`
background-color:#DA2128;
color:#FFFFFF;
border:none;
padding:20px 50px;
margin:0 auto;
border-radius:5px;
`
const CourseSubNavigation = () => {
  // console.log({tabs})
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <TabsContainer container spacing={2}>
      <Grid item lg={8.5}>
      <StyledTabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {tabs
          .map((tab, index) => (
            <Link
              key={index}
              activeClass="Linkactive"
              to={tab.value}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onSetActive={() => {
                setValue(index);
              }}
            >
              <StyledTab label={tab.name} active={value === index} />
            </Link>
          ))}
      </StyledTabs>
      <div>
        <Element name="overview" className="overview">
        <Title>overview</Title>
          <Slider />
        </Element>


     


        <Element name="content" className="content">
        <Title>content</Title>
          <Slider />
          <Slider /> <Slider /> <Slider /> <Slider /> <Slider /> <Slider />
        </Element>


        <Element name="highlights" className="highlights">
          <Title>highlights</Title>
          <Slider /> <Slider /> <Slider /> <Slider />
        </Element>


        <Element name="details" className="details">
  <Title>
    Details
  </Title>
  <SubTitle>
PEDAGOGY
</SubTitle>
<p>
The teaching approach will be highly interactive and deploy 
diverse pedagogical tools and techniques most suitable for each 
module such as cases, role-plays, simulations, games, and lectures. 
To provide greater industry insights, practitioners would also be 
invited to share their experiences.
</p>
<SubTitle>
KEY LEARNING OBJECTIVES
</SubTitle>
<p>
After completing this programme, the participants should be able to:

    Gain broader knowledge of government, macroeconomic, legal, and analytical aspects of business decision-making.
    Acquire operational excellence by enhancing their existing functional and cross-functional competencies.
    Have a strategic mindset and transform into strategic leaders
    </p>
<SubTitle>
PROGRAMME DELIVERY
</SubTitle>
<p>
Sessions will be conducted via a state-of-the-art Interactive Learning (IL) platform and delivered in Direct-to-Device (D2D) mode that can be accessed by learners on their Desktop, Laptop, Tablet, or Smartphone. Participants will be provided reading materials, etc., for each course. They may also interact with the concerned faculty through e-mails/chat mode.
</p>
<SubTitle>
WHO SHOULD ATTEND
</SubTitle>
<p>
    Senior and middle-level managers with more than ten years of work experience
    Managers newly taking on (or likely to take on) senior management responsibilities
    Senior functional managers moving to general management roles
    Practising senior managers who wish to update themselves on recent management thoughts
    </p>
<SubTitle>SELIGIBILITY CRITERIA</SubTitle>
<p>
    Bachelor’s degree (10+2+3 or 10+2+4) or 2 years’ Master’s degree or its equivalent from institutions or Universities recognised by UGC/AICTE/AIU/DEB
    Minimum 50% aggregate marks of all years in either bachelor’s or master’s degree or its equivalent
    Candidates should be working & should have a minimum of 10 years of work experience* post completion of qualifying education
    Final selection will be done by IIM Calcutta

*Internships and Training Experiences will not be considered as full-time work-experience
</p>
<SubTitle>
ADMISSION CRITERIA
</SubTitle>
<p>
The selection will be based on a candidate’s overall profile evaluation, subject to meeting eligibility criteria, and their interview with the programme directors.
</p> </Element>


        <Element name="directors" className="directors">
        <Title>directors</Title>
          <Slider />   <Slider />   <Slider />   <Slider />   <Slider />
        </Element>


        <Element name="certificate" className="certificate">
        <Title>certificate</Title>
          <Slider /> <Slider /> <Slider /> <Slider />
          <Slider /> <Slider /> <Slider /> <Slider />
        </Element>


        <Element name="how-it-works" className="how-it-works">
        <Title>how it works</Title>
          <Slider /> <Slider /> <Slider /> <Slider />
          <Slider /> <Slider /> <Slider /> <Slider />
          <Slider /> <Slider /> <Slider /> <Slider />
        </Element>


        <Element name="date-fees" className="date-fees">
        <Title>date</Title>
          <Slider />
          <Slider /> <Slider /> <Slider /> <Slider />
          <Slider /> <Slider /> <Slider /> <Slider />
          <Slider /> <Slider /> <Slider /> <Slider />          <Slider /> <Slider /> <Slider /> <Slider />
          <Slider /> <Slider /> <Slider /> <Slider />
        </Element>
      </div>
      </Grid>
      <Grid item lg={3.5}>
        <EnrollNow>

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

<Grid container  spacing={2} alignItems='center'>

  <Grid item lg={12}>
  <Typography variant='body2'>
  Next Batch starts 10 days ago! 
  Get started now to get early bird pricing.
</Typography>
    </Grid>
  
</Grid>
        </EnrollNow>
        <Consult>
          <h1>
          Need to consult an Expert ?
          </h1>
          <p>
          Have queries or need guidance? 
          Out experts can help you decide.
          </p>
          <RequestButton>
            Request a call
          </RequestButton>
        </Consult>
      </Grid>
      </TabsContainer>
  );
};

export default CourseSubNavigation;


