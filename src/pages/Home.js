import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  CardMedia,
  Grid,
  Button,
  TextField,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Stack
} from '@mui/material';
import { 
  School, 
  Engineering, 
  Science, 
  Computer,
  CheckCircle,
  LocationOn,
  Phone,
  Email,
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  EmojiEvents,
  Groups,
  WorkspacePremium,
  Diversity3
} from '@mui/icons-material';

function Home() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleFormChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contactForm);
  };

  const achievements = [
    {
      icon: <EmojiEvents fontSize="large" />,
      number: "30+",
      text: "Years of Excellence"
    },
    {
      icon: <Groups fontSize="large" />,
      number: "25,000+",
      text: "Alumni Worldwide"
    },
    {
      icon: <WorkspacePremium fontSize="large" />,
      number: "100%",
      text: "Placement Rate"
    },
    {
      icon: <Diversity3 fontSize="large" />,
      number: "50+",
      text: "Industry Partners"
    }
  ];

  return (
    <Box>
      {/* Hero Section with improved styling */}
      <Box sx={{
        height: '90vh',
        position: 'relative',
        backgroundImage: 'url("https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1986&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        alignItems: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.6)'
        }
      }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ maxWidth: '800px' }}>
            <Typography 
              variant="h1" 
              color="white" 
              gutterBottom 
              sx={{ 
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 700,
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
              }}
            >
              Welcome to Engineering Excellence
            </Typography>
            <Typography 
              variant="h5" 
              color="white" 
              sx={{ 
                mb: 4,
                opacity: 0.9,
                textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
              }}
            >
              Shaping Tomorrow's Leaders in Technology and Innovation
            </Typography>
            <Button 
              variant="contained" 
              size="large" 
              color="primary"
              sx={{ 
                py: 1.5, 
                px: 4,
                fontSize: '1.1rem',
                boxShadow: '0 4px 14px rgba(0,0,0,0.4)'
              }}
            >
              Explore Programs
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Achievement Stats Section */}
      <Box sx={{ 
        py: 6, 
        backgroundColor: 'primary.main',
        color: 'white'
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            {achievements.map((achievement, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Box sx={{ 
                  textAlign: 'center',
                  p: 2,
                  borderRadius: 2,
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)'
                  }
                }}>
                  <Box sx={{ mb: 2, color: 'white' }}>
                    {achievement.icon}
                  </Box>
                  <Typography variant="h3" sx={{ mb: 1, fontWeight: 700 }}>
                    {achievement.number}
                  </Typography>
                  <Typography variant="subtitle1">
                    {achievement.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Enhanced About Us Section */}
      <Box sx={{ py: 10, backgroundColor: '#fff' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" gutterBottom color="primary" sx={{ fontWeight: 700 }}>
                About Us
              </Typography>
              <Typography variant="h5" gutterBottom color="text.secondary" sx={{ mb: 4 }}>
                Pioneering Engineering Education Since 1990
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', mb: 3 }}>
                Welcome to one of India's premier engineering institutions, where innovation meets excellence. 
                Our state-of-the-art campus, distinguished faculty, and industry-aligned curriculum create 
                the perfect environment for nurturing future technology leaders.
              </Typography>
              <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={6}>
                  <Paper elevation={0} sx={{ p: 2, backgroundColor: '#f5f5f5' }}>
                    <Typography variant="h6" gutterBottom color="primary">
                      Vision
                    </Typography>
                    <Typography>
                      To be a globally recognized institution in engineering education, research, and innovation.
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper elevation={0} sx={{ p: 2, backgroundColor: '#f5f5f5' }}>
                    <Typography variant="h6" gutterBottom color="primary">
                      Mission
                    </Typography>
                    <Typography>
                      To empower students with cutting-edge technical knowledge and leadership skills.
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
              <List>
                {[
                  "NAAC 'A++' Accredited Institution",
                  "NBA Accredited Programs",
                  "UGC Recognized Center of Excellence",
                  "AICTE Approved Curriculum"
                ].map((item, index) => (
                  <ListItem key={index} sx={{ py: 0.5 }}>
                    <ListItemIcon>
                      <CheckCircle color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ 
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: -20,
                  right: -20,
                  bottom: 20,
                  left: 20,
                  backgroundColor: 'primary.main',
                  opacity: 0.1,
                  borderRadius: 2
                }
              }}>
                <CardMedia
                  component="img"
                  height="500"
                  image="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1986&q=80"
                  alt="College Campus"
                  sx={{ 
                    borderRadius: 2,
                    position: 'relative',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Academic Programs Section with vertical layout */}
      <Box sx={{ py: 10, backgroundColor: '#f5f5f5' }}>
        <Container maxWidth="md">
          <Typography variant="h3" align="center" gutterBottom color="primary" sx={{ fontWeight: 700, mb: 6 }}>
            Our Programs
          </Typography>
          <Stack spacing={4}>
            {[
              {
                title: "Computer Science & Engineering",
                icon: <Computer fontSize="large" />,
                description: "Cutting-edge curriculum in AI, Machine Learning, Cloud Computing, and Software Engineering. Our program focuses on practical learning with industry-standard tools and technologies. Students get hands-on experience with real-world projects and internships.",
                image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              },
              {
                title: "Mechanical Engineering",
                icon: <Engineering fontSize="large" />,
                description: "Advanced programs in Design, Manufacturing, Robotics, and Automation. Students work with state-of-the-art equipment and software tools. The curriculum includes industry visits and practical workshops to ensure hands-on learning.",
                image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              },
              {
                title: "Electronics Engineering",
                icon: <Science fontSize="large" />,
                description: "Specializations in VLSI, Embedded Systems, and Communications. Our labs are equipped with the latest testing and measurement equipment. Students participate in various technical competitions and research projects.",
                image: "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              },
              {
                title: "Civil Engineering",
                icon: <School fontSize="large" />,
                description: "Focus on Structural Engineering, Environmental Systems, and Smart Cities. The program includes field visits, practical training, and exposure to modern surveying and design tools. Students work on real infrastructure projects.",
                image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              }
            ].map((program, index) => (
              <Card key={index} sx={{ 
                overflow: 'hidden',
                borderRadius: 3,
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.15)'
                }
              }}>
                <Grid container>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ position: 'relative', height: '100%', minHeight: 300 }}>
                      <CardMedia
                        component="img"
                        image={program.image}
                        alt={program.title}
                        sx={{ 
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ 
                        color: 'primary.main',
                        mb: 2,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2
                      }}>
                        {program.icon}
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                          {program.title}
                        </Typography>
                      </Box>
                      <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                        {program.description}
                      </Typography>
                      <Button 
                        variant="outlined" 
                        color="primary" 
                        sx={{ mt: 3 }}
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* Why Choose Us Section with improved layout */}
      <Box sx={{ py: 10, backgroundColor: '#fff' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom color="primary" sx={{ fontWeight: 700, mb: 6 }}>
            Why Choose Us
          </Typography>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <List>
                {[
                  {
                    title: "State-of-the-art Facilities",
                    description: "Modern laboratories equipped with the latest technology and research equipment"
                  },
                  {
                    title: "Expert Faculty",
                    description: "Highly qualified professors with industry and research experience"
                  },
                  {
                    title: "Industry Connections",
                    description: "Strong partnerships with leading technology companies and regular industry interactions"
                  },
                  {
                    title: "Global Exposure",
                    description: "International collaborations and exchange programs with renowned universities"
                  },
                  {
                    title: "Research Focus",
                    description: "Cutting-edge research opportunities and well-equipped research centers"
                  },
                  {
                    title: "Career Support",
                    description: "Dedicated placement cell with excellent placement track record"
                  }
                ].map((item, index) => (
                  <ListItem key={index} sx={{ 
                    mb: 2,
                    backgroundColor: '#f5f5f5',
                    borderRadius: 2,
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'translateX(10px)'
                    }
                  }}>
                    <ListItemIcon>
                      <CheckCircle color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={<Typography variant="h6">{item.title}</Typography>}
                      secondary={item.description}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ 
                position: 'relative',
                height: '100%',
                minHeight: 400,
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}>
                <CardMedia
                  component="img"
                  image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="College Facilities"
                  sx={{ 
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Campus Gallery with larger images */}
      <Box sx={{ py: 10, backgroundColor: '#fff' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom color="primary" sx={{ fontWeight: 700, mb: 6 }}>
            Campus Gallery
          </Typography>
          <Stack spacing={4}>
            {[
              {
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1986&q=80",
                title: "Modern Campus Building",
                description: "Our state-of-the-art main building houses advanced laboratories and smart classrooms."
              },
              {
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                title: "Research Laboratory",
                description: "Well-equipped laboratories supporting cutting-edge research and experimentation."
              },
              {
                image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                title: "Central Library",
                description: "A vast collection of books, journals, and digital resources for academic excellence."
              },
              {
                image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                title: "Student Life",
                description: "Vibrant campus life with various cultural and technical events throughout the year."
              }
            ].map((item, index) => (
              <Card key={index} sx={{ 
                overflow: 'hidden',
                borderRadius: 3,
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                transition: 'all 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.15)'
                }
              }}>
                <Box sx={{ position: 'relative', width: '100%', height: 500 }}>
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.title}
                    sx={{ 
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <Box sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    color: 'white',
                    p: 4
                  }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.9 }}>
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* Footer Section */}
      <Box sx={{ 
        backgroundColor: '#1a237e',
        color: 'white',
        pt: 8,
        pb: 4
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={8}>
            <Grid item xs={12} md={4}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
                Contact Us
              </Typography>
              <List sx={{ mb: 4 }}>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
                    <LocationOn />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Address"
                    secondary="123 College Road, Engineering City, State 12345"
                    secondaryTypographyProps={{ sx: { color: 'rgba(255,255,255,0.7)' } }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
                    <Phone />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Phone"
                    secondary="+1 (123) 456-7890"
                    secondaryTypographyProps={{ sx: { color: 'rgba(255,255,255,0.7)' } }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
                    <Email />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Email"
                    secondary="admissions@engineeringcollege.edu"
                    secondaryTypographyProps={{ sx: { color: 'rgba(255,255,255,0.7)' } }}
                  />
                </ListItem>
              </List>
              <Stack direction="row" spacing={2}>
                <Facebook sx={{ cursor: 'pointer' }} />
                <Twitter sx={{ cursor: 'pointer' }} />
                <LinkedIn sx={{ cursor: 'pointer' }} />
                <Instagram sx={{ cursor: 'pointer' }} />
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
                Quick Links
              </Typography>
              <List>
                {[
                  "Admissions",
                  "Academic Calendar",
                  "Research Centers",
                  "Campus Life",
                  "Placements",
                  "Alumni"
                ].map((item, index) => (
                  <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                    <ListItemText 
                      primary={item}
                      sx={{ 
                        '& .MuiTypography-root': { 
                          color: 'rgba(255,255,255,0.7)',
                          '&:hover': {
                            color: 'white',
                            cursor: 'pointer'
                          }
                        }
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
                Get in Touch
              </Typography>
              <Paper elevation={0} sx={{ p: 3, backgroundColor: 'rgba(255,255,255,0.05)' }}>
                <form onSubmit={handleSubmit}>
                  <Stack spacing={2}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={contactForm.name}
                      onChange={handleFormChange}
                      required
                      variant="outlined"
                      sx={{ 
                        '& .MuiOutlinedInput-root': {
                          color: 'white',
                          '& fieldset': {
                            borderColor: 'rgba(255,255,255,0.3)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(255,255,255,0.5)',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'rgba(255,255,255,0.7)',
                        },
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={contactForm.email}
                      onChange={handleFormChange}
                      required
                      variant="outlined"
                      sx={{ 
                        '& .MuiOutlinedInput-root': {
                          color: 'white',
                          '& fieldset': {
                            borderColor: 'rgba(255,255,255,0.3)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(255,255,255,0.5)',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'rgba(255,255,255,0.7)',
                        },
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={3}
                      value={contactForm.message}
                      onChange={handleFormChange}
                      required
                      variant="outlined"
                      sx={{ 
                        '& .MuiOutlinedInput-root': {
                          color: 'white',
                          '& fieldset': {
                            borderColor: 'rgba(255,255,255,0.3)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(255,255,255,0.5)',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'rgba(255,255,255,0.7)',
                        },
                      }}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ 
                        backgroundColor: 'white',
                        color: 'primary.main',
                        '&:hover': {
                          backgroundColor: 'rgba(255,255,255,0.9)'
                        }
                      }}
                    >
                      Send Message
                    </Button>
                  </Stack>
                </form>
              </Paper>
            </Grid>
          </Grid>
          <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />
          <Typography variant="body2" align="center" sx={{ color: 'rgba(255,255,255,0.7)' }}>
            © {new Date().getFullYear()} Engineering College. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default Home; 