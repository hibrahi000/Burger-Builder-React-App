import React from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import classes from './Layout.module.css';

const Layout = (props) => (
	<Aux>
		<Toolbar />
		<SideDrawer />
		<main className={classes.Content}>{props.children}</main>
	</Aux>
);

export default Layout;
