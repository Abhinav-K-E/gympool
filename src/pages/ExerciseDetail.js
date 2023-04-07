import React from 'react'

import { useEffect ,useState } from 'react'
import { useParams } from 'react-router-dom'

import {Box} from '@mui/material'

import { youtubeOptions ,exersiceOptions , fetchData} from '../utility/fetchData'

import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetail = () => {

  const[exerciseDetail, setexerciseDetail] =useState({});

  const {id} = useParams();

  // for youTube videos
  const [youtubeVideos , setYoutubeVideos] = useState([]);

  const [targetMuscle , setTargetMuscle] = useState([]);
  const[equipmentDetail , setEquipmentDetail] = useState([]);


  useEffect(()=>{
    const fetchDetails = async() =>{
      const exerciseDbUrl = `https://exercisedb.p.rapidapi.com`;
      const youtubeSearchUrl = `https://youtube-search-and-download.p.rapidapi.com`;

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}` ,exersiceOptions)

      setexerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
      setYoutubeVideos(exerciseVideosData.contents);
      console.log(youtubeVideos)

      const targetMuscleData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}` , exersiceOptions);
      setTargetMuscle(targetMuscleData);

      const equipmentData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}` , exersiceOptions);
      setEquipmentDetail(equipmentData);
    }

    fetchDetails();
  } ,[id])

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos youtubeVideos={youtubeVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscle={targetMuscle} equipmentDetail={equipmentDetail}/>
    </Box>
  )
}

export default ExerciseDetail