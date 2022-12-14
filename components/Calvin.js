const slides = [
    <img src="/calloval2.png" />,
    <img src="/calbeats2.png" />,
    <img src="/calvinstandsalone2.png" />,
  ];

const imageSlides = slides.map((slide, index) => {
    return <li key={`imagesforCal--${index}`} className={`liImage liImage--${index}`}>{slide}</li>;
});

  export default function Calvin() {
    return (
      <>
        <div className="pane calvin">
            <div className="imagesContainer">
              <ul>{imageSlides}</ul>
            </div>
            <span className="caption">Assets for professional southwestern person and singer Calvin Todd</span>
        </div>
      </>
    );
  }