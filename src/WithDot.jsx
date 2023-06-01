import { useEffect, useRef, useState } from "react";
import IMG_1530 from "./images/IMG_1530.jpg";
import IMG_1904 from "./images/IMG_1904.jpg";

const WithDot = () => {
    const overlay = useRef(null);
    const dot = useRef(null);
    const container = useRef(null);
    const overlayContainer = useRef(null);
    const [chast, setChast] = useState(0.5);

    useEffect(() => {
        let { height } = overlay.current.getBoundingClientRect();

        container.current.style.height = height + 50 + "px";
        container.current.style.overflow = "hidden";

        overlayContainer.current.style.marginRight =
            -1 * (100 * (1 - chast)) + "%";
        overlay.current.style.marginLeft = -1 * (100 * (1 - chast)) + "%";

        //#region dsadsa

        if (overlay.current) {
            overlay.current.addEventListener("load", init);
        }

        return () => {
            if (overlay.current) {
                overlay.current.removeEventListener("load", init);
            }
        };

        //#endregion dsadsa
    }, [chast]);

    function move(e) {
        let { width, left, right, x } = overlay.current.getBoundingClientRect();

        if (e.clientX > x) {
            setChast((e.clientX - x) / width);
        }
    }

    return (
        <section className="main">
            <div className="container">
                <div className="row all">
                    <p>welcome to our blog website!</p>
                    <div
                        className="imgcontainer"
                        ref={container}
                        onMouseMove={move}
                    >
                        <div className="imgkeeper">
                            <img src={IMG_1904} />
                        </div>
                        <div className="dot" ref={dot}>
                            {"< >"}
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
export default WithDot;
