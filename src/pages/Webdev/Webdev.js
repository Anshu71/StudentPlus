import Caro from './Caro';

function Webdev() {
    return (
        <div>
            <section class="text-gray-600 body-font bg-[#101828]">
                <div class="w-11/12 mx-auto flex md:py-16 py-5 md:flex-row flex-col pb-5 items-center">

                    <div class="absolute z-30 py-0 left-0 w-80 h-96  bg-gradient-to-r from-teal-100 via-indigo-500 to-pink-100 opacity-30 blur-3xl flex-none order-4 rounded-xl transform -rotate-45 pointer-events-none"></div>

                    <div class="lg:flex-grow md:w-1/2 lg:pr-0 md:pr-12 flex flex-col md:items-start md:text-left mb-10 md:mb-0 items-center text-center font-title">
                        <h1 class="2xl:text-6xl xl:text-5xl sm:text-4xl text-3xl mb-2 text-white">Web Development
                        </h1>
                        <p class="mb-8 leading-relaxed text-indigo-300 sm:text-sm text-xs">Unlock the World of Web Development: Build, Create, Innovate.</p>
                        <p class="mb-8 leading-relaxed text-[#D0D5DD] sm:text-base text-sm">Embark on a digital journey and master the art of web development. From designing captivating interfaces to crafting interactive user experiences, explore the endless possibilities of creating for the web.</p>
                        <div class="flex justify-center">
                            <button class="inline-flex text-white bg-[#01105F] shadow-base shadow-sky-500 border-sky-500 border-y-2 py-2 px-6 focus:outline-none rounded-3xl text:base md:text-lg hover:bg-blue-700 ">Road Map</button>
                        </div>
                    </div>

                    <div class=" flex sm:w-1/2">
                        <div class="hidden md:flex absolute z-30 m-14 w-48 h-52 xl:w-[500px] xl:h-[300px] bg-[#98A2B3] opacity-30 blur-2xl flex-none order-4 rounded-full pointer-events-none"></div>
                        <div class="z-50 flex align-middle rounded-xl m-2 mt-10">
                            <img class="w-full object-contain" src="images/Webdev.jpg"></img>
                        </div>
                    </div>

                </div>
            </section>

            {/* Lower Section */}

            <section class="text-gray-600 body-font bg-[#101828]">
                <div class="w-11/12 mx-auto md:py-16 py-5 pb-5">
                    <h1
                        class="lg:w-3/5 lg:text-4xl md:w-2/3 sm:w-full sm:text-3xl w-full text-2xl leading-8 mb-8 text-white font-title "
                    >
                        Matching Industry Standards with High Grade Student Trainings
                    </h1>
                    <div
                        class="grid lg:grid-rows-2 lg:grid-cols-3 sm:grid-rows-3 sm:grid-cols-2 grid-cols-1 grid-rows-6 gap-4"
                    >
                        <div>
                            <Caro />
                        </div>
                        <div
                            class="flex flex-col gap-y-3 p-4 rounded-2xl border border-[#CCC6FF] bg-[#EEECFF]"
                        >
                            <div
                                class="w-14 h-14 bg-[#A488F0] p-4 flex items-center justify-center rounded-full"
                            >
                                <img src="/misc/stacks.svg" alt="stack-of-books-icon" />
                            </div>
                            <h2 class="lg:text-2xl md:text-2xl text-xl font-title font-normal">
                                HTML
                            </h2>
                            <p class="lg:text-base md:text-sm text-[#475467] text-sm">
                            HTML, short for Hypertext Markup Language, is the foundational language of the web. It uses tags to structure and present content, such as headings, paragraphs, links, and images. By combining these tags, HTML allows for the creation of interactive and visually appealing websites.
                            </p>
                        </div>
                        <div
                            class="flex flex-col gap-y-3 p-4 rounded-2xl border border-[#FEDF89] bg-[#FFFAEB]"
                        >
                            <div
                                class="w-14 h-14 bg-[#FEC84B] p-4 flex items-center justify-center rounded-full"
                            >
                                <img src="/misc/users.svg" alt="users-icon" />
                            </div>
                            <h2 class="lg:text-2xl md:text-2xl text-xl font-title font-normal">
                                CSS
                            </h2>
                            <p class="lg:text-base md:text-sm text-[#475467] text-sm">
                            CSS, or Cascading Style Sheets, is a language used to style the appearance of HTML elements, allowing web designers to customize fonts, colors, layouts, and other visual aspects to create visually captivating and user-friendly websites.
                            </p>
                        </div>
                        <div
                            class="flex flex-col gap-y-3 p-4 rounded-2xl border border-[#FECDCA] bg-[#FEF3F2]"
                        >
                            <div
                                class="w-14 h-14 bg-[#F97066] p-4 flex items-center justify-center rounded-full"
                            >
                                <img
                                    src="/misc/workshop.svg"
                                    alt="teacher-using-a-stick-to-teach-on-board-icon"
                                />
                            </div>
                            <h2 class="lg:text-2xl md:text-2xl text-xl font-title font-normal">
                                Java Script
                            </h2>
                            <p class="lg:text-base md:text-sm text-[#475467] text-sm">
                            JavaScript, often referred to as JS, is a dynamic programming language used to create interactive web pages, implement web applications, and enhance user experience. With its versatility and widespread adoption, JavaScript plays a crucial role in modern web development.
                            </p>
                        </div>
                        <div
                            class="flex flex-col gap-y-3 p-4 rounded-2xl border border-[#A6F4C5] bg-[#ECFDF3]"
                        >
                            <div
                                class="w-14 h-14 bg-[#32D583] p-4 flex items-center justify-center rounded-full"
                            >
                                <img src="/misc/handshake.svg" alt="handshake-icon" />
                            </div>
                            <h2 class="lg:text-2xl md:text-2xl text-xl font-title font-normal">
                                Mern Stack
                            </h2>
                            <p class="lg:text-base md:text-sm text-[#475467] text-sm">
                            MERN stack, comprising MongoDB, Express.js, React.js, and Node.js, is a comprehensive web development technology stack for building feature-rich and scalable applications, from the frontend to the backend.
                            </p>
                        </div>
                        <div
                            class="flex flex-col gap-y-3 p-4 rounded-2xl border border-[#B2DDFF] bg-[#EFF8FF]"
                        >
                            <div
                                class="w-14 h-14 bg-[#84CAFF] p-4 flex items-center justify-center rounded-full"
                            >
                                <img src="/misc/book-open.svg" alt="open-book-icon" />
                            </div>
                            <h2 class="lg:text-2xl md:text-2xl text-xl font-title font-normal">
                                Mean Stack
                            </h2>
                            <p class="lg:text-base md:text-sm text-[#475467] text-sm">
                            The MEAN stack, consisting of MongoDB, Express.js, AngularJS, and Node.js, empowers developers to create robust and modern web applications using a unified JavaScript ecosystem from front to back-end.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div >
    )
}

export default Webdev