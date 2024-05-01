import adidasLogo from "../../img/clients/adidas.png";
import expediaLogo from "../../img/clients/expedia.png";
const Clients = () => {
    return (
        <div>
            <section id="clients" class="clients">
                <div class="container" data-aos="fade-up">
                    <div class="section-title">
                        <h2>Clients</h2>
                        <p>I'm proud to have collaborated with some awesome companies</p>
                    </div>
                    <div class="row mt-5">
                        <div class="col-sm">
                            <div class="d-flex justify-content-center"><img src={expediaLogo} width="250" /></div>

                        </div>
                        <div class="col-sm">
                            <div class="d-flex justify-content-center">
                                <img src={adidasLogo} width="100" />
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Clients;
