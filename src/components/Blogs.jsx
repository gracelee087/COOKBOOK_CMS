import Blog from "./Blog";
import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { client } from "../client";
export default function Blogs() {
  const [blogs, setBlogs] = useState([]); //가져온상품 UI에 보여주기

  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        console.log(response.items) //items가 모든 상품을 의미한다.
        setBlogs(response.items);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>

<div>전체상품페이지</div>
  

<Container>
<Row>
{blogs.map((menu) => ( 
<Col lg={3} >
  <Blog item={menu} key={menu.sys.id}/>
</Col>
))}

</Row>
</Container>




      {/* {blogs.map((blog) => {
        return <Blog blog={blog} key={blog.sys.id} />;
      })} */}
  

    </div>
  );
}
