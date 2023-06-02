import { useNavigate } from "react-router-dom";

export default function Blog({ blog }) {
  const navigate = useNavigate();

  return (
    <>
      <p>{blog.fields.title}</p>
    
    
      <button
        onClick={() => {
          navigate(`/blogs/${blog.sys.id}`);  //blogs/다음으로 넘어갈 id로 찾는 변수생성 // 블로그내에 시스템의 아이디라는 뜻. 
        }}
      >
       Details 
      </button>
   
   
   
    </>
  );
}
