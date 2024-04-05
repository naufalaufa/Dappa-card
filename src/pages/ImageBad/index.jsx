import { useNavigate } from "react-router-dom";
import BackgroundTwoBad from "../../assets/images/background square.jpg";
import imageBad from "../../assets/images/chat bubble if bad.png";
import { IoMdPhotos } from "react-icons/io";

const ImageBad = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen grid place-content-center place-items-center relative">
      <img
        className="min-h-screen  max-h-[100px] w-screen aspect-square object-cover"
        src={BackgroundTwoBad}
        alt={BackgroundTwoBad}
      />
      <div className="absolute top-[0] p-16">
        <img src={imageBad} alt={imageBad} className="w-[260px]" />
        <button
          onClick={() => {
            navigate("/catImage");
          }}
          className="bg-pink-300 text-white p-2 mt-2 rounded-lg shadow-sm shadow-slate-600 flex items-center gap-2"
        >
          <p>Photo Click Here</p>
          <span>
            <IoMdPhotos />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ImageBad;
