import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WithoutDot from "./WithoutDot";
import WithoutPhotoAndDot from "./WithoutPhotoAndDot";
//this must work only on computers, 992px+
function App() {
    return (
        <main>
            <WithoutDot />
            <WithoutPhotoAndDot />
        </main>
    );
}

export default App;
