import { Form } from "../../components/Form/Form";

export const Contact: React.FC = () => {
    return (
        <>
            <div className="overlay"></div>
            <main className="flex m-auto w-[60%] h-full gap-6">
                
                {/* Kolumn 1: Kontaktuppgifter */}
                <article className="p-6 flex flex-col h-full text-center z-99 text-white">
                    <section className="m-auto">
                        <h2 className="text-2xl">Vill du ringa oss?</h2>
                        <p className="font-light">
                            Jessica <a href="tel:0703770330" className="font-bold">0703 770 330</a> <br />
                            Michael <a href="tel:0723322370" className="font-bold">0723 322 370</a>
                        </p>
                    </section>
                </article>

                {/* Kolumn 2: Kontaktformulär */}
                <article className="flex-1 flex flex-col m-auto z-99 text-center items-center">

                    <Form />
                </article>

            </main>
        </>
    );
};
