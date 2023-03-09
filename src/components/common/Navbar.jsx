import { useState, useEffect, useRef } from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
// import './navbar.css'
const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={clsx(
        'flex w-full items-center justify-center top-0 left-0 right-0 !fixed !z-50',
      )}
      style={{
        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 2, 0.7) 100%)',
        backdropFilter: 'blur(25px)',
        width: '100%',
        height: '70px',
      }}
    >
      <div className='w-11/12 sm:w-10/12 xl:w-3/4 flex justify-between items-center'
        style={{
          height: '70px',
        }}
      >
        <a className='text-inherit flex-[1]' href='/' aria-current='page'
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 0,
          }}
        >
          <img
            // className='plain-image-module--image'
            src='/images/loanSharks-logo.svg'
            alt='loanSharks'
            loading='lazy'
            style={{
              width: '50px',
              height: '50px',
            }}
          />
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            padding: '10px',
            gap: '10px',
          }}>
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
        <nav className='hidden font-Lato flex-[3] xl:flex-[2] lg:flex'>
          <ul className='flex list-none justify-between items-center py-6 text-white gap-x-5 w-full'>
            <li>
              <Link
                href='/'
                aria-current='page'
                className='text-white decoration-transparent py-4 px-2 font-medium text-sm'
              >
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link onClick={() => {
                window.location.replace("/#howtoworks");
              }}>
                <span>How it works</span>
              </Link>
            </li>
            <li>
              <a href='app/lend/assets' rel='noreferrer' target='_blank'>
                <span>Lend</span>
              </a>
            </li>
            <li>
              <a href='app/borrow/assets' rel='noreferrer' target='_blank'>
                <span>Borrow</span>
              </a>
            </li>
            <li>
              <a href='https://discord.gg/sMTDDWyK' rel='noreferrer' target='_blank'>
                <span>Community</span>
              </a>
            </li>
            <li>
              <Link onClick={() => {
                window.location.replace("/#faqs");
              }}>
                <span>FAQs</span>
              </Link>
            </li>
            <li
              className={clsx(
                'self-end xl:ml-20',
                // 'after:content-[""] after:bg-[linear-gradient(90deg,#7e5bd6,rgba(126,91,214,0))] after:absolute after:bottom-0 after:h-1.25 after:w-0 after:transition=["width .2s ease-in-out"] after:hoverw-full',
              )}
            >
              <Link
                // href='https://app.nftfi.com/borrow/assets'
                to='/app/borrow/assets'
                className='inline-flex px-5 py-3 h-full w-full text-white leading-6 font-Lato  cursor-pointer font-bold gap-x-3 justify-center text-base decoration-transparent'
                style={{
                  background: 'linear-gradient(257.25deg, #EBD259 4.97%, #DBB346 89.06%)',
                  borderRadius: '3px',
                }}
              >
                Open dApp
              </Link>
            </li>
          </ul>
        </nav>
        <button className='lg:hidden text-primary' aria-label='Menu button'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect x='2' y='4' width='14' height='2'></rect>
            <rect x='2' y='11' width='20' height='2'></rect>
            <rect x='8' y='18' width='14' height='2'></rect>
          </svg>
        </button>
      </div>
    </header >
  )
}

export default Navbar
