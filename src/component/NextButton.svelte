<script lang="ts">
  //import { isPictureChange } from "../stores";
  import { changePicture } from "../lib/common";

  function next(): void {
    changePicture(1);
    //$isPictureChange = true;
  }
</script>

<span>
  <button class="ui right labeled icon button" on:click={next}>
    <i class="right arrow icon"></i>
    Next
  </button>
</span>

<style>
</style>