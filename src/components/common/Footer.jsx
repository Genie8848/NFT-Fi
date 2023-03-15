import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='bg-[#1E1E1E] footer-module--footer min-h-[300px] sm:min-h-[200px] relative z-20 flex justify-center items-center'>
      <div className='footer-module--wrapper absolute p-10 h-full -top-12 left-5 right-5 -lg:top-12 lg:left-12 lg:right-12 text-white'>
        <div className='flex flex-col lg:flex-row w-full gap-8'>
          <div className='lg:w-2/5 lg:w-2/5 flex flex-col gap-y-5 items-center'>
            <a className='text-inherit flex-[1]' href='/' aria-current='page'
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 0,
              }}
            >
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '10px',
                gap: '10px',
              }}>
                <img alt='logo' loading='lazy' src='/images/loanSharks-logo.svg' hidden />
                <p style={{
                  fontFamily: 'Josefin Sans',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '24px',
                  lineHeight: '24px',
                  color: '#ffffff'
                }}>
                  LoanSharks
                </p>
              </div>
            </a>
          </div>
          <nav className='text-center lg:gap-5 lg:w-3/5 grid sm:grid-cols-2 lg:grid-cols-5 items-center'>
            <ul className='flex flex-col gap-y-1'>
              <li className='font-bold font-Lato text-[24px] tracking-wider mb-5'>
                <a href='https://loansharks.gitbook.io/loansharks/team' target='__blank'>
                  <h3>About Us</h3>
                </a>
              </li>
            </ul>
            {/*
              <ul className='flex flex-col gap-y-1'>
                <li className='font-bold font-Lato text-[24px] tracking-wider mb-5'>
                  <h3>Terms of Use</h3>
                </li>
              </ul>
              <ul className='flex flex-col gap-y-1'>
                <li className='font-bold font-Lato text-[24px] tracking-wider mb-5'>
                  <h3>Privacy Policy</h3>
                </li>
              </ul>
              */}
            <ul className='flex flex-col gap-y-1'>
              <li className='font-bold font-Lato text-[24px] tracking-wider mb-5'>
                <a href="mailto:loansharkshbar@gmail.com" target='__blank'>
                  <h3>Contact Us</h3>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
