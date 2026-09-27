import React from "react";
import styles from "../styles/Project.css";

export default function InfoCard({ project }) {
  return (
    <div className="infocard-container">
      <div className="infocard-card">
        <h1 className="infocard-title">{project.title}</h1>

        <div className="infocard-sections-grid">
          {/* Description Section */}
          <section className="infocard-section">
            <h2 className="infocard-section-title">Overview</h2>
            <div className="infocard-section-content">
              {project.description}
            </div>
          </section>

          {/* Tech Stack Section */}
          {project.techStack && (
            <section className="infocard-section">
              <h2 className="infocard-section-title">Technology Stack</h2>
              <div className="infocard-section-content">
                {project.techStack.map((category, idx) => (
                  <div key={idx} className="infocard-column">
                    <h3
                      style={{
                        color: "var(--nav-blue)",
                        fontSize: "0.95rem",
                        fontWeight: "600",
                        marginBottom: "0.75rem",
                      }}
                    >
                      {category.category}
                    </h3>
                    <div className="infocard-tech-item">
                      {category.items.map((item, i) => (
                        <span key={i} className="infocard-tech-badge">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Key Features Section */}
          {project.keyFeatures && (
            <section className="infocard-section">
              <h2 className="infocard-section-title">Key Features</h2>
              <div className="infocard-section-content">
                <div className="infocard-feature-list">
                  {project.keyFeatures.map((feature, idx) => (
                    <div key={idx} className="infocard-feature-item">
                      <div className="infocard-feature-icon">
                        {feature.icon}
                      </div>
                      <div className="infocard-feature-content">
                        <div className="infocard-feature-title">
                          {feature.title}
                        </div>
                        <div className="infocard-feature-desc">
                          {feature.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Challenges Section */}
          {project.challenges && (
            <section className="infocard-section">
              <h2 className="infocard-section-title">Technical Challenges</h2>
              <div className="infocard-section-content">
                <div className="infocard-feature-list">
                  {project.challenges.map((challenge, idx) => (
                    <div
                      key={idx}
                      style={{
                        paddingBottom: "1rem",
                        borderBottom:
                          idx < project.challenges.length - 1
                            ? "1px solid rgba(255, 255, 255, 0.1)"
                            : "none",
                      }}
                    >
                      <div
                        style={{
                          color: "var(--soft-white)",
                          fontWeight: "600",
                          marginBottom: "0.5rem",
                          fontSize: "0.95rem",
                        }}
                      >
                        Challenge: {challenge.problem}
                      </div>
                      <div
                        style={{
                          color: "var(--white)",
                          fontSize: "0.9rem",
                          lineHeight: "1.5",
                          opacity: "0.9",
                        }}
                      >
                        Solution: {challenge.solution}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Implementation Section */}
          {project.implementation && (
            <section className="infocard-section">
              <h2 className="infocard-section-title">Implementation</h2>
              <div className="infocard-section-content">
                <div style={{ marginBottom: "1.5rem" }}>
                  <div
                    style={{
                      color: "var(--nav-blue)",
                      fontWeight: "600",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Architecture Approach
                  </div>
                  <div
                    style={{
                      color: "var(--white)",
                      fontSize: "0.9rem",
                      lineHeight: "1.6",
                    }}
                  >
                    {project.implementation.architecture}
                  </div>
                </div>

                {project.implementation.highlights && (
                  <div>
                    <div
                      style={{
                        color: "var(--nav-blue)",
                        fontWeight: "600",
                        marginBottom: "0.75rem",
                      }}
                    >
                      Key Highlights
                    </div>
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                      }}
                    >
                      {project.implementation.highlights.map(
                        (highlight, idx) => (
                          <li
                            key={idx}
                            style={{
                              color: "var(--white)",
                              fontSize: "0.9rem",
                              lineHeight: "1.6",
                              paddingLeft: "1.25rem",
                              position: "relative",
                            }}
                          >
                            <span
                              style={{
                                position: "absolute",
                                left: 0,
                                color: "var(--nav-blue)",
                                fontWeight: "bold",
                              }}
                            >
                              ▸
                            </span>
                            {highlight}
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* References Section */}
          {project.references && (
            <section className="infocard-section">
              <h2 className="infocard-section-title">References</h2>
              <div className="infocard-section-content">
                {project.references.map((category, idx) => (
                  <div key={idx} className="infocard-column">
                    <h3
                      style={{
                        color: "var(--nav-blue)",
                        fontSize: "0.95rem",
                        fontWeight: "600",
                        marginTop: "1rem",
                      }}
                    >
                      {category.category}
                    </h3>
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                      }}
                    >
                      {category.items.map((item, idx_items) => (
                        <li
                          key={idx_items}
                          style={{
                            color: "var(--white)",
                            fontSize: "0.9rem",
                            lineHeight: "1.6",
                            paddingLeft: "1.25rem",
                            position: "relative",
                          }}
                        >
                          <span
                            style={{
                              position: "absolute",
                              left: 0,
                              color: "var(--nav-blue)",
                              fontWeight: "bold",
                            }}
                          >
                            ▸
                          </span>
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="reference_links"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
