import { GiPathDistance } from "react-icons/gi";

const Freight = (props: any) => {
  console.log(props);

  return (
    <div className="w-full text-[16px]">
      <div className="w-full h-[28px] bg-slate-200 dark:bg-[#27374D] dark:text-white text-[11px]  flex justify-around gap-[1px] font-semibold text-slate-700 ">
        <div className=" flex justify-start items-center pl-[12px] w-[50px]  font-bold">
          <div title={"վերջին թարմացումը"} className="cursor-pointer">
            00:03
          </div>
        </div>
        <div className=" flex justify-start items-center  w-[50px]">
          <div className="flex justify-start items-center" title={"բարձման օր"}>
            07/11
          </div>
        </div>
        <div className=" flex justify-start items-center  w-[50px]">
          <div
            className=" flex justify-start items-center"
            title={"տրանսպորտային միջոցի տեսակը"}>
            ռեֆ
          </div>
        </div>
        <div className=" flex justify-start items-center  w-[40px]">
          <div
            className=" flex justify-start items-center"
            title={"ամբողջական/հավաքական"}>
            ա
          </div>
        </div>

        <div className=" flex justify-start items-center  w-[150px]">
          <div title={"բարձման վայր"}>Մուսկվա</div>
        </div>
        <div className=" flex justify-start items-center  w-[35px]">
          <div></div>
        </div>
        <div className="flex justify-start items-center  w-[150px]">
          <div title={"բերնաթափման վայր"}>Գյումրի</div>
        </div>
        <div className="flex justify-start items-center  w-[70px]">
          <div title={"հեռավորություն"}>2300կմ</div>
        </div>
        <div className="flex justify-start items-center  w-[170px]">
          <div className="text-blue-700">Յունայթիդ թրեյդ </div>
        </div>
        <div className=" flex justify-start items-center  w-[170px]">
          <div>044 358090</div>
        </div>
        <div className=" flex justify-start items-center w-[50px]">
          <div> 90մ³</div>
        </div>
        <div className=" flex justify-start items-center  w-[80px]">
          <div>23տ</div>
        </div>
        <div className=" flex justify-start items-center  w-[70px]">
          <div className="text-blue-700">2300$</div>
        </div>

        <div className="flex justify-start items-center w-[30px]">
          <span className="font-extrabold text-slate-600 hover:text-[#1C90F3] transition-all duration-200 cursor-pointer">
            <GiPathDistance fontSize={20} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Freight;
