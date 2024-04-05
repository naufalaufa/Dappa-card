import ImageGoods from "../../assets/images/chat bubble if good.png";
import { useNavigate } from "react-router-dom";

const ImagesGood = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen grid place-content-center place-items-center bg-[url('assets/images/bakcground.jpg')]">
      <div>
        <img src={ImageGoods} alt={ImageGoods} className="w-[260px]" />
        <button
          onClick={() => navigate("/catimage")}
          className="bg-pink-300 p-2 rounded-lg text-white mt-2 shadow-sm shadow-slate-400"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImagesGood;
