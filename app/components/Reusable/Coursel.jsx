const images = [
  {
    src: "/image1.svg",
    alt: "Image 1",
    name: "Common Law",
  },
  {
    src: "/image3.svg",
    alt: "Image 3",
    name: "Family Law",
  },
  {
    src: "/image2.svg",
    alt: "Image 2",
    name: "Criminal Law",
  },
  {
    src: "/image4.svg",
    alt: "Image 4",
    name: "Business Law",
  },
  {
    src: "/image1.svg",
    alt: "Image 5",
    name: "Estate & Trust Law",
  },
];

function Carousel() {
  return (
    <div className="bg-[var(--secondary)] px-4 md:py-24 py-14">
      <div className="carousel">
        <div className="carousel-track">
          {[...images, ...images].map((image, index) => (
            <div key={index} className="carousel-item">
              <img src={image.src} alt={image.alt} />
              <p className="md:flex hidden justify-center font-semibold text-[var(--dark-color)]">
                {image.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
