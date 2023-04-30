import React from 'react';
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <h2>Our terms and condition</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptate doloremque modi corrupti esse id cum ex eaque quidem. Earum, odio? Libero impedit voluptatem repudiandae. Aperiam aliquid illo sapiente ipsam?</p>
      <p>go to <Link to='/register'>register</Link> </p>
    </div>
  );
};

export default Terms;