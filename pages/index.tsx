import Head from 'next/head'
import Menu from './src/menu'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu/>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            {/* <img src="/bootstrap-themes.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"> */}
            <img src="/pae-image.png" alt="" width="auto" height="500" className="bi me-2"/>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">Hi There</h1>
            <h1 className="display-5 fw-bold lh-1 mb-3">I&apos;m <span className="text-warning">Pathawee Somsak</span></h1>
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