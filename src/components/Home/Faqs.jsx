import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './faqs.css'
import clsx from 'clsx'

const FaqItem = ({
  question,
  answer,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='accordion-module--item'>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={clsx(
          'accordion-module--button !transition-all duration-500 ease-in-out !font-Lato',
          isOpen && 'accordion-module--open',
        )}
      >
        <svg
          width='20'
          height='4'
          viewBox='0 0 20 4'
          fill='#EBD259'
          className={clsx(
            '!transition-opacity !duration-500 !ease-in-out',
            isOpen ? 'flex' : 'hidden',
          )}
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M0 4V0H20V4H0Z'></path>
        </svg>
        <svg
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='#EBD259'
          className={clsx(
            '!transition-opacity !duration-500 !ease-in-out',
            !isOpen ? 'flex' : 'hidden',
          )}
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M12 0H8V8H0V12H8V20H12V12H20V8H12V0Z'
          ></path>
        </svg>
        <p className='text-left'>
          {question}
        </p>
      </button>
      <div
        className={clsx(
          'accordion-module--content px-14 !transition-all !duration-500 !ease-in-out',
          isOpen && '!h-auto px-10 py-5 inline-flex overflow-hidden',
        )}
      >
        <div className='accordion-module--inner !px-10'>
          <div className='contentful-rich-text-module--richtext !font-Roboto text-white'>
            <p>
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
const Faqs = () => {
  const faqList = [
    {
      question: 'What is a P2P decentralized NFT loan marketplace?',
      answer: 'It is a marketplace where you can list an NFT as collateral, borrow off an illiquid NFT, and fund loans to generate profits.'
    },
    {
      question: 'What measure of security is LoanSharks taking?',
      answer: 'LoanSharks platform will be double audited and will have a full time dev maintaining platform on a daily basis.'
    },
    {
      question: 'Reason for taking NFT loans?',
      answer: 'To unlock liquidity from an illiquid NFT.'
    },
    {
      question: 'Reason for funding loans?',
      answer: 'You can make profits from funding loans using Hbar.'
    },
    {
      question: 'What happens if loan is not repaid?',
      answer: ' lender will be able to claim NFT used as collateral and borrower stays with capital from the lender.'
    },
    {
      question: 'What fee does LoanSharks charge?',
      answer: 'LoanSharks charges 40 percent of profits generated by the loan at time of repayment.'
    },
    {
      question: 'What if NFT in escrow receives airdrop?',
      answer: 'Borrower will be able to claim NFT, airdrop or rewards if loan is repaid, if not lender will keep all.'
    },
    {
      question: 'What NFT projects will be listed?',
      answer: 'We want to offer as much NFT projects as possible as collateral options.'
    },
    {
      question: 'Utility for NFT?',
      answer: 'Rev share, 10+ NFTs you get special access to chat, and loads more to come as LoanSharks scales.'
    },
    {
      question: 'When will platform be fully functional and audited?',
      answer: 'Sometime in April.'
    },
    {
      question: 'When rev share starts?',
      answer: '2 months after dapp being fully functional.'
    },
    {
      question: 'When will timer start for repayment?',
      answer: 'As soon as borrower accepts loan and receives Hbar in wallet.'
    },
    {
      question: 'Can I get liquidated?',
      answer: 'Nope.'
    },
    {
      question: 'Pre-Payment penalty?',
      answer: 'Nope, borrower can pay loan early and will be charged interest based on amount of time borrowed.'
    },
  ];

  return (
    <section id="faqs" className='bg-[#262424] text-white flex z-20 justify-center items-center section-module--section--27a22 questions-module--section--d270f section-module--lightblue--baa20'>
      <div className='relative w-11/12 md:w-10/12 lg:w-3/4 flex flex-col items-center container-module--container--3a7e6 container-module--constrained--28f48'>
        <h2 className='text-4xl font-Lato my-5 font-bold title-module--title--73b11 title-module--center--3ded2'>
          FAQs
        </h2>
        <p className='text-lg max-w-[850px] py-2 font-Roboto text-center intro-module--intro--5e21f questions-module--intro--d24dc intro-module--center--87e61'>
          Peer-to-peer NFT lending is a pretty simple concept, and you can quickly learn the basics
          by scrolling through our FAQ section.
        </p>
        <div className='py-10 accordion-module--accordion questions-module--questions max-w-[700px]'>
          {
            faqList.map((item, index) => {
              return <FaqItem key={index} question={item.question} answer={item.answer} />
            })
          }
        </div>
        <div className='hidden my-14'>
          <Link
            className='px-10 py-5 bg-[#EBD259] font-bold text-black rounded'
            href='/faq/'
          >
            Go to FAQ section
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Faqs
