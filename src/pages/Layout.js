import { Link } from "react-router-dom";

export default function Layout() {
    return (
        <ul>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li><Link to="/blog">Blogs</Link></li>
        </ul>
    )
}