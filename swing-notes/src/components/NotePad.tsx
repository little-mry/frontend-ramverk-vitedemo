const NotePad = ({
  note,
  setNote,
  title,
  setTitle,
}: {
  note: string;
  setNote: React.Dispatch<React.SetStateAction<string>>;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <>
    <article className="notepad__con">
      <input
        type="text"
        placeholder="Titel"
        className="notepad__title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="notepad"
        placeholder="Skriv din anteckning här..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      </article>
    </>
  );
};

export default NotePad;
