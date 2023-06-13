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
        init();

        function init() {
            let { height } = overlay.current.getBoundingClientRect();

            container.current.style.height = height + "px";
            dot.current.style.top = height / 2 + "px";

            overlayContainer.current.style.marginRight =
                -1 * (100 * (1 - chast)) + "%";
            overlay.current.style.marginLeft = -1 * (100 * (1 - chast)) + "%";
        }

        window.addEventListener("resize", init);
        window.addEventListener("load", init);

        return () => {
            window.removeEventListener("resize", init);
        };
    }, [chast]);

    // function move(e) {
    //     e.preventDefault();

    //     const containerRect = container.current.getBoundingClientRect();
    //     const containerLeft = containerRect.left;
    //     const containerRight = containerRect.right;

    //     let clientX;

    //     if (e.type === "touchmove") {
    //         clientX = e.touches[0].clientX;
    //     } else {
    //         clientX = e.clientX;
    //     }

    //     if (clientX >= containerLeft && clientX <= containerRight) {
    //         const positionX = clientX - containerLeft;
    //         const containerWidth = containerRight - containerLeft;
    //         const ratio = 1 - positionX / containerWidth;

    //         setChast(ratio);
    //         dot.current.style.left = positionX + "px";
    //     }
    // }

    function move(e) {
        e.preventDefault();

        const containerRect = container.current.getBoundingClientRect();
        const containerLeft = containerRect.left;
        const containerRight = containerRect.right;

        let pageX;

        if (e.type === "touchmove") {
            pageX = e.touches[0].pageX;
        } else {
            pageX = e.pageX;
        }

        if (pageX >= containerLeft && pageX <= containerRight) {
            const positionX = pageX - containerLeft;
            const containerWidth = containerRight - containerLeft;
            const ratio = 1 - positionX / containerWidth;

            setChast(ratio);
            dot.current.style.left = positionX + "px";
        }
    }

    function startDrag(e) {
        e.preventDefault();

        if (e.type === "touchstart") {
            window.addEventListener("touchmove", move);
            window.addEventListener("touchend", stopDrag);
        } else {
            window.addEventListener("mousemove", move);
            window.addEventListener("mouseup", stopDrag);
        }
    }

    function stopDrag() {
        window.removeEventListener("touchmove", move);
        window.removeEventListener("touchend", stopDrag);
        window.removeEventListener("mousemove", move);
        window.removeEventListener("mouseup", stopDrag);
    }

    return (
        <section className="withdot">
            <div className="container">
                <div className="row all">
                    <p>welcome to our blog website!</p>
                    <div className="imgcontainer" ref={container}>
                        <div className="imgkeeper">
                            <img src={IMG_1904} alt="Image 1" />
                        </div>
                        <div
                            className="dot"
                            ref={dot}
                            onMouseDown={startDrag}
                            onTouchStart={startDrag}
                            onTouchEnd={stopDrag}
                        >
                            {"< >"}
                        </div>
                        <div className="overlay" ref={overlayContainer}>
                            <img src={IMG_1530} alt="Image 2" ref={overlay} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default WithDot;
