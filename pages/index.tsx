import Menu from '../components/Menu'
import MyHead from '../components/MyHead'
import { useRouter } from 'next/router'
import Typewriter from 'typewriter-effect';

export default function Home() {
  const router = useRouter()
  return (
    <div>
      <MyHead title={"Home"}/>
      <Menu/>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src="/pae-image.png" alt="" width="auto" height="500" className="bi me-2" />
          </div>
          <div className="col-lg-6">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                cursor: '|'
              }}
              onInit={(typewriter) => {
                typewriter
                .typeString("<h1 class='display-5 fw-bold lh-1 mb-3' style='display: inline;'> Hi there <br> I'm <span class='text-warning'>Pathawee Somsak</span></h1>")
                .pauseFor(3000)
                .deleteChars(15)
                .typeString("<h1 style='display: inline;' class='text-warning'>Software Developer<h1>")
                .pauseFor(3000)
                .deleteAll()
                .start();
              }}
            />
            {/* <h1 className="display-5 fw-bold lh-1 mb-3">Hi There</h1>
            <h1 className="display-5 fw-bold lh-1 mb-3">I&apos;m <span className="text-warning">Pathawee Somsak</span></h1> */}
            <p className="lead">I&apos;m software developer with a passion for functional user experience. With 3 years experience i can use wide range of programing language and tools. For instance: C++, HTML/CSS, JavaScript, PostgreSQL. and most popular framework such as React.js</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" onClick={() => router.push("/showcase")}>Showcase</button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4" onClick={() => router.push("/about")} >About</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}