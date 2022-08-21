<script lang="ts">
  export let onClick: () => void = () => {};
</script>

<button
  on:click={onClick}
  class="py-2 px-4 rounded-md bg-accent text-secondary hover:bg-lightAccent transition-colors duration-200 ease-in-out"
>
  <slot />
</button>
