import Vector from '../../assets/butikVector.png';
import Product1 from '../../assets/product1.png';
import Product2 from '../../assets/product2.png';
import Product3 from '../../assets/product3.png';
import Product4 from '../../assets/product4.png';

export const Store: React.FC = () => {
    return (
        <>
            <div className="overlay"></div>
            <main className="flex mx-auto w-[80%] h-full">

                {/* Kolumn 1: Butikinfo + Bild */}
                <article className="w-[460px] bg-[#EAE8E1] p-6 flex flex-col h-full text-center z-99">
                    <section className="m-auto">
                        <h2 className="text-2xl text-[#3C6255] mb-3">Fri hemkörning Helsingborg</h2>
                        <h4 className="text-lg font-medium text-[#3C6255]">Premiumprodukter</h4>
                        <p className="text-[#373F47] text-sm">
                            Priserna är inklusive leverans hem till dig.<br />
                            Måttbeställda odlingsbänkar<br />
                            Egen tillverkning<br />
                            Prisexempel från 400 kr, jord tillkommer.
                        </p>
                        <img src={Vector} alt="butikVector" className="w-full mx-auto mt-5" />
                    </section>
                </article>

                {/* Kolumn 2: Produkter */}
                <article className="m-auto z-99 grid grid-cols-3 gap-6 text-center text-sm text-white">
                    {/* Produkt 1 */}
                    <section className="flex flex-col items-center">
                        <img src={Product1} alt="product1" className="object-cover" />
                        <p className="text-lg">Dressjord</p>
                        <p className="mt-auto">
                        Pris: 100 kr</p>
                    </section>
                    
                    {/* Produkt 2 */}
                    <section className="flex flex-col items-center">
                        <img src={Product2} alt="product2" className=" object-cover" />
                        <p className="text-lg mt-auto">Rhododendronjord</p>
                        <p>Pris: 110 kr</p>
                    </section>

                    {/* Produkt 3 */}
                    <section className="flex flex-col items-center">
                        <img src={Product3} alt="product3" className=" object-cover" />
                        <p className="text-lg mt-auto">Ros & perennjord</p>
                        <p>Pris: 110 kr</p>
                    </section>

                    {/* Produkt 4 */}
                    <section className="flex flex-col col-span-3 items-center">
                        <img src={Product4} alt="product4" className=" object-cover" />
                        <p className="text-lg">Hönsgödsel</p>
                        <p>Pris: 225 kr</p>
                    </section>
                </article>
            </main>
        </>
    );
};
