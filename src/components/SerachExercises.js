import React from 'react'

import { useEffect , useState } from 'react';
import { Stack , Box ,Button ,Typography ,TextField} from '@mui/material'

import { exersiceOptions ,fetchData } from '../utility/fetchData';

//import HorizontalScroller from './HorizontalScroller';

const SerachExercises = ({search , setSearch, exercises , setExersices , setBodyPart , bodyPart}) => {

  // const[search , setSearch] = useState('');
  // const[exercises , setExersices] =useState([]);

  // display categories
  const[bodyParts , setBodyParts] = useState([]);

  useEffect(()=>{
    const fetchExercisesData = async()=>{
      const bodyPartData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPartList` ,exersiceOptions);

      setBodyParts(['all' ,...bodyPartData]);
    }

    fetchExercisesData();
  } ,[])

  const handleSearch = async () =>{
    if(search){
      const exersiceData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises`,exersiceOptions);

      const searchExerciseData = exersiceData.filter(
        (exersice) => exersice.name.toLowerCase().includes(search)
        || exersice.target.toLowerCase().includes(search)
        || exersice.bodyPart.toLowerCase().includes(search)
        || exersice.equipment.toLowerCase().includes(search) 
      )

      setExersices(searchExerciseData);

      // console.log(exersiceData);
      console.log(exercises);
    }
  }

  return (
    <Stack justifyContent='center' alignItems='center'
    p='20px' mt='36px'
    className='hero-txt'
    >
      <Typography fontWeight={700}
      textAlign='center'
      sx={{fontSize:{lg : '40px' , xs :'30px'}}}
      mb='50px'>
        Awesome Exercises You<br/>
        Should know
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField 
        sx={{
          input:{
            fontWeight:'600',
            border:'none',
            borderRadius:'10px',
          },
          width:{
            lg:'850px',
            md:'340px',
            xs:'200px'
          },
          backgroundColor:'#fff'
        }}
        style={{textAlign:'center'}}
        height='60px'
        onChange={(e)=>{setSearch(e.target.value.toLowerCase())}} 
        placeholder='Search'
        type='text'
        />
        <Button className='search-btn'
        sx={{
          backgroundColor:'#73C3D3',
          color:'#fff',
          width:{
            lg:'160px' , xs:'80px'
          },
          fontSixe:{lg:'20px' ,xs:'14px'},
          position:'absolute',
          right:0,
          height:'56px'
        }}
        
        onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      {/* <Box sx={{position:'relative' ,width:'100%' , p:'20px'}}>
          <HorizontalScroller data={bodyParts}
          search ={search} setSearch={setSearch}
          bodyPart = {bodyPart} setBodyPart={setBodyPart} isBodyParts={true}/>
      </Box> */}
    </Stack>
  )
}

export default SerachExercises