import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaBeer, FaFacebook, FaGithub, FaGoogle, FaLinkedin, FaTwitter } from 'react-icons/fa';
import QZone from '../Q-Zone/QZone';
import bg from '../../assets/bg1.png'

const RightNav = () => {
	return (
		<div>
			<h2>Login With</h2>
			<Button className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
			<Button variant="outline-secondary"><FaGithub></FaGithub> Login with Github</Button>
			<div>
				<h2>Find us on</h2>
			<ListGroup className='mt-4'>
      <ListGroup.Item><FaFacebook></FaFacebook>  Facebook</ListGroup.Item>
      <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
      <ListGroup.Item><FaLinkedin></FaLinkedin> Linkedin</ListGroup.Item>
    </ListGroup>
			</div>
			<QZone></QZone>
			<div>
				<img src={bg} alt="" />
			</div>
		</div>
	);
};

export default RightNav;