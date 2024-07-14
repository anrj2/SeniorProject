// src/components/ReturnPolicy.js
import React from 'react';
import './ReturnPolicy.css';

const ReturnPolicy = () => (
  <div className="return-policy">
    <h1>Return Policy</h1>
    <div className="return-content">
      <h2>Returns</h2>
      <p>Our policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange.</p>
      <p>To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.</p>

      <h2>Damaged Goods</h2>
      <p>If your product arrives damaged, please reply to your order confirmation email with pictures of your damaged goods and we will replace the damaged item(s).</p>
      <p>To complete your return, we require a receipt or proof of purchase.</p>

      <h2>Refunds (if applicable)</h2>
      <p>Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.</p>
      <p>If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within 7 business days.</p>

      <h2>Late or Missing Refunds (if applicable)</h2>
      <p>If you haven’t received a refund yet, first check your bank account again.</p>
      <p>Then contact your credit card company, it may take some time before your refund is officially posted.</p>
      <p>Next contact your bank. There is often some processing time before a refund is posted.</p>
      <p>If you’ve done all of this and you still have not received your refund yet, please contact us at <a href="mailto:mrjoehotsauce@gmail.com">mrjoehotsauce@gmail.com</a>.</p>

      <h2>Sale Items (if applicable)</h2>
      <p>Only regular priced items may be refunded, unfortunately sale items cannot be refunded.</p>

      <h2>Exchanges (if applicable)</h2>
      <p>We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at <a href="mailto:mrjoehotsauce@gmail.com">mrjoehotsauce@gmail.com</a> and send your item to: P.O. BOX 357 Green River, Wyoming US 82935.</p>

      <h2>Shipping</h2>
      <p>To return your product, you should mail your product to:</p>
      <p>P.O. BOX 357<br />Green River, WY 82935</p>
      <p>You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.</p>
      <p>Depending on where you live, the time it may take for your exchanged product to reach you, may vary.</p>
      <p>If you are shipping an item over $75, you should consider using a trackable shipping service or purchasing shipping insurance. We don’t guarantee that we will receive your returned item.</p>
    </div>
  </div>
);

export default ReturnPolicy;
