import React from 'react';

const ContactUsPage = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="p-8 max-w-md">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="mb-4">Have questions or feedback? We'd love to hear from you!</p>
        <ul className="list-disc ml-6">
          <li className="mb-2"><strong>Email:</strong> <a href="mailto:contact@example.com" className="text-blue-500">contact@example.com</a></li>
          <li className="mb-2"><strong>Phone:</strong> <a href="tel:+1234567890" className="text-blue-500">+123-456-7890</a></li>
          <li className="mb-2"><strong>Social Media:</strong> 
            <ul className="list-disc ml-6">
              <li><a href="https://www.facebook.com/example" className="text-blue-500" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://twitter.com/example" className="text-blue-500" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://www.instagram.com/example" className="text-blue-500" target="_blank" rel="noopener noreferrer">Instagram</a></li>
             
            </ul>
          </li>
          <li className="mb-2"><strong>Address:</strong> 123 Main Street, City, Country</li>
          <li className="mb-2"><strong>Live Chat:</strong> <a href="#" className="text-blue-500">Chat Now</a></li>
         
        </ul>
      </div>
    </div>
  );
}

export default ContactUsPage;
