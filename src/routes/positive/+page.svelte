<script lang="ts">
	import { positiveListPathStore, filePathListStore } from "../../stores";
	import type { Unsubscriber } from "svelte/store";
	import { onDestroy } from "svelte";

  let positiveList: string = '';

  const unsubscribe: Unsubscriber = filePathListStore.subscribe(value => {
    update();
  });
  onDestroy(unsubscribe);

  const unsubscribe2: Unsubscriber = positiveListPathStore.subscribe(value => {
    update();
  });
  onDestroy(unsubscribe2);

  function update(): void {
    if ($filePathListStore == undefined) return;

    positiveList = '';
    for (let filePath of $filePathListStore) {
      console.log(filePath[1]);
      // 未判定またはnegativeはスキップ
      if (filePath[1] == '' || filePath[1].split(" ").length < 2) continue;
        positiveList = positiveList + $positiveListPathStore + filePath[1] + '\n';
    }
  }
</script>

<div class="ui grid">
  <div class="one wide column"></div>
  <div class="fourteen wide column">
    <div class="ui form">
      <div class="field">
        <label>Positive List File Path</label>
        <input type="text" name="first-name" bind:value={$positiveListPathStore}>
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