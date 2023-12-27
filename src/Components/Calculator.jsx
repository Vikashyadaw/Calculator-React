import { useState } from "react";

const Calculator = () => {
    
    const [result, setResult] = useState('');
    const[display, setDisplay] = useState(false);
   

   const clickHandle = (e) =>{
    if(display){
       setResult("");
       setDisplay(false);
    }
    // console.log(result)
        setResult((result)=>result.concat(e.target.value));
         }

    const clearScreen = () =>{
        setResult("");
    }

    const calculate = () =>{
        setResult(eval(result));
        setDisplay(!display)

    }
      

  return (
    <div className=" font-bold text-white flex items-center justify-center mt-10">
      <div className="w-70 h-auto rounded-2xl shadow-xl border-4 border-gray-100">
        <div className="screen m-2 p-1">
          <input
            type="text" value={result}
            className="px-1 text-left placeholder-black outline-none rounded-lg bg-gray-100 text-2xl pt-8  text-black"
            placeholder="0"
          />
        </div>
        <div className="flex items-center justify-center m-4 shadow-md bg-gray-600">
            <h2>Calculator-by-Vikash</h2>
        </div>
        <div className="keyboard ">
        <div className="m-4 flex justify-between">
                        <input type="button" onClick={clearScreen} value="C" className="bg-red-300  hover:bg-red-200  shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"  />
                        <input type="button" value="<" className="bg-gray-200 hover:bg-gray-400 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"  onClickCapture={clickHandle}/>
                        <input type="button" value="%" className="bg-gray-200 hover:bg-gray-400 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"  onClickCapture={clickHandle}/>
                        <input type="button" value="/" className="bg-pink-300 hover:bg-pink-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"  onClickCapture={clickHandle}/>
                    </div>
                    <div className="m-4 flex justify-between">
                        <input type="button"  value="9" className="bg-red-300  hover:bg-red-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" onClickCapture={clickHandle}  />
                        <input type="button" value="8" className="bg-gray-200 hover:bg-gray-400 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" onClickCapture={clickHandle} />
                        <input type="button" value="7" className="bg-gray-200 hover:bg-gray-400 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" onClickCapture={clickHandle} />
                        <input type="button" value="*" className="bg-pink-300 hover:bg-pink-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" onClickCapture={clickHandle} />
                    </div><div className="m-4 flex justify-between">
                        <input type="button"  value="6" className="bg-red-300  hover:bg-red-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"  onClickCapture={clickHandle}/>
                        <input type="button" value="5" className="bg-gray-200 hover:bg-gray-400 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" onClickCapture={clickHandle} />
                        <input type="button" value="4" className="bg-gray-200 hover:bg-gray-400 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" onClickCapture={clickHandle} />
                        <input type="button" value="-" className="bg-pink-300 hover:bg-pink-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" onClickCapture={clickHandle} />
                    </div><div className="m-4 flex justify-between">
                        <input type="button"  value="3" className="bg-red-300 hover:bg-red-200  shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" onClickCapture={clickHandle} />
                        <input type="button" value="2" className="bg-gray-200 hover:bg-gray-400 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" onClickCapture={clickHandle} />
                        <input type="button" value="1" className="bg-gray-200 hover:bg-gray-400 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" onClickCapture={clickHandle} />
                        <input type="button" value="+" className="bg-pink-300 hover:bg-pink-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" onClickCapture={clickHandle} />
                    </div><div className="m-4 flex justify-between">
                        <input type="button"  value="0" className="bg-red-300 hover:bg-red-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" onClickCapture={clickHandle} />
                        <input type="button" value="00" className="bg-gray-200 hover:bg-gray-400 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"  onClickCapture={clickHandle}/>
                        <input type="button" value="." className="bg-gray-200 hover:bg-gray-400 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"  onClickCapture={clickHandle}/>
                        <input type="button" onClick={calculate} value="=" className="bg-slate-500 hover:bg-slate-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"  />
                    </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
