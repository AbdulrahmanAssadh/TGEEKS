import { Editor } from "@tinymce/tinymce-react";

const TGeeksEditor = ({ fun, content }) => {
    return (
        <Editor
            // style={{ width: "100%", height: "100%" }}
            onEditorChange={fun}
            className={'rounded-lg'}
            value={content}
            tinymceScriptSrc={
                `${import.meta.env.BASE_URL}tinymce/tinymce.min.js`
            }
            plugins="directionality"
            init={{
                height: '100%',
                language: "ar",
                menu: false,
                statusbar: false,
                menubar: false,
                // icons: "material",
                // content_css: "document",
                // menubar: true,
                config: {},
                branding: false,
                plugins: [
                    "advlist autolink lists link image charmap preview anchor",
                    "searchreplace visualblocks code",
                    "insertdatetime media table paste code wordcount",
                ],
                toolbar: `redo undo| link code image media | bold italic backcolor | \
                          rtl ltr | alignright aligncenter alignleft alignjustify | \
                          bullist numlist outdent indent`,
                /* enable title field in the Image dialog*/
                image_title: true,
                /* enable automatic uploads of images represented by blob or data URIs*/
                automatic_uploads: true,
                /*
                    URL of our upload handler (for more details check: https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_url)
                    images_upload_url: 'postAcceptor.php',
                    here we add custom file picker only to Image dialog
                */
                file_picker_types: "image",
                /* and here's our custom image picker*/
                file_picker_callback: (cb, value, meta) => {
                    const input = document.createElement("input");
                    input.setAttribute("type", "file");
                    input.setAttribute("accept", "image/*");

                    input.addEventListener("change", (e) => {
                        const file = e.target.files[0];

                        const reader = new FileReader();
                        reader.addEventListener("load", () => {
                            /*
          Note: Now we need to register the blob in TinyMCEs image blob
          registry. In the next release this part hopefully won't be
          necessary, as we are looking to handle it internally.
        */
                            const id = `blobid${new Date().getTime()}`;
                            const blobCache =
                                window.tinymce.activeEditor.editorUpload
                                    .blobCache;
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
