import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // นำเข้าธีม Quill

const Edit = ({ existingData, onSubmit }) => {
  // State สำหรับเก็บข้อมูลฟอร์ม
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);

  // เมื่อโหลดคอมโพเนนต์ ให้เติมข้อมูลที่มีอยู่ในฟอร์ม
  useEffect(() => {
    if (existingData) {
      setTitle(existingData.title || "");
      setSummary(existingData.summary || "");
      setContent(existingData.content || "");
    }
  }, [existingData]);

  // Event สำหรับจัดการการแก้ไขฟอร์ม
  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("summary", summary);
    formData.append("content", content);
    if (file) {
      formData.append("image", file);
    }

    // ส่งข้อมูลกลับไปที่ Parent Component หรือ API
    onSubmit(formData);
  };

  // Toolbar สำหรับ ReactQuill
  const modules = {
    toolbar: [
      [{ font: [] }, { size: ["small", "medium", "large", "huge"] }],
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline", "strike"],
      ["link", "blockquote", "code-block"],
      [{ align: [] }],
      ["image", "video"],
    ],
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="card w-full max-w-lg bg-white shadow-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Edit Post</h2>
        <form onSubmit={handleSubmit}>
          {/* Title Input */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title"
              className="input input-bordered w-full"
            />
          </div>

          {/* Summary Input */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Summary</span>
            </label>
            <input
              type="text"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="Enter summary"
              className="input input-bordered w-full"
            />
          </div>

          {/* Content Input with ReactQuill */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Content</span>
            </label>
            <ReactQuill
              value={content}
              onChange={handleContentChange}
              modules={modules}
              className="bg-white"
            />
          </div>

          {/* File Upload */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Upload Image</span>
            </label>
            <input
              type="file"
              onChange={handleFileChange}
              className="file-input file-input-bordered w-full"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-full">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
