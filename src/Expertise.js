import { Box, CardContent, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import x from './Assets/Icon (1).png';
import recgre from './Assets/Rectangle 9548.png';
import rectangle from './Assets/Rectangle.png';
import rectangle1 from './Assets/Rectangle (1).png';
import rectangle2 from './Assets/Rectangle (2).png';
import rectangle3 from './Assets/Rectangle (3).png';
import Group1 from './Assets/Group 5.png';
import Group2 from './Assets/Group 6.png';
import Grroup3 from './Assets/Group 7.png';
import Group4 from './Assets/Group 8.png';
import { green } from '@mui/material/colors';
import blu from './Assets/Rectangle (4).png';
import check from './Assets/android-checkmark-circle.png';
import locate from './Assets/android-locate.png';
import br from './Assets/Rectangle (5).png';
import speed from './Assets/speedometer.png';
import rd from './Assets/Rectangle (6).png';
import sh from './Assets/android-bulb.png';
import rt from './Assets/Rectangle 9549.png';
import left from './Assets/Frame 2.png';
import rit from './Assets/Frame 50.png';
import img2 from './Assets/Image (2).png';
import quo from './Assets/Quotation.png';
import str from './Assets/star.png';
import Human from './Assets/hispanic-male-executive-gesturing-copy-space-while-making-eye-contact-studio 1.png';
const images = [
  {
    src: img2,
    alt: 'img1',
    text: `Excellent service! The team was punctual, thorough, and left my
    home sparkling clean. Highly recommend for anyone needing a
    reliable and detailed cleaning service.`,
  },
  {
    src: Human,
    alt: 'img2',
    text: `Fantastic experience! The staff were incredibly professional and
  did a remarkable job with every detail. I’m truly impressed and
  would definitely use their services again.`,
  },
  {
    src: img2,
    alt: 'img3',
    text: `The service exceeded my expectations! From start to finish, the
  process was smooth and efficient. The quality of work was top-notch,
  and the team was friendly and respectful.`,
  },
];

const Expertise = () => {
  const [index, setIndex] = useState(0);

  const [fade, setFade] = useState(true);

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(true);
    }, 300); // match the timeout duration with the transition duration
  };

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setFade(true);
    }, 300); // match the timeout duration with the transition duration
  };

  useEffect(() => {
    const timeout = setTimeout(() => setFade(true), 300);
    return () => clearTimeout(timeout);
  }, [index]);
  return (
    <div style={{ marginTop: '100px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '70px',
        }}
      >
        <img
          style={{ width: '28px', height: '28px', rotate: '-27°' }}
          src={x}
          alt="x"
        />
        <img
          style={{ width: '420px', height: '10px' }}
          src={recgre}
          alt="gre"
        />
      </div>
      <Grid container>
        <Grid item xs={12} md={6}>
          <div
            style={{
              position: 'relative',
              display: 'inline-block',
              margin: 'auto',
              left: '20px',
            }}
          >
            <img
              src={rectangle}
              alt="r"
              style={{
                position: 'relative',
                width: '30%',
                height: 'auto',
                top: '35%',
                left: '35%',
                transform: 'translate(-80%, 50%)',
                zIndex: '999',
              }}
            />
            <div
              style={{
                position: 'absolute',

                left: '30%',
                width: '216px',
                height: '64px',
                transform: 'translate(-50%, -50%)',
                color: '#FFFFFF', // Adjust text color as needed
                fontSize: '36px', // Adjust font size as needed
                fontWeight: '600', // Adjust font weight as needed
                zIndex: '999',
              }}
            >
              Our Values
            </div>
            <img
              src={rectangle1}
              alt="r1"
              style={{
                width: '40%',
                height: 'auto',

                transform: 'translate(-60%, 50%)',
              }}
            />
            <img
              src={Group1}
              alt="inner"
              style={{
                position: 'absolute',
                width: '102px', // Adjust the size of the inner image as needed
                height: '102px',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: '2',
              }}
            />
            <img
              src={Group2}
              alt="inner2"
              style={{
                position: 'absolute',
                width: '132px', // Adjust the size of the inner image as needed
                height: '132px',
                top: '30%',
                left: '40%',
                transform: 'translate(-50%, -50%)',
                zIndex: '2',
              }}
            />
            <img
              src={Group4}
              alt="inner3"
              style={{
                position: 'absolute',
                width: '132px', // Adjust the size of the inner image as needed
                height: '132px',
                top: '60%',
                left: '10%',
                transform: 'translate(-50%, -50%)',
                zIndex: '2',
              }}
            />
            <img
              src={rectangle2}
              alt="r2"
              style={{
                position: 'relative',
                width: '50%',
                height: 'auto',
                top: '25%',
                left: '25%',
                transform: 'translate(-50%, -50%)',
              }}
            />
            <img
              src={rectangle3}
              alt="r3"
              style={{
                position: 'absolute',
                width: '60%',
                height: 'auto',

                left: '20%',
                transform: 'translate(-40%, -52%)',
              }}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: '500',
              fontSize: '24px',
              width: 'auto',
              height: 'auto',
              color: '#000000',
              marginBottom: '20px',
            }}
          >
            Empower Your Workforce. Drive Business Growth
          </Typography>
          <Typography
            variant="paragrpah"
            sx={{
              fontWeight: '400',
              fontSize: '16px',
              width: 'auto',
              height: '72px',
              lineHeight: '24px',
              color: '#000000',
            }}
          >
            Empower your employees with the skills they need to thrive in
            today's dynamic business landscape. . Our customized programs are
            tailored to address the specific needs of your organization,
            ensuring maximum impact and RO
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
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
                    src={blu}
                    alt="oval"
                    style={{
                      position: 'relative',

                      height: 'auto',
                    }}
                  />
                  <img
                    src={check}
                    alt="square1"
                    style={{
                      position: 'relative',
                      left: '-34px',

                      height: 'auto',
                    }}
                  />
                </div>
                <Typography
                  sx={{
                    fontSize: '28px',
                    fontWeight: '500',
                    maxWidth: '285px',
                    width: 'auto',
                    lineHeight: '42px',
                    height: 'auto',
                    textAlign: 'center',
                  }}
                >
                  Industry Expertise
                </Typography>
                <p
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    maxWidth: '305px',
                    height: 'auto',
                    width: 'auto',
                    fontSize: '16px',
                    fontWeight: '400',
                    textAlign: 'center',
                    lineHeight: '24px',
                  }}
                >
                  Our team of experienced professionals possesses deep industry
                  knowledge
                </p>
              </CardContent>
            </Grid>
            <Grid item xs={12} md={6}>
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
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
                    src={blu}
                    alt="oval"
                    style={{
                      position: 'relative',

                      height: 'auto',
                    }}
                  />
                  <img
                    src={locate}
                    alt="lc1"
                    style={{
                      position: 'relative',
                      left: '-34px',

                      height: 'auto',
                    }}
                  />
                </div>
                <Typography
                  sx={{
                    fontSize: '28px',
                    fontWeight: '500',

                    maxWidth: '285px',
                    height: 'auto',
                    width: 'auto',
                    lineHeight: '42px',
                    height: '43px',
                    textAlign: 'center',
                  }}
                >
                  Client Focus
                </Typography>
                <p
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    maxWidth: '305px',
                    height: 'auto',
                    width: 'auto',
                    fontSize: '16px',
                    fontWeight: '400',
                    textAlign: 'center',
                    lineHeight: '24px',
                  }}
                >
                  Your success is our priority.
                </p>
              </CardContent>
            </Grid>
            <Grid item xs={12} md={6}>
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
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
                    src={br}
                    alt="oval"
                    style={{
                      position: 'relative',

                      height: 'auto',
                    }}
                  />
                  <img
                    src={speed}
                    alt="lc1"
                    style={{
                      position: 'relative',
                      left: '-34px',

                      height: 'auto',
                    }}
                  />
                </div>
                <Typography
                  sx={{
                    fontSize: '28px',
                    fontWeight: '500',
                    maxWidth: '305px',
                    height: 'auto',
                    width: 'auto',
                    lineHeight: '42px',

                    textAlign: 'center',
                  }}
                >
                  Continuous Improvement
                </Typography>
                <p
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    maxWidth: '305px',
                    height: 'auto',
                    width: 'auto',
                    fontSize: '16px',
                    fontWeight: '400',
                    textAlign: 'center',
                    lineHeight: '24px',
                  }}
                >
                  We are committed to delivering the highest quality training
                </p>
              </CardContent>
            </Grid>
            <Grid item xs={12} md={6}>
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
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
                    src={rd}
                    alt="rd"
                    style={{
                      position: 'relative',

                      height: 'auto',
                    }}
                  />
                  <img
                    src={sh}
                    alt="sh"
                    style={{
                      position: 'relative',
                      left: '-34px',

                      height: 'auto',
                    }}
                  />
                </div>
                <Typography
                  sx={{
                    fontSize: '28px',
                    fontWeight: '500',
                    maxWidth: '305px',
                    height: 'auto',
                    width: 'auto',
                    textAlign: 'center',
                  }}
                >
                  Engaging Delivery
                </Typography>
                <p
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    maxWidth: '305px',
                    height: 'auto',
                    width: 'auto',
                    fontSize: '16px',
                    fontWeight: '400',
                    textAlign: 'center',
                    lineHeight: '24px',
                  }}
                >
                  {' '}
                  We utilize a variety of engaging learning methodologies
                </p>
              </CardContent>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <img style={{ width: '420px', height: '10px' }} src={rt} alt="gre" />
      </div>
      <Grid container sx={{ marginTop: '60px' }}>
        <Grid item xs={12} md={6}>
          <Box sx={{ padding: { xs: '20px', sm: '40px', md: '60px' } }}>
            <Typography
              sx={{
                width: {
                  xs: '100%', // Full width on extra-small screens
                  sm: '90%', // 90% width on small screens
                  md: '500px', // Fixed width on medium and larger screens
                },
                height: 'auto',
                fontWeight: '600',
                fontSize: {
                  xs: '24px', // Smaller font size on extra-small screens
                  sm: '36px', // Medium font size on small screens
                  md: '44px', // Default font size on medium and larger screens
                },
                lineHeight: {
                  xs: '28px', // Smaller line height on extra-small screens
                  sm: '40px', // Medium line height on small screens
                  md: '52px', // Default line height on medium and larger screens
                },
                textAlign: {
                  xs: 'center', // Center align text on extra-small screens
                  sm: 'center', // Center align text on small screens
                  md: 'left', // Left align text on medium and larger screens
                },
              }}
            >
              Feedback About Their Experience With Us
            </Typography>

            <Typography
              sx={{
                width: {
                  xs: '100%', // Full width on extra-small screens
                  sm: '90%', // 90% width on small screens
                  md: '419px', // Fixed width on medium and larger screens
                },
                height: 'auto',
                fontWeight: '400',
                fontSize: {
                  xs: '14px', // Smaller font size on extra-small screens
                  sm: '16px', // Default font size on small screens
                  md: '16px', // Fixed font size on medium and larger screens
                },
                lineHeight: {
                  xs: '20px', // Smaller line height on extra-small screens
                  sm: '22px', // Default line height on small screens
                  md: '22px', // Fixed line height on medium and larger screens
                },
                marginTop: {
                  xs: '15px', // Smaller margin top on extra-small screens
                  sm: '20px', // Medium margin top on small screens
                  md: '25px', // Default margin top on medium and larger screens
                },
                textAlign: {
                  xs: 'center', // Center align text on extra-small screens
                  sm: 'center', // Center align text on small screens
                  md: 'left', // Left align text on medium and larger screens
                },
              }}
              variant="body2"
            >
              Read testimonials from our satisfied clients. See how our training
              programs have transformed their careers and organizations.
            </Typography>
            <div
              style={{
                position: 'relative',
                top: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                width: '130px',
              }}
            >
              <div onClick={() => handlePrev()}>
                <img
                  style={{ width: '50px', height: '50px' }}
                  src={rit}
                  alt="lt"
                />
              </div>
              <div onClick={() => handleNext()}>
                <img
                  style={{ width: '50px', height: '50px' }}
                  src={left}
                  alt="rt"
                />
              </div>
            </div>
          </Box>
        </Grid>
        <Grid
          sx={{ alignItems: 'center', display: 'flex' }}
          item
          xs={12}
          md={6}
        >
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              flexDirection: { xs: 'column', md: 'row' }, // Stack vertically on small screens
            }}
          >
            <Box
              sx={{
                flex: '1',
                display: { xs: 'none', sm: 'flex' }, // Hide on small screens
                justifyContent: 'flex-end',
                position: 'relative',
                right: '50px',
                maxWidth: { xs: '100%', md: '50%' }, // Ensure it takes full width on small screens
                mb: { xs: '20px', md: '0px' }, // Add margin-bottom on small screens
              }}
            >
              <img
                style={{
                  width: '177px',
                  height: '244px',
                  transition: 'opacity 0.3s ease-in-out',
                  opacity: 'fade ? 1 : 0',
                }}
                src={images[index].src}
                alt={images[index].alt}
              />
            </Box>
            <Box
              sx={{
                flex: '1',
                display: 'flex',
                flexDirection: 'column',
                paddingTop: '20px',
                maxWidth: { xs: '100%', md: '50%' },
              }}
            >
              <Box sx={{ display: 'flex', mb: '10px' }}>
                <Box
                  sx={{ flex: '1', display: 'flex', flexDirection: 'column' }}
                >
                  <Typography
                    sx={{
                      fontWeight: '500',
                      fontSize: { xs: '18px', md: '20px' }, // Adjust font size for responsiveness
                      lineHeight: '20px',
                      mb: '0px',
                    }}
                  >
                    Robert Fox
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: '400',
                      fontSize: { xs: '14px', md: '16px' }, // Adjust font size for responsiveness
                      lineHeight: '20px',
                    }}
                  >
                    Business Man
                  </Typography>
                  <Box sx={{ display: 'flex', mt: '5px' }}>
                    {[...Array(5)].map((_, index) => (
                      <img
                        key={index}
                        src={str}
                        alt={`star ${index + 1}`}
                        style={{
                          width: '20px',
                          height: '20px',
                          marginRight: '2px',
                        }}
                      />
                    ))}
                  </Box>
                </Box>
                <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                  <img
                    src={quo}
                    alt="quotation mark"
                    style={{ width: '50px', height: '50px' }}
                  />
                </Box>
              </Box>
              <Typography
                sx={{
                  fontWeight: '400',
                  fontSize: { xs: '14px', md: '16px' }, // Adjust font size for responsiveness
                  lineHeight: '20px',
                  color: '#666666',
                  width: '100%',
                  maxWidth: '100%', // Ensure text wraps properly
                }}
              >
                {images[index].text}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Expertise;
