
import React, { useState } from 'react';

function Signup() {
    return (
        <section class="text-gray-600 body-font bg-gradient-to-r from-[#2DFFF5] to-[#FFF878]">
            <div class="container px-3 py-12 mx-auto flex flex-wrap items-center justify-center min-h-screen">
                <form class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-0 mt-10 md:mt-0" method="POST" action="/add_user">
                    <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Register</h2>
                    <div class="relative mb-4">
                        <label for="" class="leading-7 text-sm text-gray-600">Username</label>
                        <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-green-400-400 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                    </div>
                    <div class="relative mb-4">
                        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-green-400 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                    </div>
                    <div class="relative mb-4">
                        <label for="password" class="leading-7 text-sm text-gray-600">Password</label>
                        <input type="password" id="password" name="password" class="w-full bg-white rounded border border-gray-300 focus:border-green-400 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                    </div>
                    <div class="relative mb-4">
                        <label for="cpassword" class="leading-7 text-sm text-gray-600">Confirm Password</label>
                        <input type="password" id="cpassword" name="cpassword" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                    </div>
                    <input type="submit" class="text-white bg-green-400 border-0 py-2 px-8 focus:outline-none hover:bg-black rounded text-lg" value="Register"></input>
                    <p class="text-sm text-gray-500 mt-3"><a href="login.html"><u>Already have an account.</u></a></p>
                    <p class="text-xs text-gray-500 mt-3">By signing up, you agree to <a href="#"><u>Terms of Use</u></a> and <a href="#"> <u> Privacy Policy</u></a>.</p>
                </form>
            </div>
        </section>
    )
}

export default Signup