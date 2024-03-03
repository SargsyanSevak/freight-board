// import { FaMapMarkerAlt } from "react-icons/fa";

// const FreightCard = (props: any) => {
//   console.log(props);

//   return (
//     <div className="w-full h-8 bg-slate-300 text-black flex justify-between items-center px-4 text-[12px]">
//       <div className="w-[5%] h-full  flex justify-start items-center border-2">
//         00:01
//       </div>
//       <div className="w-[6%] h-full  flex justify-start items-center border-2">
//         03/08
//       </div>
//       <div className="w-[5%] h-full  flex justify-start items-center border-2">
//         ռեֆ
//       </div>
//       <div className="w-[5%] h-full  flex justify-start items-center border-2">
//         ա
//       </div>
//       <div className="w-[20%] h-full  flex justify-start items-center border-2 line-clamp-1">
//         Կիրովական
//       </div>
//       <div className="w-[20%] h-full  flex justify-start items-center border-2 line-clamp-1">
//         Մուսկվա
//       </div>
//       <div className="w-[5%] h-full  flex justify-start items-center border-2 line-clamp-1">
//         2300 կմ
//       </div>
//       <div className="w-[20%] h-full  flex justify-start items-center border-2 line-clamp-1">
//         Յունայթիդ թրեյդ
//       </div>
//       <div className="w-[20%] h-full  flex justify-start items-center border-2 line-clamp-1">
//         077 358090
//       </div>
//       <div className="w-[5%] h-full  flex justify-start items-center border-2">
//         90 մ3
//       </div>
//       <div className="w-[5%] h-full  flex justify-start items-center border-2">
//         22 տ
//       </div>
//       <div className="w-[6%] h-full  flex justify-start items-center border-2">
//         3400 $
//       </div>
//       <div className="w-[3%] h-full  flex justify-center items-center border-2 text-[1.5em] cursor-pointer">
//         <FaMapMarkerAlt />
//       </div>
//     </div>
//   );
// };

// export default FreightCard;

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import { HiArrowRight } from "react-icons/hi";

import { Link } from "react-router-dom";
import { GiPathDistance } from "react-icons/gi";
import { useState } from "react";

const AccordionItemDesktop = (props: any) => {
  console.log(props);

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <>
      <Accordion className="w-full text-black" as="div">
        <AccordionItem>
          <AccordionHeader className="AccordionHeader" as="div">
            <div
              className="max-w-[2000px] lg:flex hidden "
              onClick={handleClick}>
              <div
                className={`w-full  h-[35px] bg-slate-200 dark:bg-slate-700 dark:text-slate-200  text-[12px] ${
                  clicked ? "font-normal" : "font-semibold"
                } flex justify-around gap-[1px]`}>
                <div className="flex justify-start items-center  w-[50px]">
                  <div className="flex justify-start items-center">00:01</div>
                </div>
                <div className=" flex justify-start items-center  w-[50px]">
                  <div className="w-full flex justify-start items-center ">
                    03/24
                  </div>
                </div>
                <div className="flex justify-start items-center  w-[50px]">
                  <div className="w-full flex justify-start items-center">
                    ռեֆ
                  </div>
                </div>
                <div className=" flex justify-start items-center  w-[40px]">
                  <div className="w-full flex justify-start items-center">
                    ա
                  </div>
                </div>

                <div className="flex justify-start items-center  w-[150px]">
                  <div className="w-full flex justify-start items-center">
                    Մուսկվա
                  </div>
                </div>
                <div className=" flex justify-start items-center  w-[35px]">
                  <div>
                    <HiArrowRight />
                  </div>
                </div>
                <div className=" flex justify-start items-center  w-[150px]">
                  <div className="w-full flex justify-start items-center">
                    Երեվան
                  </div>
                </div>
                <div className=" flex justify-start items-center  w-[70px]">
                  <div className="w-full flex justify-start items-center">
                    <p className="flex justify-start items-center w-full">
                      {" "}
                      2300կմ
                    </p>
                  </div>
                </div>
                <div className=" flex justify-start items-center w-[170px] text-[#1C90F3]">
                  <div className="w-full flex justify-start items-center">
                    Յունայթիդ թրեյդ
                  </div>
                </div>
                <div className=" flex justify-start items-center  w-[170px] overflow-hidden">
                  <div
                    className="cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}>
                    044 358090
                  </div>
                </div>
                <div className=" flex justify-start items-center  w-[50px]">
                  <div className="w-full flex justify-start items-center">
                    90մ³
                  </div>
                </div>
                <div className=" flex justify-start items-center  w-[80px]">
                  <div className="w-full flex justify-start items-center">
                    22տ
                  </div>
                </div>
                <div className="flex justify-start items-center  w-[70px]">
                  <div className="w-full flex justify-start items-center text-[#1C90F3]">
                    2300$
                  </div>
                </div>

                <div
                  className="flex justify-center items-center  w-[30px]"
                  title="Դիտել քարտեզի վրա">
                  <Link
                    to={`/dashboard/preview/1`}
                    target="_blank"
                    type="button"
                    className="flex justify-center items-center"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}>
                    <span className="font-extrabold text-slate-600 hover:text-[#1C90F3] transition-all duration-200">
                      <GiPathDistance fontSize={20} />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </AccordionHeader>
          <AccordionBody className="AccordionBody w-full bg-gray-300  dark:text-white dark:bg-[#132b46]">
            <div className="w-full h-28 flex flex-col gap-2 justify-center px-4">
              <div className="text-[12px] flex items-center gap-2">
                <h4 className="font-bold">Բեռը `</h4> <p>գառ</p>
              </div>

              <div className="text-[12px] flex items-center gap-2">
                <h4 className="font-bold">Նշում `</h4> <p>ձեւֆնւեձֆձւեբֆւձեֆ</p>
              </div>

              <div className="text-[12px] flex items-center gap-2">
                <h4 className="font-bold">Վճարում `</h4> <p>{"7 աշխ. օր"}</p>
              </div>
            </div>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default AccordionItemDesktop;
