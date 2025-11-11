import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [message, setMessage] = useState("");

  return (
    <section className="contact-section">
      <h2 className="contact-title">Contact Me</h2>

      <div className="contact-info">
        <p><strong>Name:</strong> Kishan Kumar Kannaujiya</p>
        <p><strong>Email:</strong> kishank13857@gmail.com</p>
        <p><strong>Mobile:</strong> +91 9559717200</p>
      </div>

      <form className="contact-form">
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="4"
        />
        <button type="button">Send (Disabled)</button>
      </form>
    </section>
  );
}
