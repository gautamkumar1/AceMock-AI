
<div align="center">
<!-- Image of the heading -->
  <br />
    
  ![AceMock Ai Home Page](<AceMock Ai Home Page.png>) 
  <br/>
  <br/>

<video controls src="WhatsApp Video 2024-06-20 at 18.00.48_1325024b.mp4" title="AceMock Demo"></video>
  <br />

  <div>
    <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="Javascript" />
    <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="Reactjs" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSql" />
  </div>

</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🤔 [How I Plan to Build This AI](#plan)
4. 🔋 [Features](#features)
5. 🤸 [Quick Start](#quick-start)

## <a name="introduction">🤖 Introduction</a>

AceMock AI is a SaaS product website that offers job seekers the opportunity to take mock interviews with AI.          
The AI provides real-time feedback, ratings, improved answers, and correct answers to help users enhance their interview skills.
<!-- Tech Stack -->
## <a name="tech-stack">⚙️ Tech Stack</a>

- JavaScript
- React Js
- Next Js
- Clerk
- PostgreSQL
- Shadcn UI
- Tailwind CSS
- Drizzle ORM
- Stripe
- Google Gemini API
<!-- Plan -->
## <a name="plan">🤔 How I Plan to Build This AI</a>

### 🔹Backend Setup ( Drizzle ORM + PostgreSQL)
![alt text](<AceMock Backend Setup.png>)

### 🔹User Authentication

![alt text](<AceMock User Authentication Diagram Flow.png>)

### 🔹Application Workflow

![alt text](<AceMock User Application Workflow.png>)

### 🔹How Added The New Interview

![alt text](<AceMock How The New Interview Added.png>)

<!-- Features -->

## <a name="features">🔋 Features</a>


👉 **Authentication**: Implements authentication and authorization features using Clerk, allowing users to securely log in via social sign-on or traditional email and password methods, while ensuring appropriate access levels and permissions within the platform.

👉 **Question Generation**: Generate interview questions based on user-provided details such as job role, job description, tech stack, and experience.

👉 **Interview Participation**: Users can turn on their webcam to participate in the mock interview, with the option to record their answers.


👉 **Interview Control**: Users can move to the next question, return to the previous question, and end the interview at any time. After ending the interview, they are directly navigated to the feedback page.


👉 **Audio Format Questions**: Our AI automatically converts the questions into audio format so users can listen carefully and provide their answers.

👉 **Past Interview List**: Access a list of previously held interview, including details and metadata.

👉 **Real-Time Feedback**: AceMock AI provides real-time feedback to help users improve their answers, along with ratings for each question and correct answers.

👉 **User Dashboard**: A user dashboard allows users to view their previous mock interviews and retake them if desired.

👉 **Subscription and Payment**: After a one-time free trial, users must subscribe to a monthly or yearly plan, with an integrated payment system for seamless transactions.

👉 **Secure Real-time Functionality**: All interactions within the platform are secure and occur in real-time, maintaining user privacy and data integrity.

👉 **Responsive Design**: Follows responsive design principles to ensure optimal user experience across devices, adapting seamlessly to different screen sizes and resolutions.


## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/gautamkumar1/AceMock-AI.git
cd AceMock-AI
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = 
CLERK_SECRET_KEY = 
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_DRIZZLE_DB_URL = 
NEXT_PUBLIC_GEMINI_API_KEY =
NEXT_PUBLIC_INFORMATION = 
```

Replace the placeholder values with your actual Clerk credentials. You can obtain these credentials by signing up on the [Clerk website](https://clerk.com/).

**Running the Project**

```bash
npm run dev
```
**Creating DB Schema**

```bash
npm run db:push
```

**Running the Drizzle ORM**

```bash
npm run db:studio
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
