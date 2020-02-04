import React from 'react';
import TeamsList from './TeamsList';
import SocialNav from './SocialNav';

const Nav = () => {
    return (
      <>
        <nav className="nav">
          <TeamsList />
          <SocialNav />
        </nav>
      </>
    )
  }

export default Nav;
