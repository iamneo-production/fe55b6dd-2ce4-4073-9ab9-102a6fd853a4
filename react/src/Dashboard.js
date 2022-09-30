import React from 'react';

function Dashboard(props) {

  // handle click event of logout button
  const handleLogout = () => {    
    props.history.push('/login1');
  }

  return (
    <div>
      Welcome to Abacus Academy<br /><br />
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}

export default Dashboard;