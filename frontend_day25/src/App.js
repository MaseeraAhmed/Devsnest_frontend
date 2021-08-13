import './App.css';

import ContactUs from './Components/ContactUs';
import About from './Components/About';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
  
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Increadble India</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <NavDropdown title="Travel" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Andhra Pradesh</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Arunachal Pradesh</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Rajasthan</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Destination" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">West Bengal</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Meghalaya</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Gujarat</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More Details</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
       Experience
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>



 
<Carousel>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1542361641859-c26bb3571dd7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8aW5kaWEsTW9udW1lbnRzfHx8fHx8MTYyNjY3NzkxMg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600"
      alt="safdarjung tomb"
    />
    <Carousel.Caption>
      <h3>Delhi</h3>
      <p>Delhi, India’s capital territory, is a massive metropolitan area in the country’s north.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1598639753591-053c3e1477dd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8aW5kaWEsTW9udW1lbnRzfHx8fHx8MTYyODUwODE1MA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600"
      alt="Taj Mahal"
    />
    <Carousel.Caption>
      <h3>Uttar Pradesh</h3>
      <p>Agra is a city on the banks of the Yamuna river in the Indian state of Uttar Pradesh, about 210 kilometres south of the national capital New Delhi.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1602339752474-f77aa7bcaecd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8aW5kaWEsTW9udW1lbnRzfHx8fHx8MTYyODUwNjQ3NA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600"
      alt="jawahar circle garden"
    />
    <Carousel.Caption>
      <h3>Rajasthan</h3>
      <p>Rajasthan is a state located in northern India. The state covers an area of 342,239 square kilometres or 10.4 percent of the total geographical area of India.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1606821306227-9b7c2ff7743f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8a29sa2F0YXx8fHx8fDE2Mjg1MDY5MzA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600"
      alt="Kolkata"
    />
    <Carousel.Caption>
      <h3>Kolkata</h3>
      <p>The Howrah Bridge is a balanced cantilever bridge over the Hooghly River in West Bengal, India.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


<CardColumns>

  <Card bg="primary" text="white" className="text-center p-3">
    <blockquote className="blockquote mb-0 card-body">
    <Card.Title>History Of India</Card.Title>
      <p>
      India is one of the oldest civilizations in the world with a kaleidoscopic variety and rich cultural heritage. It has achieved all-round socio-economic progress during the last 65 years of its Independence. India has become self-sufficient in agricultural production and is now one of the top industrialized countries in the world and one of the few nations to have gone into outer space to conquer nature for the benefit of the people. It covers an area of 32, 87,263 sq. km, extending from the snow-covered Himalayan heights to the tropical rain forests of the south. As the 7th largest country in the world, India stands apart from the rest of Asia, marked off as it is by mountains and the sea, which give the country a distinct geographical entity. Bounded by the Great Himalayas in the north, it stretches southwards and at the Tropic of Cancer, tapers off into the Indian Ocean between the Bay of Bengal on the east and the Arabian Sea on the west. As you travel, India offers a range of vast tourism choices, diverse in land and nature, people, tribes, cuisine, faiths, dance forms, music, arts, crafts, adventure, sport, spirituality, history; even these vary as you journey from one state to another. As a country, India has achieved all-round socio-economic progress in the last 70 years of independence. The change is clearly visible in the Tier I and Tier II cities. However, the fascinating aspect lies in the stark difference as you travel through the new and old parts of its cities. From world-class airports and hotels, luxurious shopping malls, restaurants, pubs and cafes to overcrowded streets and alleyways, in the same cities, filled with thousands of little shops offering every possible modern and ethnic product and native street food is a fascinating experience.
      </p>
      
    </blockquote>
  </Card>
  <Card className="text-center">
    <Card.Body>
      <h2>STATES OF INDIA </h2>
     
    </Card.Body>
  </Card>
<Row className="g-4">
    <Col>
    <Card>
        <Card.Img variant="top" src="https://www.incredibleindia.org/content/dam/incredibleindia/images/places/munnar/munnar-pampadum-shola-national-park-20.jpg/jcr:content/renditions/cq5dam.web.256.256.jpeg" />
        <Card.Body>
          <Card.Title>Assam</Card.Title>
          <Card.Text>
          Assam is a state in northeastern India known for its wildlife, archeological sites and tea plantations. In the west, Guwahati, Assam’s largest city, features silk bazaars and the hilltop Kamakhya Temple. Umananda Temple sits on Peacock Island in the Brahmaputra river.
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      <Col>
    <Card>
         <Card.Img variant="top" src="https://www.incredibleindia.org/content/dam/incredibleindia/images/places/kochi/kochi-chinese-fishing-nets-1.jpg/jcr:content/renditions/cq5dam.web.256.256.jpeg" />
        <Card.Body>
          <Card.Title>Kerala</Card.Title>
          <Card.Text>
          Kerala, a state on India's tropical Malabar Coast, has nearly 600km of Arabian Sea shoreline. It's known for its palm-lined beaches and backwaters, a network of canals. Inland are the Western Ghats, mountains whose slopes support tea, coffee and spice plantations as well as wildlife.
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
    <Col>
    <Card>
         <Card.Img variant="top" src="https://www.incredibleindia.org/content/dam/incredibleindia/images/places/goa/goa-vagator-beach-1.jpg/jcr:content/renditions/cq5dam.web.256.256.jpeg" />
        <Card.Body>
          <Card.Title>Goa</Card.Title>
          <Card.Text>
          Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area’s tropical spice plantations. Goa is also known for its beaches.
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      <Col>
    <Card>
        <Card.Img variant="top" src="https://media.easemytrip.com/media/Blog/India/637318786636659477/637318786636659477HrDPIZ.png" /> 
        <Card.Body>
          <Card.Title>Gujarat</Card.Title>
          <Card.Text>
          Gujarat is a state on the western coast of India with a coastline of 1,600 km – most of which lies on the Kathiawar peninsula – and a population of 60.4 million. It is the fifth-largest Indian state by area and the ninth-largest state by population.
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
  </Row>
  
  <Row className="g-4">
    <Col>
    <Card>
        <Card.Img variant="top" src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/video/poster/shillong.jpg/jcr:content/renditions/cq5dam.web.256.256.jpeg" />
        <Card.Body>
          <Card.Title>Shillong</Card.Title>
          <Card.Text>
          Shillong is a hill station in northeast India and capital of the state of Meghalaya. It’s known for the manicured gardens at Lady Hydari Park. Nearby, Ward’s Lake is surrounded by walking trails. North, the Don Bosco Centre for Indigenous Cultures features displays on the region’s native people.
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      <Col>
    <Card>
         <Card.Img variant="top" src="https://media.istockphoto.com/photos/living-roots-bridge-over-river-shillong-meghalaya-india-picture-id840514260?k=6&m=840514260&s=612x612&w=0&h=igcIGA2kQBvonI9uhbGfjXUbyo4d3dGlvG-UaVpeWgw=" />
        <Card.Body>
          <Card.Title>Meghalaya</Card.Title>
          <Card.Text>
          Meghalaya is a state in Northeast India. Meghalaya was formed by carving out two districts from the state of Assam: the United Khasi Hills and Jaintia Hills, and the Garo Hills on 21 January 1972.Meghalaya (Abode of Clouds in Sanskrit) is one of the seven Northeastern states of India .
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
    <Col>
    <Card>
         <Card.Img variant="top" src="https://media.istockphoto.com/photos/houseboat-on-the-kerala-backwaters-in-india-picture-id472114428?k=6&m=472114428&s=612x612&w=0&h=oKGoMt0eT0VaMuk7yLn_morobacxGr4lsXkiWU1XyWg=" />
        <Card.Body>
          <Card.Title>Kerala </Card.Title>
          <Card.Text>
          Kerala, a state on India's tropical Malabar Coast, has nearly 600km of Arabian Sea shoreline. It's known for its palm-lined beaches and backwaters, a network of canals. Inland are the Western Ghats, mountains whose slopes support tea, coffee and spice plantations as well as wildlife. 
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      <Col>
    <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1606821306227-9b7c2ff7743f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8a29sa2F0YXx8fHx8fDE2Mjg1MDY5MzA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600" /> 
        <Card.Body>
          <Card.Title>West Bengal</Card.Title>
          <Card.Text>
          Kolkata (formerly Calcutta) is the capital of India's West Bengal state. Founded as an East India Company trading post, it was India's capital under the British Raj from 1773–1911. Today it’s known for its grand colonial architecture, art galleries and cultural festivals.
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
  </Row>

  </CardColumns>
  <Card className="text-center">
    <Card.Body>
      <h2>INDIAN CLIMATE</h2>
      <Card.Text>
      The climate of India consists of a wide range of weather conditions across a vast geographic scale and varied topography, making generalizations difficult. 
      </Card.Text>
    </Card.Body>
  </Card>

  <Row className="g-4">
    <Col>
    <Card>
        <Card.Img variant="top" src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/places/nainital/nainital-snow-view-0.jpg" />
        <Card.Body>
          <Card.Title>WINTER</Card.Title>
          <Card.Text>
          During The Period From December To February There Is Winter Season In India. During This Time Clouds And Dry North-East Monsoon Passes Over Different Regions Of India And Temperature Is Decreased Considerably. In Himalayan Area The Temperature Is Much..
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      <Col>
    <Card>
         <Card.Img variant="top" src="data:image/jpeg;base64,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" />
        <Card.Body>
          <Card.Title>SUMMER</Card.Title>
          <Card.Text>
          During The Three Months From April To June It Is Summer In Most Parts Of India.Generally In The Month Of April, Many Parts Of India Experiences High Temperature. The Normal Temperature Recorded In This Time In Generally 30°C. But At Some Places In The .. 
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
    <Col>
    <Card>
         <Card.Img variant="top" src="https://www.incredibleindia.org/content/dam/incredibleindia/images/discover-india/seasons/incindia.jpg" />
        <Card.Body>
          <Card.Title>RAINY</Card.Title>
          <Card.Text>
          The Rainy Season In India Begins Generally From The Second Week Of July And Continues Up To The Second Week Of October. From The Second Week Of June Humid Monsoon Enters Various Parts Of India And Causes Rainfall Everywhere In The State. .. 
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      <Col>
    <Card>
        <Card.Img variant="top" src="https://www.incredibleindia.org/content/dam/incredibleindia/images/discover-india/seasons/flora-auli.jpg" /> 
        <Card.Body>
          <Card.Title>SPRING</Card.Title>
          <Card.Text>
          The Advent Of Spring Brings Us The Pleasant Sound Wind Begins To Blow. It Refreshes Our Body And Mind. The Countryside Appears To Be Adorned With Green Leaves And Flowers. Birds Sing And Bees Hum In The Flower Garden. Trees And Creepers Are Covered ..
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
  </Row>
  

<Container>
  <Row>
          <Col xs={6} md={4}>
            <Image src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/experiences/spiritual/buddhism/1920-1080.jpg/jcr:content/renditions/cq5dam.web.512.384.jpeg" thumbnail />
            <caption>Heritage</caption>
          </Col>
          <Col xs={6} md={4}>
            <Image src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/experiences/adventure/river-rafting-rishikesh/river-rafting-rishikesh.jpg/jcr:content/renditions/cq5dam.web.512.384.jpeg" thumbnail />
            <caption>Adventure</caption>
          </Col>
          <Col xs={6} md={4}>
            <Image style={{ "width": "34rem", "height": "15rem" }} src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/places/amritsar/sarson-da-saag.jpg/jcr:content/renditions/cq5dam.web.512.384.jpeg" thumbnail />
            <caption>Food</caption>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={6} md={4}>
            <Image src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/experiences/art/musica-forms/musica-forms.jpg/jcr:content/renditions/cq5dam.web.512.384.jpeg" thumbnail />
            <caption>Art</caption>
          </Col>
          <Col xs={6} md={4}>
            <Image src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/experiences/nature/1920-1080.jpg/jcr:content/renditions/cq5dam.web.512.384.jpeg" thumbnail />
            <caption>Nature</caption>
          </Col>
          <Col xs={6} md={4}>
            <Image style={{ "width": "34rem", "height": "15rem" }} src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/experiences/spiritual/Spiritual-Banner.jpg/jcr:content/renditions/cq5dam.web.512.384.jpeg" thumbnail />
            <caption>Spiritual</caption>
          </Col>
        </Row>
        </Container>
  <ContactUs />
<About />
  
    </div>
  );
}

export default App;
