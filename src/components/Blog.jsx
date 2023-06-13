import { useNavigate } from "react-router-dom";

export default function Blog({ item }) {
  const navigate = useNavigate();

  const showDetail = () => {
    navigate(`/blogs/${item.sys.id}`);
  };

  return (
    <div>
      <div onClick={showDetail}>
        <p className="pb-5 font-main">{item.fields.title}</p>
        <div className="flex justify-center">
          {item.fields.image && (
            <img
              className="firstPageImage mb-5"
              src={item.fields.image.fields.file.url}
              alt="Blog Image"
            />
          )}
        </div>
      </div>
    </div>
  );
}
