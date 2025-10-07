import { useEffect, useState } from "react";
import Navbar from "../components/navbar.jsx";
import NoteCard from "../components/noteCard.jsx";
import axios from "axios";
import toast from "react-hot-toast";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/notes/", {
        withCredentials: true,
      });
      setNotes(res.data.data);
    } catch (error) {
      toast.error("Failed to fetch notes");
      console.error("Server error:", error);
    } finally {
      // ✅ Make sure loading is set to false after fetch completes
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto p-4 mt-10">
        {loading && <div className="text-center text-primary py-10">Loading...</div>}

        {!loading && notes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note, index) => (
              // ✅ Return JSX explicitly with parentheses
              <NoteCard key={index} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}

        {!loading && notes.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No notes found</p>
        )}
      </div>
    </div>
  );
};

export default Home;
