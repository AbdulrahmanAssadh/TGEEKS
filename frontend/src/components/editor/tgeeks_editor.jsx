import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const TGeeksEditor = ({ fun, content }) => {
  return (
    <Editor
      //   style={{ width: "100%", height: "100%" }}
      onEditorChange={fun}
      value={content}
      tinymceScriptSrc={process.env.PUBLIC_URL + "../tinymce/tinymce.min.js"}
      plugins="directionality"
      init={{
        language: "ar",
        menu: false,
        statusbar: false,
        height: "80%",
        width: "100%",
        // menubar: false,
        icons: "material",
        // content_css: "document",
        // menubar: true,
        config: {},
        brandig: false,
        // toolbar_mode: "scrolling",
        plugins: [
          "advlist autolink lists link image charmap preview anchor",
          "searchreplace visualblocks code",
          "insertdatetime media table paste code wordcount",
        ],
        toolbar: `redo undo| link code image media | bold italic backcolor color |
              rtl ltr | alignright aligncenter alignleft alignjustify | 
              bullist numlist outdent indent`,
        image_title: true,
        contextmenu: "link image table",
        automatic_uploads: true,
        file_picker_types: "image",
        file_picker_callback: (cb, value, meta) => {
          const input = document.createElement("input");
          input.setAttribute("type", "file");
          input.setAttribute("accept", "image/*");

          input.addEventListener("change", (e) => {
            const file = e.target.files[0];

            const reader = new FileReader();
            reader.addEventListener("load", () => {
              const id = "blobid" + new Date().getTime();
              const blobCache =
                window.tinymce.activeEditor.editorUpload.blobCache;
              const base64 = reader.result.split(",")[1];
              const blobInfo = blobCache.create(id, file, base64);
              blobCache.add(blobInfo);

              /* call the callback and populate the Title field with the file name */
              cb(blobInfo.blobUri(), { title: file.name });
            });
            reader.readAsDataURL(file);
          });

          input.click();
        },
      }}
    />
  );
};

export default TGeeksEditor;
