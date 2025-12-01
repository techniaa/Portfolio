import React from 'react'
import { Timeline } from '../components/Timeline'
import { experiences } from '../constants'
const experience = () => {
  return (
    <div className='w-full'>
     <Timeline data={experiences}/>

    </div>
  )
}

export default experience