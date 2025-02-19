<template>
  <footer class="neo-footer">
    <div class="footer-container">
      <!-- Left column -->
      <div class="footer-col left-col">
        <h2>Placeholder Title</h2>
        <h3>Placeholder Subtitle</h3>
        <div class="social-links">
          <a href="https://www.linkedin.com" target="_blank">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com" target="_blank">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://substack.com" target="_blank">
            <i class="fab fa-substack"></i>
          </a>
        </div>
      </div>

      <!-- Right columns -->
      <div class="footer-col right-col">
        <ul>
          <li><a href="#">Link 1A</a></li>
          <li><a href="#">Link 2A</a></li>
          <li><a href="#">Link 3A</a></li>
        </ul>
      </div>
      <div class="footer-col right-col">
        <ul>
          <li><a href="#">Link 1B</a></li>
          <li><a href="#">Link 2B</a></li>
          <li><a href="#">Link 3B</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'NeoFooter'
}
</script>

<style scoped>
.neo-footer {
  background-color: #e0e0e0; /* Grey background */
  padding: 2rem;
  border-top: 4px solid black;
  font-family: Arial, sans-serif;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.footer-col {
  padding: 1rem;
  border: 1px solid black; /* Bold border for neo-brutalist feel */
  margin: 0.5rem;
}

/* Left column styling */
.left-col {
  flex: 1 1 30%;
  text-align: left;
}

/* Right columns styling */
.right-col {
  flex: 1 1 30%;
  text-align: right;
}

/* Social links styling with icon emphasis */
.social-links a {
  margin-right: 1rem;
  color: inherit;
  font-size: 1.5rem;
  text-decoration: none;
  border: 1px solid black;
  padding: 0.5rem;
  transition: background-color 0.3s, color 0.3s;
}

.social-links a:hover {
  background-color: black;
  color: white;
}

/* Reset list styling */
ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 0.5rem 0;
}

a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
