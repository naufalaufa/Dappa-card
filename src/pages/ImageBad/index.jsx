import { useNavigate } from "react-router-dom";
import imageBad from "../../assets/images/chat bubble if bad.png";
import { IoMdPhotos } from "react-icons/io";

const ImageBad = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen grid place-content-center place-items-center bg-[url('src/assets/images/backgroundsquare.jpg')]">
      <div>
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
