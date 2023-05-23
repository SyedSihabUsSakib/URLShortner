import React from 'react'
import { Link } from 'react-router-dom'

const Links = (props) => {
    let singleLinkStyle={
        borderBottom:" 2px solid black"
    }
  return (
      <div className='container'>
          <div className="row py-2" style={singleLinkStyle}>
              <div className="col-md-6"><h6>{props.link.longLink}</h6></div>
              <div className="col-md-4">
                  <Link to={props.link.shortLink} target="_blank">
                      <h6>{props.link.shortLink}</h6>
                  </Link>
              </div>
              <div className="col-md-1 d-flex flex-row">
                  <h6>{props.link.count}</h6>
                 
              </div>
              <div className="col-md-1">
                <button className="btn btn-danger btn-sm " onClick={() => (props.onDelete(props.link))}>Delete</button>
              </div>
          </div>
      </div>
  )
}

export default Links
