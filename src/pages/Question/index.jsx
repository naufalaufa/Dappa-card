import GIFMelody from "../../assets/GIF/my melody shy.gif";
import { IoIosPaw } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Question = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen grid place-content-center place-items-center  bg-[url('assets/images/bakcground.jpg')]">
      <div className="grid place-content-center place-items-center absolute top-[30%]">
        <div className="w-[300px] bg-pink-300 shadow-sm shadow-slate-300 absolute top-[50%] rounded-xl grid p-2">
          <span>
            <IoIosPaw size={30} className="text-black bg-white rounded-full" />
          </span>
          <div className="bg-white w-[300px] absolute top-12 p-2 rounded-xl grid grid-cols-2 gap-4">
            <div className="whitespace-nowrap text-sm grid place-content-center">
              <h1 className="font-bold">Hello Cepis!</h1>
              <p className="font-bold">How are you today ?</p>
              <div className="flex justify-around mt-4">
                <button
                  onClick={() => navigate("/pages2good")}
                  className="bg-pink-300 text-white p-3 rounded-lg shadow-sm shadow-slate-800"
                >
                  Good
                </button>
                <button
                  onClick={() => navigate("/pages2bad")}
                  className="bg-pink-300 text-white p-3 rounded-lg shadow-slate-800 shadow-sm"
                >
                  Bad
                </button>
              </div>
            </div>
            <div>
              <img src={GIFMelody} alt={GIFMelody} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
