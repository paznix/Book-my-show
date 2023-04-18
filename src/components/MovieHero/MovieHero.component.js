import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BiChevronRight, BiShareAlt } from "react-icons/bi";

const MovieHero = () => {
  return (
    <>
      <div className=" lg:hidden">
        <img
          src="https://i.ytimg.com/vi/63JbciGDeUQ/maxresdefault.jpg"
          alt=""
          className=" rounded-b-3xl shadow-lg"
        />
        <div className="container mx-auto flex flex-col gap-4 mt-4">
          <div className="flex items-center gap-3 text-black  ">
            <AiFillStar className="text-button h-10 w-10" />
            <h2 className=" font-bold text-2xl">7.2/10</h2>
            <span className="font-thin text-sm pl-3 flex items-center">
              176 votes <BiChevronRight className="pt-1" />
            </span>
          </div>
          <div className="bg-gray-200 rounded-3xl flex flex-row justify-between p-5 gap-6 backdrop-blur-lg backdrop-filter bg-opacity-80">
            <div>
              <h2 className="font-bold text-xl text-black">
                Add your Rating & Review
              </h2>
              <span className="text-gray-400">Your Ratings Matter</span>
            </div>
            <button className="bg-white border-button border text-button font-bold px-3 py-1 rounded-xl focus:bg-gray-200 hover:shadow-md">
              Rate now
            </button>
          </div>
          <div className="flex flex-row ml-1 gap-2">
            <button className=" bg-gray-100 px-1 border rounded-sm border-b-slate-400">
              2D
            </button>
            <button className=" bg-gray-100 border border-b-slate-400 px-1 rounded">
              Punjabi
            </button>
          </div>
          <div className="container bottom-2 fixed mx-auto">
            <button className="text-white w-full font-bold text-lg bg-button mb-2 py-4 text-center rounded-lg">
              Book Tickets
            </button>
          </div>
        </div>
      
      </div>

      {/* <div className="hidden md:block lg:hidden">
        <img
          src="https://i.ytimg.com/vi/63JbciGDeUQ/maxresdefault.jpg"
          alt=""
        />
      </div> */}

      <div
        className="relative w-full hidden lg:block"
        style={{ height: "33rem", backgroundColor: "rgb(26, 26, 26)" }}
      >
        <div className=" container mx-auto relative">
          <div className="flex flex-row">
            <div className="absolute z-20 top-16 flex flex-row">
              <img
                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-Mi40SyBsaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00355970-dlsfedrlqz-portrait.jpg"
                alt="poster"
                className="w-54 h-96 rounded-xl"
              />
              <div className="pl-10 flex flex-col gap-8">
                <h1 className="text-white font-bold text-5xl ">
                  Yaaran Da Rutbaa
                </h1>
                <div className="flex items-center gap-3 text-white">
                  <AiFillStar className="text-button h-10 w-10" />
                  <h2 className=" font-bold text-3xl">7.2/10</h2>
                  <span className="font-thin text-sm pl-3 flex items-center">
                    176 votes <BiChevronRight className="pt-1" />
                  </span>
                </div>

                <div className="bg-gray-700 rounded-xl flex flex-row p-5 gap-6 backdrop-blur-lg backdrop-filter bg-opacity-80">
                  <div>
                    <h2 className="font-bold text-xl text-gray-300">
                      Add your Rating & Review
                    </h2>
                    <span className="text-gray-400">Your Ratings Matter</span>
                  </div>
                  <button className="bg-gray-100 font-bold px-3 py-1 rounded-xl hover:bg-gray-200 hover:shadow-md">
                    Rate now
                  </button>
                </div>

                <div className="flex flex-row ml-1 gap-2">
                  <button className=" bg-gray-300 px-1 border-1">2D</button>
                  <button className=" bg-gray-300 px-1 border-1">
                    Punjabi
                  </button>
                </div>

                <div>
                  <button className="text-white font-bold text-lg bg-button px-8 py-3 text-center rounded-lg">
                    Book Tickets
                  </button>
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-white">About The Movie</h1>
            </div>

            <button className="text-white absolute gap-3 top-16 right-16 rounded-xl px-4 py-2 items-center justify-around bg-gray-800 bg-opacity-70 backdrop-blur backdrop-filter flex flex-row">
              <BiShareAlt />
              Share
            </button>
          </div>
        </div>

        <div
          className="absolute h-full w-full z-10"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%)",
          }}
        />
        <div className=" w-full overflow-y-clip h-full">
          <img
            className=" w-full"
            src="https://i.ytimg.com/vi/63JbciGDeUQ/maxresdefault.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default MovieHero;
