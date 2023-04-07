import React from 'react'

import { useEffect , useState } from 'react'

import { Pagination } from '@mui/material'
import {Stack ,Box ,Typography} from '@mui/material'

import {exersiceOptions , fetchData} from '../utility/fetchData'
import ExerciseCard from './ExerciseCard'

import Loader from './Loader'

const Exercises = ({exercises , setExersices , bodyPart , setBodyPart} ) => {

  //FOR PAGINATION
  const [currentPage ,setCurrentPage] =useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() =>{
    const fetchExercisesData = async() =>{
      let exersiceData =[];

      if(bodyPart == 'all'){
        exersiceData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises`,exersiceOptions);
      }else{
        exersiceData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/${bodyPart}`,exersiceOptions);
      }

      setExersices(exersiceData);
      //console.log(exersiceData)
    }

    fetchExercisesData();
  },[bodyPart])

    // Pagination

    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

    const currentExercises = exercises.slice(indexOfFirstExercise , indexOfLastExercise);

    

    const paginate = (event, value) => {
      setCurrentPage(value);
  
      window.scrollTo({ top: 1800, behavior: 'smooth' });
    };
  
    if (!currentExercises.length) return <Loader />;

  return (
    <Box id='exercises'
    sx={{mt:{lg:'110px'}}}
    mt='50px'
    p='20px'
    >
      <Typography variant='h5'
      mb='60px'>
        Showing Exercises
      </Typography>

      <Stack direction='row' sx={{gap:{lg:'110px' , xs:'50px'}}}
      flexWrap='wrap' justifyContent='center' >
        {
          currentExercises.map((exercise ,index)=>(
            <ExerciseCard key={index} exercise={exercise}/>
          ))
        }
      </Stack>
      <Stack mt='100px' alignItems='center'>
        {exercises.length > 9 && (
          <Pagination 
          color='standard'
          shape='rounded'
          defaultPage={1}
          count={Math.ceil(exercises.length / exercisesPerPage)}
          page={currentPage}
          onChange={paginate}
          size='large'
          />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises