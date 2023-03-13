import React from 'react'
import './home_hero.css'

const HomeHero = () => {
  return (
    <section className='section-module--hero'>
      <div className='flex flex-col md:flex-row items-center text-center justify-center'>
        <div className='flex flex-col items-center lg:items-start flex-start'>
          <div className='max-w-[80%] text-center font-Lato md:text-left md:w-3/5 md:max-w-[700px] lg:w-4/5 lg:max-w-[600px] xl:w-4/5 xl:max-w-[900px]'>
            <h1 className='text-[32px] font-[700] text-white lg:hero-title-module--title'
            >
              Utilize your NFT as collateral to obtain a cryptocurrency loan
            </h1>
            <p className='text-[18px] font-[400] text-white opacity-[0.68] mb-[40px] lg:hero-text-module--text hero-text-module--light lg:text-left'>
              Secure a loan of HBAR from lenders by using your NFT as collateral. Once you repay your loan, you will regain possession of your NFT without the risk of automatic liquidation.
            </p>
          </div>
          <div className='hero-buttons-module--buttons flex flex-col items-center justify-start gap-x-5 mb-14 relative sm:flex-row gap-y-5'>
            <a
              className='link-button-loan--button bg-primary hover:bg-primary !text-white border'
              //              href='/app/borrow/assets'
              rel='noreferrer'
              target='_blank'
            >
              Get a loan now
            </a>
            <a
              className='link-button-lend--button text-secondary bg-primary text-white'
              //              href='/app/lend/assets'
              target='_blank'
              rel='noreferrer'
            >
              I want to lend
            </a>
          </div>
        </div>
        <div className='flex flex-col text-white'>
          <div className='text-3xl font-semibold mb-5' hidden>
            <span className='text-5xl'>$</span>
            <span className='text-5xl'>120</span>
            <span className='text-5xl'>K+</span>
            <p className='text-base font-normal mt-3'>Total loan volume (USD)</p>
          </div>
          <div className='text-3xl font-semibold mb-5'>
            <span className='text-white'></span>
            <span className='flex justify-center items-center text-center'>1-60 days</span>
            <p className='text-sm font-normal'>Maturity date</p>
          </div>
          <div className='text-3xl font-semibold mb-5'>
            <span className='hero-counter-module--count--72757'>1%-20%</span>
            <p className='text-sm font-normal'>Borrower fee (displayed in APR)</p>
          </div>
        </div>
      </div>
      <div style={{
        position: 'relative',
      }}>
        <div className='marquee marquee--reverse' style={{
          position: 'absolute',
          top: '150px',
          opacity: '0.5',
        }}>
          <div className='marquee__group'>
            <img alt='' width='100' height='100' src='/images/nft1.png'></img>
            <img alt='' width='100' height='100' src='/images/nft2.png'></img>
            <img alt='' width='177' height='100' src='/images/nft3.png'></img>
            <img alt='' width='100' height='100' src='/images/nft1.png'></img>
            <img alt='' width='100' height='100' src='/images/nft2.png'></img>
            <img alt='' width='177' height='100' src='/images/nft3.png'></img>
            <img alt='' width='100' height='100' src='/images/nft1.png'></img>
            <img alt='' width='100' height='100' src='/images/nft2.png'></img>
            <img alt='' width='177' height='100' src='/images/nft3.png'></img>
            <img alt='' width='100' height='100' src='/images/nft1.png'></img>
            <img alt='' width='100' height='100' src='/images/nft2.png'></img>
            <img alt='' width='177' height='100' src='/images/nft3.png'></img>
          </div>
          <div className='marquee__group'>
            <img alt='' width='100' height='100' src='/images/nft1.png'></img>
            <img alt='' width='100' height='100' src='/images/nft2.png'></img>
            <img alt='' width='177' height='100' src='/images/nft3.png'></img>
            <img alt='' width='100' height='100' src='/images/nft1.png'></img>
            <img alt='' width='100' height='100' src='/images/nft2.png'></img>
            <img alt='' width='177' height='100' src='/images/nft3.png'></img>
            <img alt='' width='100' height='100' src='/images/nft1.png'></img>
            <img alt='' width='100' height='100' src='/images/nft2.png'></img>
            <img alt='' width='177' height='100' src='/images/nft3.png'></img>
            <img alt='' width='100' height='100' src='/images/nft1.png'></img>
            <img alt='' width='100' height='100' src='/images/nft2.png'></img>
            <img alt='' width='177' height='100' src='/images/nft3.png'></img>
          </div>
        </div>
        <div className='marquee'>
          <ul className='marquee__group'>
            <img alt='' width='200' height='200' src='/images/nft1.png'></img>
            <img alt='' width='200' height='200' src='/images/nft2.png'></img>
            <img alt='' width='355' height='200' src='/images/nft3.png'></img>
            <img alt='' width='200' height='200' src='/images/nft1.png'></img>
            <img alt='' width='200' height='200' src='/images/nft2.png'></img>
            <img alt='' width='355' height='200' src='/images/nft3.png'></img>
          </ul>
          <ul className='marquee__group'>
            <img alt='' width='200' height='200' src='/images/nft1.png'></img>
            <img alt='' width='200' height='200' src='/images/nft2.png'></img>
            <img alt='' width='355' height='200' src='/images/nft3.png'></img>
            <img alt='' width='200' height='200' src='/images/nft1.png'></img>
            <img alt='' width='200' height='200' src='/images/nft2.png'></img>
            <img alt='' width='355' height='200' src='/images/nft3.png'></img>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
