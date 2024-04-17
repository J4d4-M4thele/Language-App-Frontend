import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const LanguageProfile = () => {
	const { id } = useParams();

	const [languages, setLanguages] = useState({
        fullName: '',
        language: '',
        country: '',
        countryFlagUri: ''
    });

	useEffect(() => {
        loadLanguages();
    }, []);

    const loadLanguages = async () => {
        const result = await axios.get(`http://localhost:9192/languages/language/${id}`);
        setLanguages(result.data);
    }

	return (
		<section
			className="shadow"
			style={{ backgroundColor: "whitesmoke" }}>
			<div className="container py-5">
				<div className="row">
					<div className="col-lg-3">
						<div className="card mb-4">
							<div className="card-body text-center">
								<img
									src={languages.countryFlagUri}
									alt="flag"
									className="img-fluid"
									style={{ width: 150 }}
								/>
								<h5 className="my-3">
									{`${languages.fullName}`}
								</h5>
							</div>
						</div>
					</div>

					<div className="col-lg-9">
						<div className="card mb-4">
							<div className="card-body">
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Name
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{languages.fullName}
										</p>
									</div>
								</div>

								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Language
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{languages.language}
										</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Country
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{languages.country}
										</p>
									</div>
								</div>
								<hr />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LanguageProfile;