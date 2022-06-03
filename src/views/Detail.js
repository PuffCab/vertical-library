import { Col, Row } from 'react-bootstrap';
import BookDetail from '../components/BookDetail';
import GoToButton from '../components/GoToButton';

function Detail() {
  return (
    <>
      <Row className='justify-content-center py-5 mt-4'>
        <Col>
          <BookDetail />
          <GoToButton path="/" element="Home" />
        </Col>
      </Row>
    </>
  )
}

export default Detail