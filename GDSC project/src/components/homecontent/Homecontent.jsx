
import React from 'react'
import Card from '../card/Card'
import Crowsel from '../crowsel/Crowsel'
import Faq from '../faq/Faq'
import Footer from '../footer/Footer'
import Slider from '../slider/Slider'

const Homecontent = () => {
  return (
    <div>
        <Slider/>
        {/* <Card/> */}
        <Crowsel/>
        <Faq/>
        <Footer/>
    </div>
  )
}

export default Homecontent