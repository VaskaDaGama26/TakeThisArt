import React from 'react'

const Heading = ({label}) => {
  return (
    <h1 className='fira-sans-condensed-light text-[52px] sm:text-[64px] text-center text-(--white) uppercase'>{label}</h1>
  )
}

export default Heading