export const Form: React.FC = () => {
    return (
        <form className="w-[610px] h-[580px] bg-[#EAE8E1] p-10 flex flex-col items-center shadow-md rounded-lg text-[#373F47]">

                    <section>
                        <h1 className="text-2xl">Hur kan vi hjälpa dig på bästa sätt?</h1>
                        <p className="text-sm">Fyll i dina uppgifter så återkommer vi snarast.</p>
                        <p className="text-sm font-medium mb-2">Fält markerade med * är obligatoriska.</p>
                    </section>
            
            {/* Namn */}
            <label htmlFor="name" className="text-[#373F47] text-sm font-medium self-start mb-1">
                Namn *
            </label>
            <input
                id="name"
                type="text"
                placeholder="Namn"
                required
                className="border border-[#898989] w-full h-[30px] p-2 rounded-md placeholder:text-xs
                focus:outline-none focus:border-[1px] focus:border-[#69ab94] bg-white"
            />

            {/* E-post */}
            <label htmlFor="email" className="text-[#373F47] text-sm font-medium self-start m-1">
                Epost *
            </label>
            <input
                id="email"
                type="email"
                placeholder="Epost"
                required
                className="border border-[#898989] w-full h-[30px] p-2 rounded-md placeholder:text-xs
                focus:outline-none focus:border-[1px] focus:border-[#69ab94] bg-white"
            />

            {/* Telefon */}
            <label htmlFor="phone" className="text-[#373F47] text-sm font-medium self-start m-1">
                Telefon *
            </label>
            <input
                id="phone"
                type="tel"
                placeholder="Telefon"
                required
                className="border border-[#898989] w-full h-[30px] p-2 rounded-md placeholder:text-xs
                focus:outline-none focus:border-[1px] focus:border-[#69ab94] bg-white"
            />

            {/* Ärende */}
            <label htmlFor="subject" className="text-[#373F47] text-sm font-medium self-start m-1">
                Ärende
            </label>
            <input
                id="subject"
                type="text"
                placeholder="Ärende"
                className="border border-[#898989] w-full h-[30px] p-2 rounded-md placeholder:text-xs
                focus:outline-none focus:border-[1px] focus:border-[#69ab94] bg-white"
            />

            {/* Meddelande */}
            <label htmlFor="message" className="text-[#373F47] text-sm font-medium self-start m-1">
                Meddelande *
            </label>
            <textarea
                id="message"
                placeholder="Meddelande"
                required
                className="border border-[#898989] w-full h-[120px] p-2 rounded-md resize-none bg-white
                placeholder:text-xs label:text-xs focus:outline-none focus:border-[1px] focus:border-[#69ab94]"
            />

            {/* Skicka-knapp */}
            <button
                className="bg-[#A3B18A] hover:bg-[#3b574e] text-white py-1 px-10 rounded 
                focus:outline-none focus:shadow-outline mt-6 cursor-pointer"
                type="submit"
            >
                Skicka
            </button>
        </form>
    );
};
