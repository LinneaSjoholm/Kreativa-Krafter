import about from '../../assets/about.png';
import tree from '../../assets/tree.png';

export const About: React.FC = () => {
    return (
        <>
            <div className="overlay"></div>
            <main className="flex mx-auto w-[80%] h-full">
                {/* Kolumn 1: Affärsidé, Vision, Värderingar + Bild */}
                <article className="w-[460px] bg-[#EAE8E1] p-6 shadow-md flex flex-col z-99 text-center">
                    <section className="m-auto">
                        <h2 className="text-2xl text-[#3C6255] mb-2">Affärsidé</h2>
                        <p className="text-[#373F47] text-sm">
                            Kreativa Krafter Trädgård levererar resultat som gör skillnad inom trädgårdsskötsel.
                            Vi säljer lättnad. Vår övertygelse är att människor mår bra i en vacker och välskött miljö.
                        </p>
                        <h2 className="text-2xl text-[#3C6255] mb-2 mt-2">Vision</h2>
                        <p className="text-[#373F47] text-sm">Vi skapar och tillför värden i människors utomhusmiljö.</p>
                        <h2 className="text-2xl text-[#3C6255] mb-2 mt-2">Våra värderingar</h2>
                        <p className="text-[#373F47] text-sm">Glädje, energi, nyfikenhet och vi drivs av goda resultat.</p>
                    </section>
                    <img src={about} alt="Micke och Jessica" className="max-w-sm rounded-b-sm shadow-md m-auto" />
                </article>

                {/* Kolumn 2: Priser + Miljöpolicy */}
                <div className="flex-1 flex flex-col gap-6 m-auto text-white font-light z-100 text-center">
                    <section>
                        <h2 className="text-3xl font-semibold mb-2">Utförare innehar F-skattebevis</h2>
                        <ul className="list-disc list-inside">
                            <li>Debitering löpande skötsel som omfattar trädgårdens behov med 4 - 12 inbokade besök per säsong:<br />  
                                295 kr efter RUT-avdrag ord pris 590 kr per timme.</li>
                            <li>Debitering endast (ej löpande) häckklippning, beskärning av träd och buskar samt vård av gräsmatta:<br /> 
                                345 kr efter RUT-avdrag ord pris 690 kr per timme.</li>
                            <li>Påbörjad halvtimme debiteras.</li>
                            <li>Debitering gräsklippning från 1 timme 295 kr efter RUT-avdrag ord pris 590 kr och 30 kr per tillfälle för maskinkostnad.</li>
                            <li>Löpande uppdrag debiteras månadsvis i efterskott netto 10 dagar.</li>
                            <li>Tippavgift: trädgårdsavfall deponi från 145 kr till 295 kr (max last 1000 kg eller 4 kubik).</li>
                            <li>Kostnad för specialverktyg och maskiner tillkommer.</li>
                            <li>Framkörningsavgift: Zon 1 Helsingborgs kommun 0 kr, Zon 2 nordvästra Skåne 150 kr.</li>
                        </ul>
                        <p className="mt-4 font-medium">Priserna gäller från 2024-01-03 tills vidare.</p>
                    </section>
                    
                    <section className="w-2xl mx-auto">
                        <h2 className="text-3xl font-semibold mb-2">Miljöpolicy</h2>
                            <p>
                                I vårt arbete väljer vi att jobba för naturen på bästa sätt genom skonsamma och miljövänliga val vad gäller arbetsmetoder och material.
                                Vi arbetar aktivt tillsammans med våra kunder för bättre miljöval. Som miljökompensation för vårt företag väljer vi att återplantera träd genom att bidraga till VI-skogen samt att vi klimatkompenserar för ca 3 ton co2/år.
                                se <a href="https://www.viskogen.se" className="text-emerald-950 underline" target="_blank">www.viskogen.se</a> angående AgroForesty
                            </p>
                            <img src={tree} alt="VI-skogen" className="m-auto mt-2" />
                    </section>

                </div>
            </main>

        </>
    )
}