import { Note } from "../App";

const NoteItem = ({ note }: { note: Note }) => {
  return (
    <>
      <p className="note note-date">{note.createdAt}</p>
      <p className=" note note-title">{note.title}</p>
      <p className="note note-preview">{note.note.slice(0, 50)}...</p>
      </>
  );
};

export default NoteItem;
