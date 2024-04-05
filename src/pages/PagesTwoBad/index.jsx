import { useNavigate } from "react-router-dom";
import BackgroundTwoBad from "../../assets/images/background square.jpg";
import CutePuppy from "../../assets/GIF/cute puppy.gif";

const PagesTwoBad = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen grid place-content-center place-items-center">
      <img
        className="min-h-screen  max-h-[100px] w-screen aspect-square object-cover"
        src={BackgroundTwoBad}
        alt={BackgroundTwoBad}
      />
      <div className="bg-white p-4 rounded-lg w-[320px] absolute  bottom-[30%]">
        <div>
          <img src={CutePuppy} alt={CutePuppy} />
        </div>
        <p className="text-xs font-bold mt-2">
          Please dont forget to take care of your health by drinking plenty of
          water, okay baby
        </p>
        <button
          onClick={() => navigate("/imagebad")}
          className="p-2 bg-pink-300 shadow-sm shadow-slate-500 text-white rounded-xl mt-3"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PagesTwoBad;
