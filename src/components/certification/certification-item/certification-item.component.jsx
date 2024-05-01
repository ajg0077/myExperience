import "./certification-item.css"
const CertificationItem = ({ item }) => {
    return (
        <div class="col-sm-4 mb-4">
            <div class="card text-center">
                <a href={item.url} class="btn" target="_blank" rel="noreferrer">
                    <div class="certification-img text-center">
                        <img class="card-img-top resize_fit_center m-2 text-center" src={item.img} alt={item.name} />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{item.name}</h5>
                        <p class="card-text">Issued By <small class="text-muted">{item.issuedBy}</small></p>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default CertificationItem;