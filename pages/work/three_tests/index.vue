<template> 
    <div class="flex flex-col p-8 max-w-4xl mt-32 mx-auto">
        <div class="mb-8">
            <h1 class="text-3xl font-bold mb-2">{{ project }}</h1>
            <p class="text-gray-600">{{ status }}</p>
        </div>

        <div class="mb-8">
            <h2 class="text-xl font-semibold mb-4">Project Overview</h2>
            <p class="text-gray-700">{{ idea }}</p>
        </div>

        <div class="mb-8">
            <h2 class="text-xl font-semibold mb-4">Tech Stack</h2>
            <ul class="list-disc list-inside text-gray-700">
                <li v-for="tech in tech_stack" :key="tech">{{ tech }}</li>
            </ul>
        </div>

        <div class="mb-8">
            <h2 class="text-xl font-semibold mb-4">Challenges</h2>
            <ul class="list-disc list-inside text-gray-700">
                <li v-for="challenge in challenges" :key="challenge" class="mb-2">{{ challenge }}</li>
            </ul>
        </div>

        <div class="mb-8">
            <h2 class="text-xl font-semibold mb-4">Reflections</h2>
            <ul class="list-disc list-inside text-gray-700">
                <li v-for="reflection in reflections" :key="reflection" class="mb-2">{{ reflection }}</li>
            </ul>
        </div>
    </div>   
</template>

<script>
export default {
  data() {
    return {
      project: "Three Code Tests",
      status: "Deployed on Vercel",
      idea: " I had to build three dummy apps on the fly and wanted to see how fast I could iterate through three different UI themes. This was about a day’s work in all.",
      tech_stack: [
        "Vanilla JS",
        "Tailwind CSS",
        "Vercel"
      ],
      challenges: [
        "Getting it built in < 6 total hours", 
        "Determining which of the themes would be the most appropriate landing page", 
        "The JS could refresh the cachè on refresh with the tic-tac-toe game, but that’s a minor detail in my opinion. "
      ],
      reflections: [
        "This gave me an in-depth appreciation for Tailwind that I’d not previously had.", 
        "It’s a more effective demonstration of my skills with UI design than this website, but that’s owing more to having a “be a simple developer, and let your code speak for itself” mindset than anything.", 
        "Retrospectively, the contrast of this project and my personal site are examples of “tell me what to build and your most complicated idea will come to life, tell me to build for myself, and you’ll get the simplest idea, hopefully, executed well.”", 
      ]
    }
  }
}
</script>