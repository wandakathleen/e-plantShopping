import React from "react";

function AboutUs() {
  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "10px auto",
        backgroundColor: "#c6c6c6",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 15px 35px rgba(27, 67, 50, 0.06)",
        fontFamily: "'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* Top Banner Image */}
      <div style={{ width: "100%", height: "150px", overflow: "hidden" }}>
        <img
          src="https://plus.unsplash.com/premium_photo-1679429383405-de11c569e905?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://unsplash.com"
          alt="Botanical Banner"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Main Text Content Wrapper */}
      <div style={{ padding: "28px 40px", textAlign: "center" }}>
        <h3
          style={{
            fontSize: "20px",
            fontWeight: "800",
            color: "#1b4332",
            marginBottom: "10px",
          }}
        >
          About Paradise Nursery
        </h3>

        <div style={{ color: "#1b4332", fontSize: "14px", lineHeight: "1.8" }}>
          <p style={{ marginBottom: "16px" }}>
            At Paradise Nursery, we believe that bringing nature into your
            living and workspace enriches your life, cleanses your air, and
            elevates your overall well-being. Founded by plant enthusiasts, our
            nursery cultivates healthy, vibrant house plants curated to fit
            every interior aesthetic.
          </p>
          <p style={{ marginBottom: "0" }}>
            Whether you are seeking robust air-purifying foliage, soothing
            aromatic herbs, or natural medicinal varieties, our team provides
            carefully nurtured plants accompanied by expert care advice.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
