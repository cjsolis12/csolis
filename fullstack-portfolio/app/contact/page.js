export default function contact() {
  return (
    <>
          <div className="px-4 md:w-10/12 xl:w-8/12 mx-auto text-center text-white py-16">
        <h1 className=" text-rose-300 text-2xl md:text-4xl font-medium mb-4">Contact Me</h1>
  
      </div>
      <div className="flex justify-center items-center">
        <div className="lg:w-1/3 md:w-1/2  bg-white opacity-80 rounded-lg p-8 flex flex-col justify-center">
          <h2 className="text-gray-900 text-3xl mb-1 font-medium title-font">
            Let's Talk!
          </h2>

          <div className="relative mb-4">
            <label for="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 py-2 px-3 text-base outline-none text-gray-700 leading-6 transition-colors duration-200 ease-in-out"
          />
          </div>
          <div className="relative mb-4">
            <label for="message" className="leading-7 text-sm text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white bg-rose-300 border-0 py-2 px-6 focus:outline-none hover:bg-rose-400 rounded text-lg">
            Button
          </button>
        </div>
      </div>
    </>
  );
}
