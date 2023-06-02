import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WithoutDot from "./WithoutDot";
import WithoutPhotoAndDot from "./WithoutPhotoAndDot";
//these must work only on computers, 992px+
import WithDot from "./WithDot";
//this must work on phones and comps
function App() {
    return (
        <main>
            <WithoutDot />
            <WithoutPhotoAndDot />
            <WithDot />
        </main>
    );
}

export default App;
