import University from '../Api/UniversityApi.js'

const UniversityPage = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-11 w-full '>
      <div className='lg:w-[800px]'><h1 className='md:text-3xl text-lg  font-extrabold font-poppins  p-10  text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-fuchsia-800'>Learn from Scientists,Research Scholars from the top institutes in the world</h1></div>
      <div className='flex flex-wrap mt-8 justify-center items-center gap-5'>
      {
        University.map((e)=>{
          return(
            <div key={e.name} className="w-[400px] shadow-xl h-[200px] flex flex-col item-center justify-center ">
              <div><img src={e.logo} className="w-32 m-auto"></img></div>
              <div className='text-center font-poppins p-2 font-bold text-dark-grey'>{e.name}</div>

            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default UniversityPage
