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
      project: "Mypalate",
      status: "Permanently retired after more $ than I care to admit",
      idea: "An application that allowed users to share recipes and connect with each other over food and the culture around it.",
      tech_stack: [
        "React Native (Expo)",
        "Node.Js",
        "MongoDb"
      ],
      challenges: [
        "Building the app was easy, running the business, that was the fun bit.", 
        "Getting the code to accommodate the number of users was easy, paying for the data storage, at the time, was the difficult part. ", 
        "Doing everything from estimating the costs/scale of the project, setting up the databases, and designing the UI would’ve been an amazing challenge to for an entire year, much less a summer.", 
        "The final straw was the release of IOS 10, and the mounting costs of running a cash negative company on a college student’s budget. "
      ],
      reflections: [
        "This was an amazing lesson in the economics of application development and deployment. Throw in the fact that I was 22 and a full time undergrad when it launched, and there’s a reason this is something of a traumatic experience in hindsight. ", 
        "With all that said, retrospectively, it was an amazing experience. I learned how to build full-stack applications in a trial by fire. And while I definitely got burned, I’m glad I gave it my best shot. "
      ]
    }
  }
}
</script>