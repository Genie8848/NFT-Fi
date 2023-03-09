import React from 'react'
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import './testmonials.css'

const Testimonials = () => {
  return (
    <section className='hidden relative flex justify-center items-center min-h-[750px] bg-[#2A2A2A]'>
      <div className='relative z-20  flex h-[400px]  w-full max-w-[600px] xl:max-w-[700px] justify-center mx-5  container-module--container--3a7e6 container-module--constrained--28f48 testimonials-module--container--90057'>
        <div className='testimonials-module--wrapper flex  gap-x-2 items-center'>
          <div className='p-5 !z-20 w-full items-stretch h-full'>
            <div className='swiper-wrapper flex'>
              {[1].map((item, indx) => {
                return (
                  <div
                    key={item}
                    className='flex flex-col text-center flex-1 text-2xl justify-center'
                    style={{
                      background: 'linear-gradient(180deg, #100F0F 0%, rgba(78, 69, 69, 0) 100%)',
                      borderRadius: '25px',
                    }}
                  >
                    <Carousel className='' showThumbs={true} infiniteLoop={true}
                    >
                      <p className='text-[#EEEEFC] m-5 y-10'>
                        My experience with Loanshark has been amazing. Once you realize that you can get
                        money from your &quot;illiquid&quot; NFT and still keep it, it&apos;s a
                        no-brainer. Being able to fix the terms directly with the other party is the
                        best part.
                      </p>
                      <p className='text-[#EEEEFC] m-5'>
                        I love the idea of being able to quickly access liquidity against assets in a permission-less 
                        peer-to-peer way. Got my biggest W in the space by utilizing LoanSharks, forever grateful!.
                      </p>
                      <p className='text-[#EEEEFC] m-5'>
                        Earned some nice interest on lending. The most valuable aspect of LoanSharks is a really clean UI 
                        and trusted site with real individuals interacting to come to an agreement on lending conditions.
                      </p>
                    </Carousel>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
