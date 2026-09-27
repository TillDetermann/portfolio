import React, { useState } from "react";
import { FiDownload, FiFolder, FiGithub, FiX } from "react-icons/fi";
import { IoOpenOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import Project from "./Project";
import "../styles/Modal.css";

const WorkCard = ({ w, tabId }) => {
	const [showProject, setShowProject] = useState(false);

	const modalContent = (
		<div className='modal-overlay' onClick={() => setShowProject(false)}>
			<div className='modal-content' onClick={(e) => e.stopPropagation()}>
				<button type="button" className='modal-close' onClick={() => setShowProject(false)}>
					<FiX />
				</button>
				<Project project={w} />
			</div>
		</div>
	);

	return (
		<div>
			{tabId === "react-native" ? (
				<>
					<button
						type="button"
						onClick={() => setShowProject(true)}
						className='work-link-group'
						style={{ background: 'none', border: 'none', cursor: 'pointer', width: '100%', padding: 0 }}>
						<div className='works-card'>
							<div className='works-container'>
								<div className='top-work'>
									<FiFolder className='work-folder' />
									<div className='right'>
										{w.gitlink && (
											<Link className='work-git' to={w.gitlink} target='_blank'>
												<FiGithub />
											</Link>
										)}

										<button
											type="button"
											onClick={(e) => {
												e.stopPropagation();
												setShowProject(true);
											}}
											className='work-link'
											style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
											<FiDownload />
										</button>
									</div>
								</div>
								<div className='mid-work'>
									<p className='work-title'>{w.title}</p>
									<p className='work-desc'>{w.desc}</p>
								</div>
								<div className='bottom-work'>
									{w.tech.map((e, index) => {
										return <small key={index}>{e}</small>;
									})}
								</div>
							</div>
						</div>
					</button>

					{showProject && createPortal(modalContent, document.body)}
				</>
			) : (
				<>
					<button
						type="button"
						onClick={() => setShowProject(true)}
						className='work-link-group'
						style={{ background: 'none', border: 'none', cursor: 'pointer', width: '100%', padding: 0 }}>
						<div className='works-card'>
							<div className='works-container'>
								<div className='top-work'>
									<FiFolder className='work-folder' />
									<div className='right'>
										{w.gitlink && (
											<Link className='work-git' to={w.gitlink} target='_blank'>
												<FiGithub />
											</Link>
										)}
									</div>
								</div>
								<div className='mid-work'>
									<p className='work-title'>{w.title}</p>
									<p className='work-desc'>{w.desc}</p>
								</div>
								<div className='bottom-work'>
									{w.tech.map((e, index) => {
										return <small key={index}>{e}</small>;
									})}
								</div>
							</div>
						</div>
					</button>

					{showProject && createPortal(modalContent, document.body)}
				</>
			)}
		</div>
	);
};

export default WorkCard;