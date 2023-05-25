import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/dist";
const StatComponent = ({ links }) => {
  const { shortCode } = useParams();

  const [realLink, setRealLink] = useState("");

  useEffect(() => {
    //const linkss = retrieveDataFromLocalStorage("links")
    //console.log("sadfdsa")
    setRealLink(
      links.find((e) => {
        //console.log(e)
        if (e.shortLink === shortCode) return true;
      })
    );
  }, [links]);

  return (
    <div>
      <div>
        <div className="container">
          <div className="row container my-2 bg-dark text-white p-2 rounded">
            <div className="col-md-6">
              <h5>Long Links</h5>
            </div>
            <div className="col-md-4">
              <h5>Short Links</h5>
            </div>
            <div className="col-md-2">
              <h5>Count</h5>
            </div>
          </div>
          <div className="row container my-2  p-2 rounded">
            <div className="col-md-6">
              <h5>{realLink?.longLink}</h5>
            </div>
            <div className="col-md-4">
              <h5>{"https://shrinker.netlify.app/" + realLink?.shortLink}</h5>
            </div>
            <div className="col-md-2">
              <h5>{realLink?.count}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatComponent;
