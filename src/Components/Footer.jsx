import logo from '../assets/Sciastralogo.png';

const Footer = () => {
  return (
    <>
    <div className='w-full h-screen bg-footer-texture'>
        <div className='text-white ml-14 mt-5 font-poppins'>
      <div className='w-28 mt-6'><img src={logo} className="rounded-full"></img></div>
      <h1 className='text-2xl font-bold text-white font-poppins'>SciAstra</h1>
      <div className='mt-20'>
      <h1 className="text-xl font-bold p-2 ">Home</h1>
      <h1 className="text-xl font-bold p-2 ">Our Courses</h1>
      <h1 className="text-xl font-bold p-2 ">Blog</h1>
      <h1 className="text-xl font-bold p-2 ">Free Materials</h1>
      <h1 className="text-xl font-bold p-2 ">Our Team</h1>
      <h1 className="text-xl font-bold p-2 ">Contact Us</h1>
      </div>
      </div>
      <div className='text-white mt-16 flex justify-between'>
        <h1 className='p-2'>SciAstra Education Pvt Ltd, Bhubaneswar, Odisha</h1>
        <a href="mailto:support@sciastra.com" className='p-2'>support@sciastra.com</a>
      </div>
     
     
    </div>
    <div className='bg-black h-20 text-white font-poppins text-center p-5'><p>© Copyright 2023, SciAstra. All rights reserved</p></div>
    
    </>
  )
}

export default Footer

