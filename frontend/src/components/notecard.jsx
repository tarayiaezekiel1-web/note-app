import { PenSquareIcon, Trash2Icon } from "lucide-react"
import { Link } from "react-router-dom"
import { formatDate } from "../libs/utils"
import axios from "axios"
import toast from "react-hot-toast"

function NoteCard({ note, setNotes }) {
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:5000/api/notes/${id}`,
        { withCredentials: true }
      )

      toast.success("Deleted note successfully")

      // ✅ Use _id instead of id
      setNotes((prev) => prev.filter((n) => n._id !== id))
    } catch (error) {
      console.log("Delete error:", error)
      toast.error("Failed to delete note")
    }
  }

  return (
    <div className="card hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-green-400">
      <div className="card-body">
        <h3 className="card-title text-base-content">{note.title}</h3>
        <p className="text-base-content/70 line-clamp-3">
          {note.description}
        </p>
        <div className="card-actions justify-between items-center mt-4">
          <div className="text-sm text-base-content/60">
            {formatDate(new Date(note.createdAt))}
          </div>
          <div className="flex items-center gap-1">
            <PenSquareIcon className="size-3" />
            <button
              className="btn btn-ghost btn-xs text-error"
              onClick={() => handleDelete(note._id)} // ✅ pass _id here too
            >
              <Trash2Icon className="size-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoteCard
