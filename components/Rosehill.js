const slides = [
    <img src="/rosehilllogo.png" />,
    <img src="/rosehill.png" />,
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
                <span className="caption">Assets for the short-lived voting information app, <u>The Voter's Companion</u></span>
            </div>
        </>
    );
}