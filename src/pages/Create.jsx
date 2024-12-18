import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // นำเข้าธีม Quill

const Create = () => {
  const [content, setContent] = useState("");

  const handleContentChange = (value) => {
    setContent(value);
  };

  // กำหนด toolbar สำหรับ ReactQuill
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
        <h2 className="text-2xl font-bold text-center mb-6">Create New Post</h2>
        <form>
          {/* Title Input */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
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
              modules={modules} // ตั้งค่า toolbar ที่เรากำหนด
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
              className="file-input file-input-bordered w-full"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-full">
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;