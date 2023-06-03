import React from "react";

function Login() {
    return (
        // <section className="text-gray-600 body-font bg-gradient-to-r from-[#2DFFF5] to-[#FFF878]">
        <section className="text-gray-600 body-font bg-[#101828]">
            <div className="container px-3 py-12 mx-auto flex flex-wrap items-center justify-center min-h-screen">
                <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-0 w-full mt-10 md:mt-0">
                    <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Log In</h2>
                    <form action="/login_validation" method="post" className="form">
                        <div className="relative mb-4">
                            <label for="" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-green-400 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                        </div>

                        <div className="relative mb-4">
                            <label for="" className="leading-7 text-sm text-gray-600">Password</label>
                            <input type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-green-400 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                        </div>

                        <input type="submit" className="text-white cursor-pointer bg-[#475467] border-0 py-2 px-8 focus:outline-none hover:bg-[#101828] rounded text-lg" value="Login"></input>

                    </form>
                    <p className="text-sm text-gray-500 mt-3"><a href="/signup"><u>Create an Account</u></a></p>
                    <p className="text-xs text-gray-500 mt-3">By signing up, you agree to <a href="#"><u>Terms of Use</u></a> and <a href="#"> <u> Privacy Policy</u></a>.</p>

                </div>
            </div>
        </section>
    );
}

export default Login;