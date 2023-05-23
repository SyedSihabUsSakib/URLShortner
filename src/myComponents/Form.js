import React,{useState} from 'react'

const Form = (props) => {
    const [longUrl, setLongUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');

    // let myStyle={
    //     minHeight:"45vh",
    //   }
    const generateShortUrl = () => {
      // Generate a random alphanumeric string for the short URL
      const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      const length = 7;
      let result = '';
  
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      
      return result;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission
      const newUrl=generateShortUrl();
      while(true){
        // let flag=false;
        let res=props.links.find((e)=>{
          if(e.shortLink==newUrl)return true;
        })
        if(!res)break;
        else newUrl=generateShortUrl();
      }
      // setLongUrl("");
      setShortUrl(newUrl);
      props.addUrl(longUrl,newUrl,0)
      
    };
  
    return (
      <div className="d-flex justify-content-center align-items-top vh-30 my-5 " >
        <div className="card p-5 border border-success border-rounded bg-dark text-light w-50 p-2 shadow-lg rounded" >
          <h1 className="text-center">URL Shortener</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="url"
                className="form-control border-2"
                value={longUrl}
                onChange={(e) => setLongUrl(e.target.value)}
                placeholder="Enter a long URL"
                required
              />
              <input
                type="text"
                className="form-control border-2 mt-3"
                value={shortUrl}
                // onChange={(e) => setLongUrl(e.target.value)}
                placeholder="New Short URL"
                readonly
              />
            </div>
            <div className="text-center mt-5">
              <button type="submit" className="btn btn-primary ">Shorten</button>
            </div>
          </form>
        </div>
      </div>
    )
}

export default Form
