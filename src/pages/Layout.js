import { Link } from "react-router-dom";

export default function Layout() {
    const styleObject = {
        display: "flex",
        justifyContent: "space-around",
        listStyle: "none",
        padding: "20px",
        backgroundColor: "lightblue",
    }

    return (
        <>
        <p>Working in progress</p>
        <ul style={styleObject}>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li><Link to="/blog">Blogs</Link></li>
            <li><Link to="/tictac">Game Tictac</Link></li>
            <li><Link to="/app">App</Link></li>
        </ul>
        </>
    )
}