import { useEffect } from "react";
import { Note, baseUrl } from "../App";
import { useNavigate } from "react-router-dom";


const HandleNotes = ({
  noteList,
  setNoteList,
  username,
  note,
  title
}: {
  noteList: Note[];
  setNoteList: React.Dispatch<React.SetStateAction<Note[]>>;
  username: string
  note: string
  title: string
}) => {
  const navigate = useNavigate()
  useEffect(() => {}, []);

  const handleSave = async () => {
    const noteItem: Note = {
      username: `${username}`,
      title: `${title}`,
      note: `${note}`,
    };

    try {
      const response = await fetch(`${baseUrl}`,{
        method: "POST",
        body: JSON.stringify(noteItem),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Något gick fel vid sparningen!");
      }

      const savedNote = await response.json();

      if(savedNote.success) {
        console.log(savedNote.message);
        setNoteList([...noteList, savedNote]);
      }

    } catch (error) {
      console.error("Fel vid sparning:", error);
    }
  };

  function handleEdit() {}
  function handleDelete() {}

  return (
    <>
      <article className="handle-notes">
          <button onClick={() => navigate("/write")}>Skapa ny anteckning</button>
          <button onClick={() => navigate("/overview")}>Se din lista</button>
          
          <button onClick={handleSave}>Spara</button>
          <button onClick={handleEdit}>Redigera</button>
          <button onClick={handleDelete}>Radera</button>
      </article>
    </>
  );
};

export default HandleNotes;
