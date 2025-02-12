import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";

export const baseUrl =
  "https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes";

export interface Note {
  id?: string;
  username: string;
  title: string;
  note: string;
  createdAt?: string;
}

const App = () => {
  const [noteList, setNoteList] = useState<Note[]>([]);
  const [loginUser, setLoginUser] = useState(false);
  const [username, setUsername] = useState("");
  const [note, setNote] = useState("");
  const [title, setTitle] = useState("");

  return (
    <Router>
      <Header setLoginUser={setLoginUser} setUsername={setUsername} />
      <Routes>
        <Route path="/*" element={<Home        
        loginUser={loginUser}
        noteList={noteList}
        setNoteList={setNoteList}
        username={username}
        note={note}
        setNote={setNote}
        title={title}
        setTitle={setTitle}/>} />
      </Routes>
    </Router>
  );
}

export default App;
