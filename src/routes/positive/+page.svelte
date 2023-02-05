<script lang="ts">
	import { positiveListPath } from "../../stores";
</script>

<div class="ui grid">
  <div class="one wide column"></div>
  <div class="fourteen wide column">
    <div class="ui form">
      <div class="field">
        <label>Positive List File Path</label>
        <input type="text" name="first-name" bind:value={$positiveListPath}>
      </div>
      <div class="field">
        <label>Positive List</label>
        <textarea id="textarea" readonly></textarea>
      </div>
      <button class="ui button">Download</button>
    </div>
  </div>
  <div class="one wide column"></div>
</div>

<style>
</style>