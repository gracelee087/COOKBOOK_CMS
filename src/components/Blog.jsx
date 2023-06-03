import { useNavigate } from "react-router-dom";

export default function Blog( {item} ) { //blog 프롬스로 넘겨줘야함 
  // const navigate = useNavigate();

  return (
    <div>

<div className="blog-item">
      <p>{item.fields.title}</p>
      {item.fields.image && <img src={item.fields.image.fields.file.url} alt="Blog Image" style={{ width: "100%", height: "auto" }}/>}

      </div>
















{/*     
<img src="https://static.zara.net/photos///2023/V/0/1/p/6147/080/406/17/w/563/6147080406_1_1_1.jpg?ts=1684916160021" />
<div>음식제목</div>
<div>음식만드는방법</div>



 */}




      {/* <button
        onClick={() => {
          navigate(`/blogs/${blog.sys.id}`);  //blogs/다음으로 넘어갈 id로 찾는 변수생성 // 블로그내에 시스템의 아이디라는 뜻. 
        }}
      >
       Details 
      </button>
    */}
   
   
    </div>
  );
}
