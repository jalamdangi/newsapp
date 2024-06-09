import React from 'react';

const TeamMember = ({ name, role }) => (
  <div style={teamMemberStyle}>
    <h3>{name}</h3>
    <p>{role}</p>
  </div>
);

const OurTeam = () => {
  const teamMembers = [
    { name: 'Vikram Dangi', role: 'Frontend Developer/Apis' },
    { name: 'Vicky Shakya', role: 'UI/UX Designer' },
    { name: 'Sonu Dangi', role: 'Database' },
    { name: 'Vijay Sahu', role: 'HTML CSS' },
    // Add more members as needed
  ];

  return (
    <div style={ourTeamContainerStyle}>
      <h2>Our Team</h2>
      <div style={teamMembersContainerStyle}>
        {teamMembers.map((member, index) => (
          <TeamMember key={index} name={member.name} role={member.role} />
        ))}
      </div>
    </div>
  );
};

// Styles
const ourTeamContainerStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px',
  backgroundColor: '#f5f5f5',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const teamMembersContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: '20px',
};

const teamMemberStyle = {
    margin:"5px 10px",
  textAlign: 'center',
  padding: '20px',
  backgroundColor: '#3498db',
  color: '#fff',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

export default OurTeam;
