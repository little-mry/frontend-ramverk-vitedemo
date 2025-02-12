import { Note } from "../App";
import NoteItem from "./NoteItem";
import { useEffect } from "react";
import { baseUrl } from "../App";

const Overview = ({
  loginUser,
  noteList,
  username,
  setNoteList,
}: {
  loginUser: boolean;
  noteList: Note[];
  username: string;
  setNoteList: React.Dispatch<React.SetStateAction<Note[]>>;
}) => {
  useEffect(() => {
    if (!loginUser) return;

    fetch(`${baseUrl}/${username}`)
      .then((res) => res.json())
      .then((userData) => {
        if (userData && userData.notes) {
          console.log(userData)
          console.log('user notes fetches:', userData.notes);
          
          setNoteList(userData.notes);
        } else {
          console.error("Ingen användare med detta namn");
        }
      })
      .catch((error) => console.error("Error fetching user", error));
  }, [loginUser, username]);

  if (!noteList || noteList.length === 0) {
    return (
      <article className="note-list__con">
        <h3 className="note__heading">Titel</h3>
        <h3 className="note__heading">Skapad</h3>
        <h3 className="note-__heading">Anteckning</h3>
        <p>Inga anteckningar</p>
      </article>
    );
  }

  return (
    <>
        <article className="note-list__con">
            <h3 className="note__heading">Titel</h3>
            <h3 className="note__heading">Skapad</h3>
            <h3 className="note__heading">Anteckning</h3>
          {username && noteList.length > 0 ? (
                noteList.map((note) => <NoteItem note={note} key={note.id} />)
              ) : (
                <p className="note-notes">Inga anteckningar</p>
              )}
            
      
        </article>
    </>
  );
};

export default Overview;
