import React from "react";
import { ContactForm, ContactTitle, ContactWrapper } from "./Contact.style";

const Contact = () => {
  return (
    <ContactWrapper className="container">
      <ContactTitle>
        <h2>Contact Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </ContactTitle>

      <ContactForm>
        <form>
          <div class="form-row">
            <div class="form-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div class="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your Email" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Subject</label>
              <input type="text" placeholder="Provide context" />
            </div>
            <div class="form-group">
              <label>Subject</label>
              <input type="text" placeholder="Select Subject" />
            </div>
          </div>

          <div class="form-group full-width">
            <label>Message</label>
            <textarea placeholder="Write your question here"></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </ContactForm>
    </ContactWrapper>
  );
};

export default Contact;
