import React, { useState } from 'react';
      import RoutesPage from "./RoutesPage";
      import ModalSettings from "./ModalsWindows/ModalSettings";
      function App() {
        const [modalActive, setModalActive] = useState(true)
  return (
      <div>
        <header className="bg-slate-900 pb-10 drop-shadow-xl mb-10">
          <div className="pt-5 text-2xl font-mono flex justify-between">
              <div className="flex">
                  <div className="pt-5 ml-10">
                      <a href='/Preview flex flex flex-row'>
                          <a className="font-bold text-red-600">RU</a><a
                          className="text-blue-600"
                      >Misliniki</a><a className="text-white">.ru</a>
                      </a>
                  </div>
              </div>
              <div className="flex">
                  <div className="pt-5">
                      <a className="hover:shadow-lg hover:shadow-blue-500/50 text-white hover:underline decoration-4 decoration-sky-500">Новое</a>
                  </div>
                  <div className="pt-5 px-7">
                      <a className="hover:shadow-lg hover:shadow-blue-500/50 text-white hover:underline decoration-4 decoration-sky-500">Моя Лента</a>
                  </div>
                  <div className="pt-5">
                      <a className="hover:shadow-lg hover:shadow-blue-500/50 text-white hover:underline decoration-4 decoration-sky-500">Популярное</a>
                  </div>
              </div>
              <div className="flex">
                  <div className="pt-5 pr-5">
                      <a href='/forms'
                         className="text-amber-500 rounded-lg  border-4 p-2 border-amber-400
                     hover:text-black hover:bg-amber-400 hover:shadow-2xl"
                      >Создайте Пост</a>
                  </div>
                  <div className="mr-10 pt-5">
                      <a href='/Settings'
                         className="">⚙️</a>
                  </div>
              </div>
        </div>
        </header>
        <ModalSettings active=/>
        <RoutesPage />
      </div>
  ); } export default App;