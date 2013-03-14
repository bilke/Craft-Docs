How Licensing Works
===================

We’ve put quite a bit of thought into both the terms of Craft licensing and how to enforce it without inconveniencing anyone. We think we’ve come up with a fair solution that should meet most sites’ needs.


The Terms
---------

Each Craft license may be used on one public domain, and unlimited non-public domains. Subdomains are included, so a single Craft license will cover both http://example.com and http://subdomain.example.com.

When you buy a package in Craft, that package gets associated with the license Craft is currently using.

.. container:: tip

   **Don’t worry!** We will never disable or alter any app functionality in the event of a license/package conflict. The worst that will happen is you’ll get an alert at the top of each page of the CP identifying any apparent issues.


License Creation
----------------

Craft begins its life without a license key. It doesn’t get one until you have finished installing it and it has made its first call to our web service to check for updates. Our web service will detect that the request was not accompanied by a license key, so it will create one and include it in its response. Craft will then save its new license key in craft/config/license.key.


Single Domain Enforcement
-------------------------

Each time Craft sends a request to our web service, our web service checks which domain it’s coming from. The first time it appears that Craft is being used on a public domain, the license is tied to that domain. (This can happen as early as the same request where the license gets created.) On subsequent requests, the web service will ensure that Craft is still being accessed via the same domain.

In the event that a Craft license is being used on a new public domain, our web service will tell Craft about that in its response, at which point Admin users will begin to see an alert at the top of the CP telling them that Craft isn’t licensed to be run on the current domain. If the current user is an admin, they will have the option to transfer the license to the current domain. (If the license is still in use on the original domain, then the original domain will start getting the same alert.)

How do we determine Craft is running on a public domain?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Our web service checks the following when determining if a domain is public. If any of these checks pass, we determine that the domain is **not** public:

#. Does it only consist of one segment (e.g. “localhost”)?
#. Is it an IP address?
#. Does it have a port, and is it something besides 80 or 443?
#. Does it have a dev-sounding subdomain (e.g. ‘dev’, ‘local’, ‘loc’, ‘test’, ‘testing’, ‘stage’, or ‘staging’)?
#. Does it have a non-standard TLD?


Package Enforcement
-------------------

Each call to Craft’s web service is also accompanied by a list of the currently-installed packages. We compare that list to our records and determine if any of them are not supposed to be running on the current Craft license. A list of any unlicensed-yet-installed packages is included in the response, and Craft will begin displaying alerts in the CP about it. If the current user is an Admin, the alert is accompanied by a link to Settings → Packages, where the unlicensed package may either be purchased or uninstalled.
