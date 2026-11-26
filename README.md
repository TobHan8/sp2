# Semester Project 2 - Bid Bud

This is the code repository for the exam in the first semester of year 2 in Frontend Development studies at Noroff School of Technology and Media.
The students are tasked with planning, designing, developing, deploying, testing and documenting a fictional auction house application, with user login, profiles, listing and bidding system.
The exam period started 09.11.2026 and ends 14.12.2026 (5 weeks full-time). Students only have this time period to work on and complete the project.

- **GitHub projects link:** https://github.com/users/TobHan8/projects/6
- **Figma links:** [Mobile design project](https://www.figma.com/design/e2wLcL6lIekiEER5QAH8uT/Mobile?node-id=0-1&t=7ISfTNcZnJfHrQ5h-1), [Desktop design project](https://www.figma.com/design/SGqklLtzbwlIJObWcNgcp1/Desktop?node-id=0-1&t=mgKq6WLa1lvNZF7v-1), [Mobile prototype](https://www.figma.com/proto/e2wLcL6lIekiEER5QAH8uT/Mobile?node-id=114-802&viewport=999%2C51%2C0.13&t=ueD0MBil6qoO77ki-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=114%3A802&page-id=0%3A1), [Desktop prototype](https://www.figma.com/proto/SGqklLtzbwlIJObWcNgcp1/Desktop?node-id=177-1404&viewport=-1843%2C504%2C0.34&t=YOePR8IFD41vgQCf-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=177%3A1404&page-id=0%3A1)

## Technologies

- Vanilla TypeScript
- HTML
- Sass (SCSS)
- Bootstrap configured with Sass
- Figma (design and prototyping)
- [Noroff API v2](https://docs.noroff.dev/docs/v2): [Auction House listings](https://docs.noroff.dev/docs/v2/auction-house/listings), [Auction House profiles](https://docs.noroff.dev/docs/v2/auction-house/profiles), [Register](https://docs.noroff.dev/docs/v2/auth/register) and [Login](https://docs.noroff.dev/docs/v2/auth/login) endpoints
- GitHub Pages (hosting)
- GitHub Projects (planning and organizing tool)
- Husky (pre-commit hooks)
- Lint-staged (pre-commit hooks)
- ESLint
- Prettier
- Vite (build tool)
- Vitest (unit tests)
- Playwright (e2e tests)
- Web components (Custom Elements)

## Getting started

## Prerequisities

## Running the project

This is a fictional auction and profile platform for educational purposes. No real users or personal data should be tied to this project.

### Generating API-key

To run this project yourself, you will need an API-key from the Noroff API v2.0. This is how to generate one:

1. Go to [API Key Tool from Version 2 (v2) of the Noroff API](https://docs.noroff.dev/docs/v2/auth/api-key#api-key-tool). You might have to scroll down to find the section.

2. Register an account. This will not create a real Noroff school account, but an account that can only interact with the v2.0 API endpoints. Make sure you don't use any real information or passwords when registering an account. The email can be anything, as long as it ends with '@stud.noroff.no'. I like to just mash random keys when creating new accounts.

Example of registration data:
- Username: dwafafa
- Email: dwafafa@stud.noroff.no
- Password: 12345678

3. Log in with the account to generate your key.

### Using the API-Key

1. Copy the .env.example file and paste it on the root level of the project (same level as .env.example). Rename the copied file to .env

2. Paste your newly generated API-key behind the variable: VITE_NOROFF_API_KEY=Paste-Your-API-Key-Here

3. If Vite is already running you will need to restart the server before the API_Key can be read. Close the terminal running the Vite server and open a new terminal. You can also press CTRL + C. Then run this command to start the server again: 
```bash
npm run dev
``` 



## Assignment brief

<details>
<summary>Brief and instructions copied from Noroff's Moodle platform</summary>

### Goal of the assignment

Develop a front-end application for our online auction API that allows users to register, list items for bidding, and participate in auctions seamlessly. Candidates must demonstrate their ability to plan, develop and document a dynamic, interactive solution for a specific target group. The back-end API will be provided, and you or your team is responsible for implementing a high-quality front-end that integrates with it.

### Learning outcomes

Upon successful completion, you will demonstrate your ability to:

- Assess your own work and the finished product in relation to the assignment description and guidelines for universal design in digital solutions.
- Identify opportunities for development in planning and designing digital solutions.
- Explain vocational choices for tools, methods, and techniques for planning, developing, and designing digital solutions.
- Explain the choice of relevant regulations and guidelines for universal design of digital solutions.
- Reflect on your own creative and technical practices as a front-end developer and adjust them under supervision.
- Find and refer to information related to the project, and assess its relevance.
- Plan and develop digital solutions alone, in accordance with ethical requirements and principles of universal design.
- Can carry out the individual development of digital solutions to meet the needs of selected target groups.

### Instructions

#### Description

Create a student-only auction web application where registered users can create listings, manage their profiles, and place bids using virtual credits. Visitors can browse and search listings, while full participation in the auction process requires an account with a `@stud.noroff.no` email address.

#### Technical Requirements

You must follow the tech stack exactly unless the brief states otherwise.

- Language/Framework:
  - TypeScript or Vanilla JavaScript.
  - No Front-end Frameworks such as Vue, React, Nuxt.js or Next.js are permitted in this assignment
- CSS frameworks (choose one):
  - Bootstrap (version 5 or higher)
  - Tailwind (version 3 or higher)
- Prototyping tool: Figma or Adobe XD
- Hosting services: GitHub Pages, Netlify, Vercel
- Planning tools: Trello, GitHub Projects
- API:
  - [Version 2 (v2) of the Noroff API](https://docs.noroff.dev/docs/v2)
  - [Auction House API](https://docs.noroff.dev/docs/v2/auction-house/listings)
  - [Endpoints for authentication and authorisation](https://docs.noroff.dev/docs/v2/auth/register)

#### Steps to follow

1. Create a GitHub repository and deploy your code.
2. Create a Kanban plan in Trello or GitHub Projects.
3. Create a Figma style guide (logo, fonts, colour palette, common components).
4. Create desktop and mobile prototypes in Figma.
5. Use your plan and design documents to complete the user stories.
6. Manually test each user story.
7. Validate with online tools if required.
8. Deploy the final application.
9. Submit required links.

#### User Stories

- **Registered user:** A user who has created an account and is logged in.
- **Unregistered user (Visitor):** A user who has not registered or logged in.

**All Users**

- Browse listings without logging in.
- Search through available listings.
- Filter listings by keywords, categories, or other relevant attributes.
- View a single listing, including its details and bid history.

**Registered Users**

- Account access:
  - Register with an email ending in `@stud.noroff.no`
  - Log in securely
  - Log out
  - Access authenticated features
- Profile management:
  - Edit and update profile bio
  - Edit and update a custom avatar
  - Edit and update a custom banner
  - View profile page showing:
    - Listings they created
    - Listings they have bid on
- Credits:
  - View total credits (available funds for bidding)
  - See credit balance on every page while logged in
- Listings:
  - Create a listing with:
    - Title
    - Deadline date
    - Media gallery (images)
    - Description
  - Update listings they created
  - Delete listings they created
- Bidding:
  - Place bids on another user's listing
  - View bid history on each listing

**Unregistered Users (Visitors)**

- Browse available listings
- Search through listings
- View a single listing
- Restrictions:
  - Cannot register unless they have an email ending in `@stud.noroff.no`
  - Cannot log in
  - Cannot create listings
  - Cannot place bids
  - Cannot view or manage a personal profile or credits

#### Design and User Experience Expectations

- The interface should be modern, clean, and responsive across all devices.
- Navigation should allow users to move smoothly between browsing listings, placing bids, and managing their profiles.
- Accessibility and usability are top priorities.
- The design must include high-fidelity prototypes for both desktop and mobile screen sizes.
- The design must be interactive and enable users to follow a seamless, positive flow. It should represent the final product, including colours and web-optimised images.

#### Working in Groups

You may work in groups of up to three students. One student creates the repository and invites the others as collaborators.

The following rules apply:

- A student may only work in one group.
- Each team member must write their own report.
- The group must use branches, pull requests, and a review process before merging code.

### Resources

The brief includes videos that show the steps needed to complete the assessment:

- **Front-end Application:** This video demonstrates the front-end application.
- **User Login and Registration:** This video walks through the first part of the process: user registration, login, and logout. It shows how the application stores the user profile and access token in local storage after a successful login. This step forms the foundation for the rest of the assessment.
- **Updating User Profile:** This video covers the next step for a logged-in user: updating profile details. It shows how to change the avatar, banner, and bio to create a more personalised profile.
- **Listing Management:** This video shows the next steps for a logged-in user: creating, updating, and deleting a listing. It also demonstrates how a listing appears to users who are logged out.
- **Update Listing Calendar:** This video shows the steps completed for updating the listing calendar.
- **Bidding Process:** This video demonstrates the bidding process. It shows a logged-in user placing bids, how those bids appear on a listing, and how the user can view their bids on their profile page. It also shows that users cannot bid on their own listings and that logged-out users must log in before placing a bid.

### Grading Criteria

The Semester Project 2 will be graded "A to F":

| Grade | Meaning |
|---|---|
| F | 0-39: Failed the course and have to do a Resit. |
| E | 40-49 |
| D | 50-59 |
| C | 60-79 |
| B | 80-89 |
| A | 90-100 |

**Functionality and Requirements Fulfilment**

- The project meets all specified user requirements (e.g., registration, login, listing creation, bidding, etc.).
- Core functionalities are implemented correctly and work without major issues.
- The integration with the back-end API is smooth and functions as intended.

**User Experience and Design**

- The interface is visually appealing, consistent, and follows modern UI/UX principles.
- The platform is intuitive, with clear navigation and seamless user interactions.
- Accessibility best practices (universal design principles) are applied.

**Code Quality and Best Practices**

- Code is well-structured, readable, and adheres to best practices.
- Proper use of modern development techniques and frameworks.
- Code is efficient and free of minor and major bugs.

**Documentation and Process Explanation**

- A clear, well-structured report detailing the development process, design choices, and technical decisions.
- Explanation of how challenges were addressed and solutions implemented.

**Project Management and Independence**

- The student demonstrates effective time management and planning.

**Innovation and Creativity**

- The project includes unique features or enhancements beyond the minimum requirements.
- Creative solutions to improve the user experience or functionality are implemented.

**Written Reflection**

- Demonstrated clear and critical reflection on the project process.
- Identified what worked well and what did not, explained causes of challenges, and described how issues were addressed.
- Showed evidence of learning by explaining how existing skills were adapted or improved and how this learning would inform future work.
- Reflections are specific, honest, and supported with concrete examples from the project.

### Deliverables and Submission

Submit the following in the file submission section of the assignment submission on Moodle:

- Written reflection. A 500 to 1000-word reflection on the project process that includes:
  - How you managed the project.
  - What worked well during the project.
  - Challenges encountered and how they were addressed.
  - How you adapted existing skills to new tools, frameworks, or ways of working.
  - You may include additional screenshots of the topic being addressed.

**Naming your reflection**

Use the following naming convention for the PDF: `FName_LName_SP2_ClassXXYY.pdf`

- Replace "Class" with the month in which you started studying: Jan, March, Aug or Oct
- Replace "XX" with your class year, e.g. 24, 25, 26
- Replace "YY" with either FT if you are a full-time student, or PT if you are a part-time student

Example:

- John Doe began studying full-time in August 2025. John's submission will be named: `JOHN_DOE_SP2_AUG25FT.pdf`
- Jane Doe began studying part-time in January 2026. Jane's submission will be named: `JANE_DOE_SP2_JAN26PT.pdf`

Paste the following in the online text section of the assignment submission on Moodle:

- The link to your GitHub repository containing all source code in the default branch (main/master).
- The link to your deployed front-end application.
- The link to your Figma style guide and design. Alternatively, you can submit a PDF document titled "Student Name - Figma design", which contains boards of all of the views in your design.
- The link to the Project Software (i.e., the Kanban board and Gantt chart) you used. Alternatively, you can submit a PDF document titled "Student Name - Project Management" which contains screenshots of the Sprints, Epics, and Issues, elaborating on why you chose to create these issues.

Keep the following in mind when submitting your assignment:

- Group work:
  - Each student should submit their own individual submission, even though they worked on the same project.
- Links:
  - Test all links in an Incognito window before submission. Inaccessible links will not be graded.
  - Make sure your GitHub repository is public and accessible during grading.
  - If the repository is inaccessible or the application link is broken, the code portion will be treated as a non-submission and graded as Not Passed (fail).
- Submission deadline:
  - Do not submit commits or assignments after the deadline; they will not be considered for grading.
  - Late submissions are not accepted, with no exceptions.
- Submission files:
  - Use the file upload area to upload the required document, and paste URLs into the text editor section.

</details>

## Author

[tobhan8](https://github.com/TobHan8) - Tobias Hanevik
