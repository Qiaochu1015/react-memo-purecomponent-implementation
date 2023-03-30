import React, { useState } from "react";

const data = {
	id: "001",
	type: "A",
	value: "aaaaa",
	"data:": {},
	path: ["001"],
	children: [
		{
			id: "003",
			type: "A",
			value: "aaaaa",
			"data:": {},
			path: ["001", "003"],
			children: [
				{
					id: "002",
					type: "A",
					value: "aaaaa",
					"data:": {},
					path: ["001", "003", "002"],
					children: [],
				},
			],
		},
		{
			id: "004",
			type: "A",
			value: "aaaaa",
			"data:": {},
			path: ["001", "004"],
			children: [
				{
					id: "005",
					type: "A",
					value: "aaaaa",
					"data:": {},
					path: ["001", "004", "005"],
					children: [],
				},
				{
					id: "005",
					type: "A",
					value: "aaaaa",
					"data:": {},
					path: ["001", "004", "005"],
					children: [
						{
							id: "002",
							type: "A",
							value: "aaaaa",
							"data:": {},
							path: ["001", "004", "005", "002"],
							children: [],
						},
					],
				},
			],
		},
	],
};

export default function ImmutableState() {
	const [nestedData, setNestedData] = useState(data);

	const handleStateChange = () => {
		//'state.children[0].children[0].path[1]' from "003" into "004"
		//'state.children[1].children[1].children[0].path[2]' from "005" into "006"
		setNestedData((prev) => {
			const newState = JSON.parse(JSON.stringify(prev));
			newState.children[0].children[0].path[1] = "004";
			newState.children[1].children[1].children[0].path[2] = "006";
			return newState;
		});
	};
	return (
		<div>
			<h3>
				state.children[0].children[0].path[1]:{" "}
				{nestedData.children[0].children[0].path[1]}
			</h3>
			<h3>
				state.children[1].children[1].children[0].path[2]:{" "}
				{nestedData.children[1].children[1].children[0].path[2]}
			</h3>
			<button onClick={handleStateChange}>Change State</button>
		</div>
	);
}
