<script lang="ts">
	import { positiveListPath, filePathList } from "../../stores";

  $: positiveList = fileListUpdate();

  function fileListUpdate(): string {
    let txt: string = '';
    if ($filePathList == undefined) return txt;

    txt = '';
    for (let filePath of $filePathList) {
      console.log(filePath[1]);
      // 未判定またはnegativeはスキップ
      if (filePath[1] == '' || filePath[1].split(" ").length < 2) continue;
        txt = txt + $positiveListPath + filePath[1] + '\n';
    }
    return txt;
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