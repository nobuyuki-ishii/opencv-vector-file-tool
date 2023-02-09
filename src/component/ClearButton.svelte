<script lang="ts">
  import { rectListStore } from "../stores";
  function clear(): void {
    $rectListStore = [];
    //rectList.set([]);
  }
</script>

<span>
  <button class="ui button" on:click={clear}>Clear</button>
</span>

<style>

</style>