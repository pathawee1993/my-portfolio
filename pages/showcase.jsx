import Menu from "../components/Menu";
import MyHead from "../components/MyHead";

const allCards = [{
        title: "Solar monitoring system",
        year: 2021,
        desc: "The web-application allow our client to track alarm of devices and create invoice of energy cost",
        imgSrc: "/showcase/solar_monitoring.png"
    },
    {
        title: "Digital Manufacturing",
        year: 2021,
        desc: "The project for transform auto-part production line to smart production line, which provide our cline to track OEE, alarm and report",
        imgSrc: "/showcase/digital_manufacturing_01.jpg"
    },
    {
        title: "Digital manufacturing - demo",
        year: 2021,
        desc: "The demo of digital manufacuting app",
        imgSrc: "/showcase/design_concept_01.jpg"
    },
    {
        title: "HVAC monitoring - design",
        year: 2021,
        desc: "The demo of HVAC monitoring system",
        imgSrc: "/showcase/design_concept_02.png"
    }
]

const Cards = () =>{
    var rows = []
    for (let i = 0; i < allCards.length; i++) {
        rows.push(<div className="col" key={"showcase_"+i}>
        <div className="card shadow-sm">
        <div className="hovereffect">
            <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={allCards[i].imgSrc}></img>
            <div className="overlay">
            <h2>{allCards[i].title}</h2>
            <a className="info" href="#">On updating</a>
            </div>
        </div>

            <div className="card-body">
                <h3>{allCards[i].title}</h3>
                <div className="mb-1 text-muted">{allCards[i].year}</div>
                <p className="card-text">{allCards[i].desc}</p>
            </div>
        </div>
        </div>);
    }
    return rows;
}

export default function Showcase(){
    return (
        <div>
            <MyHead title={"Showcase"}/>
            <Menu/>
            <section className="py-5 text-center container">
                <div className="col">
                    <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Showcase</h1>
                        <p className="lead text-muted">Meet beautiful web-application built with React.js, Node.js and PostgreSQL by Pathawee Somsak</p>
                    </div>
                
                    <div className="row">
                        <div className="text-center">
                            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" onClick={() => router.push("/contact")}>Request more example</button>
                            <button type="button" className="btn btn-outline-secondary btn-lg px-4" onClick={() => router.push("/faqs")} >FAQs</button>
                        </div>
                    </div>
                </div>
                </div>
            </section>

            <div className="album py-5 bg-light">
                <div className="container">

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <Cards/>
                </div>
                </div>
            </div>
        </div>
    )
}