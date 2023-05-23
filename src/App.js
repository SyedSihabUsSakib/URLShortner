
import './App.css';
import React,{useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Home from './pages/Home';
import ShortUrlPage from './pages/ShortUrlPage';
import NotFound from './pages/NotFound';
import { saveDataToLocalStorage,retrieveDataFromLocalStorage } from "./utils/localStorage";
import Stat from './pages/Stat';
import Statistics from './pages/Statistics';
function App() {
  const [links,setLinks] = useState([])

  useEffect(()=>{
    if(retrieveDataFromLocalStorage("links")){
      setLinks(retrieveDataFromLocalStorage("links"));
    }
  },[])

  console.log(links)

  const addUrl=(longUrl,newUrl,count)=>{
    setLinks([...links,{
      longLink:longUrl,
      shortLink:newUrl,
      count: count
    }])

    saveDataToLocalStorage("links",[...links,{
      longLink:longUrl,
      shortLink:newUrl,
      count: count
    }])
  }

  const onDelete=(link)=>{
    setLinks(links.filter((e)=>{
      return e!==link;
    }))
    saveDataToLocalStorage("links",links.filter((e)=>{
      return e!==link;
    }))
    
  }

  return (

  <Router>


    <Routes >

      <Route path="/not-found" element={<NotFound/>} />

      <Route path="/statistics/:shortCode" element={<ShortUrlPage links={links} setLinks={setLinks} />} />

      <Route path="/statistics" element={<Statistics links={links} onDelete={onDelete}/>}/>

      <Route path="/:shortCode/stat" element={<Stat links={links} setLinks={setLinks} />} />

      <Route path="/:shortCode" element={<ShortUrlPage links={links} setLinks={setLinks} />} />

      <Route path="/"  element={<Home links={links} addUrl={addUrl} onDelete={onDelete}/>}/>
    </Routes >


  </Router>
   

   
    
    
   
  );
}

export default App;
