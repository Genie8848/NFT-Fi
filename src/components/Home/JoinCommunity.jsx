import React from 'react'
import './join_community.css'

const JoinCommunity = () => {
  return (
    <section className='bg-[#262424] relative !z-10 section-module--section--27a22 join-us-module--section--10d80 py-24 flex justify-center items-center text-white'>
      <div className='flex flex-col lg:flex-row w-10/12 lg:w-4/5 justify-center items-center gap-24'>
        <div className='flex flex-col items-center text-center md:flex-row md:items-start'>
          <a
            className='flex flex-col items-center w-1/2'
            href='https://twitter.com/LoanSharksHbar'
            target='__blank'
          >
            <img
              src='/icons/twitter.svg'
              alt='Twitter'
              width='40'
              height='40'
              loading='lazy'
            />
            <p className='text-lg pt-3'>
              Twitter
            </p>
            <p className='text-sm pt-3'>
              Follow us and be first for NFT News, Updates, Giveaway...
            </p>
            <h3 className='text-[#EBD259] pt-5'>
              Follow us on Twitter
            </h3>
          </a>
          <a
            className='flex flex-col items-center mt-[30px] w-1/2 md:mt-[0px]'
            href='https://discord.gg/sMTDDWyK'
            target='__blank'
          >
            <img
              src='/icons/discord.png'
              alt='Discord'
              width='40'
              height='40'
              loading='lazy'
            />
            <p className='text-lg pt-3'>
              Discord
            </p>
            <p className='text-sm pt-3'>
              Get exclusive strategies and useful tools for Rarity-Check, Whale-Alert, Drops-Alert...
            </p>
            <h3 className='text-[#EBD259] pt-5'>
              Join our discord group
            </h3>
          </a>
        </div>
      </div>
      <div className='background-module--background background-module--joinus !z-0'></div>
    </section>
  )
}

export default JoinCommunity
