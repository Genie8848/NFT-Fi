import React from 'react'
import './home_hero.css'

const HomeHero = () => {
  return (
    <section className='section-module--hero'>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flex: '1 1',
        justifyContent: 'center',
      }}>
        <div className='flex flex-col items-center lg:items-start flex-start'>
          <div className='w-4/5 lg:w-full lg:max-w-[500px] font-Lato'>
            <h1 className='hero-title-module--title'
            >
              Utilize your NFT as collateral to obtain a cryptocurrency loan
            </h1>
            <p className='hero-text-module--text hero-text-module--light lg:text-start'>
              Secure a loan of HBAR from lengders by using your NFT as collateral. Once you repay your loan, you will regain possession of your NFT without the risk of automatic liquidation.
            </p>
          </div>
          <div className='hero-buttons-module--buttons flex items-center justify-start gap-x-5 mb-14 relative'>
            <a
              className='link-button-loan--button bg-primary hover:bg-primary !text-white  border'
              href='/app/borrow/assets'
              rel='noreferrer'
              target='_blank'
            >
              Get a loan now
            </a>
            <a
              className='link-button-lend--button text-secondary hover:bg-secondary hover:text-white'
              href='/app/lend/assets'
              target='_blank'
              rel='noreferrer'
            >
              I want to lend
            </a>
          </div>
          <div
            style={{ color: 'white' }}
            className='flex items-center justify-center gap-x-5 !text-white'
          >
            <div className='text-3xl font-semibold'>
              <span className='text-white'>$</span>
              <span className='hero-counter-module--count--72757'>120</span>
              <span className='hero-counter-module--suffix--ebad0'>K+</span>
              <p className='text-sm font-normal'>Total loan volume (USD)</p>
            </div>
            <div className='text-3xl font-semibold'>
              <span className='text-white'></span>
              <span className='hero-counter-module--count--72757'>1~60</span>
              <p className='text-sm font-normal'>Maturity date</p>
            </div>
            <div className='text-3xl font-semibold'>
              <span className='hero-counter-module--count--72757'>52~521</span>
              <span className='hero-counter-module--suffix--ebad0'>%</span>
              <p className='text-sm font-normal'>Borrower fee (APR)</p>
            </div>
          </div>
        </div>
        <div>
          <img
            alt=''
            role='presentation'
            aria-hidden='true'
            src='/images/loanSharks-hero-image.svg'
            style={{
              maxWidth: '100%',
              display: 'block',
              position: 'static',
            }}
          />
        </div>
      </div>
      <div style={{
        position: 'absolute',
        width: '800px',
        height: '500px',
        left: '122px',
        top: '756px',
      }}>
        <img
          alt=''
          role='presentation'
          aria-hidden='true'
          src='/images/loanSharks-hero-small-left-image.svg'
          style={{
            maxWidth: '100%',
            display: 'block',
            position: 'static',
          }}
        />
      </div>
      <div style={{
        position: 'absolute',
        width: '800px',
        height: '500px',
        left: '600px',
        top: '820px',
      }}>
        <img
          alt=''
          role='presentation'
          aria-hidden='true'
          src='/images/loanSharks-hero-small-right-image.svg'
          style={{
            maxWidth: '100%',
            display: 'block',
            position: 'static',
          }}
        />
      </div>
    </section>
  )
}

export default HomeHero
