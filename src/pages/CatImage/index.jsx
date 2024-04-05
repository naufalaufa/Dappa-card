import CatImages from "../../assets/images/cute cat.jpg";
import BackgroundTwoBad from "../../assets/images/background square.jpg";

const CatImage = () => {
  return (
    <div className="min-h-screen grid w-full place-content-center place-items-center max-h-[100px]">
      <img
        className="min-h-screen grid place-content-center max-h-[100px] w-screen object-cover"
        src={BackgroundTwoBad}
        alt={BackgroundTwoBad}
      />
      <div className="absolute">
        <img
          className="min-h-screen object-contain relative  p-4 rounded-lg"
          src={CatImages}
          alt={CatImages}
        />
      </div>
    </div>
  );
};

export default CatImage;
