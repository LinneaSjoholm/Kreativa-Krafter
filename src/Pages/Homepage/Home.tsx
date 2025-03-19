// Home.tsx
import { useEffect } from 'react';

export const Home: React.FC = () => {
  useEffect(() => {
    // Lägg till 'Home' klassen på body när Home-sidan laddas
    document.body.classList.add('Home');
    
    // Ta bort 'Home' klassen när användaren lämnar startsidan
    return () => {
      document.body.classList.remove('Home');
    };
  }, []); // Tom array betyder att effekten körs endast när Home-komponenten mountas och demonteras

  return (
    <>
      {/* Introduktion */}
      <section className="text-4xl m-auto text-wrap w-2/3 mt-30">
        <h1 className="text-wrap w-3/4 m-auto mb-2 text-[#223730]">
          Kreativa Krafter Trädgård har hjälpt trädgårdsintresserade med skötsel och utveckling sedan 2015 - 
          <span className="italic">vi säljer lättnad.</span>
        </h1>
      </section>

      <section className="text-2xl text-[#3C6255] w-full">
        <h3 className="text-right max-w-3xl mx-auto text-3xl mb-15">
          Vår filosofi är att trädgården har sin egen rytm - vi följer den.
        </h3>
      </section>

      {/* Skötselinfo */}
      <div className="relative w-full flex justify-center">
        <div className="relative w-[560px]">
          <div className="absolute inset-0 bg-[#1B2F28] opacity-37 rounded-xs"></div>
          <div className="relative z-10 p-6 shadow-md text-center text-white">
            <section>
              <h2 className="text-xl">Vi utför främst löpande skötsel med 4 till 12 inbokade besök per säsong.</h2>
              <p className="text-sm mt-2">
                Med löpande skötsel innebär att vi gemensamt kommer överens om en skötselplan för er trädgård. Vi bokar in er årsvis i förskott.
                Utfört arbete debiteras efter varje besök.
              </p>
            </section>

            {/* Call to Action */}
            <section className="mt-2">
              <h2 className="text-xl">Redo att ge din trädgård lite kärlek?</h2>
              <button
                onClick={() => window.location.href = '/kontakt'}  // Direkt navigering till kontaktformulär
                className="bg-[#A3B18A] text-white px-4 py-2 mt-2 rounded-md hover:bg-[#8a9675] transition cursor-pointer text-sm"
              >
                Klicka här för att komma till vårt kontaktformulär
              </button>
              <p className="mt-2 text-sm">Eller ring oss på <strong>0703 770 330</strong></p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
