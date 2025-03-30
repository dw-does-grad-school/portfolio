<template >
    <div class="card w-full md:w-4/5 mx-auto border-2 border-black p-4 md:p-8 mt-40 rounded-lg">
        <section class="history animate-on-scroll">
            <h2 class="text-2xl font-bold text-center mb-6">History</h2>
            <div v-if="about.work.display">
                <h3>{{ about.work.title }}</h3>
                <div v-for="(experience, index) in about.work.experiences" 
                     :key="index" 
                     class="mb-8 slide-in"
                     :style="{ animationDelay: `${index * 0.2}s` }">
                    <div class="flex justify-between items-center">
                        <h4 class="text-xl font-bold">{{ experience.company }}</h4>
                        <span class="text-gray-600">{{ experience.timeframe }}</span>
                    </div>
                    <p class="text-lg font-medium">{{ experience.role }}</p>
                    <ul class="list-disc ml-6 mt-2">
                        <li v-for="(achievement, achIndex) in experience.achievements" 
                            :key="achIndex" 
                            class="mb-2 fade-in"
                            :style="{ animationDelay: `${(index * 0.2) + (achIndex * 0.1)}s` }">
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

        <section class="skills animate-on-scroll mt-40">
            <div v-if="about.technical.display">
                <h3 class="text-2xl font-bold text-center mb-4">{{ about.technical.title }}</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div v-for="(skill, index) in about.technical.skills" 
                         :key="index"
                         class="p-6 border-2 border-black rounded-none shadow-sm hover:shadow-md transition-shadow slide-in"
                         :style="{ animationDelay: `${index * 0.2}s` }">
                        <h4 class="text-lg font-bold mb-2">{{ skill.title }}</h4>
                        <p class="text-sm">{{ skill.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="interests animate-on-scroll mt-40 mb-40">
          <div v-if="about.interests.display">
            <h3 class="text-2xl font-bold text-center mb-4">{{ about.interests.title }}</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div v-for="(interest, index) in about.interests.skills" 
                   :key="index"
                   class="p-6 border-2 border-black rounded-none shadow-sm hover:shadow-md transition-shadow slide-in relative min-h-[300px] group overflow-hidden"
                   :style="{ animationDelay: `${index * 0.2}s` }">
                <div class="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                     :style="{ backgroundImage: `url(${interest.image})` }">
                </div>
                <div class="relative z-10 bg-black/70 p-4 h-full text-white">
                  <h4 class="text-lg font-bold text-center mb-2">{{ interest.title }}</h4>
                  <p class="text-sm">{{ interest.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

// Remove the direct imports and use public path
const images = {
  cooking: '/cooking.jpg',
  gym: '/gym.jpg',
  hiking: '/theRockies.jpg',
  art: '/gallery.jpg'
}

// Add page meta for Nuxt
definePageMeta({
    name: 'about',
    layout: 'default'
});

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
        title: "Backend Development: Python, Django, Flask; Java, Spring Boot, JVDB",
        description: "I've been coding in Python for about 7 years now, and have a strong grasp of the language, and the ecosystem of developers around it. I primarily use Python for academic programming in order to filter through data."
      },
      {
        title: "Database: PostgreSQL, MySQL, MongoDB, Firebase/Supabase",
        description:""
      },
      {
        title: "UX Design and UI Development",
        description: "I'm able to rapidly iterate on designs and develop them into functional, responsive, and accessible web applications."
      },
      {
        title: "Project Management",
        description: "I've practiced agile project management since 2016 and building the mypalate application in order to stay on track and meet deadlines."
      },
      {
        title: "AWS and Cloud Services",
        description: "I've been using AWS for about 6 years now, and have a strong grasp of the platform and its services. Though ironically, I'm just now getting certified in AWS Cloud Services."
      }
    ]
  },
  interests: {
    display: true,
    title: "Interests",
    skills: [
      {
        title: "The Arts",
        image: images.art,
        description: "The neo-brutalist aesthetic of this may not at all hint at it. But if left to my own devices, I would probably be found in either an art gallery or museum on any given day. Especially with the rise of AI and digitization of everything, the simple act of being able to see something that evokes a feeling of something greater than oneself is simply priceless to me. It also makes me a better developer, as it gives me a frame of reference for the feeling that I want my applications to give to the people who ultimately use them. "
      },
      {
        title: "Hiking",
        image: images.hiking,
        description: "There's a german word or phrase for it that captures the idea I'm trying to describe rather perfectly. The idea is simple enough, going for a leisurely stroll either through the city, or in a national park. Something where you're fully aware of the world around you and not at the same time, whilst taking in the beauty of the surrounding area. It's also why I'm guilty of getting out of the city once every few weeks to go on a hiking trip or two."
      },
      {
        title: "Food Culture",
        image: images.cooking,
        description:"My first major project was building a cooking and recipe sharing app. Food has always been something of an anchor for me both as a hobby, and as something that allows me to give back to my friends and family. On the weekends I'm unable to get out of town to hike or travel, it's almost a guarantee that I'm either cooking for, or going out to an amazing meal with my friends and family. "
      },
      {
        title: "Fitness",
        image: images.gym,
        description: "Somewhere along the line, I realized that caffeine without exercise was just anxiety in liquid form and that caffeine with exercise is adderall without a prescription, and all the other benefits of having an active lifestyle. As such I've developed a bed to gym habit over the years, and have gotten to the point where a town without a climbing gym near it is not a place I've got much of a desire to live in. "
      }
    ]
  },
}

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });
});
</script>

<style scoped>
.header-text {
  font-family: 'Anton', sans-serif;
}
.sub-text{
    font-family: 'Bebas Neue', sans-serif;
}
.animate-on-scroll {
    opacity: 0;
    transform: translateX(-20px);
    transition: all 0.5s ease-out;
}

.animate-on-scroll.visible {
    opacity: 1;
    transform: translateX(0);
}

.slide-in {
    opacity: 0;
    transform: translateX(-20px);
    animation: slideIn 0.5s ease-out forwards;
    animation-play-state: paused;
}

.animate-on-scroll.visible .slide-in {
    animation-play-state: running;
}

.fade-in {
    opacity: 0;
    animation: fadeIn 0.5s ease-out forwards;
    animation-play-state: paused;
}

.animate-on-scroll.visible .fade-in {
    animation-play-state: running;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(-20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>