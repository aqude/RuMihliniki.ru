import React from 'react';
      import RoutesPage from "./RoutesPage";
      function App() {
  return (
      <div>
        <header className="bg-slate-900 pb-10 drop-shadow-xl mb-10">
          <div className="pt-5 text-2xl font-mono flex justify-evenly">
              <div className="pt-5 px-5" >
                <a href='/Preview'>
                  <a className="font-bold text-red-600">RU</a><a
                    className="text-blue-600"
                >Misliniki</a><a className="text-white">.ru</a>
                </a>
              </div>
              <div className="pt-5">
                  <a className="hover:shadow-lg hover:shadow-blue-500/50 text-white hover:underline decoration-4 decoration-sky-500">Новое</a>
              </div>
              <div className="pt-5">
                  <a className="hover:shadow-lg hover:shadow-blue-500/50 text-white hover:underline decoration-4 decoration-sky-500">Моя Лента</a>
              </div>
              <div className="pt-5">
                  <a className="hover:shadow-lg hover:shadow-blue-500/50 text-white hover:underline decoration-4 decoration-sky-500">Популярное</a>
              </div>
              <div className="pt-5">
                  <a className="hover:shadow-lg hover:shadow-blue-500/50 text-white hover:underline decoration-4 decoration-sky-500">Мой Аккаунт</a>
              </div>
            <div className="pt-5">
              <a href='/forms'
                  className="text-amber-500 rounded-lg  border-4 p-2 border-amber-400
                 hover:text-black hover:bg-amber-400 hover:shadow-2xl"
              >Создайте Пост</a>
            </div>
        </div>
        </header>
        <RoutesPage />
      </div>
  ); } export default App;