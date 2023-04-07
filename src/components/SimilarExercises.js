import React from 'react'
import {Box , Stack, Typography} from '@mui/material'

import HorizontalScroller from './HorizontalScroller'

import Loader from './Loader'

const SimilarExercises = ({targetMuscle,equipmentDetail}) => {
  return (
    <Box sx={{mt:{lg:'100px' , xs:'0'}}}>
      <Typography variant='h4' mb='40px' p='20px'>
        Exercises that target the same <span style={{color:'#ff2526' , fontWeight:'400'}}>muscle group</span>
      </Typography>
      <Stack direction='row' sx={{p:'2' , position:'relative'}}>
        {
          targetMuscle.length ? <HorizontalScroller data={targetMuscle}/> 
        : <Loader />
        }
      </Stack>

      <Typography variant='h4' mb='40px' p='20px'>
        Exercises that use the same <span style={{color:'#ff2526' , fontWeight:'400'}}>equipment</span>
      </Typography>

      <Stack direction='row' sx={{p:'2' , position:'relative'}}>
        {
          equipmentDetail.length ? <HorizontalScroller data={equipmentDetail}/> 
        : <Loader />
        }
      </Stack>
    </Box>
  )
}

export default SimilarExercises