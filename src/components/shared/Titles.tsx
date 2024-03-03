import { RxUpdate } from "react-icons/rx";

const Titles = () => {
  return (
    <div className="w-full h-8 bg-slate-300 text-black flex justify-between items-center px-4 text-[10px]">
      <div className="w-[5%] h-full  flex justify-center items-center border-2">
        <RxUpdate />
      </div>
      <div className="w-[6%] h-full  flex justify-start items-center border-2">
        օր
      </div>
      <div className="w-[5%] h-full  flex justify-start items-center border-2">
        տ/մ
      </div>
      <div className="w-[5%] h-full  flex justify-start items-center border-2">
        ա/հ
      </div>
      <div className="w-[20%] h-full  flex justify-start items-center border-2">
        բարձում
      </div>
      <div className="w-[20%] h-full  flex justify-start items-center border-2">
        բեռնաթափում
      </div>
      <div className="w-[5%] h-full  flex justify-start items-center border-2">
        հեռավ.
      </div>
      <div className="w-[20%] h-full  flex justify-start items-center border-2">
        պատվիրատու
      </div>
      <div className="w-[20%] h-full  flex justify-start items-center border-2">
        կոնտակտ
      </div>
      <div className="w-[5%] h-full  flex justify-start items-center border-2">
        ծավալ
      </div>
      <div className="w-[5%] h-full  flex justify-start items-center border-2">
        քաշ
      </div>
      <div className="w-[6%] h-full  flex justify-start items-center border-2">
        գին
      </div>
      <div className="w-[3%] h-full  flex justify-start items-center border-2"></div>
    </div>
  );
};

export default Titles;
