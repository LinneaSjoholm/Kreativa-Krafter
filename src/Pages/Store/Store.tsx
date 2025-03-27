import Vector from '../../assets/butikVector.png';
import Product1 from '../../assets/product1.png';
import Product2 from '../../assets/product2.png';
import Product3 from '../../assets/product3.png';
import Product4 from '../../assets/product4.png';

export const Store: React.FC = () => {
    return (
        <>
            <main className="flex flex-col lg:flex-row lg:gap-10 m-auto w-[90%] h-full flex-wrap">

                {/* Kolumn 1: Butikinfo + Bild */}
                <section className="lg:w-[360px] bg-[#EAE8E1] p-6 flex flex-col text-center">
                    <header className="m-auto flex flex-col gap-2">
                        <h1 className="text-2xl text-[#3C6255]">Premiumprodukter</h1>
                        <hr className="w-1/2 m-auto text-[#3C6255]" />
                        <p className="text-sm mb-5 m-auto">
                            Vid önskan att köpa en produkt, <br /> vänligen kontakta oss.<br />
                            Priserna är inklusive leverans hem till dig.<br />
                            Fri hemkörning Helsingborg.
                        </p>

                        <h2 className="text-xl text-[#3C6255]">Vi erbjuder även</h2>
                        <hr className="w-1/2 m-auto text-[#3C6255]" />
                        <p className="text-sm">
                            Egen tillverkade och måttbeställda odlingsbänkar<br />
                            Prisexempel från 400 kr, jord tillkommer.<br />
                        </p>
                    </header>
                    <img src={Vector} alt="Butikens illustration" className="mt-5" />
                </section>

                {/* Kolumn 2: Produkter */}
                <section className="flex-1 flex flex-col text-center m-auto">

                    {/* Grid för produkter */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-sm text-white mb-5 mt-5">

                        {/* Hönsgödsel Produkt */}
                        <figure className="relative p-6 shadow-lg flex flex-col items-center rounded-lg">
                            <div className="absolute inset-0 bg-[#2f4b41] opacity-80 rounded-lg"></div>
                            <div className="relative flex flex-col m-auto items-center text-center text-white">
                                <img src={Product4} alt="Hasselfors Hönsgödsel 3L" className="mb-4" />
                                <figcaption>
                                    <p className="text-md mb-1">Hasselfors Hönsgödsel 3L</p>
                                    <p className=" text-emerald-300 mb-3">225 kr</p>
                                    <ul className="list-none text-sm space-y-1 text-left">
                                        <li>✅ Ekologisk & KRAV-märkt</li>
                                        <li>✅ Ger kraftig tillväxt & större skörd</li>
                                        <li>✅ Enkel att blanda i jord eller vatten</li>
                                        <li>✅ Räcker till ca 30m²</li>
                                        <li>✅ NPK 4-1-2 – Naturlig näring</li>
                                    </ul>
                                </figcaption>
                            </div>
                        </figure>

                        {/* Dressjord Produkt */}
                        <figure className="relative p-6 shadow-lg flex flex-col items-center rounded-lg">
                            <div className="absolute inset-0 bg-[#EAE8E1] opacity-80 rounded-lg"></div>
                            <div className="relative flex flex-col items-center text-[#2f4b41]">
                                <img src={Product1} alt="Hasselfors Dressjord 40L" className="object-cover mb-4" />
                                <figcaption>
                                    <p className="text-md mb-1">Hasselfors Dressjord 40L</p>
                                    <p className=" text-emerald-700 mb-3">100 kr</p>
                                    <ul className="list-none text-sm space-y-1 text-left">
                                        <li>✅ Ger en grön och tät gräsmatta som tål slitage</li>
                                        <li>✅ Håller undan mossa och ogräs</li>
                                        <li>✅ Främjar rotbildning</li>
                                        <li>✅ Tillför näring, kalk, mull och sand</li>
                                        <li>✅ Räcker till ca 4-8m²</li>
                                    </ul>
                                </figcaption>
                            </div>
                        </figure>

                        {/* Rhododendronjord Produkt */}
                        <figure className="relative p-6 shadow-lg flex flex-col items-center rounded-lg">
                            <div className="absolute inset-0 bg-[#2f4b41] opacity-80 rounded-lg"></div>
                            <div className="relative flex flex-col items-center">
                                <img src={Product2} alt="Rhododendronjord Hasselfors 40L" className="object-cover mb-4" />
                                <figcaption>
                                    <p className="text-md mb-1">Rhododendronjord Hasselfors 40L</p>
                                    <p className=" text-emerald-300 mb-3">110 kr</p>
                                    <ul className="list-none text-sm space-y-1 text-left">
                                        <li>✅ För surjordsväxter som blåbär och rhododendron</li>
                                        <li>✅ Med lågt pH och extra mikronäring</li>
                                        <li>✅ Passar till både rabatter och kruka</li>
                                        <li>✅ Grov torv-bark blandning för god struktur</li>
                                        <li>✅ Fukthållande med hög mullhalt</li>
                                        <li>✅ Långt pH-värde</li>
                                    </ul>
                                </figcaption>
                            </div>
                        </figure>

                        {/* Ros & perennjord Produkt */}
                        <figure className="relative p-6 shadow-lg flex flex-col items-center rounded-lg">
                            <div className="absolute inset-0 bg-[#EAE8E1] opacity-80 rounded-lg"></div>
                            <div className="relative flex flex-col items-center text-[#2f4b41]">
                                <img src={Product3} alt="Ros & perennjord Hasselfors 40L" className="object-cover mb-4" />
                                <figcaption>
                                    <p className="text-md mb-1">Ros & perennjord Hasselfors 40L</p>
                                    <p className=" text-emerald-700 mb-3">110 kr</p>
                                    <ul className="list-none text-sm space-y-1 text-left">
                                        <li>✅ Näringsrik jord som stimulerar knoppsättning</li>
                                        <li>✅ Ger en rik blomning med vackra färger</li>
                                        <li>✅ Rik på mull och innehåller lera</li>
                                        <li>✅ För rosor, rikblommande prydnadsbuskar, perenner och klematis</li>
                                        <li>✅ Passar både till rabatt och till kruka</li>
                                        <li>✅ Lera och kalium för rik knoppsättning</li>
                                    </ul>
                                </figcaption>
                            </div>
                        </figure>

                    </div>
                </section>
            </main>
        </>
    );
};
