import React from 'react'
import "../globals.css"
import { UserDataGrid } from '@/components/Dashboard/UserData/UserDataGrid'
import { CustomerDetails } from '@/components/Customers/CustomerDetails/CustomerDetails'
import {customers, columns} from '../../components/Customers/CustomerDetails/data'
import { AddCustomerForm } from '@/components/Customers/AddCustomerForm'


const CustomersPage = () => {
  return (
    <>
    <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-1">
      <div className="text-xl">
        <h1>Create New Account</h1>
        <AddCustomerForm/>
      </div>
      <div className="col-span-2 rounded-xl">
      <h1 className='text-xl'>Customer List</h1>
        {/* <UserDataGrid/> */}
        <CustomerDetails columns={columns} data={customers}/>
      </div>
    </div>
    </>
  )
}

export default CustomersPage
