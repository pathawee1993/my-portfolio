import { useRouter } from 'next/router'
import useWindowDimention from './useWindowDimention'

import { useState, useCallback, useEffect } from 'react';

const useMediaQuery = (width : Number) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e: any) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};

export default function Menu(){
    const router = useRouter()
    const isBreakpoint = useMediaQuery(1200)
    return (<div>{!isBreakpoint ? (
            <div className="container fixed-top bg-white" id="myMenu">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom">
                    <a onClick={() => router.push('/')} className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        <img src="/my-icon.png" alt="" width="40" height="40" className="bi me-2"/>
                        <span className="fs-4">My Portfolio</span>
                    </a>
                    <ul className="nav nav-pills col-md-6 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><a className={"nav-link "+ (router.pathname == '/' ? "active":"")} onClick={() => router.push('/')}>Home</a></li>
                        <li><a className={"nav-link "+ (router.pathname == '/showcase' ? "active":"")} onClick={() => router.push('/showcase')}>Showcase</a></li>
                        <li><a className={"nav-link "+ (router.pathname == '/education' ? "active":"")} onClick={() => router.push('/education')}>Education</a></li>
                        <li><a className={"nav-link "+ (router.pathname == '/skill' ? "active":"")} onClick={() => router.push('/skill')}>Skill</a></li>
                        <li><a className={"nav-link "+ (router.pathname == '/faqs' ? "active":"")} onClick={() => router.push('/faqs')}>FAQs</a></li>
                        <li><a className={"nav-link "+ (router.pathname == '/about' ? "active":"")} onClick={() => router.push('/about')}>About</a></li>
                    </ul>

                    <div className="col-md-3 text-end">
                        <a target="_blank" href="https://www.linkedin.com/in/pathawee-somsak/" rel="noopener noreferrer">
                            <img src="/linkedin.svg" alt="" width="32" height="32" className="bi me-2"/>
                        </a>
                        <a target="_blank" href="https://github.com/pathawee1993" rel="noopener noreferrer">
                            <img src="/github.png" alt="" width="32" height="32" className="bi me-2"/>
                        </a>
                    </div>
                </header>
            </div>):(
                <nav className="navbar bg-white fixed-top" id="myMenu">
                <div className="container-fluid">
                    <a onClick={() => router.push('/')} className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        <img src="/my-icon.png" alt="" width="40" height="40" className="bi me-2"/>
                        <span className="fs-4">My Portfolio</span>
                    </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbars01" aria-controls="navbars01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
    
                <div className="collapse navbar-collapse" id="navbars01">
                    <ul className="navbar-nav me-auto md-2">
                        <li><a className={"nav-link "+ (router.pathname == '/' ? "active":"")} onClick={() => router.push('/')}>Home</a></li>
                        <li><a className={"nav-link "+ (router.pathname == '/showcase' ? "active":"")} onClick={() => router.push('/showcase')}>Showcase</a></li>
                        <li><a className={"nav-link "+ (router.pathname == '/education' ? "active":"")} onClick={() => router.push('/education')}>Education</a></li>
                        <li><a className={"nav-link "+ (router.pathname == '/skill' ? "active":"")} onClick={() => router.push('/skill')}>Skill</a></li>
                        <li><a className={"nav-link "+ (router.pathname == '/faqs' ? "active":"")} onClick={() => router.push('/faqs')}>FAQs</a></li>
                        <li><a className={"nav-link "+ (router.pathname == '/about' ? "active":"")} onClick={() => router.push('/about')}>About</a></li>
                    </ul>
                </div>
                </div>
            </nav>
            )}
            </div>
        )
}