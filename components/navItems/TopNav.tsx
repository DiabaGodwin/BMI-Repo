import React from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from 'next/image';

const TopNav = () => {
  return (
    <>
    <div className="flex items-center justify-between p-1 h-25px">
        <div className="flex-1">
          <a className="text-xl font-semibold text-gray-800"></a>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button className="relative flex items-center justify-center w-10 h-10 text-gray-600 bg-white rounded-full shadow hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute top-0 right-0 inline-flex items-center justify-center h-4 w-4 text-xs text-white bg-red-500 rounded-full">8</span>
            </button>
            {/* <div className="absolute right-0 mt-2 w-52 bg-white rounded-md shadow-lg z-10">
              <div className="p-4">
                <span className="block text-lg font-bold">8 Items</span>
                <span className="block text-gray-500">Subtotal: $999</span>
                <button className="w-full px-4 py-2 mt-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">View cart</button>
              </div>
            </div> */}
          </div>
          <div className="relative">
            <button className="relative flex items-center justify-center w-10 h-10 text-gray-600 bg-white rounded-full shadow hover:bg-gray-100">
              <Image width={500} height={500} className="w-10 h-10 rounded-full" src="" alt="Profile" />
            </button>          

            {/* <button className="relative flex items-center justify-center w-10 h-10 text-gray-600 bg-white rounded-full shadow hover:bg-gray-100">
              <img className="w-10 h-10 rounded-full" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Profile" />
            </button> */}
            {/* <ul className="absolute right-0 mt-2 w-52 bg-white rounded-md shadow-lg z-10">
              <li className="border-b border-gray-200">
                <a className="flex items-center justify-between px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Profile
                  <span className="text-xs text-white bg-blue-500 rounded-full px-2 py-0.5">New</span>
                </a>
              </li>
              <li className="border-b border-gray-200">
                <a className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">Settings</a>
              </li>
              <li>
                <a className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">Logout</a>
              </li>
            </ul> */}
          </div>
        </div>
      </div>

      <div className="flex justify-end pr-5" >
        {/* <Space size={16} wrap>
          <Avatar size={40}>USER</Avatar>
        </Space> */}
      </div>
     
    </>
  )
}

export default TopNav
