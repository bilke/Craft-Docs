Secure Payments: Purchasing Packages
===================

We’ve ensured that purchasing packages within Craft is as secure as possible, even if you’re accessing Craft over a non-secure connection.

To help ease any concerns, here’s exactly what happens when you click ‘Purchase’:

#. Javascript passes your credit card info to Stripe over SSL in exchange for a secure, single-use token using `Stripe.js <https://stripe.com/docs/stripe.js>`_
#. Javascript then passes the credit card token, the package you’d like to purchase, and the amount you’re expecting to pay for it, back to your Craft install.
#. Your Craft install takes everything passed to it in Step 2, as well as your license key, and passes it all off to our web service over SSL.
#. Our web service verifies that it was passed a valid Craft license, a valid package ID, the correct price for the package, and that the package is not already associated with the given license.
#. If everything checks out, our web service sends a request to Stripe over SSL to charge the credit card represented by the token for the amount of the package.
#. If Stripe says that the charge was a success, the package is added to the license.
#. Our web service responds to Craft with the result of the transaction, or any validation errors that may have occurred.
#. Craft passes the response back to Javascript, which updates the UI accordingly.
