export default function Hero() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col justify-between lg:flex-row">
        <div className="mb-12 lg:max-w-lg lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              By the community
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Work In Progress
            </p>
          </div>
          <hr className="mb-6 border-gray-300" />
          <div className="flex">
            <a href="/" aria-label="Play Song" className="mr-3">
              <div
                className="flex items-center justify-center w-10 h-10 text-white transition duration-300 transform 
              rounded-full shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 hover:scale-110"
              >
                <svg className="w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,
                  6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,
                  0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,
                  12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z"
                  />
                </svg>
              </div>
            </a>
            <div className="flex flex-col">
              <div className="text-sm font-semibold">methlox</div>
              <div className="text-xs text-gray-700">
                Paper Planes Initiative
              </div>
            </div>
          </div>
        </div>
        <div className="px-5 pt-6 pb-5 text-center border border-gray-300 rounded lg:w-2/5">
          <div className="mb-5 font-semibold">Create an account</div>
          <div className="flex justify-center w-full mb-3">
            <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium 
              tracking-wide text-white transition duration-200 rounded shadow-md 
              md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              <div className="flex items-center">
                <div className="mr-3 font-semibold text-black">
                  Login with Google
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="black"
                  className="bi bi-google"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />{" "}
                </svg>
              </div>
            </a>
          </div>
          <div className="flex items-center w-full mb-5">
            <hr className="flex-1 border-gray-300" />
            <div className="px-3 text-xs text-gray-500 sm:text-sm">or</div>
            <hr className="flex-1 border-gray-300" />
          </div>
          <a
            href="/"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold transition duration-200 bg-white border border-gray-300 rounded md:w-auto hover:bg-gray-100 focus:shadow-outline focus:outline-none"
          >
            Sign Up with Email
          </a>
          <p className="max-w-md px-5 mb-3 text-xs text-gray-600 sm:text-sm md:mb-5">
            Already have an account?
          </p>
        </div>
      </div>
    </div>
  );
}
