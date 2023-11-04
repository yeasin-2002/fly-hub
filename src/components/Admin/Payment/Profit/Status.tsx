import React, { SVGProps } from "react";
import { Button } from "shadcn/components/ui/button";

const Status = ({ name, data }: { name: string; data: string }) => {
  return (
    <div className="relative  mt-2 min-h-[150px] w-full overflow-hidden rounded-md bg-white p-2 shadow-inner">
      <div className="absolute -right-[4rem] -top-[4rem] h-[8rem] w-[8rem] rounded-full bg-slate-300"></div>
      <div className="absolute -right-[8rem] -top-[8rem] h-[16rem] w-[16rem] rounded-full bg-slate-400/50"></div>
      <div className="absolute bottom-[-2rem] left-[-2rem] h-[16rem] w-[16rem] rounded-full text-[250px] text-slate-100">
        %
      </div>
      <div className="relative z-10 flex items-center justify-between">
        <h1>{name}</h1>
        <button className="p-1">
          <Edit />
        </button>
      </div>
      <div className="relative z-10 mt-3 text-7xl font-bold text-slate-700">{data}%</div>
    </div>
  );
};

export default Status;

export function Edit(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <path
          strokeLinecap="round"
          d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5"
          opacity=".5"
        ></path>
        <path d="m17.3 2.806l-.648.65l-5.965 5.964c-.404.404-.606.606-.78.829c-.205.262-.38.547-.524.848c-.121.255-.211.526-.392 1.068L8.412 13.9l-.374 1.123a.742.742 0 0 0 .94.939l1.122-.374l1.735-.579c.542-.18.813-.27 1.068-.392c.301-.144.586-.32.848-.524c.223-.174.425-.376.83-.78l5.964-5.965l.649-.649A2.753 2.753 0 0 0 17.3 2.806Z"></path>
        <path
          d="M16.652 3.455s.081 1.379 1.298 2.595c1.216 1.217 2.595 1.298 2.595 1.298M10.1 15.588L8.413 13.9"
          opacity=".5"
        ></path>
      </g>
    </svg>
  );
}
