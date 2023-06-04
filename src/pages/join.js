import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Join = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    navigate(`/room/${value}`);
  }, [navigate, value]);

  return (
    <section className="text-gray-600 body-font bg-[#101828]">
    <div className="container px-3 py-12 mx-auto flex flex-wrap items-center justify-center min-h-screen">
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-0 w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Meeting Session</h2>
            <form method="post" className="form">

            <div class="relative mb-4">
             <label for="" class="leading-7 text-sm text-gray-600">Name</label>
             <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-green-400-400 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
           </div>

                <div className="relative mb-4">
                    <label for="" className="leading-7 text-sm text-gray-600">Email</label>
                    <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-green-400 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                </div>

                <div className="relative mb-4">
                    <label for="" className="leading-7 text-sm text-gray-600">Domain</label>
                    <input type="text" id="doamin" name="domain" className="w-full bg-white rounded border border-gray-300 focus:border-green-400 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                </div>

                <div class="relative mb-4">
             <label class="leading-7 text-sm text-gray-600">Room Id</label>
             <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type="text" id="rcode" name="rcode" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
          </div>


                <button className="text-white cursor-pointer bg-[#475467] border-0 py-2 px-8 focus:outline-none hover:bg-[#101828] rounded text-lg" onClick={handleJoinRoom}>Join</button>

            </form>

        </div>
    </div>
</section>
  );
};

export default Join;
