import React from 'react'

import {Link} from 'react-router-dom'

import {Stack , Typography} from '@mui/material'

const Navbar = () => {
  return (
    <Stack
    direction='row'
    justifyContent='flex-start'
    alignItems='center'
    sx={{gap : {
      sm:'122px' ,xs :'20px'
    } , my:{sm:'20px' , xs :'20px'}}}
    p='10px'
    >
      <Link to='/' > 
        <Typography fontSize={{sm:'30px' , xs:'20px'}} style={{fontWeight:'600',}} className='logo'
        
        >
        GymPool
        </Typography>
      </Link>
      <Stack
      direction='row'
      ml={{lg:'-80px' , sm:'-60px' ,xs:'0px'}}
      gap={{lg:'100px',sm:'40px', xs:'20px'}}
      fontSize={{sm:'18px' , xs:'15px'}}>
        <Link to='/'>
          <span className='nav-link'>Home</span>
        </Link>
        <a href='#exercises'>
        <span className='nav-link'>Exercises</span>
        </a>
      </Stack>
    </Stack>
  )
}

export default Navbar