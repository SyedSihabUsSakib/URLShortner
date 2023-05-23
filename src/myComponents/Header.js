import React from 'react'

export default function Header(props) {
    let headerStyle={
        margin:0,
        padding:0
    }
    return (
        
            <nav className="navbar navbar-expand-lg" style={headerStyle}>
                <div className="container-fluid bg-dark p-2">
                    <a className="navbar-brand text-light px-5" href="#"><h5>URL Shortner</h5></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li> */}
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li> */}

                        </ul>
                        {props.search?<form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>:""}
                    </div>
                </div>
            </nav>
       
    )
}
