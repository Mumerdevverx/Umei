import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dishwasher() {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-100">
      <h1 className="text-center text-4xl text-cyan-500 py-4">Our Services</h1>
      <hr className="w-1/5 mx-auto" />

      <div className="grid grid-cols-1 p-3 w-1/4 mx-auto">
        <div className="max-w-sm border bg-slate-50 border-gray-950 rounded-lg p-4">
          <img
            className="h-32 w-full object-cover rounded-lg"
            src="https://t4.ftcdn.net/jpg/02/45/10/11/360_F_245101126_VqVSnG2rAtQPTcRWAIwRZRKoS1Kz1dPN.jpg"
            alt="Mountain"
          />
          <p className="font-extrabold text-black mt-2">Mountain</p>
          <p className="text-black bg-gray-100 font-medium">
            They define landscapes, people risk their lives to climb them, and they can even make their own weather...
          </p>
          <div className="mt-4 flex justify-center gap-2">
            <a
              href="https://www.nationalgeographic.com/science/article/mountains"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-3xl bg-black text-white inline-block"
            >
              #Mountain
            </a>
            <a
              href="https://variantlit.com/product/the-history-of-mountains/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-3xl bg-black text-white inline-block"
            >
              #History
            </a>
            <button
           
              onClick={() => navigate("/Page")}
              className="p-2 rounded-3xl bg-black text-white inline-block"
            >
              #AddView
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

