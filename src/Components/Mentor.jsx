import Mentors from '../Api/MentorsApi.js'
const Mentor = () => {
  return (
    <div className="flex flex-col items-center mt-24">
       <div className='lg:w-[800px]'><h1 className='md:text-3xl text-lg  font-extrabold font-poppins  p-10  text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-fuchsia-800'>Meet Your Mentors</h1></div>
       <div className='flex flex-wrap justify-center items-center p-8 gap-4 '>
        {
            Mentors.map((e)=>{
                return(
                    <div key={e.name} className='flex flex-col justify-center items-center text-center w-[300px] h-[300px]  gap-3 '>
                        <div ><img src={e.photo} className=' w-32 h-32 rounded-full'></img></div>
                        <div className='text-gray-900'>{e.name}</div>
                        <div className='text-light-grey'>{e.university}</div>

                    </div>
                )
            })
        }
       </div>
    </div>
  )
}

export default Mentor
