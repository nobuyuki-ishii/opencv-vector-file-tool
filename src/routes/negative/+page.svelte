<script lang="ts">
	import { negativeListPath, filePathList } from "../../stores";

  $: negativeList = fileListUpdate();

  function fileListUpdate(): string {
    let txt: string = '';
    if ($filePathList == undefined) return txt;

    for (let filePath of $filePathList) {
      console.log(filePath[1]);
      // 未判定またはpositiveはスキップ
      if (filePath[1] == '' || filePath[1].split(" ").length >= 2) continue;
        txt = txt + $negativeListPath + filePath[1] + '\n';
    }
    return txt;
  }

</script>

<div class="ui grid">
  <div class="one wide column"></div>
  <div class="fourteen wide column">
    <div class="ui form">
      <div class="field">
        <label>Negative List File Path</label>
        <input type="text" name="first-name" bind:value={$negativeListPath}>
      </div>
      <div class="field">
        <label>Negative List</label>
        <textarea id="textarea" readonly>{negativeList}</textarea>
      </div>
      <button class="ui button">Download</button>
    </div>
  </div>
  <div class="one wide column"></div>
</div>

<style>
</style>