const slides = [
    <img src="/votrlogo.png" />,
    <img src="votergraphic2.png" />,
];

const imageSlides = slides.map((slide, index) => {
    return <li key={`imagesforCal--${index}`} className={`liImage liImage--${index}`}>{slide}</li>;
});

export default function Votr() {
    return (
        <>
            <div className="pane votr">
                <div className="imagesContainer">
                    <ul>{imageSlides}</ul>
                </div>
                <span className="caption">Assets for professional southwestern person and singer Calvin Todd</span>
            </div>
        </>
    );
}