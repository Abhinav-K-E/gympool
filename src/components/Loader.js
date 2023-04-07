import React from 'react'
import {Stack} from '@mui/material'
import {Bars} from 'react-loader-spinner'

const Loader = () => {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center" width="100%">
        <Bars
          height="80"
          width="80"
          color="#D37470"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
    </Stack>
  )
}

export default Loader