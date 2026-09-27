import React from "react";
import "../styles/Skills.css";
import { motion } from "framer-motion";
import { SkillsData } from "../data/SkillsData";

const Skills = () => {
	const skillEffect = {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.6,
		},
	}

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { y: "-30px", opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { duration: 0.6 },
		},
	};

	const categories = {
		"ds": SkillsData.filter(skill => skill.category === "digital-skills"),
		"pl": SkillsData.filter(skill => skill.category === "programming-languages"),
		"tf": SkillsData.filter(skill => skill.category === "tools-frameworks"),
	};

	return (
		<>
			<div className='skills' id='skills'>
				<div className='container'>
					<motion.div
						whileInView={skillEffect}
						initial={{ y: "-80px", opacity: 0 }}
						className='heading'>
						<p className='heading-sub-text'>What I work with</p>
						<p className='heading-text'>My Skills</p>
					</motion.div>

					{/* Alle Kategorien Wrapper */}
					<div className='skills-categories-wrapper'>
						{/* Digital Skills */}
						<div className='skills-category'>
							<motion.div
								whileInView={skillEffect}
								initial={{ y: "-80px", opacity: 0 }}
								className='category-heading'>
								<p className='category-sub-text'>Foundation</p>
								<p className='category-text'>Digital Skills</p>
							</motion.div>
							<motion.div
								variants={containerVariants}
								initial='hidden'
								whileInView='visible'
								className='skills-box'>
								{categories.ds.map((el, index) => (
									<motion.div
										key={index}
										variants={itemVariants}
										className='skill-card'>
										<div className='skill-icon'>{el.icon}</div>
										<small className='skill-desc'>{el.name}</small>
									</motion.div>
								))}
							</motion.div>
						</div>

						{/* Programming Languages */}
						<div className='skills-category'>
							<motion.div
								whileInView={skillEffect}
								initial={{ y: "-80px", opacity: 0 }}
								className='category-heading'>
								<p className='category-sub-text'>Languages</p>
								<p className='category-text'>Programming Languages</p>
							</motion.div>
							<motion.div
								variants={containerVariants}
								initial='hidden'
								whileInView='visible'
								className='skills-box'>
								{categories.pl.map((el, index) => (
									<motion.div
										key={index}
										variants={itemVariants}
										className='skill-card'>
										<div className='skill-icon'>{el.icon}</div>
										<small className='skill-desc'>{el.name}</small>
									</motion.div>
								))}
							</motion.div>
						</div>

						{/* Tools & Frameworks */}
						<div className='skills-category' id="last-category">
							<motion.div
								whileInView={skillEffect}
								initial={{ y: "-80px", opacity: 0 }}
								className='category-heading'>
								<p className='category-sub-text'>Ecosystem</p>
								<p className='category-text'>Tools & Frameworks</p>
							</motion.div>
							<motion.div
								variants={containerVariants}
								initial='hidden'
								whileInView='visible'
								className='skills-box'>
								{categories.tf.map((el, index) => (
									<motion.div
										key={index}
										variants={itemVariants}
										className='skill-card'>
										<div className='skill-icon'>{el.icon}</div>
										<small className='skill-desc'>{el.name}</small>
									</motion.div>
								))}
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Skills;