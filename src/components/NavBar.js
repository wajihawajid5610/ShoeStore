import React from 'react'

const NavBar = () => {
  return (

    <div className='font-poppins'>
      <nav className='flex h-[72px] items-center'>
        <div className='m-1 ml-16'>
          <img src='/Images/brand_logo.png'/>
        </div>
        <div className='flex gap-[24px] ml-[365px]'>
          <div>MENU</div>
          <div>LOCATION</div>
          <div>ABOUT</div>
          <div>CONTACT</div>
        </div >

        <button className='bg-[#D01C28]  w-[75px] h-[32px] mt-[1px] ml-[386px] pt-[5px] pl-[16px] pb-[6px] pr-[16px] text-[#FFFFFF] rounded-sm' >Login</button> 
      </nav>
  </div>
 
    
  )
}

export default NavBar
