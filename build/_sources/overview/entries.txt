Entries
=======

Entries belong to :doc:`sections <sections>`. They contain the following properties:

* Title
* Slug (if the section is set to give entries their own URLs)
* Author (if the Users package is installed)
* Post Date
* Expiration Date
* Tags
* Status

Entries also get whatever :doc:`content blocks <blocks>` were defined for their section.

To create a new entry, go to Content, and click the “New Entry” button. If you only have one section, that will immediately take you to the entry edit page. Otherwise you’ll get a drop-down menu where you can choose which section you’d like to create a new entry in.

If an entry’s section is set to give entries their own URLs, you will be able to access it directly by pointing your browser to the entry’s URL. You can determine that URL by looking at the section’s Entry URL Format setting, and replacing “``{slug}``” with the entry’s slug. (Blocks also provides a handy link to your entry from the Content index.)

When a request comes in that matches an entry’s URL, that entry’s section’s template gets loaded up, and an ``entry`` variable is made available to it. That variable will give you access to all of the entry’s info, succh as ``entry.title``, ``entry.someBlockHandle``, etc.. (See :doc:`/templating/reference/variables/blx.entries`)


Entry Statuses
--------------

By default, ``blx.entries`` will only return live entries. For an entry to be considered live, it must pass the following conditions:

* It must be enabled
* It must have a Post Date that is set in the past
* It must either have no Expiration Date set, or one that is set in the future.

You can customize all three of those settings from the entry’s Settings tab. Note that without any tinkering, new entries **will** be saved as live.


Entry Drafts (Publish Pro only)
-------------------------------

Once an entry has been published, you can continue working on it in private by creating a new **draft**. To do so, simply click the “Save as Draft” button next to the “Save” button at the bottom of the entry’s edit form. A new draft will get saved based on the current state of the entry’s edit form.

You can switch between working on the “current” version of your entry and its drafts by clicking on the revision menu button at the top-right of the entry edit page.

To publish your draft, click the “Publish Draft” button beside the “Save Draft” button at the bottom of the edit form.

Note that all of an entry’s settings – not just its content – are part of the draft. So if you change an entry’s Post Date from within a draft, that change won’t take effect until the draft has been published.


Entry Versions (Publish Pro only)
---------------------------------

Each time an entry is saved, a new version gets created. You can view past versions by clicking on the revision menu button at the top-right of the entry edit page. You can’t *edit* past versions, however.
