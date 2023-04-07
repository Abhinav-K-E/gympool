import React from 'react'

import {Box , Stack ,Typography ,Button} from '@mui/material'

import HerroBannerImg from '../assets/images/main.png'

const HeroBanner = () => {
  return (
    <Box sx={{
        mt:{lg :'100px' , xs:'70px'},
    }} position='relative' p='20px'
    
    >
        <Stack direction='row'
        alignContent='center'
        justifyContent='space-around'
        gap='60px'
        className='hero-txt'
        >
        <Stack>
        <Typography color='#ff2625'
        fontSize='26px' font-fontWeight='600'>
            Fitness Club
        </Typography>
        <Typography fontWeight='700'
        sx={{fontSize:{ lg:'44px' ,xs:'40px'}}}
        mb='24px' mt='20px'>
            Sweat ,Simle <br>
            </br>
            and Repeat
        </Typography>
        <Typography mb='20px' fontSize='20px' lineHeight='40px'>
            Check out the most effective exersices
        </Typography>

        <a  href='#exercises' className='hero-btn'>
            Explore Exercises
        </a>
        </Stack>
        

        <img src={HerroBannerImg} className='hero-banner-img'/>
        </Stack>
        {/* <Typography fontWeight='600'
        color='#ff2625'
        fontSize='200px'
        sx={{
            opacity:0.1,
            display:{lg:'block' , xs:'none'}
        }}
        mt='30px'>
            Exercise
        </Typography> */}
        
    </Box>
  )
}

export default HeroBanner