'use client'
import WithdrawalChart from '@/components/Withdrawals/WithdrawalChart'
import WithdrawalData from '@/components/Withdrawals/WithdrawalData'
import WithdrawalForm from '@/components/Withdrawals/WithdrawalForm'
import React from 'react'

const Withdrawals = () => {
  return (
    <>
      <h1>Withdrawals</h1>
      <WithdrawalForm />
      <div className="">
        <h1>Withdrawal Chart</h1>
        <WithdrawalChart/>
      </div>

      <h1>Withdrawal Data</h1>
      <div className="mt-4 bg-slate-300">
        <WithdrawalData/>
      </div>
    </>
  )
}

export default Withdrawals
