<template> 
    <div class="flex flex-col p-8 max-w-4xl mx-auto">
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
      project: "Finance Tracker",
      status: "Finished but hestitant to deploy",
      idea: "A simple finance tracker that allows you to track your income and expenses. It's a simple app that allows you to track your money, and to see where it's going. And was just complex enough to make learning Nuxt.js fun.",
      tech_stack: [
        " NuxtJs (and derivative libraries)",
        "Supabase",
        "Chart.js"
      ],
      challenges: [
        "Like NextJs, Nuxt had a bit of a learning curve to it.", 
        "Connecting to Supabase, and maintaining the data within it has been a hassle.", 
        "Keeping this project live is a bit of a pain in the neck, as it requires constant feeding of data from the users to keep it functional.", 
        "The connection with Supabase was suboptimal for this application, as there were instances where I had to continually refactor some of the code to keep the data displayed."
      ],
      reflections: [
        "Nuxt was impressive enough as a frontend framework for it to become my personal go-to.", 
        "I want this to be live, but at the same time, it’s an extremely tedious project to maintain. Email me if you’d like to see this in action."
      ]
    }
  }
}
</script>