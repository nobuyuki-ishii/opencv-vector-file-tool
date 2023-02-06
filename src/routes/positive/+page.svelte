<script lang="ts">
	import { positiveListPath, filePathList } from "../../stores";
	import type { Unsubscriber } from "svelte/store";
	import { onDestroy } from "svelte";

  let positiveList: string = '';

  const unsubscribe: Unsubscriber = filePathList.subscribe(value => {
    update();
  });
  onDestroy(unsubscribe);

  const unsubscribe2: Unsubscriber = positiveListPath.subscribe(value => {
    update();
  });
  onDestroy(unsubscribe2);

  function update(): void {
    if ($filePathList == undefined) return;

    positiveList = '';
    for (let filePath of $filePathList) {
      console.log(filePath[1]);
      // 未判定またはnegativeはスキップ
      if (filePath[1] == '' || filePath[1].split(" ").length < 2) continue;
        positiveList = positiveList + $positiveListPath + filePath[1] + '\n';
    }
  }
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
        <textarea id="textarea" readonly>{positiveList}</textarea>
      </div>
      <button class="ui button">Download</button>
    </div>
  </div>
  <div class="one wide column"></div>
</div>

<style>
</style>