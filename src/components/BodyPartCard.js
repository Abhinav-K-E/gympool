import React from 'react'

import{Stack , Typography} from '@mui/material';
import Icon from '../assets/icons/01gym.png'

const BodyPartCard = ({item ,setBodyPart , bodyPart}) => {
  return (
    <Stack
    type='button'
    alignItems='center'
    justifyContent='center'
    className='bodyPart-card'
    style={{borderRadius:'10px'}}
    sx={
        bodyPart === item ? {
            borderTop: '4px solid #ff2625',
            backgroundColor:'#fff',
            borderBottomLeftRadius:'20px',
            width:'240px',
            height:'280px',
            gap:'48px',
            cursor:'pointer'
        } : {
            backgroundColor:'#fff',
            borderBottomLeftRadius:'20px',
            width:'270px',
            height:'280px',
            gap:'40px',
            cursor:'pointer'
        }
    }

    onClick={() =>{
        setBodyPart(item);
        // scroll into exersice down
        window.scrollTo({top:1800, left:100 , behavior:'smooth'})
    }}

    >
        <img src={Icon} alt='Gym' style={{width:'300px' , height:'200px'}} />
        <p className='item-name-cat'>{item}</p>
    </Stack>
  )
}

export default BodyPartCard