import React from 'react'

const OpportunityCard = ({ title, Imgsrc }) => {
  return (
    <div className='opportunityCardSection'>
        <img src={Imgsrc} className='opportunityCardImg'/>
        <div className='opportunityCardText'>
            <div className='opportunityCardText-m1'>{title}</div>
        </div>
    </div>
  )
}

export default OpportunityCard