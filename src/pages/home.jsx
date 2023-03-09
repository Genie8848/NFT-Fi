import React from 'react'
import HomeHero from '../components/Home/HomeHero'
import HowItWorks from '../components/Home/HowItWorks'
import Testimonials from '../components/Home/Testimonials'
import WhyNFT from '../components/Home/WhyNFT'
import LatestBlog from '../components/Home/LatestBlog'
import TopCollections from '../components/Home/TopCollections'
import JoinCommunity from '../components/Home/JoinCommunity'
import Faqs from '../components/Home/Faqs'
import GetLiquidity from '../components/Home/GetLiquidity'

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <HowItWorks />
      <Testimonials />
      <WhyNFT />
      <JoinCommunity />
      <Faqs />
      <GetLiquidity />
    </>
  )
}

export default HomePage
