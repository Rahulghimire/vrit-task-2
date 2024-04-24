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
    return(
        <div className='p-[20px] xl:px-[100px] xl:pt-[102px]'>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:gap-[10px]  xl:gap-x-[26px]'>
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
