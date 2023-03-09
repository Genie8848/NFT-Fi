import React from 'react'
import './join_community.css'

const JoinCommunity = () => {
  return (
    <section className='bg-[#262424] relative !z-10 section-module--section--27a22 join-us-module--section--10d80 py-24 flex justify-center items-center text-white'>
      <div className='flex flex-col lg:flex-row w-10/12 lg:w-4/5 justify-center items-center gap-24'>
        <div className='flex flex-row basis-1/2 space-x-6'>
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
            <p className='text-sm text-center pt-3'>
              Follow us and be first for NFT News, Updates, Giveaway...
            </p>
            <h3 className='text-[#EBD259] pt-5'>
              Follow us on Twitter
            </h3>
          </a>
          <a
            className='flex flex-col items-center w-1/2'
            href='https://discord.gg/sMTDDWyK'
            target='__blank'
          >
            <img
              src='/icons/Discord.svg'
              alt='Discord'
              width='40'
              height='40'
              loading='lazy'
            />
            <p className='text-lg pt-3'>
              Discord
            </p>
            <p className='text-sm text-center pt-3'>
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

/**
 *       <div className='flex flex-col lg:flex-row w-10/12 lg:w-4/5 justify-between items-center relative '>
        <div className='join-us-module--intro'>
          <h2 className='title-module--title font-Lato text-4xl lg:max-w-[500px] w-full font-bold'>
            Ways to join our community
          </h2>
          <p className='intro-module--intro lg:max-w-[400px] w-full font-Roboto text-navy_light text-xl'>
            Join our Discord, follow us on Twitter, and subscribe to our newsletter. That&apos;s all
            the alpha you need!
          </p>
        </div>
        <div className='join-us-module--items w-full lg:max-w-[800px] gap-10 flex flex-col'>
          <a
            className='relative ml-0 flex flex-col p-8  pl-20 gap-y-5 bg-white shadow-xl lg:max-w-[650px]  join-us-item-module--item--f6c2f join-us-item-module--twitter--93d53 join-us-item-module--base--0a601 join-us-module--item--0c647'
            href='https://discord.gg/nftfi'
            target='__blank'
          >
            <img
              className='absolute top-1/3 left-0 -translate-x-1/2'
              src='/icons/discord.svg'
              alt='Discord'
              width='114'
              height='86'
              loading='lazy'
            />
            <h3 className='subtitle-module--subtitle  text-3xl font-Lato font-semibold text-navy'>
              Join our Discord
            </h3>
            <p className='text-module--text--f8485 font-Roboto text-navy_light'>
              Become a part of a fantastic community. You will also find the NFTfi team there, ready
              to help you.
            </p>
          </a>
          <a
            className='relative lg:ml-14 flex flex-col p-8  pl-20 gap-y-5 bg-white shadow-xl max-w-[650px]  join-us-item-module--item--f6c2f join-us-item-module--twitter--93d53 join-us-item-module--base--0a601 join-us-module--item--0c647'
            href='https://twitter.com/nftfi'
            target='__blank'
          >
            <img
              className='plain-image-module--image--2e318 absolute left-0 -translate-x-1/2'
              src='/icons/twitter.svg'
              alt='Twitter'
              width='112'
              height='91'
              loading='lazy'
            />
            <h3 className='subtitle-module--subtitle text-3xl font-Lato font-semibold text-navy'>
              Follow us on Twitter
            </h3>
            <p className='text-module--text--f8485 font-Roboto text-navy_light'>
              The fastest way to receive updates on NFTfi, NFT finance and the NFT space in general.
            </p>
          </a>

          <div className='relative flex flex-col lg:ml-24  p-8 pl-20 gap-y-5 max-w-[650px]  bg-white shadow-xl join-us-item-module--item--f6c2f join-us-item-module--newsletter--f6190 join-us-item-module--base--0a601 join-us-module--item--0c647'>
            <img
              className='plain-image-module--image absolute left-0 top-1/2 -translate-y-full -translate-x-1/2'
              src='/icons/newsletter.svg'
              alt='Newsletter'
              width='121'
              height='108'
              loading='lazy'
            />
            <h3 className='subtitle-module--subtitle--065e9 text-3xl font-Lato font-semibold text-navy'>
              Sign up for our newsletter
            </h3>
            <p className='text-module--text--f8485 font-Roboto text-navy_light'>
              Sign up to receive emails from NFTfi with the latest news and product updates.
            </p>
            <form className='flex flex-col gap-y-4'>
              <div className='newsletter-form-module--field flex gap-x-5'>
                <input
                  className='newsletter-form-module--input py-3 px-5 flex-1 outline-none bg-primary/10 font-semibold'
                  placeholder='Email'
                  name='email'
                  type='email'
                />
                <button
                  className='newsletter-form-module--button--7ac54 bg-primary py-3 px-5 text-white font-semibold'
                  type='submit'
                  disabled=''
                >
                  Sign up
                </button>
              </div>
              <label className='newsletter-form-module--consent--0d249 flex gap-x-2 items-start'>
                <input
                  className='w-10 h-10 max-h-10 max-w-10 caret-primary text-primary accent-primary'
                  name='consent'
                  type='checkbox'
                />
                <div className='flex flex-col text-navy_light font-Roboto text-lg contentful-rich-text-module--richtext--29054 newsletter-form-module--consenttext--83c3d'>
                  <p>
                    I would like to sign up to receive emails from NFTfi with the latest news and
                    product updates. I understand and consent to the
                  </p>
                  <a
                    className='text-secondary text-base hover:underline-primary'
                    href='/privacy-policy/'
                  >
                    Privacy Policy.
                  </a>
                </div>
              </label>
            </form>
          </div>
        </div>
      </div>
 * 
 */