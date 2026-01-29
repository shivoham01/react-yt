import { useContext } from "react"
import { themeDataContext } from "../context/ThemeContext"

const Navbar = () => {
    const [theme] = useContext(themeDataContext);
    return (
        <div className={theme=='light'?'light':'dark'}>
            <h1>This is Navbar</h1>
            {theme} 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sequi reprehenderit debitis doloribus dolore eligendi rerum voluptatem. Quisquam, voluptate pariatur? Illum magnam ea alias labore possimus animi id aut provident! Soluta quam, tempora, possimus cupiditate ipsa id illo tenetur magni, error omnis impedit aperiam odio itaque deserunt sed earum facilis deleniti in repellat! Neque, architecto?</p>
        </div>
    )
}

export default Navbar