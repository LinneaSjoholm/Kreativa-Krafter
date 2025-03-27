export const Form: React.FC = () => {
    return (
        <>
        <div className="w-full px-4 pb-5">
            <div className="bg-[#EAE8E1] opacity-90 rounded-lg">
                <form className="p-6 md:p-10 flex flex-col items-center shadow-md rounded-lg text-[#2f4b41]">
                 
                    <section className="text-center mb-6">
                        <h1 className="text-xl md:text-2xl mb-2">Redo att ge din trädgård lite kärlek?</h1>

                        <div className="mb-2">
                            <span>Kontakta oss gärna på:</span>
                            <p className="text-sm">
                                <span className="font-semibold">Jessica </span>
                                <a href="tel:0703770330" className="text-[#294C3E] font-bold hover:underline">0703 770 330</a>
                            </p>
                            <p className="text-sm">
                                <span className="font-semibold">Michael </span>
                                <a href="tel:0723322370" className="text-[#294C3E] font-bold hover:underline">0723 322 370</a>
                            </p>
                        </div>
                        <p className="text-sm">Eller fyll i dina uppgifter så återkommer vi snarast.</p>
                        <p className="text-xs mb-2">Fält markerade med * är obligatoriska.</p>
                    </section>
            
                    {/* Namn */}
                    <label htmlFor="name" className="text-[#2f4b41] text-sm font-medium self-start mb-1">
                        Namn *
                    </label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Namn"
                        required
                        className="border border-[#898989] w-full h-[40px] p-3 rounded-md placeholder:text-xs text-black
                        focus:outline-none focus:border-[1px] focus:border-[#69ab94] bg-white"
                    />

                    {/* E-post */}
                    <label htmlFor="email" className="text-[#2f4b41] text-sm font-medium self-start m-1">
                        Epost *
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Epost"
                        required
                        className="border border-[#898989] w-full h-[40px] p-3 rounded-md placeholder:text-xs text-black
                        focus:outline-none focus:border-[1px] focus:border-[#69ab94] bg-white"
                    />

                    {/* Telefon */}
                    <label htmlFor="phone" className="text-[#2f4b41] text-sm font-medium self-start m-1">
                        Telefon *
                    </label>
                    <input
                        id="phone"
                        type="tel"
                        placeholder="Telefon"
                        required
                        className="border border-[#898989] w-full h-[40px] p-3 rounded-md placeholder:text-xs text-black
                        focus:outline-none focus:border-[1px] focus:border-[#69ab94] bg-white"
                    />

                    {/* Ärende */}
                    <label htmlFor="subject" className="text-[#2f4b41] text-sm font-medium self-start m-1">
                        Ärende
                    </label>
                    <input
                        id="subject"
                        type="text"
                        placeholder="Ärende"
                        className="border border-[#898989] w-full h-[40px] p-3 rounded-md placeholder:text-xs text-black
                        focus:outline-none focus:border-[1px] focus:border-[#69ab94] bg-white"
                    />

                    {/* Meddelande */}
                    <label htmlFor="message" className="text-[#2f4b41] text-sm font-medium self-start m-1">
                        Meddelande *
                    </label>
                    <textarea
                        id="message"
                        placeholder="Meddelande"
                        required
                        className="border border-[#898989] w-full h-[150px] p-3 rounded-md resize-none bg-white text-black
                        placeholder:text-xs label:text-xs focus:outline-none focus:border-[1px] focus:border-[#69ab94]"
                    />

                    {/* Skicka-knapp */}
                    <button
                        className="bg-[#69ab94] hover:bg-[#477162] text-white py-1 px-10 rounded 
                        focus:outline-none focus:shadow-outline mt-6 cursor-pointer"
                        type="submit"
                    >
                        Skicka
                    </button>
                </form>
            </div>
        </div>
        </>
    );
};
