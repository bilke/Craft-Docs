Sections
====================

A section is a way to store content in Craft.  Setting up a section is easy:

* Log in to your Craft dashboard
* Click Settings
* Click Sections
* Click New Section (nb: Craft Core permits only one section! *Publish Pro*  is required to create more than one section)

From here you will need to fill out a form with the details for your new section.

There are four required settings:

* Name: What your section will be called in the CP
* Handle: How you'll refer to this section in your templates
* "Title" Label: What do you want the entries "Title" field to be labelled?  This is a required field for all entries.
* Entry URL Format: What the entry URLs should look like. {slug} is required, but it can also include any entry properties, e.g. {postDate.year}.  This can be set per locale.

There are two optional settings:

* Locales: Which locales should this section be enabled for? (requires the Localize package)
* Entry Template: The teplate to use when an entry's URL is requested

By default your section will not include any fields.  You can click the "Field Layout" tab to set up what fields will show up on your entry form.  On the Field Layout page, drag your fields from the Default box to your tab.  You may also drag the entire group to a tab to bring over all of your fields.

