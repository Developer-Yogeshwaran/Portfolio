import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "./Testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      name: "Prof. Guruprakash",
      role: "HOD, CSE (AI/ML)",
      institution: "Sethu Institute of Technology",
      feedback:
        "Yogeshwaran demonstrates exceptional problem-solving skills and deep understanding of AI/ML concepts. His IoT project was innovative and showcased great hardware-software integration abilities.",
      rating: 5,
      image: "👨‍🏫",
    },
    {
      name: "Industry Mentor",
      role: "Senior Software Engineer",
      institution: "Tech Excellence Program",
      feedback:
        "Highly motivated learner with strong technical foundation. Yogeshwaran's dedication to learning modern frameworks and willingness to take on challenging projects is impressive.",
      rating: 5,
      image: "👨‍💼",
    },
    {
      name: "Project Lead",
      role: "AI/ML Development",
      institution: "Academic Research Initiative",
      feedback:
        "Exceptional work on the Resume Matcher project. The implementation of NLP algorithms was efficient and the user documentation was excellent. Great team player.",
      rating: 5,
      image: "👨‍🔬",
    },
  ];

  return (
    <section className="testimonials-section">
      <Container>
        <div className="testimonials-header">
          <h2 className="testimonials-title">
            What <span className="highlight">People Say</span>
          </h2>
          <p className="testimonials-subtitle">
            Feedback from mentors, professors, and industry professionals
          </p>
        </div>

        <Row className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <Col md={4} key={index} className="testimonial-wrapper">
              <div className="testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-avatar">{testimonial.image}</div>
                  <div className="testimonial-info">
                    <h4 className="testimonial-name">{testimonial.name}</h4>
                    <p className="testimonial-role">{testimonial.role}</p>
                    <p className="testimonial-institution">
                      {testimonial.institution}
                    </p>
                  </div>
                </div>

                <div className="testimonial-rating">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar key={i} className="star" />
                    ))}
                </div>

                <p className="testimonial-feedback">"{testimonial.feedback}"</p>
              </div>
            </Col>
          ))}
        </Row>

        <div className="testimonial-cta">
          <p>Interested in working together or need a reference?</p>
          <a href="mailto:yogeshofficialwork1@gmail.com" className="email-link">
            Get in Touch →
          </a>
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;
