import { Route, Routes } from "react-router-dom";
import Overview from "./Overview";
import { Note } from "../App";
import HandleNotes from "./HandleNotes";
import NotePad from "./NotePad";

const Home = ({
  loginUser,
  noteList,
  setNoteList,
  username,
  note,
  setNote,
  title,
  setTitle,
}: {
  loginUser: boolean;
  noteList: Note[];
  setNoteList: React.Dispatch<React.SetStateAction<Note[]>>;
  username: string;
  note: string;
  setNote: React.Dispatch<React.SetStateAction<string>>;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>
}) => {
  return (
    <main className="home">
      <aside className="sidebar">
        <HandleNotes noteList={noteList} setNoteList={setNoteList} username={username} title={title} note={note}/>
      </aside>
      <section className="content">
        <Routes>
          <Route
            path="/write"
            element={<NotePad note={note} setNote={setNote} title={title} setTitle={setTitle}/>} />
          <Route
            path="/overview"
            element={<Overview  noteList={noteList} loginUser={loginUser} username={username} setNoteList={setNoteList} />} />
        </Routes>
      </section>
    </main>
  );
};

export default Home;
