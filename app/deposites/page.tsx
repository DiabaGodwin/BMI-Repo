
import DepositeChart from '@/components/deposit/DepositeChart'
import DepositeDataGrid from '@/components/deposit/DepositeDataGrid'
import DepositForm from '@/components/deposit/DepositeForm'
import React from 'react'

const Deposites = () => {
  return (
    <>
    <h1>Deposites</h1>
    <DepositForm />
    <div className=" h-80 mt-3" style={{fontSize:"20px" ,fontWeight:"400"}}>
      <h1 className="text-sans text-bold">Deposite Chart</h1>
      <DepositeChart/>
    </div>

    <div className="mt-5">
      <h1 className="text-sans text-bold" style={{fontSize:"20px" ,fontWeight:"400"}}>Withdrawal Data</h1>
      <DepositeDataGrid/>
    </div>
  </>
  )
}

export default Deposites
