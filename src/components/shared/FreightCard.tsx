import { FaMapMarkerAlt } from "react-icons/fa";

const FreightCard = (props: any) => {
  console.log(props);

  return (
    <div className="w-full h-8 bg-slate-300 text-black flex justify-between items-center px-4 text-[12px]">
      <div className="w-[5%] h-full  flex justify-start items-center border-2">
        00:01
      </div>
      <div className="w-[6%] h-full  flex justify-start items-center border-2">
        03/08
      </div>
      <div className="w-[5%] h-full  flex justify-start items-center border-2">
        ռեֆ
      </div>
      <div className="w-[5%] h-full  flex justify-start items-center border-2">
        ա
      </div>
      <div className="w-[20%] h-full  flex justify-start items-center border-2 line-clamp-1">
        Կիրովական
      </div>
      <div className="w-[20%] h-full  flex justify-start items-center border-2 line-clamp-1">
        Մուսկվա
      </div>
      <div className="w-[5%] h-full  flex justify-start items-center border-2 line-clamp-1">
        2300 կմ
      </div>
      <div className="w-[20%] h-full  flex justify-start items-center border-2 line-clamp-1">
        Յունայթիդ թրեյդ
      </div>
      <div className="w-[20%] h-full  flex justify-start items-center border-2 line-clamp-1">
        077 358090
      </div>
      <div className="w-[5%] h-full  flex justify-start items-center border-2">
        90 մ3
      </div>
      <div className="w-[5%] h-full  flex justify-start items-center border-2">
        22 տ
      </div>
      <div className="w-[6%] h-full  flex justify-start items-center border-2">
        3400 $
      </div>
      <div className="w-[3%] h-full  flex justify-center items-center border-2 text-[1.5em] cursor-pointer">
        <FaMapMarkerAlt />
      </div>
    </div>
  );
};

export default FreightCard;
