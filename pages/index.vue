<template>
    <section class="hero min-h-screen flex items-center justify-center">
        <div class="hero-content text-center">
            <h1 class="pop-in text-7xl">
                <span class="float-left">Hi,</span> 
                <br> 
                <span class="font-bold">I'm David</span>
            </h1>
        </div>
    </section>
    

    <section class="summary">
        <div class="summary-content">
            <h2>Summary</h2>
            <p>This is the summary section</p>
        </div>
    </section>

    <section class="learn-more">
        <div class="learn-more-content">
            <h2>Learn More</h2>
            <p>This is the learn more section</p>
        </div>
    </section>

</template>

<style>
.floating-image {
  width: 300px; /* Adjust width as needed */
  height: auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.floating-image:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.floating-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@keyframes popIn {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  70% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.pop-in {
  animation: popIn 0.6s cubic-bezier(0.17, 0.67, 0.83, 0.67) forwards;
  opacity: 0;
}
</style>
