import {useRef} from "react";

function ControleArticale() {
  const ifram = useRef(null)
  return (
  <div className="w-full h-[85vh]">
    <iframe ref={ifram} className='relative w-full h-full' src={`../../../build/index.html`}></iframe>
  </div>
  );
}

export default ControleArticale;
