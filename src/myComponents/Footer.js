import React from 'react'

const Footer = () => {
  let myStyle = {
    // position: 'absolute',
    // top:'100vh',
    width:'100%',
   
  }

  return (
    <footer className="bg-dark text-light py-1 mt-auto" style={myStyle} >
      <p className="text-center">
        Copyright &copy; URLShortner.com
      </p>
    </footer>

  )
}

export default Footer
