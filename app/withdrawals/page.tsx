'use client'
import WithdrawalChart from '@/components/Withdrawals/WithdrawalChart'
import WithdrawalData from '@/components/Withdrawals/WithdrawalData'
import WithdrawalForm from '@/components/Withdrawals/WithdrawalForm'
import React from 'react'
import '../globals.css'

const Withdrawals = () => {
  return (
    <>
      <h1>Withdrawals</h1>
      <WithdrawalForm />
      <div className=" h-80 mt-3" style={{fontSize:"20px" ,fontWeight:"400"}}>
        <h1 className="text-sans text-bold">Withdrawal Chart</h1>
        <WithdrawalChart/>
      </div>

      <div className="mt-5">
        <h1 className="text-sans text-bold" style={{fontSize:"20px" ,fontWeight:"400"}}>Withdrawal Data</h1>
        <WithdrawalData/>
      </div>
    </>
  )
}

export default Withdrawals
