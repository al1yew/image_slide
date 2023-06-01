import { useEffect, useRef, useState } from "react";
import IMG_1530 from "./images/IMG_1530.jpg";
import IMG_1904 from "./images/IMG_1904.jpg";

const WithoutDot = () => {
    const overlay = useRef(null);
    const container = useRef(null);
    const overlayContainer = useRef(null);
    const [chast, setChast] = useState(0.5);

    useEffect(() => {
        overlayContainer.current.style.marginRight =
            -1 * (100 * (1 - chast)) + "%";
        overlay.current.style.marginLeft = -1 * (100 * (1 - chast)) + "%";
    }, [chast]);

    function move(e) {
        let { width, height, x, y } = overlay.current.getBoundingClientRect();

        setChast((e.clientX - x) / width);

        if (
            e.clientX < x ||
            e.clientX > width + x ||
            e.clientY < y ||
            e.clientY > height + y
        ) {
            setChast(0.5);
        }
    }

    return (
        <section className="without">
            <div className="container">
                <div className="row all" onMouseMove={move}>
                    <p>welcome to our blog website!</p>
                    <div className="imgcontainer" ref={container}>
                        <div className="imgkeeper">
                            <img src={IMG_1904} />
                        </div>

                        <div className="overlay" ref={overlayContainer}>
                            <img src={IMG_1530} ref={overlay} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default WithoutDot;
