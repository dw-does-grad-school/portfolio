<template>
    <section class="mt-32">

    </section>
    <section>
        <div class="container mx-auto p-8">
        <h1 class="text-4xl font-bold mb-8 text-center sub-text">Projects</h1>
        <div class="grid grid-cols-2 gap-8">
        <div
            v-for="(project, index) in projects"
            :key="project.name"
            class="mb-8 emph-text"
        >
            <!-- Image container with hover overlay limited to the image -->
            <div class="relative group">
                <div
                :style="{ backgroundImage: 'url(' + project.image + ')' }"
                class="h-64 bg-cover bg-center border-4 border-black overflow-hidden transition-colors group-hover:border-pink-600"
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
            <div class="mt-4 flex justify-between items-center">
                <div class="flex items-center space-x-2">
                    <span class="text-2xl font-bold">
                        {{ index + 1 }}.
                    </span>
                    <a
                    :href="project.link"
                    class="text-2xl font-extrabold border-b-4 border-black inline-block transition-colors hover:text-gray-700"
                    >
                    {{ project.name }}
                    </a>
                </div>
                <div class="flex space-x-2">
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
import threeTestsImg from '@/assets/three-tests.png';

export default {
  data() {
    return {
      // Maximum 6 projects
      projects: [
        {
          name: "Project One",
          image: "https://via.placeholder.com/600x400",
          link: "https://example.com/project-one",
          skills: ["Vue", "Tailwind", "Nuxt"]
        },
        {
          name: "UI Design",
          image: threeTestsImg,
          link: "https://three-tests.vercel.app/",
          skills: ["JavaScript", "Design", "CSS"]
        },
        {
          name: "Project Three",
          image: "https://via.placeholder.com/600x400",
          link: "https://example.com/project-three",
          skills: ["React", "Framer", "CSS"]
        },
        {
          name: "Project Four",
          image: "https://via.placeholder.com/600x400",
          link: "https://example.com/project-four",
          skills: ["GraphQL", "Apollo", "Express"]
        },
        {
          name: "Project Five",
          image: "https://via.placeholder.com/600x400",
          link: "https://example.com/project-five",
          skills: ["Angular", "TypeScript", "RxJS"]
        },
        {
          name: "Project Six",
          image: "https://via.placeholder.com/600x400",
          link: "https://example.com/project-six",
          skills: ["Python", "Django", "REST"]
        }
      ]
    };
  }
};
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