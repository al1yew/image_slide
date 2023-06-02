import { useEffect, useRef, useState } from "react";
import IMG_1530 from "./images/IMG_1530.jpg";
import IMG_1904 from "./images/IMG_1904.jpg";

// const WithDot = () => {
//     const overlay = useRef(null);
//     const dot = useRef(null);
//     const container = useRef(null);
//     const overlayContainer = useRef(null);
//     const [chast, setChast] = useState(0.5);

//     useEffect(() => {
//         init();

//         function init() {
//             let { height } = overlay.current.getBoundingClientRect();

//             container.current.style.height = height + 50 + "px";
//             dot.current.style.top = height / 2 + "px";

//             overlayContainer.current.style.marginRight =
//                 -1 * (100 * (1 - chast)) + "%";
//             overlay.current.style.marginLeft = -1 * (100 * (1 - chast)) + "%";
//         }

//         if (overlay.current) {
//             window.addEventListener("load", init);
//         }

//         return () => {
//             window.removeEventListener("load", init);
//         };
//     }, [chast]);

//     function move(e) {
//         let { width, left, right, x, y } =
//             overlay.current.getBoundingClientRect();

//         if (e.clientX > x && e.clientX < right) {
//             dot.current.style.left = e.clientX - x + "px";
//             setChast(1 - (e.clientX - x) / width);
//         }
//     }

//     function startDrag() {
//         window.addEventListener("dragstart", move);
//         window.addEventListener("dragend", move);
//         window.addEventListener("drag", move);
//     }

//     return (
//         <section className="withdot">
//             <div className="container">
//                 <div className="row all">
//                     <p>welcome to our blog website!</p>
//                     <div className="imgcontainer" ref={container}>
//                         <div className="imgkeeper">
//                             <img src={IMG_1904} />
//                         </div>
//                         <div
//                             className="dot"
//                             ref={dot}
//                             draggable="true"
//                             onMouseDown={startDrag}
//                         >
//                             {"< >"}
//                         </div>
//                         <div className="overlay" ref={overlayContainer}>
//                             <img src={IMG_1530} ref={overlay} />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

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

            container.current.style.height = height + 50 + "px";
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

    function move(e) {
        const containerRect = container.current.getBoundingClientRect();
        const containerLeft = containerRect.left;
        const containerRight = containerRect.right;

        const mouseX = e.clientX;

        if (mouseX >= containerLeft && mouseX <= containerRight) {
            const positionX = mouseX - containerLeft;
            const containerWidth = containerRight - containerLeft;
            const ratio = 1 - positionX / containerWidth;

            setChast(ratio);
            dot.current.style.left = positionX + "px";
        }
    }

    function startDrag(e) {
        // e.preventDefault();
        window.addEventListener("mousemove", move);
        window.addEventListener("touchmove", move);
        window.addEventListener("touchstart", move);
        window.addEventListener("mouseup", stopDrag);
        window.addEventListener("touchcancel", stopDrag);
        window.addEventListener("touchend", stopDrag);
    }

    function stopDrag() {
        window.removeEventListener("mousemove", move);
        window.removeEventListener("touchmove", move);
        window.removeEventListener("touchstart", move);
        window.removeEventListener("mouseup", stopDrag);
        window.removeEventListener("touchcancel", stopDrag);
        window.removeEventListener("touchend", stopDrag);
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
