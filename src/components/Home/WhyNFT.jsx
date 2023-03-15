import React from 'react'
import './whynft.css'

const WhyNFT = () => {
  return (
    <section className='section-module--section why-nftfi-module--section- flex justify-center py-40 text-white bg-[#2A292A]'>
      <div className='flex flex-col lg:flex-row items-center why-nftfi-module--container w-11/12 lg:w-9/12 gap-5 '>
        <div className='w-full md:w-2/3 lg:text-left lg:w-1/3 text-center flex flex-1 flex-col gap-8'>
          <h2 className='text-5xl font-bold font-Lato text-white '>Why LoanSharks?</h2>
          <p className='text-gray-400 font-Roboto'>
            Our mission is to become the number 1 collateralized loan marketplace on the Hedera Network and provide worthwhile revenue share/utility for all of our Debt collector NFT holders.
          </p>
        </div>
        <div className='w-2/3 grid grid-cols-1 md:grid-cols-2 flex-2 gap-5 md:gap-y-10'>
          <div className='flex text-center mt-[50px] md:text-left md:mt-[30px] flex-col gap-y-5 h-full'>
            <h1 className='text-xl'>
              Transparent &amp; open
            </h1>
            <p className='text-gray-400 font-Roboto'>
              The LoanSharks dApp runs on Hedera and is a p2p decentralized lending and borrowing platform.
            </p>
          </div>
          <div className='flex flex-col text-center mt-[50px] md:text-left md:mt-[30px] gap-y-5 h-full'>
            <h1 className='text-xl'>
              Secure &amp; double-audited
            </h1>
            <p className='text-gray-400 font-Roboto'>
              Security is priority and LoanSharks will make sure platform gets double audited.
            </p>
          </div>
          <div className='flex flex-col text-center mt-[50px] md:text-left md:mt-[30px] gap-y-5 h-full'>
            <h1 className='text-xl'>
              Unlocking liquidity
            </h1>
            <p className='text-gray-400 font-Roboto'>
              Unlocking liquidity from NFTs to use elsewhere without selling your NFT.
            </p>
          </div>
          <div className='flex flex-col text-center mt-[50px] md:text-left md:mt-[30px] gap-y-5 h-full'>
            <h1 className='text-xl'>
              Returns
            </h1>
            <p className='text-gray-400 font-Roboto'>
              Make great returns from HBAR you have sitting around by funding loans.
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          height: '800px',
          backgroundSize: 'contain',
          maxWidth: '100%',
          backgroundPosition: '0% 0%',
        }}
        className='absolute inset-0 -z-10 top-auto overflow-hidden max-w-full bg-no-repeat pointer-events-none background-module--background background-module--testimonials background-module--background background-module--whynftfi'
      >
        <div></div>
      </div>
    </section>
  )
}

export default WhyNFT
