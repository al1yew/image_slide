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
        <section className="withoutphoto">
            <div className="container">
                <div className="row all" onMouseMove={move}>
                    <p>welcome to our blog website!</p>
                    <div className="elements" ref={container}>
                        <div className="element">
                            <div className="content">
                                <span>DESIGNER</span>
                                <span>
                                    Product designer specializing in UI design
                                    and design systems
                                </span>
                            </div>
                        </div>
                        <div className="overlay" ref={overlayContainer}>
                            <div className="content" ref={overlay}>
                                <span>DEVELOPER</span>
                                <span>
                                    Front end developer who writes clean,
                                    scalable and maintainable code
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default WithoutDot;
