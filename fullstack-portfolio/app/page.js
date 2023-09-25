import homeImage from "../public/home.jpg";

export default function Home() {
  const backgroundImageStyle = {
    backgroundImage: `url(${homeImage.src})`,
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <main>
      <div className="relative h-screen">
        <div
          className="h-2/3 flex items-center justify-center text-center"
          style={backgroundImageStyle}
        >
          {/* <div className="absolute top-0 right-0 bottom-0 left-0 bg-orange-800 opacity-75"></div> */}
          {/* Content for the image section */}
          <div className="text-white">
            <h2 className="text-4xl tracking-tight leading-10 font-medium sm:text-5xl sm:leading-none md:text-6xl">
              <span className="text-orange-200">Claudia Solis</span>
            </h2>
            <p className="mt-3 text-white sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5">
              Full Stack Web Developer
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

