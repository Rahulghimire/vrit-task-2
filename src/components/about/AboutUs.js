import React from 'react'
import { MiddleCommon, TopCommon } from '../../common/common'
import img from "../../assets/inner-top.svg"
import LeftChild from './LeftChildAbout'
import RightChild from './RightChildAbout'
import LeftWhy from '../whyUs/LeftWhy'
import RightWhy from '../whyUs/RightWhy'
import Footer from '../Footer'

const AboutUs = () => {
  return (
    <div>
        <TopCommon img={img} className="image-container"/>
        <MiddleCommon leftChild={<LeftChild/>} rightChild={<RightChild/>}/>
        <MiddleCommon leftChild={<LeftWhy/>} rightChild={<RightWhy/>}/>
        <Footer/>
    </div>
  )
}

export default AboutUs