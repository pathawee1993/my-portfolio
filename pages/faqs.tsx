import Menu from "../components/Menu"
import MyHead from '../components/MyHead'

export default function Faqs(){
    return (
        <div>
            <MyHead title={"FAQs"}/>
            <Menu/>
            <section className="py-5 text-center container">
                <div className="col">
                    <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">FAQs</h1>
                        <p className="lead text-muted">Comming soon.</p>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}