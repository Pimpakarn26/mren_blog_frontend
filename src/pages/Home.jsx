import React from "react";

const Home = () => {
  const posts = [
    {
      title: "ซีอีโอรักษาการณ์ Intel บอก ซีอีโอคนใหม่ต้องมีพื้นฐานในกระบวนการผลิตชิป",
      image:
        "https://www.blognone.com/sites/default/files/externals/ed39fe7a1d91ef6f0849fab4e0c3ce1f.jpeg",
      content:
        "หลังจากอินเทลได้ตัดสินใจปลดซีอีโอ Pat Gelsinger ออกจากตำแหน่ง ประเด็นหนึ่งที่หลายคนกังวลคือซีอีโอคนใหม่ อาจเน้นไปที่การตลาดหรือการเงิน แตกต่างจาก Gelsinger ที่มีพื้นฐานจากสายวิศวกรรม...",
      author: "wutth42",
      date: "05 December 2024 - 23:26",
    },
    {
      title: "KBTG วางเป้าด้วย Agentic AI ในปี 2025 ทำงานร่วมกับ AI แบบมืออาชีพ",
      image: "https://www.itgenius.co.th/assets/frondend/images/picarticle/11-12-2567%209-14-12-anyutoe4dsxa.png",
      content:
        "ในช่วงที่เทคโนโลยี AI เข้ามามีบทบาทสำคัญ ธุรกิจต่าง ๆ จำเป็นต้องปรับตัวเพื่อทำงานร่วมกับ AI อย่างมีประสิทธิภาพ...",
      author: "wutth64",
      date: "05 December 2024 - 21:11",
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="space-y-6">
        {posts.map((post, index) => (
          <div
            key={index}
            className="rounded-lg shadow-md bg-white overflow-hidden border"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800">{post.title}</h2>
              <p className="text-sm text-gray-500 mb-4">
                {post.author} | {post.date}
              </p>
              <p className="text-gray-700">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
