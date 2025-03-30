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
      project: "Rodger",
      status: "In production - Deployment window in late April",
      idea: "Build a movie recommendation application that integrates AI into the UI, in order to effectively recommend titles to the user that they would enjoy. Also, while this is not the place to be asking the question, I've got to wonder. Does the name reference date me? Or does it speak to the local legend of where I spent most of my 20s…",
      tech_stack: [
        "Javascript/Typescript (VueJs)",
        "Supabase",
        "Python"
      ],
      challenges: [
        "AI integration is a different beast than I had expected it to be. There's a lot more prep work going into this project than those I've tackled in the past.",
        "Even the Mypalate app when it hit >1000 users was more of an issue of managing the finances of the app than anything else.",
        "Deciding on the UI has been entertaining. My heart is pulling me in a 'take some inspiration from a classic theatre' while my head is telling me 'CHROME!!! Make this as sleek and modern as possible!'"
      ],
      reflections: [
        "This is giving me flashbacks to my first fullstack project, and I've got mixed feelings about reliving those emotions.",
        "It's fun to build. I've done some limited AI integration in the past, such as building a desktop prompt engine and image generator, but never anything that I'd deploy or could see much of a use for other applications."
      ]
    }
  }
}
</script>