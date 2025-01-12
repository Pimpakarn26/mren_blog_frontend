import {useState, useEffect, useRef} from "react";
import { useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import PostService from "../services/post.service";
import Editor from "../components/Editor";
import { useAuthContext } from "../context/AuthContext";

const Edit = () => {
  const { id } = useParams(); // ดึง id จาก URL
  const [content, setContent] = useState("");
  const { user } = useAuthContext();
  const editorRef = useRef(null);
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    summary: "",
    file: null,
    // imageUrl: null, // เพิ่มเพื่อเก็บ URL ของรูปภาพปัจจุบัน
  });
  // const editorRef = useRef();
  // const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await PostService.getPostById(id); // API สำหรับดึงโพสต์
        if (response.status === 200) {
          if(user.id !== response.data.author._id){
            navigate("/");
          }
          setPost(response.data);
          setContent(response.data.content);
        }
      } catch (error) {
        Swal.fire({
          title: "Update Post",
          text: error?.response?.data?.message || error.message,
          icon: "error",
        });
      }
    };
    fetchPost(); // เรียกใช้งานฟังก์ชัน
  }, [id]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "file") {
      setPost({...post, [name]: e.target.files[0] });
    }else {
      setPost({...post, [name]: value });
    }
  };
  const handleContentChange = (value) => {
    setContent(value);
    setPost({...post, content: content });
  };

  const handleSubmit = async () => {
    try {
      const data = new FormData();
      data.set("title", post.title);
      data.set("summary", post.summary);
      data.set("content", post.content);
      data.set("file", post.file);
      const response = await PostService.updatePostById(id,data);
      if (response.status === 200) {
        Swal.fire({
          title: "Update Post",
          text: "Update post successfully",
          icon: "success",
        }).then(() => {
          setPost({
            title: "",
            summary: "",
            content: "",
            file: null,
          });
          navigate("/");
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Updat Post",
        text: error?.response?.data?.message || error.message,
        icon: "error",
      });
    }
  };
  return (
  <div className="w-full flex items-center justify-center p-4">
    <div className="bg-white p-8 rounded-lg max-w-4xl w-full">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Update Post
      </h2>
      <div className="mb-4">
        <label
          htmlFor=""
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Title
        </label>
        <input
          type="text"
          name="title"
          value={post.title}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:out-line-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor=""
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Summary
        </label>
        <input
          type="text"
          name="summary"
          value={post.summary}
          onChange={handleChange}
          className="shadow appearance-none border rounded input-lg  w-full py-2 px-3 text-gray-700 leading-tight focus:out-line-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor=""
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Content
        </label>

        <div className="h-64">
          <Editor
            value={content}
            onChange={handleContentChange}
            ref={editorRef}
          />
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor=""
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Upload Image
        </label>
        <input
          type="file"
          name="file"
          onChange={handleChange}
          className="shadow appearance-none border rounded  w-full py-2 px-3 text-gray-700 leading-tight focus:out-line-none focus:shadow-outline"
          required
        />
      </div>
      <div className="flex item-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleSubmit}
        >
          Update Post
        </button>
      </div>
    </div>
  </div>
  );
};

export default Edit;
