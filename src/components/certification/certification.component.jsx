import { certification } from "../../data/certification";
import CertificationItem from "./certification-item/certification-item.component";
import "./certification.css"
const Certification = () => {
    return (
        <div>
            <section id="certification" class="certification">
                <div class="container" data-aos="fade-up">
                    <div class="section-title">
                        <h2>Certifications and Accreditions</h2>
                    </div>
                    <div class="row">
                        {certification.map((item) => (
                            <CertificationItem key={item.id} item={item} />
                        ))}

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Certification;
