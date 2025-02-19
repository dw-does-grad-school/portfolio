<template>
  <section class="py-16 mt-24 bg-gray-100 min-h-screen">
    <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Contact Form -->
      <div class="bg-white p-8 border-4 border-black">
        <h1 class="text-3xl font-bold uppercase mb-6 border-b-4 border-black pb-2 header-text">Contact Me</h1>
        <form @submit.prevent="submitForm" class="space-y-4 sub-text">
          <div class="">
            <label for="name" class="block text-black font-bold uppercase mb-1 tracking-wider">
              Name
            </label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              placeholder="Your Name"
              required
              class="w-full border-2 border-black px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black rounded-none"
            />
          </div>
          <div>
            <label for="email" class="block text-black font-bold uppercase mb-1 tracking-wider">
              Email
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="Your Email"
              required
              class="w-full border-2 border-black px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black rounded-none"
            />
          </div>
          <div>
            <label for="message" class="block text-black font-bold uppercase mb-1 tracking-wider">
              Message
            </label>
            <textarea
              id="message"
              v-model="form.message"
              placeholder="Your Message"
              required
              class="w-full border-2 border-black px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black resize-y min-h-[100px] rounded-none"
            ></textarea>
          </div>
          <button
            type="submit"
            class="bg-black hover:bg-white hover:text-black text-white font-bold uppercase py-2 px-4 border-2 border-black"
          >
            Send
          </button>
        </form>
      </div>
      <!-- Contact Info -->
      <div class="bg-white p-8 border-4 border-black">
        <h2 class="text-2xl font-bold uppercase mb-6 border-b-4 border-black pb-2 header-text">Want to Get in Touch ?</h2>
        <ul class="space-y-4 sub-text">
          <li class="pt-4 border-t-2 border-black">
            Send an email to
            <a href="mailto:contact@mydomain.com" class="text-black font-bold hover:underline">
              dwelsh2@clemson.edu 
            </a>
          </li>
          <li class="pt-4 border-t-2 border-black">
            Or Call Me @
            <a href="tel:+12486721219" class="text-black font-bold hover:underline">+12486721219</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactPage",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: ""
      }
    };
  },
  methods: {
    submitForm() {
      console.log("Form submitted:", this.form);
      alert("Your message has been sent!");
      // Reset the form fields
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
    }
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
</style>