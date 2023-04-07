import React from 'react'

import { useState } from 'react';
import {Box} from '@mui/material'

import SearchExercises from '../components/SerachExercises'
import Exercises from '../components/Exercises'
import HeroBanner from '../components/HeroBanner'


const Home = () => {

  const[bodyPart , setBodyPart] = useState('all');
  const[exercises , setExersices] =useState([]);

  const[search , setSearch] = useState('');

  console.log(bodyPart);

  return (
    <Box>
      <HeroBanner/>

      <SearchExercises 
      search={search}
      setSearch={setSearch}
      exercises ={exercises}
      setExersices={setExersices} 
      bodyPart={bodyPart} 
      setBodyPart={setBodyPart}/>

      <Exercises 
      search={search}
      setSearch={setSearch}
      setExersices={setExersices} 
      bodyPart={bodyPart} 
      setBodyPart={setBodyPart}
      exercises ={exercises}
      />

    </Box>
  )
}

export default Home