import CatImages from "../../assets/images/cute cat.jpg";

const CatImage = () => {
  return (
    <div className="min-h-screen grid w-full place-content-center place-items-center max-h-[100px] bg-[url('assets/images/bakcground.jpg')]">
      <div>
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
