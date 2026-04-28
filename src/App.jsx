import "./App.css";

function App() {
  return (
    <main className="min-h-screen flex justify-center items-center bg-gray-100">
      {/* container start */}
      <div className="w-full max-w-sm bg-white rounded-xl shadow-lg px-8 py-10">
        {/* logo start */}
        <div className="flex justify-center font-poppins text-[#299d91] tracking-wide text-4xl mb-8">
          <span className="font-bold">FINE</span>
          bank
          <span className="font-bold">.IO</span>
        </div>
        {/* logo end */}

        {/* form start */}
        <div>
          <form action="" className="flex flex-col gap-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-700 mb-1.5"
              >
                Email address
                
              </label>
              <input
                type="email"
                className="text-sm rounded-md w-full bg-gray-50 border border-gray-200 text-gray-800 px-4 py-2.5 focus:border-[#299d91] focus:outline-none focus:ring-1 focus:ring-[#299d91] placeholder-gray-400"
                placeholder="hello@example.com"
                name="email"
                id="email"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm text-gray-700 mb-1.5"
              >
                Password
              </label>
              <input
                type="password"
                className="text-sm rounded-md w-full bg-gray-50 border border-gray-200 text-gray-800 px-4 py-2.5 focus:border-[#299d91] focus:outline-none focus:ring-1 focus:ring-[#299d91] placeholder-gray-400"
                placeholder="************"
                name="password"
                id="password"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="text-sm accent-[#299d91] w-4 h-4 cursor-pointer"
                name="status"
                id="status"
              />
              <label htmlFor="status" className="text-sm text-gray-500 cursor-pointer">
                Keep me signed in
              </label>
            </div>
            <button
              className="rounded-md text-sm bg-[#299d91] w-full text-white font-medium py-2.5 hover:bg-[#238a7f] transition-colors cursor-pointer"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
        {/* form end */}

        {/* teks start */}
        <div className="flex items-center my-6 ">
          <div className="flex-1 h-px bg-gray-200"></div>
          <div className="px-4 text-xs text-gray-400 whitespace-nowrap"> or sign in with</div>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>
        {/* teks end */}
        {/* sign in with google start */}
        <div>
          <button
            className="flex items-center justify-center gap-2 rounded-md text-sm w-full bg-gray-50 border border-gray-200 text-gray-700 font-medium py-2.5 hover:bg-gray-100 transition-colors cursor-pointer"
            type="button"
          >
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-0.5 0 48 48"
              version="1.1"
            >
              <path
                d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                fill="#FBBC05"
              />
              <path
                d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                fill="#EB4335"
              />
              <path
                d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                fill="#34A853"
              />
              <path
                d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                fill="#4285F4"
              />
            </svg>
            <span>Continue with Google</span>
          </button>
        </div>
        {/* sign in with google end */}

        {/* link start */}
        <div className="flex justify-center mt-6">
          <a
            href="#"
            className="text-[#299d91] text-sm font-bold hover:underline cursor-pointer"
          >
            Create an account
          </a>
        </div>
        {/* link end */}
      </div>
      {/* container end */}
    </main>
  );
}

export default App;

// import "./App.css";

// function App() {
//   return (
//     <>
//       <h1 className="text-3xl font-bold">Ini font default</h1>
//       <h1 className="text-3xl font-bold font-poppins">Ini font Poppins</h1>
//       <p>
//         Ini font default juga. Lorem ipsum dolor sit, amet consectetur
//         adipisicing elit. Illum perferendis dolores provident debitis,
//         necessitatibus ullam, quibusdam dolore cumque velit, molestias
//         recusandae exercitationem pariatur. Quas ullam aliquid ea. Repellat,
//         exercitationem similique!
//       </p>
//     </>
//   );
// }

// export default App;



// import "./App.css";

// function App() {
//   const courses = [
//     {
//       title: "System Administration and IT Infrastructure Services",
//     },
//     {
//       title: "Operating Systems Becoming a Power User",
//     },
//     {
//       title: "The Bits and Bytes of Computer Networking",
//     },
//     {
//       title: "Technical Support Fundamentals",
//     },
//     {
//       title: "How to Succeed at: Writing Applications",
//     },
//     {
//       title: "Medicine Administration for Carers",
//     },
//   ];

//   return (
//     <>
//       <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
//         {courses.map((course, index) => (
//           <div key={index} className="shadow rounded-lg overflow-hidden flex flex-col hover:border-2 border-gray-500 hover:shadow-lg hover:scale-105 transition duration-300">
//             {/* Image */}
//             <img
//               src="https://www.placehold.co/200x400"
//               alt={course.title}
//               className="w-full h-80 object-cover"
//             />

//             {/* Content */}
//             <div className="p-4 bg-red-200 flex flex-col justify-between h-full">
//               <h3 className="text-black font-semibold mb-4">{course.title}</h3>


//               <div className="bg-red-50 p-2 rounded-lg">
//                 <div className="text-sm text-gray-500 mt-2">
//                   <span>👥 123 users</span>
//                   <span>⏱ 60</span>
//                 </div>

//                 {/* Author */}
//                 <div className="mt-3 flex items-center gap-2">
//                   <img
//                     src="https://www.placehold.co/50x50"
//                     alt="Author's Avatar"
//                     className="w-12 h-12 rounded-full object-cover"
//                   />
//                   <div>
//                     <p className="text-sm font-medium">Author's Name</p>
//                     <p className="text-xs text-gray-500">Designer</p>
//                   </div>
//                 </div>
//               </div>

//                {/* Footer */}
//               <div className="mt-4 flex items-center justify-between">
//                 <div className="bg-white text-black py-2 px-4 rounded">$123</div>
//                 <button className="bg-red-700 hover:bg-red-900 active:bg-red-500 text-white px-4 py-2 rounded text-sm">
//                   Get Started
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default App;
