import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/dist";
import {
  retrieveDataFromLocalStorage,
  saveDataToLocalStorage,
} from "../utils/localStorage";

const ShortUrlPage = ({ links, setLinks }) => {
  //console.log("shihiii",links);
  const [isCheck, setIsCheck] = useState(false);
  const [flag, setFlag] = useState(false);

  const { shortCode } = useParams();

  useEffect(() => {
    //const linkss = retrieveDataFromLocalStorage("links")
    //console.log("sadfdsa")
    let realLink = links.find((e) => {
      //console.log(e)
      if (e.shortLink === shortCode) {
        return true;
      }
    });
    if (!realLink && links.length > 0) setFlag(true);
    //console.log(realLink);

    if (realLink && !isCheck) {
      setIsCheck(true);
      const newLinks = links?.map((item) => {
        if (item.shortLink === shortCode) {
          item.count = item.count + 1;
        }
        return item;
      });
      setLinks(newLinks);

      saveDataToLocalStorage("links", newLinks);

      window.location.replace(realLink.longLink);
      //realLink.count++;
    }
  }, [links]);

  return <div>{flag && <h1 className="text-danger">Not Found!</h1>}</div>;
};

export default ShortUrlPage;
