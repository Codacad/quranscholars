import SeekingKnowledgeImg from '../assets/images/seeking-knowledge.svg'
import SeekingKnowledgeReadMore from './read-more/SeekingKnowledgeReadMore'
import '../css/SeekingKnowledge.css'

import { useState } from 'react'
const SeekingKnowledge = () => {
  let [readMoreToggle, setReadMoreToggle] = useState(false)
  return (
    <>
     <div className="seeking-knowledge bg-orange-100 md:p-px10p p-4 min-h-[100vh] flex items-center">
      <div className="seeking-knowledge-content grid grid-cols-2 max-md:grid-cols-1">
        <div className="image">
          <img className='' src={SeekingKnowledgeImg} alt="" />
        </div>
        <div className="text flex flex-col justify-center max-md:items-center max-md:text-center gap-4 md:px-8 md:py-2 p-4">
          <h3 className="text-secondary bg-orange-200 w-60 rounded-3xl text-center font-bold p-2">Seeking Knowledge</h3>
          <h1 className="text-3xl font-bold text-primary leading-[1.6em]">Seeking of knowledge is a duty of every Muslim</h1>
          <p className='leading-[1.6em] text-navlinks'>The rise of Muslims to the zenith of civilization in a period of four decades was based on lslam&aposs emphasis on learning. This is obvious when one takes a look at the Quran and the traditions of Prophet Muhammad which are filled with references to learning, education, observation.</p>
          <button onClick={() => setReadMoreToggle(!readMoreToggle)} className="w-32 bg-primary text-white p-2 rounded-full mt-4">Read More</button>
        </div>
      </div>
      <SeekingKnowledgeReadMore readMoreToggle={readMoreToggle} setReadMoreToggle={setReadMoreToggle}/>
    </div> 
    </>
  )
}

export default SeekingKnowledge
