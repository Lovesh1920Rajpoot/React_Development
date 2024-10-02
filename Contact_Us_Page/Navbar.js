
import styles from "./Navbar.module.css";
export default function Navbar() {
    console.log(styles);
    return (
    <nav className= {`${styles.navbar} container`}>
    <div className="logo">
        <div><img src="/images/Frame 2 1.png" alt="logoimage" /></div>
    </div>
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>  
    </ul>
    </nav>
  )
}
