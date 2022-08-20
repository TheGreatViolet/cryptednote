<script lang="ts">
  export let route: string;
  export let text: string;

  const click = () => {
    window.location.href = route;
  };
</script>

<button on:click={click}>
  <p class="text-secondary font-bold">{text}</p>
</button>
