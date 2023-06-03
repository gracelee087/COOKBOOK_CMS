import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../client";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function BlogDetails() {
  const [blog, setBlog] = useState();
  const { id } = useParams();
  
  // console.log(useParams()) BLOG ID check

  useEffect(() => {
    client
      .getEntry(id)
      .then((response) => {
        // console.log("id 리스폰스", response)
        setBlog(response.fields);
      })
      .catch((err) => console.log(err));
  }, [id]);



  return (
    <>
  
    <Container>
<Row>

<Col>
{blog ? (
  <div>
    
    <p>{blog.author}</p>

    {blog.image && <img src={blog.image.fields.file.url} alt="Blog Image" />}
    

  </div>
) : (
  "Loading...."
)}
</Col>


<Col> 
Food Detail: 

</Col>


  
</Row>
    </Container>
   



    </>
  );
}
