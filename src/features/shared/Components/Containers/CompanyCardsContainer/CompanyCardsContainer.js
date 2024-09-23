import React from 'react'
import CompanyCards from '../../Cards/CompanyCards/CompanyCards'

const CompanyCardsContainer = () => {
  return (
    <div className='flex gap-3 flex-wrap justify-start'>
      <CompanyCards/>
      <CompanyCards/>
      <CompanyCards/>
      <CompanyCards/>
      <CompanyCards/>
      <CompanyCards/>
    </div>
  )
}

export default CompanyCardsContainer