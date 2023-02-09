<script lang="ts">
  import Picture from "../component/Picture.svelte";
  import JudgeButton from "../component/JudgeButton.svelte";
  import ClearButton from "../component/ClearButton.svelte";
  import RectPosition from "../component/RectPosition.svelte";
  import Progress from "../component/Progress.svelte";
  import NextButton from "../component/NextButton.svelte";
  import PrevButton from "../component/PrevButton.svelte";
  import Judgement from "../component/Judgement.svelte";
</script>

<div class="ui grid column-space">
  <div class="eleven wide column">
    <Picture />
    <br>
    <div style="margin: 0 auto; width:400px;">
      <PrevButton />
      <JudgeButton />
      <NextButton />
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
    <Judgement />
    <br>
    <br>
    <RectPosition />
    <br>
    <ClearButton />
    <br>
    <br>
    <br>
    <Progress />
  </div>
  <div class="one wide column">
  </div>
</div>

<style>
</style>