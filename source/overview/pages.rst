Pages
=====

For any one-off webpage on your site, with its own unique content requirements, you can create a **page**. Each page has its own title, URI, template, and :doc:`content blocks <blocks>`.

To create a page, go to Content, click on the Pages tab, and then click on the “New Page” button. Give your page a unique title and URI, and specify which template Blocks should load when an incoming request’s URI matches this page’s.

**Note:** While the URI setting is required, you may have one single page set up with a blank URI. If you do, this page will get loaded when there is no URI (it will become your homepage).

Once you’ve saved your page, you can begin adding content blocks to it, and filling in the content.

When you access a page’s URI in your browser, the page’s specified template will get loaded, and a ``page`` variable will be available to it. From that variable you can access your page’s title via ``page.title``, and your content blocks are accessible via their handles (i.e. ``page.description``).
