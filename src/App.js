import { useState,useRef } from "react"


export default function Stopwatch() {
  

  const [count,setCount] = useState(0)
  const timerIdRef = useRef(null)

  const handleStartTime = () =>{
    if(!timerIdRef.current){
      timerIdRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1)

      },1000)
   }
  }

  const handleStopTime = ()=>{
    clearInterval(timerIdRef.current)
    timerIdRef.current = null

  }



  return (
    <div className='p-12 mx-auto space-y-4 max-w-[300px]'>
      <div className='font-bold text-center text-3xl'>Zamanlayıcı: {count}s</div>
      <div className='flex justify-between'>
        <button className='text-amber-500 font-bold' onClick={handleStopTime}>Durdur</button>
        <button className='text-green-500 font-bold' onClick={handleStartTime}>Başlat</button>
      </div>
    </div>
  )
}
