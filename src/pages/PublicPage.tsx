import React from "react";
import NestedComponent from "../components/NestedComponent";
import DynamicContent from "../components/DynamicContent";
import { Link } from "react-router-dom";
import {
	AdminContent,
	GuestContent,
	UserContent,
} from "../protectedComponents";

const PublicPage: React.FC = () => {
	return (
		<div>
			<h1>Public Page</h1>
			<p>
				This page is accessible to everyone, but it includes protected content.
			</p>
			<NestedComponent />
			<DynamicContent />
			<GuestContent />
			<UserContent />
			<AdminContent />
			<div className="dashboard-links">
				<Link to="/admin" className="dashboard-link">
					Go to Admin Dashboard
				</Link>
				<Link to="/guest" className="dashboard-link">
					Go to Guest Dashboard
				</Link>
				<Link to="/public" className="dashboard-link">
					Public page
				</Link>
			</div>
		</div>
	);
};

export default PublicPage;
