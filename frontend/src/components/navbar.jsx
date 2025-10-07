
import { Link } from "react-router-dom"
import {PlusIcon} from "lucide-react"

function Navbar(){
    return(
        <header className="bg-base-300 border-b border-base-content/10">
            <div className="mx-auto max-w-6xl py-4 px-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-1xl font-bold text-primary font-mono tracking-tighter" >
                        noteBoard
                    </h1>
                    <div className="flex items-center gap-3"> 
                        <Link to={"/create"} className="btn btn-primary text-1xl">
                        <PlusIcon className="size-3"/>
                          <span>new Note</span></Link>

                          

                    </div>

                </div>

            </div>
        </header>
      
    )
}
export default Navbar