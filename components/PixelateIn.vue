<template>
  <div class="pixelate-container" ref="container">
    <canvas ref="canvas" :style="{ opacity: isLoaded ? 0 : 1 }" class="absolute top-0 left-0 z-10"></canvas>
    <div :style="{ opacity: isLoaded ? 1 : 0 }" class="transition-opacity duration-500">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  duration: {
    type: Number,
    default: 1000
  },
  initialPixelSize: {
    type: Number,
    default: 32
  }
});

const canvas = ref(null);
const container = ref(null);
const isLoaded = ref(false);

onMounted(async () => {
  const containerEl = container.value;
  const canvasEl = canvas.value;
  const ctx = canvasEl.getContext('2d');

  // Wait for content to load
  await new Promise(resolve => setTimeout(resolve, 100));

  // Set canvas size to match container
  canvasEl.width = containerEl.offsetWidth;
  canvasEl.height = containerEl.offsetHeight;

  // Create temporary canvas to capture content
  const tempCanvas = document.createElement('canvas');
  tempCanvas.width = containerEl.offsetWidth;
  tempCanvas.height = containerEl.offsetHeight;
  const tempCtx = tempCanvas.getContext('2d');

  // Capture the content using html2canvas
  html2canvas(containerEl).then(contentCanvas => {
    let currentPixelSize = props.initialPixelSize;
    const startTime = Date.now();

    function animate() {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / props.duration, 1);
      
      // Calculate current pixel size
      currentPixelSize = Math.max(1, props.initialPixelSize * (1 - progress));

      // Clear canvas
      ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);

      // Draw pixelated version
      tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
      tempCtx.drawImage(contentCanvas, 0, 0);

      // Draw scaled down version
      const scaledWidth = canvasEl.width / currentPixelSize;
      const scaledHeight = canvasEl.height / currentPixelSize;
      
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(tempCanvas, 
        0, 0, tempCanvas.width, tempCanvas.height,
        0, 0, scaledWidth, scaledHeight);
      ctx.drawImage(canvas.value,
        0, 0, scaledWidth, scaledHeight,
        0, 0, canvasEl.width, canvasEl.height);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        isLoaded.value = true;
      }
    }

    animate();
  });
});
</script>

<style scoped>
.pixelate-container {
  position: relative;
  width: 100%;
  height: 100%;
}
</style> 