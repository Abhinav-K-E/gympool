import React from 'react'

import { Box ,Stack ,Typography} from '@mui/material'

const Footer = () => {
  return (
    <Box mt='60px' p='10px'>
        <Stack direction='row' alignItems='center' justifyContent='center'>
          <a style={{marginBottom:'20px'}} href='https://abhinavke.dev' className='logo'>
            GymPool developed by abhinavke.dev
          </a>
        </Stack>
    </Box>
  )
}

export default Footer