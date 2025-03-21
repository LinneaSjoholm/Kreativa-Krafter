import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export const Footer: React.FC = () => {
    return (
        
        <footer className="footer flex flex-col items-center bg-[#EAE8E1] py-2 inset-shadow-xs">
            {/* Content */}
            <section className="flex flex-col text-center">
                <p className="text-sm md:text-base text-[#3C6255] tracking-widest">JMT Kreativa Krafter AB</p>
                <p className="text-xs md:text-sm">orgnr: 559022-3730</p>
                <p className="text-xs md:text-sm">Björknäs gård</p>
                <div className="flex items-center justify-center space-x-1 mt-2">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xs md:text-sm text-[#3C6255]" />
                    <p className="text-xs md:text-sm">Ekebyvägen 579, 253 42 Vallåkra</p>
                </div>
            </section>
        </footer>
    );
};
