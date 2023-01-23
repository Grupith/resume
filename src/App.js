import { React, useState } from "react";
import { BsMoonStarsFill, BsMoonStars } from "react-icons/bs";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <main className="min-h-screen w-full font-display dark:bg-slate-900 dark:text-white">
        <nav className="flex bg-slate-200 items-center px-8 py-4 place-content-around shadow-sm dark:bg-slate-800 dark:text-white">
          <h1 className="text-3xl font-bold">Portfolio</h1>
          <ul className="flex row-auto items-center">
            <li onClick={() => setDarkMode(!darkMode)} >
              {!darkMode ? <BsMoonStarsFill className="cursor-pointer text-2xl mx-8" /> : <BsMoonStars className="cursor-pointer text-2xl mx-8"/>}
            </li>
            <li>
              <a href='https://github.com/grupith' target="_blank" rel='noreferrer' className=" shadow-xl text-xl text-white px-4 py-1 rounded-md font-semibold cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500">Github</a>
            </li>
          </ul>
        </nav>
        <div className="text-center py-10">
          <h2 className=" py-8 text-6xl text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-cyan-500 to-blue-500">Dylan Koss</h2>
          <h3 className="text-2xl font-semibold">Front-end Web Developer</h3>
          <p className="py-8 w-80 m-auto"><span className='font-bold'>JavaScript</span> wizard ready to cast <span className='font-bold'>React</span> spells on the web. Check out my projects to see what technologies I've worked with. </p>
        </div>
      </main>
    </div>
  );
}

export default App;
