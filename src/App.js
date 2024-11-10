import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  LinearProgress,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DrawerAppBar from './Nabar/Navbar';
import Header from './Nabar/Navbar';
import logo from './logo.svg';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import React from 'react';
import CallToActionIcon from '@mui/icons-material/CallToAction';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import { CallToAction } from '@mui/icons-material';
import outerrectangle from './Assets/Rectangle 9541.png';
import outerReactangle1 from './Assets/Rectangle 9541 (1).png';
import vector13 from './Assets/Vector 13.png';
import Navbar from './Nabar/Navbar';
import vector2 from './Assets/Vector 2.png';
import vector3 from './Assets/Vector 3.png';
import vector4 from './Assets/Vector 4.png';
import vector6 from './Assets/Vector 6.png';
import vector7 from './Assets/Vector 8.png';
import img1 from './Assets/Image.png';
import img2 from './Assets/Image (1).png';
import Human from './Assets/hispanic-male-executive-gesturing-copy-space-while-making-eye-contact-studio 1.png';
import Polygon1 from './Assets/Polygon 2.png';
import Polygon2 from './Assets/Polygon 3.png';
import square1 from './Assets/code.png';
import oval from './Assets/Oval.png';
import redouter from './Assets/Oval (1).png';
import redin from './Assets/layer.png';
import Greeenout from './Assets/Oval (2).png';
import Greenin from './Assets/codeG.png';
import V from './Assets/v.png';
import Green2 from './Assets/align-vertically.png';
import Blue2 from './Assets/video-play.png';
import Mediabg from './Assets/media bg-cover.png';
import btnblu from './Assets/button.button.btn.primary-color.btn-circle.btn-lg.png';
import Circle from './Assets/Group 162543.png';
import Shape from './Assets/Shape.png';
import Expertise from './Expertise';
import Choose from './Choose';
import './Choose.css';
function App(props) {
  // console.log(props);
  const { window } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div>
      Hai
      <Navbar window={window} />
      <Box
        sx={{
          overflowX: 'hidden',
          padding: '20px',
          top: '50px',
          position: 'relative',
        }}
      >
        <section id="home" style={{ paddingTop: '84px' }}>
          <Grid
            container
            spacing={2}
            sx={{
              marginBottom: '150px',
              paddingLeft: '30px',
              paddingRight: '30px',
            }}
          >
            <Grid
              item
              xs={12}
              md={8}
              sx={{
                paddingLeft: { md: '100px', xs: 'none' },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <img
                style={{
                  position: 'relative',
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}
                src={vector13}
                alt="vector"
              />
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: '16px', md: '20px' },
                  fontWeight: '400',
                  lineHeight: '24px',
                  margin: '0px',
                  width: { xs: '120px', md: '148px' },
                  height: '24px',
                }}
              >
                CapitalBridge:
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '32px', md: '52px' },
                  lineHeight: { xs: '38px', md: '59px' },
                  color: '##111D15',
                  fontWeight: '700',
                  margin: '0px',
                  width: { xs: '100%', md: '735px' },
                  height: { xs: 'auto', md: '180px' },
                }}
              >
                Premium Professional Training and Development solutions
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '16px', md: '18px' },
                  lineHeight: { xs: '26px', md: '30px' },
                  color: '#666666',
                  width: { xs: '100%', md: '543px' },
                  height: 'auto',
                  marginTop: { xs: '20px', md: '45px' },
                }}
              >
                Empowering Professionals through comprehensive Training and
                Development solutions
              </Typography>
              <Box>
                <Button
                  sx={{
                    width: { xs: '150px', md: '182px' },
                    height: { xs: '45px', md: '54px' },
                    borderRadius: '6px',
                    backgroundColor: '#4caf50',
                    textTransform: 'none',
                    marginRight: '15px',
                    '&:hover': {
                      backgroundColor: '#36B864',
                      borderColor: '#4caf50',
                      boxShadow: 'none',
                    },
                    '&:active': {
                      boxShadow: 'none',
                      backgroundColor: '#4caf50',
                      borderColor: '#4caf50',
                    },
                    '&:focus': {
                      boxShadow: 'none',
                    },
                  }}
                  variant="contained"
                  disableRipple
                >
                  Get Start Now
                </Button>
                <Button
                  sx={{
                    textTransform: 'none',
                    width: { xs: '180px', md: '200px' },
                    height: { xs: '45px', md: '54px' },
                    borderRadius: '6px',
                    color: 'black',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    border: '1px solid black',
                    '&:hover': {
                      borderColor: '#4caf50',
                    },
                  }}
                  variant="outlined"
                >
                  View All Services
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
              <Box
                sx={{
                  position: 'relative',
                  width: 'fit-content',
                  margin: '0 auto',
                }}
              >
                <img
                  src={outerrectangle}
                  alt="outer"
                  style={{
                    width: '100%',
                    height: 'auto',
                    zIndex: 1, // Base layer
                  }}
                />
                <img
                  src={outerReactangle1}
                  alt="outer1"
                  style={{
                    position: 'absolute',
                    top: '60%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    height: 'auto',
                    zIndex: 2, // Layer above outerrectangle
                  }}
                />
                <img
                  src={vector2}
                  alt="vector2"
                  style={{
                    position: 'absolute',
                    top: '60%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    height: 'auto',
                    zIndex: 3, // Layer above outerReactangle1
                  }}
                />
                <img
                  src={vector3}
                  alt="vector3"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    height: 'auto',
                    zIndex: 4, // Layer above vector2
                  }}
                />
                <img
                  src={vector4}
                  alt="vector4"
                  style={{
                    position: 'absolute',
                    top: '40%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    height: 'auto',
                    zIndex: 5, // Layer above vector3
                  }}
                />
                <img
                  src={vector6}
                  alt="vector6"
                  style={{
                    position: 'absolute',
                    top: '30%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    height: 'auto',
                    zIndex: 6, // Layer above vector4
                  }}
                />
                <img
                  src={vector7}
                  alt="vector7"
                  style={{
                    position: 'absolute',
                    top: '80%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    height: 'auto',
                    zIndex: 7, // Layer above vector6
                  }}
                />
                <img
                  src={Human}
                  alt="vector7"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '80%',
                    height: 'auto',
                    zIndex: 7, // Layer above vector6
                  }}
                />
                {/* <Box
                sx={{
                  display: {
                    xs: 'none',
                    sm: 'none',
                    md: 'flex',
                    lg: 'flex', // Shows on screen widths 1300px and above
                  },
                  position: 'absolute',
                  top: { xs: '35%', md: '15%!important', lg: '15%important' },
                  left: { xs: '10%' },
                  paddingLeft: { md: '13px', lg: '13px' },
                  transform: {
                    xs: 'rotate(0deg)',
                    md: 'rotate(294deg)',
                    lg: 'rotate(294deg)',
                  },
                  width: { xs: '150px', md: '270px', lg: '370px' },
                  height: { xs: 'auto', md: '296px', lg: '396px' },
                  overflow: 'hidden',
                  zIndex: 8, // Highest layer for the human image
                  transition: 'all 0.3s ease',
                }}
              >
                <img src={Human} alt="Human" className="img1" />
              </Box> */}
              </Box>
            </Grid>
          </Grid>
        </section>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={7}
            sx={{ textAlign: { xs: 'center', md: 'left' } }}
          >
            <img
              style={{
                position: 'relative',
                left: '65%',
                top: '-50%',
                transform: 'translateX(-50%)',
              }}
              src={Polygon1}
              alt="polygon1"
            />
            <img
              style={{
                position: 'relative',
                left: '60%',
                top: '-50%',
                transform: 'translateX(-50%)',
              }}
              src={Polygon2}
              alt="polygon2"
            />
            <img
              src={img1}
              alt="Beautiful scenery"
              style={{
                width: '231px',
                height: '261px',
                left: '100px',
                zIndex: '89',
                position: 'relative',
                borderRadius: '10px',
              }}
            />
            <Box
              sx={{
                position: 'relative',
                top: '150px',
                transform: 'translate(-50%, -50%)',
                width: {
                  xs: '200px', // Width for extra-small screens (below 600px)
                  sm: '300px', // Width for small screens (600px and up)
                  md: '379px', // Width for medium screens and above (900px and up)
                },
                height: {
                  xs: '200px', // Height for extra-small screens
                  sm: '300px', // Height for small screens
                  md: '379px', // Height for medium screens and above
                },
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                margin: '0 auto', // Center the image horizontally if needed
              }}
            >
              <img
                src={img2}
                alt="Beautiful scenery"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover', // Ensures image covers the box area
                }}
              />
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={5}
            sx={{
              paddingLeft: { md: '60px' },
              textAlign: { xs: 'center', md: 'left' },
              marginTop: { xs: '60px' },
            }}
          >
            <section id="aboutus" style={{ paddingTop: '64px' }}>
              <h5
                style={{
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '20px',
                  color: '#111D15',
                  margin: '0px',
                }}
              >
                CapitalBridge:
              </h5>
              <h2
                style={{
                  fontWeight: '600',
                  lineHeight: '52.6px',
                  fontSize: '44px',
                  color: '#111D15',
                  margin: '0px',
                }}
              >
                About Us
              </h2>
              <p style={{ fontSize: '20px', color: '#666666' }}>
                At Capital Bridge, we believe that the cornerstone of success
                lies in continuous professional development. Our mission is to
                bridge the gap between potential and performance by offering
                cutting-edge training solutions tailored for professionals,
                corporations, and sales teams. With a focus on innovation,
                expertise, and results, we are committed to transforming your
                workforce into a dynamic and highly skilled team ready to meet
                the challenges of today's competitive market.
              </p>
            </section>
            <Box mt={2}>
              <Button
                sx={{
                  width: '167px',
                  height: '56px',
                  borderRadius: '6px',
                  backgroundColor: '#36B864',
                  textTransform: 'none',
                  marginRight: '15px',
                  '&:hover': {
                    backgroundColor: '#36B864',
                    borderColor: '#4caf50',
                    boxShadow: 'none',
                  },
                  '&:active': {
                    boxShadow: 'none',
                    backgroundColor: '#36B864',
                    borderColor: '#4caf50',
                  },
                  '&:focus': {
                    boxShadow: 'none',
                  },
                }}
                variant="contained"
                disableRipple
              >
                Get a Quote
              </Button>
            </Box>
          </Grid>
        </Grid>
        <section id="service" style={{ paddingTop: '64px' }}>
          <p
            style={{
              fontWeight: '700',
              fontSize: '48px',
              lineHeight: '70px',
              textAlign: 'center',
              color: '#111D15',
            }}
          >
            Services
          </p>

          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                <div
                  style={{
                    display: 'flex',
                    position: 'relative',
                    width: '100%',
                    height: '55px',
                    justifyContent: 'center',
                    marginBottom: '10px',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={oval}
                    alt="oval"
                    style={{
                      position: 'relative',

                      height: 'auto',
                    }}
                  />
                  <img
                    src={square1}
                    alt="square1"
                    style={{
                      position: 'relative',
                      left: '-50px',

                      height: 'auto',
                    }}
                  />
                </div>
                <Typography
                  sx={{
                    fontSize: '24px',
                    fontWeight: '600',
                    width: { md: 'auto' },
                    height: '33px',
                    textAlign: 'center',
                    marginBottom: '50px',
                    marginTop: '20px',
                  }}
                >
                  Professional Training
                </Typography>
                <Typography
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: { md: 'auto' },
                    height: '56px',
                    fontSize: '20px',
                    fontWeight: '400',
                    textAlign: 'center',
                  }}
                  variant="body2"
                >
                  Tailored programs to enhance individual skills and career
                  growth
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={12} md={4}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                <div
                  style={{
                    display: 'flex',
                    position: 'relative',
                    width: '100%',
                    height: '55px',
                    justifyContent: 'center',
                    marginBottom: '10px',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={Greeenout}
                    alt="Greeenout"
                    style={{
                      position: 'relative',

                      height: 'auto',
                    }}
                  />
                  <img
                    src={Greenin}
                    alt="Greenin"
                    style={{
                      position: 'relative',
                      left: '-50px',

                      height: 'auto',
                    }}
                  />
                </div>
                <Typography
                  sx={{
                    fontSize: '24px',
                    fontWeight: '600',
                    width: { md: 'auto' },
                    height: '33px',
                    textAlign: 'center',
                    marginBottom: '50px',
                    marginTop: '20px',
                  }}
                >
                  Sales Training
                </Typography>
                <Typography
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: { md: 'auto' },
                    height: '56px',
                    fontSize: '20px',
                    fontWeight: '400',
                    textAlign: 'center',
                  }}
                  variant="body2"
                >
                  Sales training to boost revenue and enhance customer
                  relationships
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={12} md={4}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                <div
                  style={{
                    display: 'flex',
                    position: 'relative',
                    width: '100%',
                    height: '55px',
                    justifyContent: 'center',
                    marginBottom: '10px',
                    alignItems: 'center',
                    marginTop: '20px',
                  }}
                >
                  <img
                    src={redouter}
                    alt="redout"
                    style={{
                      position: 'relative',

                      height: 'auto',
                    }}
                  />
                  <img
                    src={redin}
                    alt="redin"
                    style={{
                      position: 'relative',
                      left: '-50px',

                      height: 'auto',
                    }}
                  />
                </div>
                <Typography
                  sx={{
                    fontSize: '24px',
                    fontWeight: '600',
                    width: { md: 'auto' },
                    height: '33px',
                    textAlign: 'center',
                    marginBottom: '50px',
                    marginTop: '20px',
                  }}
                >
                  Corporate Training
                </Typography>
                <Typography
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: { md: 'auto' },
                    height: '56px',
                    fontSize: '20px',
                    fontWeight: '400',
                    textAlign: 'center',
                  }}
                  variant="body2"
                >
                  Tailored training to boost productivity and engagement
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={12} md={4}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                <div
                  style={{
                    display: 'flex',
                    position: 'relative',
                    width: '100%',
                    height: '55px',
                    justifyContent: 'center',
                    marginBottom: '10px',
                    alignItems: 'center',
                    marginTop: '20px',
                  }}
                >
                  <img
                    src={Greeenout}
                    alt="Greenout"
                    style={{
                      position: 'relative',

                      height: 'auto',
                    }}
                  />
                  <img
                    src={Green2}
                    alt="G2"
                    style={{
                      position: 'relative',
                      left: '-50px',

                      height: 'auto',
                    }}
                  />
                </div>
                <Typography
                  sx={{
                    fontSize: '24px',
                    fontWeight: '600',
                    width: { md: 'auto' },
                    height: '33px',
                    textAlign: 'center',
                    marginBottom: '50px',
                    marginTop: '20px',
                  }}
                >
                  Manpower Development
                </Typography>
                <Typography
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: { md: 'auto' },
                    height: '56px',
                    fontSize: '20px',
                    fontWeight: '400',
                    textAlign: 'center',
                  }}
                  variant="body2"
                >
                  Solutions for developing a skilled and adaptable workforce
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={12} md={4}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                <div
                  style={{
                    display: 'flex',
                    position: 'relative',
                    width: '100%',
                    height: '55px',
                    justifyContent: 'center',
                    marginBottom: '10px',
                    alignItems: 'center',
                    marginTop: '20px',
                  }}
                >
                  <img
                    src={redouter}
                    alt="redout"
                    style={{
                      position: 'relative',

                      height: 'auto',
                    }}
                  />
                  <img
                    src={V}
                    alt="v"
                    style={{
                      position: 'relative',
                      left: '-50px',

                      height: 'auto',
                    }}
                  />
                </div>
                <Typography
                  sx={{
                    fontSize: '24px',
                    fontWeight: '600',
                    width: { md: 'auto' },
                    height: '33px',
                    textAlign: 'center',
                    marginBottom: '50px',
                    marginTop: '20px',
                  }}
                >
                  Market Training
                </Typography>
                <Typography
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: { md: 'auto' },
                    height: '56px',
                    fontSize: '20px',
                    fontWeight: '400',
                    textAlign: 'center',
                  }}
                  variant="body2"
                >
                  Training programs focused on modern marketing strategies and
                  tools.
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={12} md={4}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                <div
                  style={{
                    display: 'flex',
                    position: 'relative',
                    width: '100%',
                    height: '55px',
                    justifyContent: 'center',
                    marginBottom: '10px',
                    marginTop: '20px',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={oval}
                    alt="blu1"
                    style={{
                      position: 'relative',

                      height: 'auto',
                    }}
                  />
                  <img
                    src={Blue2}
                    alt="b2"
                    style={{
                      position: 'relative',
                      left: '-50px',

                      height: 'auto',
                    }}
                  />
                </div>
                <Typography
                  sx={{
                    fontSize: '24px',
                    fontWeight: '600',
                    width: { md: 'auto' },
                    height: '33px',
                    textAlign: 'center',
                    marginTop: '20px',
                    marginBottom: '50px',
                  }}
                >
                  Other Professional Training Services
                </Typography>
                <Typography
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: { md: 'auto' },
                    height: '56px',
                    fontSize: '20px',
                    fontWeight: '400',
                    textAlign: 'center',
                  }}
                  variant="body2"
                >
                  Diverse training options to meet specific professional needs
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </section>
        <Grid
          sx={{ justifyContent: 'center', marginTop: '60px' }}
          direction={{ xs: 'column', md: 'row' }}
          container
          spacing={2}
        >
          <Box
            sx={{
              width: '80%',
            }}
          >
            <Grid item xs={12}>
              <h2
                style={{
                  fontWeight: '700',
                  fontSize: '40px',
                  lineHeight: '57px',
                  textAlign: 'center',
                  color: '#252B42',
                  marginBottom: '7px',
                }}
              >
                Your Gateway to Professional Excellence{' '}
              </h2>
              <p
                style={{
                  fontWeight: '400',
                  fontSize: '14px',
                  lineHeight: '20px',
                  textAlign: 'center',
                  color: '#737373',
                  marginBottom: '12px',
                }}
              >
                Unleashing Potential with Innovative Training Solutions for
                Professionals and Corporations
              </p>
            </Grid>
            <Grid
              sx={{ justifyContent: 'space-between' }}
              container
              spacing={2}
              direction={{ xs: 'column', md: 'row' }}
            >
              <Grid item xs={12} md={6}>
                <div
                  style={{
                    position: 'relative',
                    display: 'inline-block',
                    alignItems: 'center',
                    height: '100%',
                  }}
                >
                  <img
                    src={Mediabg}
                    alt="mediabg"
                    style={{
                      width: '100%',
                      height: '77%',
                    }}
                  />
                  <img
                    src={btnblu}
                    alt="btnblu"
                    style={{
                      position: 'absolute',
                      top: '37%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      height: 'auto',
                    }}
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <div>
                    <Typography
                      sx={{
                        fontWeight: '700',
                        fontSize: '24px',
                        lineHeight: '57px',
                        color: '#252B42',
                        marginTop: { sm: '20px' },
                      }}
                    >
                      Mission
                    </Typography>
                    <Typography
                      sx={{
                        width: '320px',
                        height: '193px',
                        fontWeight: '500',
                        fontSize: '14px',
                        lineHeight: '20px',
                      }}
                      variant="body1"
                    >
                      Our mission at Capital Bridge is to empower individuals
                      and organizations by providing superior training and
                      development solutions that foster growth, efficiency, and
                      success. We aim to be the trusted partner in your journey
                      towards professional excellence.
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      sx={{
                        fontWeight: '700',
                        fontSize: '24px',
                        lineHeight: '57px',
                        color: '#252B42',
                      }}
                    >
                      Vision
                    </Typography>
                    <Typography
                      sx={{
                        width: '320px',
                        height: '193px',
                        fontWeight: '500',
                        fontSize: '14px',
                        lineHeight: '20px',
                      }}
                      variant="body1"
                    >
                      Our vision is to become the leading provider of
                      professional training services globally, recognized for
                      our commitment to quality, innovation, and measurable
                      results. We strive to create a world where continuous
                      learning and development are integral to achieving
                      personal and organizational goals.
                    </Typography>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'end',
                      left: '150px',
                      position: 'relative',
                    }}
                  >
                    <img src={Circle} alt="c1" />
                  </div>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid container sx={{ justifyContent: 'center' }}>
          <Box
            sx={{
              width: { xs: '95%', sm: '90%', md: '80%' }, // Adjust width for different screen sizes
              boxShadow:
                '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
              height: { xs: 'auto', md: '168px' }, // Auto height on smaller screens
              backgroundColor: 'white',
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', md: 'row' }, // Stack vertically on small screens
              padding: '20px', // Add padding for better spacing
              gap: '20px', // Add gap between elements
            }}
          >
            <Box
              sx={{
                width: { xs: '100%', md: '55%' },
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', md: 'flex-start' }, // Center text on smaller screens
                textAlign: { xs: 'center', md: 'left' }, // Center text on smaller screens
              }}
            >
              <Typography
                sx={{
                  fontWeight: '700',
                  fontSize: { xs: '24px', md: '36px' }, // Adjust font size for responsiveness
                  lineHeight: '42px',
                  color: '#36B864',
                  margin: '0px',
                  paddingLeft: { xs: '0px', md: '10px' }, // Adjust padding for smaller screens
                  paddingBottom: { xs: '20px', md: '50px' }, // Adjust padding for smaller screens
                }}
              >
                Get Started Today
              </Typography>
              <Typography
                sx={{
                  fontWeight: '500',
                  fontSize: { xs: '18px', md: '24px' }, // Adjust font size for responsiveness
                  lineHeight: '22px',
                }}
              >
                Discover How Our Program Can Transform Your Team
              </Typography>
            </Box>
            <Box
              sx={{
                width: { md: '25%' },
                display: 'flex',
                justifyContent: { xs: 'center', md: 'center' }, // Center button on smaller screens
                alignItems: 'center',
                textAlign: { xs: 'center', md: 'left' }, // Center text on smaller screens
              }}
            >
              <Button
                sx={{
                  textTransform: 'none',
                  width: { xs: '100%', md: '232px' }, // Adjust button width for responsiveness
                  height: '55px',
                  fontWeight: '500',
                  fontSize: { xs: '14px', md: '16px' }, // Adjust font size for responsiveness
                  color: 'black',
                  paddingLeft: '30px',
                  paddingRight: '30px',
                  marginBottom: '10px',
                  border: '1px solid #4caf50',
                  '&:hover': {
                    borderColor: '#4caf50',
                  },
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                variant="outlined"
                endIcon={
                  <img
                    src={Shape}
                    alt="shape"
                    style={{ width: '20px', height: '20px' }}
                  />
                } // Adjust icon size for responsiveness
              >
                Contact Us
              </Button>
            </Box>
          </Box>
        </Grid>
        <Expertise />
        <Choose />
      </Box>
    </div>
  );
}

export default App;
