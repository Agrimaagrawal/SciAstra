import dromkar from '../assets/dr_omkar.jpg'
import vivek from '../assets/vivek_dwivedi_niser.jpg'
import akhil from '../assets/akhil_tripathi_niser.jpg'
const Advisor = () => {
  return (
    <div className='flex flex-wrap justify-center mt-14 mb-14 gap-2 lg:gap-20'>
        <div>
       <div className='md:text-3xl text-lg  font-extrabold font-poppins text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-fuchsia-800'>Mentor and Advisor</div>
      <div className='w-[300px] h-[400px] flex flex-col items-center justify-center shadow-xl rounded-3xl '>
     
        <img src={dromkar} className='w-40 rounded-full '></img>
        <h1 className='font-poppins text-dark-grey font-extrabold text-xl pt-4'>Dr. Omkar</h1>
        <p className='text-center font-poppins text-light-grey text-lg p-4'>Principal Project Scientist at Indian Institute of Technology, Madras</p>
      </div>
      </div>
      {/*Founder*/}
    
      <div className='w-[300px] h-[400px] flex flex-col items-center justify-center shadow-xl rounded-3xl mt-10'>
     
     <img src={vivek} className='w-40 h-40 rounded-full '></img>
     <h1 className='font-poppins text-dark-grey font-extrabold text-xl pt-2'>Vivek Dwivedi</h1>
     <p className='text-center font-poppins text-light-grey text-lg p-4'>Founder SciAstra, Mentor, Qualified NEST, JEE advanced, Mains, Master's Student at NISER</p>
     <a href="mailto:support@sciastra.com" target="_blank" className='text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-fuchsia-800 border-2 border-blue-700 font-semibold rounded-xl p-2'>Message him now</a>
   </div>
    {/*CoFounder*/}
    <div className='w-[300px] h-[400px] flex flex-col items-center justify-center shadow-xl rounded-3xl mt-10'>
     
     <img src={akhil} className='w-40 h-40 rounded-full '></img>
     <h1 className='font-poppins text-dark-grey font-extrabold text-xl pt-4'>Akhil Tripathi</h1>
     <p className='text-center font-poppins text-light-grey text-lg p-4'>Cofounder SciAstra, Mentor, Qualified NEST, Master's Student at NISER</p>
     <a href="mailto:support@sciastra.com" target="_blank" className='text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-fuchsia-800 border-2 border-blue-700 font-semibold rounded-xl p-2'>Message him now</a>
   </div>


    </div>
  )
}

export default Advisor
