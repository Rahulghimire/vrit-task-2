import React from 'react'
import { MiddleCommon, TopCommon } from '../common/TopCommon'
import img from "../assets/inner-top.svg"
import LeftChild from './LeftChild'
import RightChild from './RightChild'

const AboutUs = () => {
  return (
    <div>
        <TopCommon img={img} className="image-container"/>
        <MiddleCommon leftChild={<LeftChild/>} rightChild={<RightChild/>}/>
    </div>
  )
}

export default AboutUs