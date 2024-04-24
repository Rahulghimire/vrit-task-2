import React from 'react'

export const TopCommon = (props) => {
  return (
    <div className={`${props.className}`}>
        <img
        className='image'
        src={props.img}
        />
    </div>
  )
}

export const MiddleCommon=(props)=>{
    console.log("ASDFddfdf",props)
    return(
        <div className='xl:px-[100px] xl:pt-[102px]'>
            <div className='flex xl:gap-x-[26px]'>
                <div>
                    {props.leftChild}
                </div>
                <div>
                    {props.rightChild}
                </div>
            </div>

        </div>
    )
}
