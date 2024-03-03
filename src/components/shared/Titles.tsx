// import { RxUpdate } from "react-icons/rx";

// const Titles = () => {
//   return (
//     <div className="w-full h-8 bg-slate-300 text-black flex justify-between items-center px-4 text-[10px] font-bold">
//       <div className="w-[5%] h-full  flex justify-center items-center border-2">
//         <RxUpdate />
//       </div>
//       <div className="w-[6%] freight-card">օր</div>
//       <div className="w-[5%] freight-card">տ/մ</div>
//       <div className="w-[5%] freight-card">ա/հ</div>
//       <div className="w-[20%] freight-card">բարձում</div>
//       <div className="w-[20%] freight-card">բեռնաթափում</div>
//       <div className="w-[5%] freight-card">հեռավ.</div>
//       <div className="w-[20%] freight-card">պատվիրատու</div>
//       <div className="w-[20%] freight-card">կոնտակտ</div>
//       <div className="w-[5%]freight-card">ծավալ</div>
//       <div className="w-[5%] freight-card">քաշ</div>
//       <div className="w-[6%] freight-card">գին</div>
//       <div className="w-[3%] freight-card"></div>
//     </div>
//   );
// };

// export default Titles;

import { useState } from "react";
import { RxUpdate } from "react-icons/rx";
import { useLocation } from "react-router-dom";

const Titles = () => {
  const [isUpdated, setIsUpdated] = useState(false);
  const { pathname } = useLocation();

  const handleUpdateData = () => {
    setIsUpdated(true);
    if (pathname === "/") {
    } else {
    }
    setTimeout(() => {
      setIsUpdated(false);
    }, 2000);
  };
  return (
    <div className="w-full">
      <div className="w-full h-[28px] bg-gray-300 dark:bg-[#27374D] dark:text-white text-[10px]  flex justify-around gap-[1px] font-semibold text-slate-700 mb-[2px]">
        <div className=" flex justify-start items-center pl-[12px] w-[50px] text-[14px] font-bold">
          <div title={"վերջին թարմացումը"} className="cursor-pointer">
            <span onClick={handleUpdateData}>
              <RxUpdate className={` ${isUpdated ? "animate-rotate" : ""}`} />
            </span>
          </div>
        </div>
        <div className=" flex justify-start items-center  w-[50px]">
          <div className="flex justify-start items-center" title={"բարձման օր"}>
            օր
          </div>
        </div>
        <div className=" flex justify-start items-center  w-[50px]">
          <div
            className=" flex justify-start items-center"
            title={"տրանսպորտային միջոցի տեսակը"}>
            տ/մ
          </div>
        </div>
        <div className=" flex justify-start items-center  w-[40px]">
          <div
            className=" flex justify-start items-center"
            title={"ամբողջական/հավաքական"}>
            ա/հ
          </div>
        </div>

        <div className=" flex justify-start items-center  w-[150px]">
          <div title={"բարձման վայր"}>բարձում</div>
        </div>
        <div className=" flex justify-start items-center  w-[35px]">
          <div></div>
        </div>
        <div className="flex justify-start items-center  w-[150px]">
          <div title={"բերնաթափման վայր"}>բեռնաթափում</div>
        </div>
        <div className="flex justify-start items-center  w-[70px]">
          <div title={"հեռավորություն"}>հեռավ.</div>
        </div>
        <div className="flex justify-start items-center  w-[170px]">
          <div>պատվիրատու </div>
        </div>
        <div className=" flex justify-start items-center  w-[170px]">
          <div>կոնտակտ</div>
        </div>
        <div className=" flex justify-start items-center w-[50px]">
          <div>ծավալ</div>
        </div>
        <div className=" flex justify-start items-center  w-[80px]">
          <div>քաշ</div>
        </div>
        <div className=" flex justify-start items-center  w-[70px]">
          <div>գին</div>
        </div>

        <div className="flex justify-start items-center w-[30px]"></div>
      </div>
    </div>
  );
};

export default Titles;
