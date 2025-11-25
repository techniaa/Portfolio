import { useState } from "react"


const CopyEmailButton=()=> {
  const [copied, setcopied]=useState(false);
  const email="nehagc8485@gmail.com";
  const copyToClipboard=()=>{
    navigator.clipboard.writeText(email);
    setcopied(true);
    setTimeout(()=>{
      setcopied(false);

    },2000);
  }
  return (
    <button 
    onClick={copyToClipboard}
    className="relative px-1 py-4 text-sm text-center rounded-full font-extralight
    bg-primary w-[12rem] cursor-pointer overflow-hidden">
    {copied?(
      <p className="flex items-center justify-center gap-2">
        <img src="assets/copy-done.svg" className="w-5"
        alt="copy Icon"/>
        Email has copied</p>
    ):(
      <p className="flex items-center justify-center gap-2">
        <img src="assets/copy.svg" className="w-5" alt="copy icon"/>
        Copy Email Address
      </p>
    )}
    </button>
  )
}

export default CopyEmailButton