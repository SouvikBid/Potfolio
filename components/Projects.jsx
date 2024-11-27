import React from 'react';

const Projects = () => {
  
  const projectList = [
    {
      title: 'Personal Finance Manager',
      link: 'https://souvikpfm.netlify.app/',  
    },
  ];

  const linkStyle = {
    color: '#007bff',
    textDecoration: 'none',
  };

  const linkHoverStyle = {
    color: '#0056b3',
    textDecoration: 'underline',
  };

  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='projects'>
        <div className='md:grid md:grid-cols-2 sm:py-16'>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0 my-auto mx-6'>
                <h2 className='text-4xl font-bold mb-4 primary-color'>My Projects</h2>
                <ul className='text-base lg:text-lg'>
                    {projectList.map((project, index) => (
                        <li key={index} >
                            <a href={project.link} target="_blank" rel="noopener noreferrer"
                            style={linkStyle}
                            onMouseOver={(e) => (e.target.style = { ...linkStyle, ...linkHoverStyle })}
                            onMouseOut={(e) => (e.target.style = linkStyle)} >
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

export default Projects;