import {
  EnvironmentOutlined,
  FacebookOutlined,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import {
  Center,
  Container,
  Desc,
  Left,
  Link,
  List,
  ListItem,
  Logo,
  Right,
  SocialIcon,
  Title,
} from "./Style-Footer";

const Footer = () => {
  return (
    <Container>
      <Row gutter={[24, 8]}>
        <Col
          className="gutter-row"
          md={{ span: 24 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
          lg={{ span: 8 }}
        >
          <Left>
            <Logo>ABOUT US</Logo>
            <Desc>
              HACCP certified coffee roaster, specializing in providing high
              quality roasted coffee and specialty coffees around the world. THE
              COFFEE BEAN & TEA LEAF, THE COFFEE BEAN, CBTL, THE ORIGINAL ICE
              BLENDED, ICE BLENDED and THE PURPLE STRAW, and their logos and
              other marks are registered trademarks of Super Magnificent Coffee
              Company Ireland Limited in the United States and may be registered
              in other countries
            </Desc>
          </Left>
        </Col>
        <Col
          className="gutter-row"
          md={{ span: 12 }}
          sm={{ span: 12 }}
          xs={{ span: 24 }}
          lg={{ span: 8 }}
        >
          <Center>
            <Title>OUR COMPANY</Title>
            <List>
              <ListItem>
                <EnvironmentOutlined />
                <b style={{ fontWeight: "700" }}> Address:</b> Truong Thanh, Thu
                Duc City
              </ListItem>
              <ListItem>
                <PhoneOutlined />
                <b style={{ fontWeight: "700" }}> Phone number:</b> 0707323959
              </ListItem>
              <ListItem>
                <MailOutlined />
                <b style={{ fontWeight: "700" }}> Email:</b>{" "}
                phandogiahuy2000@gmail.com
              </ListItem>
              <ListItem></ListItem>
              <ListItem></ListItem>
            </List>
          </Center>
        </Col>
        <Col>
          <Right>
            <Title>FOLLOW US</Title>
            <List>
              <ListItem>
                <Link href="https://www.facebook.com/giahuy.6200/">
                  <SocialIcon bg="#8a2be2">
                    <FacebookOutlined style={{ fontSize: "50px" }} />
                  </SocialIcon>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://www.instagram.com/giahuy.ph/">
                  <SocialIcon bg="#dd466a">
                    <InstagramOutlined style={{ fontSize: "50px" }} />
                  </SocialIcon>
                </Link>
              </ListItem>
            </List>
          </Right>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
