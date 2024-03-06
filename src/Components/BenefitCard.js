import React from 'react'

const BenefitCard = ({ src, title }) => {
  return (
    <div>
        <div className='BenefitCard-img'><img src={src} /></div>
        <div className='BenefitCard-text'>
            <div>{title}</div>
        </div>
    </div>
  )
}

export default BenefitCard