import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Content from "./pages/Content";
import Viewer from "./pages/Viewer";
import Chapters from "./pages/Chapters";

function App() {
	return (
		<Switch>
			<Route exact path="/" component={Content}></Route>
			<Route exact path="/manga/:id" component={Chapters}></Route>
			<Route exact path="/viewer/:id" component={Viewer}></Route>
			<Route path="*">
				<h1>404 Error</h1>
			</Route>
		</Switch>
	);
}

export default App;
