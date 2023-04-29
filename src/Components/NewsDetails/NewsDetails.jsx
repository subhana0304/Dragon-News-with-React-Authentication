import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import NewsEditorInside from '../Home/NewsEditorInside/NewsEditorInside';

const NewsDetails = () => {
    const news = useLoaderData();
    // console.log(news);
    const { title, _id, details, image_url, author, rating, total_view, category_id} = news;

    return (
        <div>
            <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
        <Link to={`/category/${category_id}`}>
            <Button variant="danger"><FaArrowLeft></FaArrowLeft> All news in this Category</Button></Link>
      </Card.Body>
    </Card>
    <NewsEditorInside></NewsEditorInside>
        </div>
    );
};

export default NewsDetails;