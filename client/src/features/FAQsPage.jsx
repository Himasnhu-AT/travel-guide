import React from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const FAQsPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">FAQs (Frequently Asked Questions)</h1>
      <Collapse accordion>
        <Panel header="General Questions" key="1" className="mb-4">
          <ul className="list-disc pl-6">
            <li className="mb-4"><strong>Question 1:</strong> What are the accepted payment methods?</li>
            <p className="ml-6"><strong>Answer:</strong> We accept payments via credit/debit cards and PayPal.</p>
            <li className="mb-4"><strong>Question 2:</strong> Is there a minimum age requirement for booking accommodations?</li>
            <p className="ml-6"><strong>Answer:</strong> The minimum age requirement for booking accommodations varies depending on the property. Please check the property's terms and conditions for more information.</p>
            <li className="mb-4"><strong>Question 3:</strong> Can I cancel my booking for free?</li>
            <p className="ml-6"><strong>Answer:</strong> Cancellation policies vary depending on the accommodation provider and the type of booking. Please refer to the booking confirmation or contact our customer support for assistance.</p>
            <li className="mb-4"><strong>Question 4:</strong> Are pets allowed in the accommodations?</li>
            <p className="ml-6"><strong>Answer:</strong> Pet policies vary by property. Some accommodations may allow pets with additional fees, while others may have restrictions. Please check the property's pet policy before booking.</p>
            <li className="mb-4"><strong>Question 5:</strong> How can I modify my booking?</li>
            <p className="ml-6"><strong>Answer:</strong> You can usually modify your booking through your account dashboard or by contacting our customer support. Modification policies vary by provider.</p>
          </ul>
        </Panel>
        <Panel header="Account and Booking" key="2" className="mb-4">
          <ul className="list-disc pl-6">
            <li className="mb-4"><strong>Question 6:</strong> Can I book accommodations without creating an account?</li>
            <p className="ml-6"><strong>Answer:</strong> Yes, you can browse available accommodations without creating an account. However, you'll need to create an account to complete a booking.</p>
            <li className="mb-4"><strong>Question 7:</strong> How do I reset my password?</li>
            <p className="ml-6"><strong>Answer:</strong> You can reset your password by clicking on the "Forgot Password" link on the login page and following the instructions provided.</p>
            <li className="mb-4"><strong>Question 8:</strong> Can I use multiple payment methods for a single booking?</li>
            <p className="ml-6"><strong>Answer:</strong> Unfortunately, we currently only support single-payment method bookings. You'll need to use a single payment method for each booking.</p>
            <li className="mb-4"><strong>Question 9:</strong> Are there any hidden fees?</li>
            <p className="ml-6"><strong>Answer:</strong> We strive to be transparent about all fees associated with your booking. Any additional fees, such as taxes or service charges, will be clearly displayed before you confirm your booking.</p>
            <li className="mb-4"><strong>Question 10:</strong> How can I request special accommodations?</li>
            <p className="ml-6"><strong>Answer:</strong> You can usually specify any special requests or accommodations during the booking process. Additionally, you can contact our customer support to discuss your specific needs.</p>
          </ul>
        </Panel>
      </Collapse>
    </div>
  );
}

export default FAQsPage;
