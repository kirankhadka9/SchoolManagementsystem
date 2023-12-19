import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import logoImage from './images/logo.jpeg';
import campusImage from './images/liverpool.jpeg';
import aboutUsImage from './images/background.jpeg';

const MyApp = () => {
  const [selectedNavItem, setSelectedNavItem] = useState(null);
 /* const [showFullContent, setShowFullContent] = useState(false);*/
  const sectionRefs = useRef([]);

  const navItems = [
    {
      id: 1,
      label: 'Home',
      content: (
        <div>
          <div className="title-bar">
            <span className="title">This is Home</span>
          </div>
          <div className="home-content">
            <div className="content-container">
              <div className="image-container">
                <img src={campusImage} alt="Campus" />
              </div>
              <div className="text-container">
                <p>
                  Welcome to our campus! We provide a welcoming environment for all. Feel free to
                  explore and learn more about our institution. Welcome to our campus! We provide a welcoming environment for all. Feel free to
                  explore and learn more about our institution. Welcome to our campus! We provide a welcoming environment for all. Feel free to
                  explore and learn more about our institution. Welcome to our campus! We provide a welcoming environment for all. Feel free to
                  explore and learn more about our institution. Welcome to our campus! We provide a welcoming environment for all. Feel free to
                  explore and learn more about our institution. Welcome to our campus! We provide a welcoming environment for all. Feel free to
                  explore and learn more about our institution. Welcome to our campus! We provide a welcoming environment for all. Feel free to
                  explore and learn more about our institution. Welcome to our campus! We provide a welcoming environment for all. Feel free to
                  explore and learn more about our institution. Welcome to our campus! We provide a welcoming environment for all. Feel free to
                  explore and learn more about our institution. Welcome to our campus! We provide a welcoming environment for all. Feel free to
                  explore and learn more about our institution. Welcome to our campus! We provide a welcoming environment for all. Feel free to
                  explore and learn more about our institution. Welcome to our campus! We provide a welcoming environment for all. Feel free to
                  explore and learn more about our institution.
                </p>
              </div>
            </div>
          </div>
        </div>  
      ),
    },
    { id: 2, label: 'About us', content: (
      <div>
        <div className="title-bar">
          <span className="title">This is About Us</span>
        </div>
        <div className="home-content">
          <div className="content-container">
          <div className="text-container">
              <p>
                Welcome to the "About Us" section! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tincidunt augue, a vehicula massa ultrices vel. Vestibulum scelerisque massa ac ligula lobortis, in dictum odio vulputate. Curabitur varius mi vitae odio eleifend, sit amet feugiat odio cursus. Ut volutpat eros at purus convallis, ac cursus mi tincidunt.
                Phasellus et nunc ut velit aliquam vulputate. Curabitur pharetra felis eu dapibus laoreet. Donec rhoncus orci in vestibulum lacinia. Sed auctor velit vel orci facilisis volutpat. Vestibulum dapibus feugiat est, sit amet pharetra urna posuere vel. Nulla facilisi. Sed gravida odio eu diam ullamcorper, ac fermentum odio lacinia. Fusce non sagittis quam.
              </p>
            </div>
            <div className="image-container">
              
              <img src={aboutUsImage} alt="About Us" /> 
            </div>
            
          </div>
        </div>
      </div>
    )},
    {
      id: 3,
      label: 'Information', 
      content: (
        <div className="content" style={{ marginTop: '50px', paddingTop: '50px' }}>
          <div className="home-content">
            <div className="content-container">
             
              <div className="text-container">
                <div className="information-container" >
                  <span className="title"><strong>This is Information</strong></span>
                </div>
                <p>
                  Content for Information. Content for Information. Content for Information. Content for Information
                  Content for Information. Content for Information. Content for Information. Content for Information
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    { id: 4, label: 'Services', 
    content: (
      <div className="content" style={{ marginTop: '50px', paddingTop: '50px' }}>
        <div className="home-content">
          <div className="content-container">
            
            <div className="text-container">
              <div className="title-bar">
                <span className="title">This is Services</span>
              </div>
              <p>
               Our services are:
               <br/>
               1. <br/>
               2. <br/>
               3. <br/>
               4. <br/>
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    label: 'Gallery',
    content: (
      <div className="GalleryContent">

         <div className="title-bar">
          <span className="title">This is Gallery</span>
        </div>
       <div className="GalleryImages" >
          <img src={campusImage} alt="Image 1" />
          <img src={campusImage} alt="Image 1" />
          <img src={campusImage} alt="Image 1" />
          <br />
          <img src={campusImage} alt="Image 1" />
          <img src={campusImage} alt="Image 1" />
          <img src={campusImage} alt="Image 1" />
          </div>
  

      </div>
    ),

   },
   {
    id: 6,
    label: 'Contact Us', 
    content: (
      <div className="content" style={{ marginTop: '50px', paddingTop: '50px' }}>
        
              <div className="contactus-container" >
                <span className="title"><strong>This is Contact Us</strong></span>
              </div>
              <p>
                Content for Contact us. Content for Contact us. Content for Contact us.
                Content for Contact us. Content for Contact us. Content for Contact us.
              </p>
              <div style={{marginTop:'50px',fontSize:'30px'}}>
              <a href="https://www.facebook.com/abcschoolpage" target="_blank">
              Join us  to Facebook</a><br/>
              <br/>
              <p>Mail us to: abcschool@gmail.com</p>
              </div>

    

              <p></p>
        
        </div>
     
    ),
  },
    { id: 7, label: 'Login', content: '' },
  ];

  useEffect(() => {
    const handleScroll = (entries) => {
      entries.forEach((entry) => {
        const { target, isIntersecting } = entry;
        const itemId = Number(target.id.replace('section-', ''));

        if (isIntersecting) {
          setSelectedNavItem(itemId);
        }
      });
    };
  

    const observer = new IntersectionObserver(handleScroll, {
      root: null,
      rootMargin: '-50px 0px 0px 0px',
      threshold: 0.5,
    });

    sectionRefs.current.forEach((sectionRef) => {
      observer.observe(sectionRef);
    });
    return () => {
      observer.disconnect();
    };
  }, []);

  const handleNavItemClick = (id) => {
    const selectedSectionRef = sectionRefs.current.find((ref) => ref.id === `section-${id}`);
    if (selectedSectionRef) {
      selectedSectionRef.scrollIntoView({ behavior: 'smooth' });
      setSelectedNavItem(id);
    }
  };

  return (
    <div>
      <header>
        <button className="logo-btn" onClick={() => handleNavItemClick(1)}>
          <img src={logoImage} width="70px" height="62px" alt="Logo" />
        </button>
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href="javascript:void(0)"
                onClick={() => handleNavItemClick(item.id)}
                className={selectedNavItem === item.id ? 'selected' : ''}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </header>
  
      {navItems.map((item) => (
        <div
          key={item.id}
          ref={(ref) => (sectionRefs.current[item.id - 1] = ref)}
          id={`section-${item.id}`}
          className={`section ${selectedNavItem === item.id ? 'visible' : 'hidden'} ${
            item.id === 1 ? 'home' : ''
          }`}
        >
          {item.id === 1 || item.id === 2? (
            <div className="content">
              {item.content}
            </div>
          ) : (
            <p className="content">
             {item.content}
            </p>
          )}
  
        
          {item.id === 2 && (
            <div className="content">
              <form className='inquiry-form'>
      <p>
        <strong>INQUIRY FORM:</strong>
      </p>
      <label htmlFor="name">Name:</label><input type="text" id="name" name="name" />
      <label htmlFor="email">Email:</label><input type="email" id="email" name="email" />
      <label htmlFor="phone">Phone:</label><input type="tel" id="phone" name="phone" />
      <button type="submit">Submit</button>
    </form>
            </div>
          )}
        </div>
      ))}
    </div>
  );
  
  
}

export default MyApp;