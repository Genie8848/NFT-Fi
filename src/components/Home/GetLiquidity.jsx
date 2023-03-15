import React from 'react'
import './getLiquidity.css'

const GetLiquidity = () => {
  return (
    <section className='bg-[#1E1E1E] flex justify-center py-24 text-white'>
      <div className='w-6/6 relative z-20 flex flex-col items-center  gap-y-10 md:w-10/12 lg:w-4/5 xl:w-1/3'>
        <h2 className='text-3xl text-center max-w-[80%] font-Lato'>
          Put your NFTs to work and get the liquidity you need
        </h2>

        <div className='flex flex-col sm:flex-row items-center justify-start gap-x-5 mb-14 relative'>
          <a
            className='link-button-loan--button bg-primary bg-primary !text-white border'
//            href='app/borrow/assets'
            rel='noreferrer'
            target='_blank'
          >
            Coming Soon{/*Get a loan now*/}
          </a>
          {/*
            <a
              className='link-button-lend--button mt-[20px] sm:mt-[0px] bg-primary text-white'
  //            href='app/lend/assets'
              target='_blank'
              rel='noreferrer'
              disabled
            >
              I want to lend
            </a>
  */}
        </div>
      </div>
    </section>
  )
}

export default GetLiquidity
