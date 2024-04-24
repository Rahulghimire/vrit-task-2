import React from 'react'
import { MiddleCommon, TopCommon } from '../common/common'
import img from "../assets/inner-top.svg"
import LeftChild from './LeftChildAbout'
import RightChild from './RightChildAbout'

const AboutUs = () => {
  return (
    <div>
        <TopCommon img={img} className="image-container"/>
        <MiddleCommon leftChild={<LeftChild/>} rightChild={<RightChild/>}/>
    </div>
  )
}

export default AboutUs