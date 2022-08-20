import Home from './Home.svelte';
import './index.css';

const app = new Home({
  target: document.getElementById('app')
});

export default app;
