import "../css/app.css"

export const App = () => {

  return (
    <>
      <div className="mt-28"></div>
      <div className="w-[60rem] flex justify-center ml-40 mt-64"><h2 className="text-blue-500 dark:text-white text-7xl transition duration-300">¿Estás listo para hacer tu página web o aplicación con nosotros?</h2></div>
      <div className="w-full h-64 bg-blue-500 dark:bg-blue-700 transition duration-300 mt-40 flex items-center"><div className="w-96 m-auto mt-12 flex flex-col"><h2 className="text-white text-5xl text-center">¿Tienes algún proyecto? Construyámoslo juntos</h2><button className="w-32 m-auto mt-5 bg-white text-black p-3 rounded-lg">Contáctanos</button></div></div>
    </>
  )
}

export default App
