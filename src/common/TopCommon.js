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
