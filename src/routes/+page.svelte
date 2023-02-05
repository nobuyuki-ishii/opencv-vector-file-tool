<script lang="ts">
  import { filePathList, selectedPicture, isPictureChange } from "../stores";
  import Picture from "../component/Picture.svelte";
  import JudgeButton from "../component/JudgeButton.svelte";
  import ClearButton from "../component/ClearButton.svelte";
  import RectPosition from "../component/RectPosition.svelte";

  function next(): void {
    changePicture(1);
    $isPictureChange = true;
  }

  function prev(): void {
    changePicture(-1);
    $isPictureChange = true;
  }

  function changePicture(cnt: number): void {
    let index: number = Number($selectedPicture.split("-")[1]);
    let newIndex: number = index + cnt;
    if (newIndex < 0) {
      newIndex = $filePathList.length - 1;
    } else if (newIndex > $filePathList.length - 1) {
      newIndex = 0;
    }
    selectedPicture.set("#pic-" + String(newIndex));
    console.log(newIndex);
  }
</script>

<div class="ui grid column-space">
  <div class="eleven wide column">
    <Picture />
    <br>
    <div style="margin: 0 auto; width:400px;">
      <button class="ui left labeled icon button" on:click={prev}>
        <i class="left arrow icon"></i>
        Prev
      </button>
      <JudgeButton />
      <button class="ui right labeled icon button" on:click={next}>
        <i class="right arrow icon"></i>
        Next
      </button>
    </div>
  </div>
  <div class="four wide column">
    <p>Display</p>
    <div class="ui buttons">
      <button class="ui positive button">Only judged</button>
      <div class="or"></div>
      <button class="ui button">All</button>
    </div>
    <br>
    <br>
    <RectPosition />
    <br>
    <ClearButton />
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <p>Progress</p>
    <div class="ui progress">
      <div class="bar">
        <div class="progress"></div>
      </div>
      <div class="label">1 / 7000 [0.1%]</div>
    </div>
  </div>
  <div class="one wide column">
  </div>
</div>

<style>
</style>