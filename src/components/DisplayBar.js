import React from 'react'

const DisplayBar = () => {
  return (
    <div className=' h-[510px] m-1 mt-12 flex ml-16 mr-16'>
      <div className=' w-[640px]'>
        <h1 className='h-[259px] w-[580px] ml-14 font-poppins font-extrabold text-[95px] leading-[100px] text-[#000000]'>
          YOUR FEET DESERVE THE BEST
        </h1>
        <p className='h-[88px] w-[404px] ml-16 mt-10  font-semibold leading-[22px] text-[#5A5959]'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div classname='w-[331px]  flex'>
          <button className='w-[150px] pt-[6px] pr-[16px] pb-[6px] pl-[16px] ml-16 gap-[10px] mt-3 bg-[#D01C28]'><div className='w-[118px] h-[29px] text-[#FFFFFF] text-2xl leading-[29.05px] font-sans'>Shop Now</div></button>
          <button className='w-[141px] border ml-[40px] pt-[6px] pr=[16px] pb-[6px] pl-[16px] gap-[10px] border-[#000000]'><div className='h-[29px] w-[109px] font-sans font-semibold text-2xl leading-[29.05px] text-[#5A5959]'>Category</div></button>
        </div>
        <div className='h-[67px] w-[131px] ml-16 mt-3 '>
          <div className='h-[19px] w-[131px] text-[#5A5959] font-sans font-normal text-base leading-[19.36px]'>Also Available On</div>
          <div className='w-[80px] h-[32px] gap-4 mt-[10px] flex'>
            <img className='h-[32px] w-[32px]' src='/Images/flipkart.png'></img>
            <img className='h-[32px] w-[32px]' src='/Images/amazon.png'></img>
          </div>
        </div>

      </div>
      
      <div className='w-[530px] h-[487.06] ' >
          <img src='/Images/shoe_image.png'></img>
      </div>
      
      
      
    </div>
   /*  <div className='  h-[30pc] bg-black  mt-[50px] font-poppins  flex'>
      <div className='w-[595px] h-[613px] gap-[36px] '>
        <h1 className='font-extrabold text-[108px] leading-[102px] text-[#000000]'>YOUR FEET DESERVES THE BEST</h1>
        <p className='h-[91px] w-[404px] font-semibold text-base leading-[24px] text-[#5A5959] mt-[36px]'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div classname='h-[41px] w-[331px] flex'>
          <button className='h-[41px] w-[150px] pt-[6px] pr-[16px] pb-[6px] pl-[16px] gap-[10px] mt-[36px] bg-[#D01C28]'><div className='w-[118px] h-[29px] text-[#FFFFFF] text-2xl leading-[29.05px] font-sans'>Shop Now</div></button>
          <button className='h-[41px] w-[141px] border ml-[40px] pt-[6px] pr=[16px] pb-[6px] pl-[16px] gap-[10px] border-[#000000]'><div className='h-[29px] w-[109px] font-sans font-semibold text-2xl leading-[29.05px] text-[#5A5959]'>Category</div></button>
        </div>
        <div className='h-[67px] w-[131px] mt-[36px] '>
          <div className='h-[19px] w-[131px] text-[#5A5959] font-sans font-normal text-base leading-[19.36px]'>Also Available On</div>
          <div className='w-[80px] h-[32px] gap-4 mt-[16px] flex'>
            <img className='h-[32px] w-[32px]' src='/Images/flipkart.png'></img>
            <img className='h-[32px] w-[32px]' src='/Images/amazon.png'></img>
          </div>
        </div>
      </div>
      <div className='w-[530px] h-[487.06px]'>
            <img src='/Images/shoe_image.png'></img>
      </div>
    </div> */
  )
}

export default DisplayBar
