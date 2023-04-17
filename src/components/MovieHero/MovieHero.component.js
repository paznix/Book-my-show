import React from "react";

const MovieHero = () => {
  return (
    <>
      <div className="md:hidden">
        <img
          src="https://i.ytimg.com/vi/63JbciGDeUQ/maxresdefault.jpg"
          alt=""
        />
      </div>

      <div className="hidden md:block lg:hidden">
        <img
          src="https://i.ytimg.com/vi/63JbciGDeUQ/maxresdefault.jpg"
          alt=""
        />
      </div>

      <div
        className="relative w-full hidden lg:block"
        style={{ height: "33rem", backgroundColor: "rgb(26, 26, 26)" }}
      >
        <div className="flex">
          <div className="container relative mx-auto flex">
            <img
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-Mi40SyBsaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00355970-dlsfedrlqz-portrait.jpg"
              alt="poster"
              className="w-54 h-96 rounded-xl absolute z-20 flex top-
               "
            />
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
