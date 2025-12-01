import "./App.css";
import DateSvg from "./assets/images/date.svg";

function App() {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto py-4 px-2 max-w-screen-xl sm:py-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  Wines
                </h3>
              </a>
            </div>
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
              >
                <img
                  src="https://images.unsplash.com/photo-1504675099198-7023dd85f5a3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  Gin
                </h3>
              </a>
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src="https://images.unsplash.com/photo-1571104508999-893933ded431?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    Whiskey
                  </h3>
                </a>
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src="https://images.unsplash.com/photo-1626897505254-e0f811aa9bf7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    Vodka
                  </h3>
                </a>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src="https://images.unsplash.com/photo-1693680501357-a342180f1946?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  Brandy
                </h3>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-full px-4 py-16">
        <h2 className="text-center text-4xl font-bold">Happy Customers</h2>
        <p className="pt-6 pb-8 text-base max-w-2xl text-center m-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          voluptas nisi ducimus architecto quisquam inventore sed reiciendis!
          Ipsum velit veniam, animi ea eveniet atque, placeat magni in nisi
          earum dolor, corrupti vero praesentium aperiam quia autem rem. Enim,
          eligendi animi consectetur ipsa dignissimos beatae doloribus
          doloremque tenetur voluptatem ut labore!
        </p>
        <div className="grid justify-center items-center w-full mx-auto max-w-4xl bg-white grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img
              alt=""
              className="h-20  mx-auto"
              src="https://www.svgrepo.com/show/442910/brand-apple.svg"
            ></img>
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img
              alt=""
              className="h-20  mx-auto"
              src="https://www.svgrepo.com/show/443329/brand-pixar.svg"
            ></img>
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img
              alt=""
              className="h-20  mx-auto"
              src="https://www.svgrepo.com/show/443079/brand-geforce.svg"
            ></img>
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img
              alt=""
              className="h-20  mx-auto"
              src="https://www.svgrepo.com/show/443042/brand-ethereum.svg"
            ></img>
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img
              alt=""
              className="h-20  mx-auto"
              src="https://www.svgrepo.com/show/443206/brand-line.svg"
            ></img>
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img
              alt=""
              className="h-20  mx-auto"
              src="https://www.svgrepo.com/show/519278/slack.svg"
            ></img>
          </a>
        </div>
      </div>
      <main className="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">
        <header className="h-24 sm:h-32 flex items-center z-30 w-full">
          <div className="container mx-auto px-6 flex items-center justify-between">
            <div className="uppercase text-gray-800 dark:text-white font-black text-3xl">
              Watch.ME
            </div>
            <div className="flex items-center">
              <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
                <a href="#" className="py-2 px-6 flex">
                  Home
                </a>
                <a href="#" className="py-2 px-6 flex">
                  Watch
                </a>
                <a href="#" className="py-2 px-6 flex">
                  Product
                </a>
                <a href="#" className="py-2 px-6 flex">
                  Contact
                </a>
                <a href="#" className="py-2 px-6 flex">
                  Carrer
                </a>
              </nav>
              <button className="lg:hidden flex flex-col ml-4">
                <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
                <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
                <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
              </button>
            </div>
          </div>
        </header>
        <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
          <div className="container mx-auto px-6 flex relative py-16">
            <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
              <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
              <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                Be on
                <span className="text-5xl sm:text-7xl">Time</span>
              </h1>
              <p className="text-sm sm:text-base text-gray-700 dark:text-white">
                Dimension of reality that makes change possible and
                understandable. An indefinite and homogeneous environment in
                which natural events and human existence take place.
              </p>
              <div className="flex mt-8">
                <a
                  href="#"
                  className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
                >
                  Get started
                </a>
                <a
                  href="#"
                  className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md"
                >
                  Read more
                </a>
              </div>
            </div>
            <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
              <img
                src="https://www.tailwind-kit.com/images/object/10.png"
                className="max-w-xs md:max-w-sm m-auto"
              />
            </div>
          </div>
        </div>
      </main>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Before they sold out
              <br className="hidden lg:inline-block" />
              readymade gluten
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div>
          </div>

          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
        </div>
      </section>
      <section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Data to enrich your</span>
              <span className="block text-indigo-600 xl:inline">
                online business
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>

            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                >
                  Live demo
                </a>
              </div>
            </div>
          </div>

          <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
              alt=""
            />
          </div>
        </div>
      </section>
      <div className="bg-gray-200 mt-16">
        <div className="container mx-auto py-8 px-4 md:px-0 md:flex md:justify-center md:items-center">
          <div className="md:w-1/2 lg:w-1/3 md:mr-8">
            <h1 className="text-3xl font-bold mb-4">Responsive Design</h1>
            <p className="text-lg mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              ullamcorper euismod massa eget dapibus. Sed in leo vel justo
              blandit faucibus id nec sapien.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Learn More
            </button>
          </div>
          <div className="md:w-1/2 lg:w-2/3 mt-8 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
              alt="Responsive Design"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          <div className="rounded overflow-hidden shadow-lg">
            <a href="#"></a>
            <div className="relative">
              <a href="#">
                <img
                  className="w-full"
                  src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                  alt="Sunset in the mountains"
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </a>
              <a href="#!">
                <div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                  Photos
                </div>
              </a>

              <a href="!#">
                <div className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                  <span className="font-bold">27</span>
                  <small>March</small>
                </div>
              </a>
            </div>
            <div className="px-6 py-4">
              <a
                href="#"
                className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
              >
                Best View in Newyork City
              </a>
              <p className="text-gray-500 text-sm">
                The city that never sleeps
              </p>
            </div>
            <div className="px-6 py-4 flex flex-row items-center">
              <a
                href="#"
                className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center"
              >
                <img
                  src={DateSvg}
                  alt=""
                  style={{ width: "16px", height: "16px" }}
                />
                <span className="ml-1">6 mins ago</span>
              </a>
            </div>
          </div>
          <div className="rounded overflow-hidden shadow-lg">
            <a href="#"></a>
            <div className="relative">
              <a href="#">
                <img
                  className="w-full"
                  src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                  alt="Sunset in the mountains"
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </a>
              <a href="#!">
                <div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                  Photos
                </div>
              </a>

              <a href="!#">
                <div className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                  <span className="font-bold">20</span>
                  <small>March</small>
                </div>
              </a>
            </div>
            <div className="px-6 py-4">
              <a
                href="#"
                className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
              >
                Best Pizza in Town
              </a>
              <p className="text-gray-500 text-sm">
                The collection of best pizza images in Newyork city
              </p>
            </div>
            <div className="px-6 py-4 flex flex-row items-center">
              <a
                href="#"
                className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row justify-between items-center"
              >
                <img
                  src={DateSvg}
                  alt=""
                  style={{ width: "16px", height: "16px" }}
                />
                <span className="ml-1">3 mins read</span>
              </a>
            </div>
          </div>
          <div className="rounded overflow-hidden shadow-lg">
            <a href="#"></a>
            <div className="relative">
              <a href="#">
                <img
                  className="w-full"
                  src="https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                  alt="Sunset in the mountains"
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </a>
              <a href="#!">
                <div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                  Photos
                </div>
              </a>

              <a href="!#">
                <div className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                  <span className="font-bold">15</span>
                  <small>April</small>
                </div>
              </a>
            </div>
            <div className="px-6 py-4">
              <a
                href="#"
                className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
              >
                Best Salad Images ever
              </a>
              <p className="text-gray-500 text-sm">
                The collection of best salads of town in pictures
              </p>
            </div>
            <div className="px-6 py-4 flex flex-row items-center">
              <a
                href="#"
                className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row justify-between items-center"
              >
                <img
                  src={DateSvg}
                  alt=""
                  style={{ width: "16px", height: "16px" }}
                />
                <span className="ml-1">6 mins read</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
