import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export const Footer: React.FC = () => {
    return (
        <footer className="footer flex flex-col justify-center items-center bg-[#EAE8E1] h-25 z-100 inset-shadow-xs">
            <section className="flex flex-col">
                <p className="text-base text-[#3C6255] text-center tracking-widest">JMT Kreativa Krafter AB</p>
                <p className="text-xs text-center">orgnr: 559022-3730</p>
                <p className="text-xs text-center">Björknäs gård</p>
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xs mr-1 text-[#3C6255]" />
                    <p className="text-xs">Ekebyvägen 579, 253 42 Vallåkra</p>
                </div>
            </section>
        </footer>
    );
};
