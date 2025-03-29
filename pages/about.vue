<template >
    <div class="card w-full md:w-4/5 mx-auto border-2 border-black p-4 md:p-8 mt-40 rounded-lg">
        <section class="history">
        <h2 class="text-2xl font-bold text-center">History</h2>
        <div v-if="about.work.display">
            <h3>{{ about.work.title }}</h3>
            <div v-for="(experience, index) in about.work.experiences" :key="index" class="mb-8">
                <div class="flex justify-between items-center">
                    <h4 class="text-xl font-bold">{{ experience.company }}</h4>
                    <span class="text-gray-600">{{ experience.timeframe }}</span>
                </div>
                <p class="text-lg font-medium">{{ experience.role }}</p>
                <ul class="list-disc ml-6 mt-2">
                    <li v-for="(achievement, achIndex) in experience.achievements" 
                        :key="achIndex" 
                        class="mb-2">
                        {{ achievement }}
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <!-- <section class="education">
        <h2 class="text-2xl font-bold text-center">Education</h2>
        <div v-for="(education, index) in about.education" :key="index">
            <h3>{{ education.school }}</h3>
            <p>{{ education.degree }}</p>
            <p>{{ education.timeframe }}</p>
        </div>
    </section> -->

        <section class="skills">
            <div v-if="about.technical.display">
                <h3 class="text-2xl font-bold text-center mb-4">{{ about.technical.title }}</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div v-for="(skill, index) in about.technical.skills" 
                         :key="index"
                         class="p-6 border-2 border-black rounded-none shadow-sm hover:shadow-md transition-shadow">
                        <h4 class="text-lg font-bold mb-2">{{ skill.title }}</h4>
                        <p class="text-sm">{{ skill.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="interests">
            # Use this to show off who I am outside of work
        </section>
    </div>
</template>

<script>

const about ={

  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Career Break: Healthcare",
        timeframe: "2022 - 2025",
        role: "",
        achievements: [
          "I took a career break to learn about the healthcare sector, and to try to learn how to address the technological needs of the sector.",
          "I learned how to work within the needs of a multi-disciplinary team, and how to effectively.",
          "Stayed up to date with the latest advancements in web development and design, and mastered Next and Nuxt.js, Tailwind CSS, and TypeScript.",
          "Continued to do work to advocate for neurodiverse individuals in the workplace, presenting on the subject at SXSW 2024."
        ]
      },
      {
        company: "Grant Place Designs", 
        timeframe: "2018 - 2022",
        role: "Fullstack Developer",
        achievements: [
          "Worked with a variety of small business owners to figure out the digital needs of their businesses.  ",
          "Built websites and applications to meet the technical needs of my clients, with a focus on the React applications.",
          "I began to focus on building projects that were inclusive to people with disabilities and took their needs into consideration."
        ]
      },
      {
        company: "College Startup", 
        timeframe: "2016 - 2017",
        role: "Fullstack Developer",
        achievements: [
          "Developed a mobile app using React Native and Expo to help people connect with each other over shared recipes, coordinating dinners, and other social events.",
          "The app was used by over 2000 people, and received positive feedback for its ease of use and social features.",
          "Helped in the development of a web application for the student organic farm, allowing them to distribute leftover produce to students who wanted to take it."
        ],
        images: [],
      },
      {
        company: "Fair Lumber Company",
        timeframe: "2012 - 2018",
        role: "Web Developer",
        achievements: [
          "Developed and maintained the firm's website, a simple html/css/js site that was used to showcase the company's products, services, and provide contact information for potential customers.",
          "Worked hand in hand with the company's owner to ensure the firm's digital needs were met. This included optimizing the site for search engines, and ensuring the site was accessible to all users."
        ]
      },
    //   {
    //     education: "Clemson University",
    //     timeframe: "2024 - 2026", 
    //     role: "Master of Science in Computer Science: Focus in AI and Data Science"  
    //   },
    //   {
    //     education: "Michigan State University",
    //     timeframe: "2014 - 2017", 
    //     role: "Bachelor of Science in Environmental Science"
    //   }
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "JavaScript: React, Vue, Node, Express",
        description: "I've been coding in JavaScript for almost 10 years, and have a strong grasp of the language, its ecosystem, but am still learning something new just about every day. In that time, I've built everything from simple websites using basic HTML, CSS, and JavaScript. To complex web and mobile applications using React, Vue, and derivatives of those frameworks."
      },
      {
        title: "Python: Django, Flask",
        description: "I've been coding in Python for about 7 years now, and have a strong grasp of the language, and the ecosystem of developers around it. I primarily use Python for academic programming in order to filter through data."
      },
      {
        title: "UX Design and UI Development",
        description: "I'm able to rapidly iterate on designs and develop them into functional, responsive, and accessible web applications."
      },
      {
        title: "AWS and Cloud Services",
        description: "I've been using AWS for about 6 years now, and have a strong grasp of the platform and its services. Though ironically, I'm just now getting certified in AWS Cloud Services."
      },
      {
        title: "Project Management",
        description: "I've practiced agile project management since 2016 and building the mypalate application in order to stay on track and meet deadlines."
      }
    ]
  },
}

export default {
    data() {
        return {
            about
        }
    }
}
</script>