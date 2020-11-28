import React from "react";
import CreateRoom from "./CreateRoom";
import Room from "./Room";

const Home = (props) => {

	return (
			<div>
				<CreateRoom />
				<Room/>
			</div>
	);
}

export default Home;