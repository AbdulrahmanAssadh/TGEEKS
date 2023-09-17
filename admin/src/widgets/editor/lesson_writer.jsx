import TGeeksEditor from "./tgeeks_editor";

function LessonWriter({ data, setData, setFieldsState }) {
  const onEditorChanges = (content, editor) => {
    setData((prevState) => {
      return { ...prevState, content: content };
    });
    if (content === "") {
      setFieldsState((prevState) => {
        return { ...prevState, content: false };
      });
    } else {
      setFieldsState((prevState) => {
        return { ...prevState, content: true };
      });
    }
  };

  return (
    <div className={"h-full rounded-lg"}>
      <TGeeksEditor fun={onEditorChanges} content={data} />
    </div>
  );
}

export default LessonWriter;
