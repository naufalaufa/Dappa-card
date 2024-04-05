import ImageGoods from "../../assets/images/chat bubble if good.png";
import BackgroundImageGood2 from "../../assets/images/bakcground.jpg";
import { useNavigate } from "react-router-dom";

const ImagesGood = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen grid place-content-center place-items-center">
      <img
        className="min-h-screen max-h-[100px] w-screen object-cover"
        src={BackgroundImageGood2}
        alt={BackgroundImageGood2}
      />
      <div className="absolute p-16 top-[0]">
        <img src={ImageGoods} alt={ImageGoods} className="w-[260px]" />
        <button
          onClick={() => navigate("/catimage")}
          className="bg-pink-300 p-2 absolute rounded-lg text-white mt-2 shadow-sm shadow-slate-400"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImagesGood;
