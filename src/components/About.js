import React from "react";

function About() {
  return (
    <section
      id="about"
      className="about-section-custom about"
      style={{
        position: "relative",
        minHeight: "700px",
        overflow: "hidden",
        padding: "60px 0",
        transition: "background 0.3s, color 0.3s"
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-60px",
          left: "-80px",
          width: "320px",
          height: "380px",
          background: "#bdbdbd",
          borderRadius: "60% 40% 60% 40% / 50% 60% 40% 50%",
          zIndex: 1,
        }}
      ></div>
      <img
        src="/assets/056ab14a60bc4c884db61a37fce7d662bfc6b640 (1).png"
        alt="3D Hand"
        style={{
          position: "absolute",
          top: "0px",
          right: "77%",
          width: "420px",
          height: "300px",
          zIndex: 2,
          transform: "rotate(90deg)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-80px",
          right: "-100px",
          width: "400px",
          height: "320px",
          background: "#ffe600",
          borderRadius: "60% 40% 60% 40% / 50% 60% 40% 50%",
          filter: "blur(2px)",
          zIndex: 1,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "60px",
          left: "180px",
          width: "180px",
          height: "150px",
          background: "#ffe600",
          borderRadius: "60% 40% 60% 40% / 50% 60% 40% 50%",
          filter: "blur(2px)",
          zIndex: 1,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          right: "120px",
          width: "220px",
          height: "180px",
          background: "#bdbdbd",
          borderRadius: "60% 40% 60% 40% / 50% 60% 40% 50%",
          zIndex: 1,
        }}
      ></div>
      <div className="container" style={{ position: "relative", zIndex: 3 }}>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <h2
              style={{
                fontWeight: 700,
                fontSize: "2.5rem",
                marginBottom: "1rem",
                letterSpacing: "1px",
              }}
            >
              <span style={{ fontWeight: 900, fontSize: "2.7rem" }}>T</span>
              his is it. :)
            </h2>
            <hr
              style={{
                border: "1px solid currentColor",
                opacity: 0.2,
                margin: "1rem 0 2rem 0",
              }}
            />
            <p style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
              Anish K. Sinha is an Indian{" "}
              <span style={{ fontWeight: 600 }}>
                UI/UX Designer & Front End Developer
              </span>{" "}
              with a passion for designing beautiful and functional user
              experiences. Typically, he's driven & permanently curious. He's
              obsessed with designing things and even more obsessed with
              designing cool & clean stuff for the web and mobile. He has been
              in the business of creating since he hung his first painting on
              the wall when he was 8.
            </p>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
              He holds a{" "}
              <span style={{ fontWeight: 600 }}>
                bachelor degree in Computer Applications
              </span>
              . During his graduation, he has been actively involved in the web
              design community for the last 3 years. He's designed websites for
              small businesses, events, nonprofits, and more. Currently based in
              India, India. Where he's working as an independent creative.
            </p>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
              His interests, however, extend beyond the web and he loves helping
              people with branding and print design. He even loves designing{" "}
              <span style={{ fontWeight: 600 }}>3D floor plans</span>.
            </p>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
              When he's not designing, he's probably hanging out with his
              girlfriend, watching series, sketching or messing around on
              something inspired by YouTube tutorials.
            </p>
            <hr
              style={{
                border: "1px solid currentColor",
                opacity: 0.2,
                margin: "2rem 0 1rem 0",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;