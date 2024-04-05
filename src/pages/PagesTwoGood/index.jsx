import BackgroundImageGood2 from "../../assets/images/bakcground.jpg";
import GifAnimate from "../../assets/GIF/me melody chasing anime.gif";
import { useNavigate } from "react-router-dom";

const PagesTwoGood = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen grid place-content-center place-items-center">
      <img
        className="min-h-screen  max-h-[100px] w-screen aspect-square object-cover"
        src={BackgroundImageGood2}
        alt={BackgroundImageGood2}
      />

      <div className="bg-white p-4 rounded-lg w-[320px] absolute  bottom-[30%]">
        <div>
          <img src={GifAnimate} alt={GifAnimate} />
        </div>
        <p className="text-xs font-bold ">
          Please dont forget to take care of your health by drinking plenty of
          water, okay baby
        </p>
        <button
          onClick={() => {
            navigate("/imagegood");
          }}
          className="p-2 bg-pink-300 shadow-sm shadow-slate-500 text-white rounded-xl mt-3"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PagesTwoGood;
