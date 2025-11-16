import React from 'react'

export default function Contact() {
  return (
    <section className="contact" style={{ padding: '40px 20px', textAlign: 'center' }}>
      <h2>Contact Us</h2>
      <p>Email us at <a href="mailto:hello@velvetandoak.com">hello@velvetandoak.com</a></p>
      <iframe
        title="store map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15652.183875032992!2d75.75799435541994!3d11.258028800000009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65930943cf391%3A0x226eb839a91b6f3a!2sHoH%20*21%20Boutique!5e0!3m2!1sen!2sin!4v1763056082246!5m2!1sen!2sin"
        width="60%"
        height="300"
        style={{ border: 0, borderRadius: '8px', marginTop: '20px' }}
        loading="lazy"
      ></iframe>
    </section>
  )
}
