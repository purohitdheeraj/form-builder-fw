import { Link } from "@tanstack/react-router"
import { Button } from "./ui/button"

const Navbar = () => {
  return (
    <div className="py-6 px-10 flex items-center justify-between border border-t-transparent">
      <h2 className="text-2xl font-semibold">
        Firstwork Form Builder
      </h2>

      <Link to="/about">
        <Button size={"lg"} className="shadow-xl text-lg">Create</Button>
      </Link>
    </div>
  )
}

export default Navbar