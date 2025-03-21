import about from '../../assets/about.png';
import tree from '../../assets/tree.png';

export const About: React.FC = () => {
    return (
        <>
            <main className="flex flex-row w-[90%] gap-5 h-full flex-wrap justify-center m-auto">
                
                {/* Kolumn 1: Affärsidé, Vision, Värderingar + Bild */}
                <article className="w-full sm:w-[500px] bg-[#EAE8E1] p-5 shadow-md flex flex-col text-center">
                    <section className="lg:mt-10">
                        <h2 className="text-2xl text-[#3C6255] mb-2">Vår affärsidé</h2>
                        <p className="text-[#373F47] text-sm">
                            Kreativa Krafter Trädgård levererar resultat som gör skillnad inom trädgårdsskötsel.
                            Vi säljer lättnad. Vår övertygelse är att människor mår bra i en vacker och välskött miljö.
                        </p>
                        <h2 className="text-2xl text-[#3C6255] mb-2 mt-2">Vår vision</h2>
                        <p className="text-[#373F47] text-sm">Vi skapar och tillför värden i människors utomhusmiljö.</p>
                        <h2 className="text-2xl text-[#3C6255] mb-2 mt-2">Våra värderingar</h2>
                        <p className="text-[#373F47] text-sm">Glädje, energi, nyfikenhet och vi drivs av goda resultat.</p>
                    </section>
                    <img src={about} alt="Micke och Jessica" className="mt-3 rounded-b-sm shadow-md m-auto mb-0" />
                    <p className="text-xs italic tracking-wide text-[#3C6255] mt-1">Kreativa krafter, Micke och Jessica</p>
                </article>

                {/* Kolumn 2: Tjänster + Priser + Miljöpolicy */}
                <article className="flex-1 flex flex-col gap-5 text-center m-auto">
                    
                    {/* Tjänster med semi-transparent bakgrund */}
                    <section className="relative p-6 shadow-md lg:w-3/4 m-auto">
                        {/* Bakgrundsdiv för opacity */}
                        <div className="absolute inset-0 bg-[#2f4b41] opacity-80 rounded-lg"></div>
                        
                        {/* Innehåll ovanpå bakgrunden */}
                        <div className="relative z-10 text-white">
                            <h2 className="text-xl font-semibold">Vi utför främst löpande skötsel med 4 till 12 inbokade besök per säsong.</h2>
                            <p className="text-sm mt-2">
                                Med löpande skötsel innebär att vi gemensamt kommer överens om en skötselplan för er trädgård. Vi bokar in er årsvis i förskott.
                                Utfört arbete debiteras efter varje besök.
                            </p>
                        </div>
                    </section>

                    {/* Flexbox-sektion för "Utförare" och "Miljöpolicy" */}
                    <section className="flex flex-col sm:flex-row gap-3 justify-center lg:m-auto mb-5">
                        {/* Utförare sektion */}
                        <div className="relative w-full sm:w-1/2 text-[#2f4b41] p-5 shadow-md rounded-lg lg:w-1/2">
                            {/* Bakgrund med opacity */}
                            <div className="absolute inset-0 bg-[#EAE8E1] opacity-80 rounded-lg"></div>

                            {/* Innehåll ovanpå bakgrunden */}
                            <div className="relative z-10">
                                <h2 className="text-xl font-semibold mb-2">Utförare innehar F-skattebevis</h2>
                                <ul className="list-disc list-inside text-left text-sm">
                                    <li>Debitering löpande skötsel: 295 kr efter RUT-avdrag (ord. 590 kr per timme).</li>
                                    <li>Häckklippning & trädvård: 345 kr efter RUT-avdrag (ord. 690 kr per timme).</li>
                                    <li>Påbörjad halvtimme debiteras.</li>
                                    <li>Gräsklippning: 295 kr efter RUT-avdrag + 30 kr per maskintillfälle.</li>
                                    <li>Löpande uppdrag debiteras månadsvis i efterskott.</li>
                                    <li>Tippavgift för trädgårdsavfall: 145-295 kr.</li>
                                    <li>Kostnad för specialverktyg tillkommer.</li>
                                    <li>Framkörningsavgift: Helsingborgs kommun 0 kr, nordvästra Skåne 150 kr.</li>
                                </ul>
                                <p className="mt-2 text-sm font-semibold">Priserna gäller från 2024-01-03 tills vidare.</p>
                            </div>
                        </div>

                        {/* Miljöpolicy sektion */}
                        <div className="relative w-full sm:w-1/2 p-6 shadow-md flex rounded-lg lg:w-1/3">
                            {/* Bakgrund med opacity */}
                            <div className="absolute inset-0 bg-[#EAE8E1] opacity-80 rounded-lg"></div>

                            {/* Innehåll ovanpå bakgrunden */}
                            <div className="relative z-10 px-5 flex flex-col items-center text-center mt-auto mb-auto text-[#2f4b41]">
                                <h2 className="text-xl font-semibold">Miljöpolicy</h2>
                                <p className="text-sm">
                                    Vi arbetar för att skydda naturen genom miljövänliga metoder och materialval. Vi samarbetar med våra kunder för bättre miljöval.
                                    Som kompensation planterar vi träd via <a href="https://www.viskogen.se" className="text-emerald-600 underline" target="_blank">VI-skogen</a> och klimatkompenserar för ca 3 ton CO₂/år.
                                </p>
                                <img src={tree} alt="VI-skogen" className="m-auto mt-2 max-w-xs" />
                            </div>
                        </div>
                    </section>

                </article>
            </main>
        </>
    );
}
