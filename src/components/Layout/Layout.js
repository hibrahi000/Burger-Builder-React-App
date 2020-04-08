import React from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';
const Layout = (props) => (
	<Aux>
		{/* <div>Toolbar, SideDrawer</div> */}
		<Toolbar />
		<main className={classes.Content}>{props.children}</main>
	</Aux>
);

export default Layout;
