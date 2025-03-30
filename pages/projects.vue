<template>
    <section class="mt-48">
      <div class="container mx-auto max-w-[80%] text-center">
        <span>
          These are the three most recent projects that I've worked on, or in the case of Rodger, am working on at the moment. Mypalate was included as the cornerstone project it will always be in my view, since it taught me so much during that time frame.
        </span>
      </div>
    </section>

    <section>
        <div class="container mx-auto p-4 sm:p-8">
        <h1 class="text-4xl font-bold mb-8 text-center sub-text">Projects</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
        <div
            v-for="(project, index) in projects"
            :key="project.name"
            class="mb-4 sm:mb-8 emph-text"
        >
            <!-- Image container with hover overlay limited to the image -->
            <div class="relative group">
                <div
                :style="{ backgroundImage: 'url(' + project.image + ')' }"
                class="h-48 sm:h-64 bg-cover bg-center border-4 border-black overflow-hidden transition-colors group-hover:border-pink-600"
                >
                <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-80 transition duration-300 flex items-center justify-center">
                    <a
                    :href="project.link"
                    class="bg-black text-white px-4 py-2 uppercase tracking-widest border border-black"
                    >
                    View Details
                    </a>
                </div>
                </div>
            </div>
            <!-- Project title with ordering and hashtags -->
            <div class="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
                <div class="flex items-center space-x-2">
                    <span class="text-xl sm:text-2xl font-bold">
                        {{ index + 1 }}.
                    </span>
                    <a
                    :href="project.link"
                    class="text-xl header-text sm:text-2xl font-extrabold border-b-4 border-black inline-block transition-colors hover:text-gray-700"
                    >
                    {{ project.name }}
                    </a>
                </div>
                <div class="flex flex-wrap gap-2">
                    <span
                    v-for="(tag, i) in project.skills"
                    :key="i"
                    class="px-2 py-1 text-sm text-gray-600 border border-black border-r-4 border-b-4 shadow hover:shadow-[0_15px_30px_-5px_rgba(0,0,0,0.5)] hover:-translate-y-1 transform transition duration-300 hover:border-r-[1px] hover:border-b-[1px]"
                    >
                    #{{ tag }}
                    </span>
                </div>
            </div>
        </div>
        </div>
    </div>
    </section>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      // Maximum 6 projects
      projects: [
        {
          name: "Rodger",
          image: '/assets/in-dev.png',
          link: "/work/rodger",
          skills: ["Vue", "Supabase", "AI Integration"]
        },
        {
          name: "Finance Tracker",
          image: "https://via.placeholder.com/600x400",
          link: "/work/finance_tracker",
          skills: ["Nuxt", "Supabase", "Chart.js"]
        },
        {
          name: "Three Tests",
          image: '/assets/three-tests.png',
          link: "/work/three-tests",
          skills: ["JavaScript", "Tailwind", "UI Design"]
        },
        {
          name: "Mypalate",
          image: "http://github.com/dw-does-grad-school/static_images/blob/main/portfolio/mypalate.jpg0",
          link: "https://example.com/project-four",
          skills: ["React Native", "Node Js", "Mongo DB"]
        },
        // {
        //   name: "Pokemon Cards",
        //   image: "https://via.placeholder.com/600x400",
        //   link: "https://example.com/project-five",
        //   skills: ["Vue", "Nitro", "JavaScript"]
        // }
      ]
    };
  }
});
</script>

<style scoped>
/* Additional custom styles can be added here if needed */
.header-text {
  font-family: 'Anton', sans-serif;
}
.sub-text{
    font-family: 'Bebas Neue', sans-serif;
}
.emph-text{
    font-family: "Rubik", sans-serif;
}
</style>