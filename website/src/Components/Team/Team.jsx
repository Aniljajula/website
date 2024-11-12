import React from 'react';
import './Team.css';

// Importing images
import mainProfile from '../Assets/blog (2).jpeg';
import profile1 from '../Assets/blog (2).jpeg';
import profile2 from '../Assets/blog (2).jpeg';
import profile3 from '../Assets/blog (2).jpeg';
import profile4 from '../Assets/blog (2).jpeg';

const Team = () => {
  const teamMembers = [
    {
      name: 'Satyaprasad',
      role: 'Vajra Iot',
      image: profile1,
    },
    {
      name: 'Jayarao',
      role: 'Vajra Iot',
      image: profile2,
    },
    {
      name: 'Sanjay',
      role: 'Vajra Iot',
      image: profile3,
    },
    {
      name: 'Charan',
      role: 'Vajra Iot',
      image: profile4,
    },
  ];

  return (
    <div className="team-container">
      <div className="left-panel">
        <img src={mainProfile} alt="Main Profile" className="main-profile" />
        <h2>Satyaprasad</h2>
        <p>Vajra Iot</p>
        <p className="description">
        We comprise a team of highly motivated individuals with a solid background and a proven track record in conceptualizing, customizing, and implementing field-ready solutions.        </p>
        <div className="contact-info">
          <p>📞 000 111 222 345</p>
          <p>🌐firmware@vajraiot.com</p>
          <p>✉️ It@vajraiot.com</p>
        </div>
      </div>
      <div className="right-panel">
        <h1 className="team-title">Meet The Team</h1>
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <img src={member.image} alt={member.name} className="member-photo" />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
