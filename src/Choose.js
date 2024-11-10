import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import two from './Assets/Group 162543.png';
import call from './Assets/Call icon.png';
import ema from './Assets/Email icon.png';
import loc from './Assets/Address icon.png';
import SuccessButton from './Succesbutton';
import cb from './Assets/Capital Bridge 2.png';
import rc1 from './Assets/Rectangle2.png';
import rc2 from './Assets/Rectangle (3).png';
import rc3 from './Assets/Rectangle71.png';
import rc4 from './Assets/Rectangle73.png';
import g1 from './Assets/Group 9.png';
import g2 from './Assets/Group 9 Copy 2.png';
import g3 from './Assets/Group 9 Copy 3.png';
import g4 from './Assets/Group 9 Copy.png';
import start from './Assets/android-globe.png';
import end from './Assets/chevron-down.png';
import { useTheme } from '@mui/material/styles';
import './Choose.css';
const Choose = () => {
  const theme = useTheme();
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div>
      <Grid container sx={{ justifyContent: 'center' }}>
        <Grid
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
          item
          xs={12}
        >
          <h2
            style={{
              fontWeight: '700',
              fontSize: '40px',
              textAlign: 'center    ',
            }}
          >
            Why Choose Capital Bridge?
          </h2>
          <p
            style={{
              fontWeight: '500',
              fontSize: '14px',
              textAlign: 'center',
              color: '#737373',
              maxWidth: '511px',
              width: 'auto',
              height: 'auto',
            }}
          >
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{' '}
          </p>
          <div
            style={{ display: 'flex', justifyContent: 'end', width: '100%' }}
          >
            <img src={two} alt="tw" />
          </div>
        </Grid>
        <Grid
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
          item
          xs={12}
          md={6}
        >
          <p
            style={{
              width: '206px',

              fontWeight: '600',
              fontSize: '28px',
              textAlign: 'center',
              color: '#36B864',
              margin: '0px',
            }}
          >
            Expertise
          </p>
          <p
            style={{
              maxWidth: '371px',
              width: 'auto',
              height: 'auto',
              fontWeight: '400',
              fontSize: '20px',
              textAlign: 'center',
              color: '#444444',
              margin: '0px',
            }}
          >
            Solutions for developing a skilled and adaptable workforce
          </p>
        </Grid>
        <Grid
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
          item
          xs={12}
          md={6}
        >
          <p
            style={{
              width: '206px',

              fontWeight: '600',
              fontSize: '28px',
              textAlign: 'center',
              color: '#36B864',
              margin: '0px',
            }}
          >
            Innovation
          </p>
          <p
            style={{
              maxWidth: '371px',
              width: 'auto',
              height: 'auto',

              fontWeight: '400',
              fontSize: '20px',
              textAlign: 'center',
              color: '#444444',
              margin: '0px',
            }}
          >
            Solutions for developing a skilled and adaptable workforce.
          </p>
        </Grid>
        <Grid
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
          item
          xs={12}
          md={6}
        >
          <p
            style={{
              width: '206px',

              fontWeight: '600',
              fontSize: '28px',
              textAlign: 'center',
              color: '#36B864',
              margin: '0px',
            }}
          >
            Customization
          </p>
          <p
            style={{
              maxWidth: '371px',
              width: 'auto',
              height: 'auto',

              fontWeight: '400',
              fontSize: '20px',
              textAlign: 'center',
              color: '#444444',
              margin: '0px',
            }}
          >
            Solutions for developing a skilled and adaptable workforce.
          </p>
        </Grid>
        <Grid
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
          item
          xs={12}
          md={6}
        >
          <p
            style={{
              width: '206px',

              fontWeight: '600',
              fontSize: '28px',
              textAlign: 'center',
              color: '#36B864',
              margin: '0px',
            }}
          >
            Results
          </p>
          <p
            style={{
              maxWidth: '371px',
              width: 'auto',
              height: 'auto',

              fontWeight: '400',
              fontSize: '20px',
              textAlign: 'center',
              color: '#444444',
              margin: '0px',
            }}
          >
            Our focus on measurable outcomes ensures that our training programs
            deliver tangible benefits.
          </p>
        </Grid>
        <Grid
          container
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '70px',
            textAlign: 'center',
            paddingLeft: '45px', // Center align text
          }}
        >
          <Typography
            sx={{
              fontWeight: '500',
              fontSize: { xs: '28px', sm: '32px', md: '40px' },
              color: '#111D15',
              mb: 2,
            }}
          >
            Find Us
          </Typography>
          <Box sx={{ width: '100%' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 2,
                flexDirection: { xs: 'column', sm: 'row' },
              }}
            >
              <img
                src={call}
                alt="call"
                style={{ marginRight: theme.spacing(2) }}
              />
              <Box>
                <Typography
                  sx={{
                    fontWeight: '600',
                    fontSize: { xs: '18px', sm: '20px' },
                    lineHeight: '25px',
                    mb: '4px',
                  }}
                >
                  Call Us
                </Typography>
                <Typography
                  sx={{
                    color: '#666666',
                    fontWeight: '400',
                    fontSize: { xs: '14px', sm: '16px' },
                    lineHeight: '19px',
                  }}
                >
                  +(08) 255 201 888
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 2,
                flexDirection: { xs: 'column', sm: 'row' },
              }}
            >
              <img
                src={ema}
                alt="email"
                style={{ marginRight: theme.spacing(2) }}
              />
              <Box>
                <Typography
                  sx={{
                    fontWeight: '600',
                    fontSize: { xs: '18px', sm: '20px' },
                    lineHeight: '25px',
                    mb: '4px',
                  }}
                >
                  Email Now
                </Typography>
                <Typography
                  sx={{
                    color: '#666666',
                    fontWeight: '400',
                    fontSize: { xs: '14px', sm: '16px' },
                    lineHeight: '19px',
                  }}
                >
                  Hello@procleaning.com
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: { xs: 'column', sm: 'row' },
              }}
            >
              <img
                src={loc}
                alt="location"
                style={{ marginRight: theme.spacing(2) }}
              />
              <Box>
                <Typography
                  sx={{
                    fontWeight: '600',
                    fontSize: { xs: '18px', sm: '20px' },
                    lineHeight: '25px',
                    mb: '4px',
                  }}
                >
                  Address
                </Typography>
                <Typography
                  sx={{
                    color: '#666666',
                    fontWeight: '400',
                    fontSize: { xs: '14px', sm: '16px' },
                    lineHeight: '19px',
                  }}
                >
                  7510, Brand Tower, New York, USA
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid sx={{ paddingRight: '45px' }} item xs={12} md={6}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginTop: '70px' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography
                  sx={{
                    width: '99px',
                    height: '19px',
                    fontWeight: '400',
                    fontSize: '16px',
                    color: '#11D15',
                  }}
                >
                  Contact info
                </Typography>
                <Typography
                  sx={{
                    width: '300px',
                    height: '43px',
                    fontWeight: '600',
                    fontSize: '36px',
                    color: '#11D15',
                    marginTop: '15px',
                    marginBottom: '15px',
                  }}
                >
                  Keep In Touch
                </Typography>
                <Typography
                  sx={{
                    minWidth: '500px',
                    width: 'auto',
                    height: 'auto',
                    fontWeight: '400',
                    fontSize: '16px',
                    color: '#666666',
                  }}
                >
                  We prioritize responding to your inquiries promptly to ensure
                  you receive the assistance you need in a timely manner
                </Typography>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <input
                type="text"
                className="formcontroll"
                autoComplete="off"
                placeholder="Name"
                style={{
                  outline: 'none',
                  border: 'none',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  borderRadius: '4px',
                  maxWidth: '500px',
                  maxHeight: '45px',
                  width: 'auto',
                  height: 'auto',
                  backgroundColor: '#fff',
                  padding: '18px 20px',
                  marginTop: '10px',
                  marginBottom: '20px',
                }}
              />
              <input
                type="text"
                className="formcontroll"
                autoComplete="off"
                placeholder="Email"
                style={{
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  outline: 'none',
                  border: 'none',
                  borderRadius: '4px',
                  maxWidth: '500px',
                  maxHeight: '45px',
                  width: 'auto',
                  height: 'auto',
                  backgroundColor: '#fff',
                  padding: '18px 20px',
                  marginTop: '10px',
                  marginBottom: '20px',
                }}
              />
              <input
                type="text"
                placeholder="Message"
                className="formcontroll"
                autoComplete="off"
                style={{
                  outline: 'none',
                  border: 'none',
                  borderRadius: '4px',
                  maxWidth: '500px',
                  maxHeight: '45px',
                  width: 'auto',
                  height: 'auto',
                  backgroundColor: '#fff',
                  padding: '18px 20px',
                  marginTop: '10px',
                  marginBottom: '20px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              />

              <div style={{ width: '150px' }}>
                <SuccessButton name="Send Message" />
              </div>
            </div>
          </div>
        </Grid>
        <Grid
          sx={{ marginTop: '70px', justifyContent: 'space-around' }}
          container
        >
          <Grid item xs={12} md={2.5}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <img
                src={cb}
                alt="cb"
                style={{ width: '82px', height: '76px' }}
              />
              <img
                src={rc1}
                alt="lc1"
                style={{
                  position: 'absolute',
                  left: '20px',
                  width: '190px',

                  height: '190px',
                }}
              />
              <img
                src={rc2}
                alt="lc2"
                style={{
                  position: 'absolute',
                  left: '100px',

                  width: '190px',

                  height: '190px',
                }}
              />
              <Typography
                sx={{
                  width: '200px !important',
                  height: '72px',
                  fontWeight: '400',
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: '#000000',
                  marginTop: '10px',
                  marginBottom: '10px',
                }}
              >
                Nam posuere accumsan porta. Integer id orci sed ante tincidunt
                tincidunt sit amet sed libero.
              </Typography>
              <Typography
                sx={{
                  width: '300px',
                  height: '24px',
                  fontWeight: '400',
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: '#000000',
                  marginTop: '20px',
                  marginBottom: '10px',
                }}
              >
                © Capital Bridge 2020
              </Typography>
            </div>
          </Grid>
          <Grid
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
            item
            xs={12}
            md={2.5}
          >
            <Typography
              sx={{
                width: '86px',
                height: '21px',
                fontWeight: '700 !important',
                fontSize: '18px',
                lineHeight: '21px',
                color: '#0D47A1',
              }}
            >
              Company
            </Typography>
            <p
              style={{
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '20px',
                width: '120px',
                marginTop: '10px',
                marginBottom: '10px',
              }}
            >
              Donec dignissim
            </p>
            <p
              style={{
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '20px',
                width: '140px',
                marginTop: '10px',
                marginBottom: '10px',
              }}
            >
              {' '}
              Curabitur egestas
            </p>
            <p
              style={{
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '20px',
                width: '120px',
                marginTop: '10px',
                marginBottom: '10px',
              }}
            >
              {' '}
              Nam posuere
            </p>
            <p
              style={{
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '20px',
                width: '120px',
                marginTop: '10px',
                marginBottom: '10px',
              }}
            >
              Aenean facilisis
            </p>
          </Grid>
          <Grid
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
            item
            xs={12}
            md={2.5}
          >
            <Typography
              sx={{
                width: '86px',
                height: '21px',
                fontWeight: '700 !important',
                fontSize: '18px',
                lineHeight: '21px',
                color: '#0D47A1',
              }}
            >
              Services
            </Typography>
            <p
              style={{
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '20px',
                width: '120px',
                marginTop: '10px',
                marginBottom: '10px',
              }}
            >
              Cras convallis
            </p>
            <p
              style={{
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '20px',
                width: '160px',
                marginTop: '10px',
                marginBottom: '10px',
              }}
            >
              {' '}
              Quisque lacinia purus
            </p>
            <p
              style={{
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '20px',
                width: '150px',
                marginTop: '10px',
                marginBottom: '10px',
              }}
            >
              {' '}
              Vestibulum faucibus
            </p>
            <p
              style={{
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '20px',
                width: '120px',
                marginTop: '10px',
                marginBottom: '10px',
              }}
            >
              Aliquam nec ex
            </p>
          </Grid>
          <Grid
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
            item
            xs={12}
            md={2.5}
          >
            <Typography
              sx={{
                width: '86px',
                height: '21px',
                fontWeight: '700 !important',
                fontSize: '18px',
                lineHeight: '21px',
                color: '#0D47A1',
              }}
            >
              Resources
            </Typography>
            <p
              style={{
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '20px',
                width: '120px',
                marginTop: '10px',
                marginBottom: '10px',
              }}
            >
              Suspendisse porttito
            </p>
            <p
              style={{
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '20px',
                width: '140px',
                marginTop: '10px',
                marginBottom: '10px',
              }}
            >
              {' '}
              Nam posuere
            </p>
            {/* <p
              style={{
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '20px',
                width: '120px',
                marginTop: '10px',
                marginBottom: '10px',
              }}
            >
              {' '}
              Curabitur egestas
            </p> */}
            <div className="footer-btn">
              <img src={g1} alt="str" />
              <img src={g2} alt="str" />
              <img src={g3} alt="str" />
              <img src={g4} alt="str" />

              <select
                className="selec"
                value={selectedOption}
                onChange={handleChange}
                style={{
                  position: 'absolute',
                  width: '270px',
                  height: '37px',
                  border: '1px solid #2196F3',
                  outline: 'none',
                  appearance: 'none',
                  padding: '0 35px',
                  fontSize: '16px',

                  bottom: '45px',
                  backgroundImage: `url(${start}), url(${end})`,
                  backgroundRepeat: 'no-repeat, no-repeat',
                  backgroundPosition: '10px center, calc(100% - 30px) center',
                  backgroundColor: 'transparent',
                  textIndent: '20px',
                  backgroundSize: '16px 16px, 16px 16px',
                }}
              >
                <option value="" disabled>
                  English-En
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
          </Grid>
          <Grid item xs={12} md={2.5}>
            <div>
              <img
                style={{ position: 'absolute', right: '40px', bottom: '70px' }}
                src={rc3}
                alt="r3"
              />
              <img
                style={{ position: 'absolute', right: '70px', bottom: '20px' }}
                src={rc4} // replace with the source of the child image
                alt="child"
              />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Choose;
