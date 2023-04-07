import React from 'react'
import {Box , Stack , Typography, capitalize} from '@mui/material'

const ExerciseVideos = ({youtubeVideos , name}) => {

  console.log(youtubeVideos);

  if(!youtubeVideos.length) return(
    'Loding....'
  )

  return (
    <Box sx={{marginTop:{lg:'100px', xs:'20px'}}} p='20px'>
      <Typography variant='h4' mb='34px'>
        Watch <span style={{color:'#ff2625' , textTransform:'capitalize'}}>{name}</span> exercise videos
      </Typography>
      <Stack justifyContent='flex-start' alignItems='center'
      flexWrap='wrap' 
      sx={{
        flexDirection:{lg:'row'},
        gap:{ lg: '50px' , xs :'0'}
      }}
      >
        {
          youtubeVideos?.slice(0,3)?.map((item , index) =>(
            <a key={index}
            className='exercise-video'
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target='_blank'
            rel='noreferrer'
            >
              <img src={item.video.thumbnails[0].url} alt={item.video.title} />
              <Box>
                <Typography variant='h6' color='#000'>
                  {item.video.title}
                </Typography>
                <Typography variant='p' color='#000'>
                  {item.video.channelName}
                </Typography>
              </Box>
            </a>
          ))
        }
      </Stack>
    </Box>
  )
}

export default ExerciseVideos