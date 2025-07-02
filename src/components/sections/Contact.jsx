import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-contnet: center;
  position: rlative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 16px;
`;

const ContactTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 0 0 12px;
`;

const ContactInput = styled.input`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  width: 100%;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  resize: vertical;
  min-height: 120px;
  width: 100%;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.button`
  width: 100%;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: hsla(271, 100%, 60%, 1);
  }
`;



const Contact = () => {
  const form = useRef();
  // const handelSubmit = (e) => {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm(
  //       "service_tox7kqs",
  //       "template_nv7k7mj",
  //       form.current,
  //       "SybVGsYS52j2TfLbi"
  //     )
  //     .then(
  //       (result) => {
  //         alert("Message Sent");
  //         form.current.result();
  //       },
  //       (error) => {
  //         alert(error);
  //       }
  //     );
  // };

 const handleSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(form.current);
  const email = formData.get("from_email");
  const name = formData.get("from_name");
  const subject = formData.get("subject");
  const message = formData.get("message");

  if (!email || !name || !subject || !message) {
    alert("Please fill all the fields");
    return;
  }

  const phoneNumber = "918149730996";

  const whatsappMessage = `Hello, I got a new contact request:\n\nEmail: ${email}\nName: ${name}\nSubject: ${subject}\nMessage: ${message}`;

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(whatsappURL, "_blank");
  // Form clear karne ke liye
  form.current.reset();
};



  return (
    <Container id="Education">
      <Wrapper>
        <Title>Contact</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          {/* Feel free to reach out to me for any questions or opportunities! */}
        </Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Send Me 🚀</ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" />
          <ContactInput placeholder="Your Name" name="from_name" />
          <ContactInput placeholder="Subject" name="subject" />
          <ContactInputMessage placeholder="Message" name="message" rows={4} />
          {/* <ContactButton type="submit" value="Send" /> */}
          <ContactButton type="submit">Send</ContactButton>
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;
