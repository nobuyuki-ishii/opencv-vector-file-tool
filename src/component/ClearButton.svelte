<script lang="ts">
  import { rectList } from "../stores";
  function clear(): void {
    //$rectList = [];
    rectList.set([]);
  }
</script>

<button class="ui button" on:click={clear}>Clear</button>

<style>

</style>