import {
  Eye,
  ShoppingCart,
  ShoppingBag,
  Users,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

import { Wrapper } from "./ecom.style";

function Ecommerce() {
  return (
    <div className="p-5">
      <div className="w-full grid sm:grid-cols-1 md:grid-cols-4 gap-4 ">
        <div className=" p-4 bg-white flex flex-col">
          <span className="icons w-10 h-10 rounded-3xl bg-slate-100 flex justify-center items-center  mb-3">
            <Eye className="size-6 text-blue-400" />
          </span>

          <span className="costs font-bold text-xl mb-3">$3.456K</span>

          <div className="flex justify-between items-center">
            <p>Total views</p>
            <p className="text-green-500 flex items-center">
              0.43% <ArrowUp className="size-4 mx-1" />
            </p>
          </div>
        </div>

        <div className="p-4 bg-white flex flex-col">
          <span className="icons w-10 h-10 rounded-3xl bg-slate-100 flex justify-center items-center mb-3">
            <ShoppingCart className="size-6 text-blue-400" />
          </span>
          <span className="costs font-bold text-xl mb-3">$45,2K</span>
          <div className="flex justify-between items-center">
            <p>Total Profit</p>
            <p className="text-green-500 flex items-center">
              4.35%
              <ArrowUp className="size-4 mx-1" />
            </p>
          </div>
        </div>

        <div className="p-4 bg-white flex flex-col">
          <span className="icons w-10 h-10 rounded-3xl bg-slate-100 flex justify-center items-center mb-3">
            <ShoppingBag className="size-6 text-blue-400" />
          </span>
          <span className="costs font-bold text-xl mb-3">2.450</span>
          <div className="flex justify-between items-center">
            <p>Total Product</p>
            <p className="text-green-500 flex items-center">
              2.59%
              <ArrowUp className="size-4 mx-1" />
            </p>
          </div>
        </div>

        <div className="p-4 bg-white flex flex-col">
          <span className="icons w-10 h-10 rounded-3xl bg-slate-100 flex justify-center items-center mb-3">
            <Users className="size-6 text-blue-400" />
          </span>
          <span className="costs font-bold text-xl mb-3">3.456</span>
          <div className="flex justify-between items-center">
            <p>Total Users</p>
            <p className="text-green-500 flex items-center">
              0.95%
              <ArrowDown className="size-4 mx-1" />
            </p>
          </div>
        </div>
      </div>

      <Wrapper>
        <div className="bg-slate-300"></div>
        <div className="bg-slate-300"></div>
      </Wrapper>
    </div>
  );
}

export default Ecommerce;
