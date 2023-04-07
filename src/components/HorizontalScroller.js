import React from 'react'

import {Box} from '@mui/material'

import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

import BodyPartCard from './BodyPartCard'

import ExerciseCard from './ExerciseCard'

const HorizontalScroller = ({data , bodyPart ,setBodyPart , isBodyParts}) => {
  return (
    <ScrollMenu>
        
        {
            data.map((item)=>
                <Box key={item.id || item}
                itemId={item.id || item}
                title={item.id || item}
                m='0 40px'
                >
                  {isBodyParts ? <BodyPartCard item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} /> }
                </Box>
            )
        }

    </ScrollMenu>
  )
}

export default HorizontalScroller