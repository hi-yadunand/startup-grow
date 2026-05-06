"use client";

import { useState } from "react";
import { createServiceRequest } from "@/lib/api";

export default function ContactPage() {
  const [form, setForm] = useState({
    startupName: "",
    founderName: "",
    email: "",
    phone: "",
    city: "",
    stage: "Idea stage",
    service: "Web Design & Development",
    budget: "Below Rs. 25,000",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");
    try {
      await createServiceRequest(form);
      setStatus("Success! Your request has been sent to our dashboard.");
      setForm({
        startupName: "",
        founderName: "",
        email: "",
        phone: "",
        city: "",
        stage: "Idea stage",
        service: "Web Design & Development",
        budget: "Below Rs. 25,000",
        message: ""
      });
    } catch (err) {
      setStatus("Error: Could not send request. " + err.message);
    }
  };

  return (
    <>
      <section className="hero-area">
        <div className="container">
          <div className="hero-area-inner">
            <div className="section-content">
              <div className="section-title-wrapper">
                <div className="title-wrapper">
                  <h1 className="section-title large has_fade_anim">
                    Ready to grow? <br />
                    Let's talk <br />
                    business!
                  </h1>
                </div>
              </div>
              <div className="content-last">
                <div className="col-first">
                  <div className="contact-box">
                    <div className="shape-1"><img src="/assets/imgs/shape/img-s-89.webp" alt="shape" /></div>
                    <span className="title">Direct contact: </span>
                    <p className="link"><a href="mailto:contact@startupgrow.com">contact@startupgrow.com</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-area">
        <div className="container">
          <div className="contact-area-inner section-spacing">
            <div className="section-header">
              <div className="section-title-wrapper">
                <div className="title-wrapper">
                  <h2 className="section-title large has_fade_anim">We’ve been waiting for you!</h2>
                </div>
              </div>
              <div className="text-wrapper">
                <p className="text has_fade_anim">Submit your project details and let StartupGrow help you overcome the challenges of building an online presence.</p>
              </div>
            </div>
            <div className="section-content">
              <div className="info-box has_fade_anim">
                <div className="text-wrapper">
                  <p className="text">We want to hear from you. Let us know how we can help!</p>
                </div>
                <ul className="contact-list">
                  <li><a href="#">+91 98765 43210</a></li>
                  <li><a href="#">contact@startupgrow.com</a></li>
                  <li>Kochi, Kerala <br />India</li>
                </ul>
              </div>
              <div className="contact-wrap has_fade_anim" data-delay="0.30">
                <form onSubmit={handleSubmit}>
                  <div className="contact-formwrap" style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                    <div className="contact-formfield" style={{ flex: "1 1 45%" }}>
                      <input required type="text" name="startupName" value={form.startupName} onChange={handleChange} placeholder="Startup Name*" />
                    </div>
                    <div className="contact-formfield" style={{ flex: "1 1 45%" }}>
                      <input required type="text" name="founderName" value={form.founderName} onChange={handleChange} placeholder="Founder Name*" />
                    </div>
                    <div className="contact-formfield" style={{ flex: "1 1 45%" }}>
                      <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email*" />
                    </div>
                    <div className="contact-formfield" style={{ flex: "1 1 45%" }}>
                      <input required type="text" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone*" />
                    </div>
                    <div className="contact-formfield" style={{ flex: "1 1 45%" }}>
                      <input required type="text" name="city" value={form.city} onChange={handleChange} placeholder="City*" />
                    </div>
                    <div className="contact-formfield" style={{ flex: "1 1 45%" }}>
                      <select name="stage" value={form.stage} onChange={handleChange} style={{ width: "100%", padding: "15px 0", background: "transparent", border: "none", borderBottom: "1px solid rgba(255,255,255,0.2)", color: "#999", outline: "none" }}>
                        <option value="Idea stage">Idea stage</option>
                        <option value="MVP launched">MVP launched</option>
                        <option value="Early customers">Early customers</option>
                        <option value="Scaling">Scaling</option>
                      </select>
                    </div>
                    <div className="contact-formfield" style={{ flex: "1 1 45%" }}>
                      <select name="service" value={form.service} onChange={handleChange} style={{ width: "100%", padding: "15px 0", background: "transparent", border: "none", borderBottom: "1px solid rgba(255,255,255,0.2)", color: "#999", outline: "none" }}>
                        <option value="SEO">SEO</option>
                        <option value="PPC Advertising">PPC Advertising</option>
                        <option value="Social Media Marketing">Social Media Marketing</option>
                        <option value="Content Marketing">Content Marketing</option>
                        <option value="Email Marketing">Email Marketing</option>
                        <option value="Web Design & Development">Web Design & Development</option>
                      </select>
                    </div>
                    <div className="contact-formfield" style={{ flex: "1 1 45%" }}>
                      <select name="budget" value={form.budget} onChange={handleChange} style={{ width: "100%", padding: "15px 0", background: "transparent", border: "none", borderBottom: "1px solid rgba(255,255,255,0.2)", color: "#999", outline: "none" }}>
                        <option value="Below Rs. 25,000">Below Rs. 25,000</option>
                        <option value="Rs. 25,000 - Rs. 50,000">Rs. 25,000 - Rs. 50,000</option>
                        <option value="Rs. 50,000 - Rs. 1,00,000">Rs. 50,000 - Rs. 1,00,000</option>
                        <option value="Above Rs. 1,00,000">Above Rs. 1,00,000</option>
                      </select>
                    </div>
                    <div className="contact-formfield messages" style={{ flex: "1 1 100%" }}>
                      <input required type="text" name="message" value={form.message} onChange={handleChange} placeholder="Project Goal/Messages*" />
                    </div>
                  </div>
                  {status && <p style={{ marginTop: "20px", color: status.includes("Error") ? "#ff4a4a" : "#4aff4a", fontWeight: "bold" }}>{status}</p>}
                  <div className="submit-btn" style={{ marginTop: "30px" }}>
                    <button type="submit" className="wc-btn wc-btn-primary btn-text-flip">
                      <span data-text="Send Request">Send Request</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
