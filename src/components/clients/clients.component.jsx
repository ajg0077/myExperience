import { clients } from "../../data/clients";
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
                        {clients.map((client) => (
                            <div class="col-sm">
                                <div class="d-flex justify-content-center"><img src={client.img} alt={client.name} width={client.width} /></div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Clients;
