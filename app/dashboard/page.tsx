import SmallCrads from "@/components/Dashboard/cards/smallCrads";
import "../globals.css";
import { UserDataGrid } from "@/components/Dashboard/UserData/UserDataGrid";
import LoanData from "@/components/Dashboard/Loans/loans";
import SavingsChart from "@/components/Dashboard/Charts/SavingsChart";
import {
  DashboardOutlined,
  UserOutlined,
  DollarOutlined
} from '@ant-design/icons';
import LoanDataChart from "@/components/Dashboard/Charts/LoanDataChart";
import ProfitChart from "@/components/Dashboard/Charts/ProfitChart";

const page =async () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 ">
        <div  className="bg-slate-200 rounded-md  h-20">
        <SmallCrads title="Total Customer" number="+1000"  icon={<UserOutlined />}/>
        </div>
        <div className="bg-slate-200 rounded-md h-20">
        <SmallCrads title="Account Balance" number="10,000" icon={<DollarOutlined />}/>
        </div>
        <div className="bg-slate-200 rounded-md h-20">
        <SmallCrads title="Active Customer" number="+500" icon={<UserOutlined />}/>
        </div>
        <div className="bg-slate-200 rounded-md h-20">
        <SmallCrads title="Outstanding Loans" number="5,000" icon={<DollarOutlined />}/>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-3">
        <div>
            <h1 className="text-lg font-bold">User Data</h1>
            <UserDataGrid/>
        </div>
        <div className="">
        <h1 className="text-lg font-bold">Monthly Savings </h1>
            {/* <LoanData/> */}
            <SavingsChart/>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-3 h-60">
        <div className="col-span-1 border-2 rounded-md">
          <LoanDataChart/>
        </div>
        <div className="col-span-1 border-2 rounded-md">
          <ProfitChart/>
        </div>
        <div className="col-span-1 border-2 rounded-md">
        <ProfitChart/>
        </div>
      </div>
      
      
    </>
  );
};

export default page;
