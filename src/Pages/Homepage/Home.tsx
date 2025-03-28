import { useEffect } from 'react';

export const Home: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('Home');
    
    return () => {
      document.body.classList.remove('Home');
    };
  }, []);

  return (
    <main className="flex flex-col text-white drop-shadow-[2px_2px_4px_black] mt-45 sm:mb-40 mx-auto w-full">
      {/* Introduktion */}
      <section className="flex flex-col items-center text-center w-full">
        <h1 className="text-4xl sm:text-5xl md:text-7xl text-center px-3 mb-2 max-w-5xl">
          Kreativa Krafter Trädgård har hjälpt trädgårdsintresserade med skötsel och utveckling sedan 2015 - 
          <span className="italic"> vi säljer lättnad.</span>
        </h1>

        <h3 className="text-2xl md:text-3xl">
          Vår filosofi är att trädgården har sin egen rytm - vi följer den
        </h3>
      </section>
    </main>
  );
};
