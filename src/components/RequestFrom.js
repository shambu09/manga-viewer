import React from "react";
import { useState } from "react";
import { crawler_url } from "../utils";

function RequestFrom() {
	const [formData, setFormData] = useState({
		url: "",
		start: "",
		end: "",
		type: "manga",
	});
	const [message, setMessage] = useState("");

	const showMessage = (msg) => {
		setFormData({
			url: "",
			start: "",
			end: "",
			type: "manga",
		});
		setMessage(msg);
		setTimeout(() => {
			setMessage("");
		}, 3000);
	};

	const formatMetaData = (data) => {
		return {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		};
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			formData.url.length > 0 &&
			!isNaN(formData.start) &&
			!isNaN(formData.end)
		) {
			fetch(crawler_url, formatMetaData(formData))
				.then((res) => {
					return res.text();
				})
				.then((resp) => {
					showMessage(resp);
				});
		} else {
			alert("Please fill all the fields correctly");
		}
	};

	const handleChange = (e) => {
		let { name, value } = e.target;
		if (e.target.name === "start" || e.target.name === "end") {
			if (isNaN(value)) {
				console.log(value);
				value = 0;
			} else {
				value = parseInt(value);
			}
		}
		setFormData({
			...formData,
			[name]: value,
		});
	};

	return (
		<div className="text-left">
			{message !== "" && <p className="h7"> Response : {message} </p>}
			<form onSubmit={handleSubmit}>
				<div className="form-group row">
					<label
						htmlFor="inputUrl"
						className="col-sm-2 col-form-label"
					>
						Url
					</label>
					<div className="col-sm-6">
						<input
							onChange={handleChange}
							type="url"
							className="form-control"
							id="inputUrl"
							placeholder="Url"
							name="url"
							value={formData.url}
						/>
					</div>
				</div>
				<div className="form-group row">
					<label
						htmlFor="inputStart"
						className="col-sm-2 col-form-label"
					>
						Start
					</label>
					<div className="col-sm-2">
						<input
							onChange={handleChange}
							type="number"
							name="start"
							className="form-control"
							id="inputStart"
							placeholder="Start"
							value={formData.start}
						/>
					</div>
				</div>
				<div className="form-group row">
					<label htmlFor="End" className="col-sm-2 col-form-label">
						End
					</label>
					<div className="col-sm-2">
						<input
							onChange={handleChange}
							type="number"
							name="end"
							className="form-control validate"
							id="End"
							placeholder="End"
							value={formData.end}
						/>
					</div>
				</div>
				<fieldset className="form-group">
					<div className="row">
						<legend className="col-form-label col-sm-2 pt-0">
							Type
						</legend>
						<div className="col-sm-10">
							<div className="form-check">
								<input
									onChange={handleChange}
									className="form-check-input"
									type="radio"
									name="type"
									id="gridRadios1"
									value="manga"
									checked={formData.type === "manga"}
								/>
								<label
									className="form-check-label"
									htmlFor="gridRadios1"
								>
									Manga
								</label>
							</div>
							<div className="form-check">
								<input
									onChange={handleChange}
									className="form-check-input"
									type="radio"
									name="type"
									id="gridRadios2"
									value="manhua"
									checked={formData.type === "manhua"}
								/>
								<label
									className="form-check-label"
									htmlFor="gridRadios2"
								>
									Manhua
								</label>
							</div>
							<div className="form-check disabled">
								<input
									onChange={handleChange}
									className="form-check-input"
									type="radio"
									name="type"
									id="gridRadios3"
									value="manhwa"
									checked={formData.type === "manhwa"}
								/>
								<label
									className="form-check-label"
									htmlFor="gridRadios3"
								>
									Manhwa
								</label>
							</div>
						</div>
					</div>
				</fieldset>
				<div className="form-group row text-center pt-3">
					<div className="col-sm-10">
						<button type="submit" className="btn btn-primary">
							Request
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default RequestFrom;
