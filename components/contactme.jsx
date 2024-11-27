import React from 'react';

const ContactMe = () => {
  const phoneNumber = '+91 7595980727'; 
  const email = 'souvik.bid1211@gmail.com'; 
  
    const projectList = [
      {
        title: 'Personal Finance Manager',
        link: 'https://souvikpfm.netlify.app/',  
      },
    ];
  
    const [isHovered, setIsHovered] = React.useState(false);

  // Define styles based on hover state
  const linkStyle = {
    color: isHovered ? 'yellow' : 'blue',  // Change color when hovered
    textDecoration: isHovered ? 'underline' : 'none',  // Underline when hovered
    transition: 'color 0.3s, text-decoration 0.3s',  // Smooth transition for hover effect
  };

  return (

    <div className='text-white max-w-[1200px] mx-auto my-12' id='contactme'>
        <div className='md:grid md:grid-cols-2 sm:py-16'>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0'>
                <div className='my-auto mx-6'>
                    <h2 className='text-4xl font-bold mb-4 primary-color'>Contact Me</h2>
                    <p className='text-base lg:text-lg'>
                        <strong>Phone: </strong> <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                    </p>
                    <p className='text-base lg:text-lg'>
                        <strong>Email: </strong> 
                        <a href={`mailto:${email}`}>
                            {email}
                        </a>
                    </p>
                </div>
            </div>
            
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0 my-auto mx-6'>
                <h2 className='text-4xl font-bold mb-4 primary-color'>My Projects</h2>
                <ul className='text-base lg:text-lg'>
                    {projectList.map((project, index) => (
                        <li key={index} >
                            <a href={project.link} target="_blank"
                            style={linkStyle}
                            onMouseEnter={() => setIsHovered(true)}  
                            onMouseLeave={() => setIsHovered(false)}
                            >
                                {project.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  );
};

export default ContactMe;
