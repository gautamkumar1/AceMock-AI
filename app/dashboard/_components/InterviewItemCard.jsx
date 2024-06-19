import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

function InterviewItemCard({interview}) {

    const router=useRouter(); // send the router to diff page
    // send to the interview start page
    const onStart=()=>{
        router.push('/dashboard/interview/'+interview?.mockId)
    }
    // send to the interview feedback page
    const onFeedbackPress=()=>{
        router.push('/dashboard/interview/'+interview.mockId+"/feedback")
    }
    
  return (
    <div className='border shadow-sm rounded-lg p-3'>
        {/* Getting all data from the db and show it */}
        <h2 className='font-bold text-primary'>{interview?.jobPosition}</h2>
        <h2 className='text-sm text-gray-600'>{interview?.jobExperience} Years of Experience</h2>
        <h2 className='text-xs text-gray-400'>Created At:{interview.createdAt}</h2>
        {/* Buttons for Feedback and Start */}
        <div className='flex justify-between mt-2 gap-5'>
            <Button size="sm" variant="outline" className="w-full"
            onClick={onFeedbackPress}
            >Feedback</Button>
            <Button size="sm" className="w-full"
            onClick={onStart}
            >Start</Button>

        </div>
    </div>
  )
}

export default InterviewItemCard