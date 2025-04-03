<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-zinc-50">
        <div class="h-[70vh] relative w-full max-w-4xl mx-auto">
            <section 
                v-for="(section, index) in sections" 
                :key="index"
                :class="{
                    'absolute w-full h-full transition-all duration-500 transform': true,
                    'opacity-100 translate-x-0': currentSection === index,
                    'opacity-0 translate-x-full': currentSection < index,
                    'opacity-0 -translate-x-full': currentSection > index
                }"
            >
                <div class="h-full flex flex-col items-center justify-center text-center p-8">
                    <h2 class="text-4xl merriweather mb-4">{{ section.year }}</h2>
                    <h3 class="text-2xl text-gray-700 mb-6">{{ section.title }}</h3>
                    <p class="text-lg text-gray-600 leading-relaxed">{{ section.description }}</p>
                </div>
            </section>
        </div>

        <!-- Navigation Buttons -->
        <div class="flex gap-4 mt-8">
            <button 
                @click="prevSection" 
                class="px-6 py-2 bg-sky-400 hover:bg-sky-500 rounded-full transition-colors duration-300"
                :disabled="currentSection === 0"
            >
                Previous
            </button>
            <button 
                @click="nextSection" 
                class="px-6 py-2 bg-sky-400 hover:bg-sky-500 rounded-full transition-colors duration-300"
                :disabled="currentSection === sections.length - 1"
            >
                Next
            </button>
        </div>
    </div>
</template>

<script setup>
const sections = [
    {
        year: '2012 - 2015',
        title: 'Small time web developer and college student',
        description: 'I took two years off after high school, worked for a small business as their in-house web developer and designer, and ultimately went to Michigan State University.'
    },
    {
        year: '2016 - 2017',
        title: 'Food Design HQ and Mypalate',
        description: 'I joined a student run start up called Food Design HQ, built the Mypalate app for them, grew that to around 2253 users, and learned a lot about UX/UI design and Full Stack Development.'
    },
    {
        year: '2018 - 2022',
        title: 'Grant Place Designs, Autism Advocacy, and Chicago',
        description: 'I moved to Chicago and started a small development studio called Grant Place Designs. I built and maintained websites for multiple small businesses, and built a few apps to hone my skills along the way. I did work with it to try to raise awareness of the struggles encountered by autistic professionals, and worked with companies to help foster a more inclusive environment for this amazing professional population.'
    },
    {
        year: '2023 - 2024',
        title: 'Sabbatical and Northern Retreat',
        description: 'Some personal drama took place, and I needed to return home for a few years to recouperate. I spent the time attempted to change paths, even enrolling in nursing school for about a year. I also took the time to focus on learning lower level languages like Java, Go, and C#, while further mastering JavaScript frameworks like Vue, Next, Nuxt, and others.'
    },
    {
        year: 'Now',
        title: 'Graduate School and the Big Question',
        description: 'With the rise in AI, I knew the competitive landscape was changing for developers. I enrolled in a Master\'s program to learn more about the technology, and to understand how I could use it to benefit my community. I also started advising the nursing program I\'d worked with on how to teach their students how to most effectively utilize it as a tool. All the while beginning to build applications that incorporate AI into the user experience.'
    }, 
    {
        year: 'What\'s Next?',
        title: 'That is the question.',
        description: 'I\'m currently working on portfolio projects as I apply for jobs, which is probably tied to why you\'re reading this right now.'
    }
];

const currentSection = ref(0);

const nextSection = () => {
    if (currentSection.value < sections.length - 1) {
        currentSection.value++;
    }
};

const prevSection = () => {
    if (currentSection.value > 0) {
        currentSection.value--;
    }
};
</script>

<style scoped>
button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.merriweather {
    font-family: 'Merriweather', serif;
}
</style>

