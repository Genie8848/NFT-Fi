import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './home_hero.css'
import clsx from 'clsx'

const HowItWorks = () => {
  const [step, setStep] = useState(1);

  const borrowersList = [
    {
      id: 1,
      description: 'All loans will be in Hbar.',
    },
    {
      id: 2,
      description: 'You will be able to list your NFT with loan agreement to your specifications, a lender can come and fund the loan.',
    },
    {
      id: 3,
      description: 'Loan agreements have option for negotiation with the variables mentioned above.',
    },
    {
      id: 4,
      description: 'Once a loan is funded, the NFT used as collateral will be sent to an escrow account where it will remain until loan is repaid with interest or borrower defaults.',
    },
    {
      id: 5,
      description: 'If borrower defaults, lender will be able to claim NFT.',
    },
  ]

  return (
    <section id='howtoworks' className='!overflow-y-hidden pt-48 flex justify-center bg-[#1E1E1E] text-white'>
      <div className='w-90 relative z-20 text-center flex flex-col items-center'>
        <h2 className='font-semibold text-4xl leading-[53px] font-Lato'>How loans will works</h2>
        <p className=' max-w-3xl text-center font-normal'>
          On LoanSharks you will be able to be the borrower or the lender.
        </p>
        <div className='font-Lato w-full' data-rttabs='true'>
          <div
            className='w-full my-14'
            role='tabpanel'
            id='panel:R229:0'
            aria-labelledby='tab:R229:0'
          >
            <div className='w-full flex flex-col'>
              <ol className='font-Lato gap-y-10 my-10  flex flex-col relative overflow-hidden '>
                {borrowersList.map((item, i) => {
                  return (
                    <li
                      key={item.id}
                    >
                      <div className='w-1/2 text-left py-1 peer flex relative px-5'>
                        <div className=' mx-5 relative'>
                          <h1 className='relative text-[36px] text-primary font-bold font-Lato px-5'>
                            {i + 1}
                          </h1>
                          <div className='hidden flex w-full h-full max-h-[30px] max-w-[30px] absolute top-10 right-2 bg-primary blur-lg'></div>
                        </div>
                        <div className='flex flex-col justify-center'>
                          <p className='font-Roboto text-[18px]'>{item.description}</p>
                        </div>
                      </div>
                      {
                        item.id == step &&
                        <div
                          style={{
                            zIndex: 10 - i,
                          }}
                          className={clsx(
                            'flex flex-col justify-center w-1/2 h-full absolute right-0 top-0',
                            '',
                          )}
                        >
                          <div className='flex flex-col gap-5 justify-center'>
                            <div className='flex flex-row gap-5 justify-center'>
                              <img
                                alt=''
                                role='presentation'
                                aria-hidden='true'
                                src='/images/how-it-works-loansharks1.png'
                              />
                              <img
                                alt=''
                                role='presentation'
                                aria-hidden='true'
                                src='/images/how-it-works-loansharks1.png'
                              />
                              <img
                                alt=''
                                role='presentation'
                                aria-hidden='true'
                                src='/images/how-it-works-loansharks1.png'
                              />
                            </div>
                            <div className='flex flex-row gap-5 justify-center'>
                              <img
                                alt=''
                                role='presentation'
                                aria-hidden='true'
                                src='/images/how-it-works-loansharks1.png'
                              />
                              <img
                                alt=''
                                role='presentation'
                                aria-hidden='true'
                                src='/images/how-it-works-loansharks1.png'
                              />
                              <img
                                alt=''
                                role='presentation'
                                aria-hidden='true'
                                src='/images/how-it-works-loansharks1.png'
                              />
                            </div>
                          </div>
                        </div>
                      }
                    </li>
                  )
                })}
              </ol>
              <div className='hidden self-start px-24 my-10 rounded'>
                <a
                  className='bg-[#EBD259] font-bold text-black py-4 px-10 rounded'
                  href='/how-it-works/'
                >
                  More about borrowing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
