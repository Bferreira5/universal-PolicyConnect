# Policy Connect Divergent Prototype Q2 2019 ✌️

**⚠️Prototype Delivered and on hold.**

Product Mission: Efficient, timely & quality delivery of global contract & related documents with focus on automation & transparency.

**Video Tour:** https://fmglobal-my.sharepoint.com/:v:/p/benjamin_ferreira/Ea4bhGbIA9FMivqFawh9viYBkhehKk4zZ77cAGxdaEVRhw?e=vAvdk1

## Prototype Details

This prototype was built with responsive web components in mind. Using the existing Policy Connect workflow as a benchmark the prototype seeks to test ideas around unified activity history, editing policy details in browser, and effective navigation across a policy.

✋ Bellow are the epics captured in this design. Most are captured in the divergent prototype or are structured to support beyond the epic.

## This Prototypes covers these Epics:

Found Here:
https://fmglobal.visualstudio.com/WWInsTracker/GLIDER/_boards/board/t/GLIDER/Epics

### Epics + Features

1.  **Policy/Invoice Tracking**
    1. **See where invoice is at any time**
    2. **Policy & COR Status History:**
       -  As a Policy Connect User, I want to see policy status history and COR status history on respective Policy Details Page/COR page so that I can see the history of the statuses, who updated them and the date they were updated.
       -  Activity tracker should show each status, name of person who updated and date it was updated.
       -  The current status should be on top and all other statuses below in order of when they were updated. User selects "Show history" and then history appears w/ scrollable bar.
       -  When expanded, show "hide history"
    3. **Updated Policy Commenting - General Comments & Questions:**
       - As a PoCo user I want to be able leave a comment or ask a question in the Policy Details Page that connected to a Review.
       -  These comments are in addition to existing comments functionality, not replacing.
       -  Add comment -> button should always appear on page...

2.  **WRP Portal**
    1. **WRP Dashboard:** As a WRP Policy Connect user, I want to see a dashboard page co-branded with FM Global so that...
       - Given I am WRP Policy Connect user, When I access the dashboard, Then I see a top level banner of the FM Global logo
       - Given I am WRP Policy Connect user, When I access the dashboard, Then I see a second level banner of the Policy Connect logo and a placeholder for the WRP name
    2. **WRP Active Renewals:** As a WRP Policy Connect user, I want to see all my renewals that are currently in process (not completed). This should include policies which have been confirmed (regardless of effective. date) and/or policies which effective date has lapsed.
    3. **WRP View/update/confirm COR data:** As a WRP Policy Connect user, I want to confirm the renewal details (COR data) so that the renewal process can get started. This story includes ability for WRP to "Confirm with no changes" as well as make changes/updates (modify COR data) and then confirm. This story does not include the ability to upload quotes/docs to COR.
    4. **WRP COR Comments w/ attachments:** As a WRP Policy Connect user, I want to be able to add a comment regarding the COR data and/or upload an quote/attachment so that all the COR information resides in one place.
    5. **WRP Add Local Policy Numbers:** As a WRP user, I want to be able to add my policy number or numbers into Policy Connect to easily make the connection between FM Global's policy number and my policy number(s). One to many local policy numbers = one FM Global policy number.
    6. **WRP Review:** As a WRP user, I want to be able to review policy and invoice drafts and other package documentation when the policy and invoice drafts and package has been completed so that I can ensure compliance by either accepting or rejecting the drafts with relevant comments, and when accepted, issue the policy and upload the issued documents.
    7. **WRP Follow-Up Functionality**

3. **Policies Pending Issuing Office Review**
   1. **Policy State: Display of Policy Tracker:** As a user, I want to be able to see the current status of a policy, the previous status and if the policy is moving forward in the process or moving backwards due to an issue so that I can understand the take the appropriate actions.

4. **Invoice Workflow Tracker**
5. **Notifications**

### Feature

### User Stories

**WRP Dashboard:** As a WRP Policy Connect user, I want to see a dashboard page co-branded with FM Global so that... [Given I am WRP Policy Connect user, When I access the dashboard, Then I see a top level banner of the FM Global logo | Given I am WRP Policy Connect user, When I access the dashboard, Then I see a second level banner of the Policy Connect logo and a placeholder for the WRP name]


**Tabs**

As a Policy Connect user, I want an easier way to upload/download, view, and delete local documents so that I can see all the documents on one screen.

Replace current document upload capability with new UI.

Use mapping of icons to common file types (PDF, Word, Excel) - in teams from Efren

## OOUX

	→ [Page/Window 🖼️]
	→ [List 📔]
	→ [Tab 🏷️]
	→ [Label Group 🔠]

	→ [Document 📄]
	→ [Detail 🔖]
	→ [Action 💡]

	→ [Settings ⚙️]
	→ [Dashboard 🎛️]

#### Site Map

	Policy Connect

	┏━ Policy Connect Dashboard → [Page 🖼️] → [Dashboard 🎛️]
	┃	↳ Policy Card List → [List 📔]
	┃		↳ Policy Card  → [Document 📄]
	┃			↳ Policy Details → [Page 🖼️]
	┃				↳ Documents Download → [Document 📄]
	┃		↳ Confirmation of Renewal → [Page 🖼️]
	┃	↳ Invoice Details → [Page 🖼️]
	┃
	┣━ Notifications → [List 📔]
	┃	↳ Go to change → → [Action 💡]
	┃
	┃
	*Future State*
	┣━ FAQ / Help → [Page 🖼️]
	┃


	WRP Portal

	┏━ Police Connect WRP Dashboard → [Page 🖼️] → [Dashboard 🎛️]
	┃	↳ Policy Card List → [List 📔]
	┃		↳ Policy Card  → [Document 📄]
	┃			↳ Policy Details → [Page 🖼️]
	┃				↳ Documents Download → [Document 📄]
	┃		↳ Confirmation of Renewal → [Page 🖼️]
	┃	↳ Invoice Details → [Page 🖼️]
	┃
	┣━ Notifications → [List 📔]
	┃	↳ Go to change → → [Action 💡]
	┃
	┃
	*Future State*
	┣━ FAQ / Help → [Page 🖼️]
	┃


## Task Flow

**Flow** 1** – Policy Review & Status – All Users

	Login > Dashboard > Policy Details > [change status] [ leave comment] [upload file]

*Design Lead Notes on PO Request: You shared several different use cases involving scenarios where the status type would be changed based on trigger actions. Overall, the flow remains constant (user comes in, can leave a comment, upload/ download file, adjust status) so the interaction remains the same.*


**Flow 2** – Invoice Payment Tracking – WRP

	Login > Dashboard > Policy Details > Invoice > [full/ partial payment amount] [ leave comment]

*Design Lead Notes on PO Request: This flow is specific to the WRP role and relies on back-end connections to make sure all systems know full/partial payment has been made. I imagine insight around payment processing (transaction ID, date cleared, routing information, etc) would also be present.*

## Built with Universal Prototype Alpha

A system boilerplate built with Eleventy and tailwindCSS.

## Requirements

Node `>=` v8.9.0

## Installation

```
npm install
```

`cd` into your project folder and `npm run dev` which will start the development server and Gulp. Eleventy has browser hot reloading baked in and will watch all files for changes.

For those of you on Windows, [see Daniel Schildt's potential fix](https://github.com/josephdyer/skeleventy/issues/2#issuecomment-465754702) for the environment helper.

## Folder Structure

The `site` folder contains all the templates, pages and content which Eleventy will watch and compile into HTML for us.

A `globals` folder lives within this, where as the name suggests - globally available files live. There's a `site.json` file for general site stuff (name, author, email etc), `navigation.json` which we use as reference to loop over in our template to generate our nav and a `helpers.js` which just contains an environment helper.

Uncompiled SCSS and JS reside in the `resources` folder - Gulp will be watching these folders for any changes (you should restart the server when creating new partials).

When in development mode, Skeleventy will use `main.css` as the stylesheet. This will be pretty chunky in filesize, due to it containing all of Tailwind's utility classes. Once you run the build command ready for deployment, Skeleventy will then reference the minified version of the stylesheet `main.min.css`.

Purge will also run via the build command and will cross reference all of Tailwind's utility classes with your templates/HTML and will remove all the unused ones - pretty cool right?

## Ready to deploy?

`npm run build` to minify scripts and run Purgecss over your styles.

Feel free to adapt this as you wish! Go build some cool stuff and put it on Netlify - seriously it's the future! :)
