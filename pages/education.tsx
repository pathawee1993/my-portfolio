import Menu from "../components/Menu";
import MyHead from "../components/MyHead";

export default function education () {
    return (
        <div>
            <MyHead title={"Education"}/>
            <Menu/>
            <div className="container py-5">
                <div className="row row-cols-md-2 g-2 py-5">
                    <div className="col-md d-flex align-items-start  py-5">
                        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                        <img src="/hochschule-anhalt-logo-bildmarke.jpg" width="100" height="auto"/>
                        </div>
                        <div>
                            <div>2022 - Today</div>
                            <h2>Master - Data Science</h2>
                            <h5 className="mb-1 text-muted">Hochschule Anhalt</h5>
                        </div>
                    </div>
                    <div className="col-md d-flex align-items-start  py-5">
                        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                        <img src="/Hska_logo_small.svg.png" width="80" height="auto" className="rounded-circle"/>
                        </div>
                        <div>
                            <div>2014 - 2018</div>
                            <h2>Bachelor - Electrotechnik Automationtechnologie</h2>
                            <h5 className="mb-1 text-muted">Hochschule Karlsruhe</h5>
                        </div>
                    </div>
                    <div className="col-md d-flex align-items-start  py-5">
                        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                        <img src="/PHRAO-Wittayakom.jpg" width="100" height="auto"/>
                        </div>
                        <div>
                            <div>2006 - 2012</div>
                            <h2>Secondary School</h2>
                            <h5 className="mb-1 text-muted">Phrao Wittayakon School</h5>
                        </div>
                    </div>
                    <div className="col-md d-flex align-items-start  py-5">
                        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                        <img src="/mae-hia-school.jpeg" width="80" height="auto"/>
                        </div>
                        <div>
                            <div>2000 - 2006</div>
                            <h2>Primary School</h2>
                            <h5 className="mb-1 text-muted">Baan Mae Hia School</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}