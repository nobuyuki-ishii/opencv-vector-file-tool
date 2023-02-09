<script lang="ts">
  //import { isPictureChange } from "../stores";
  import { changePicture } from "../lib/common";

  function prev(): void {
    changePicture(-1);
    //$isPictureChange = true;
  }
</script>

<span>
  <button class="ui left labeled icon button" on:click={prev}>
    <i class="left arrow icon"></i>
    Prev
  </button>
</span>

<style>
</style>