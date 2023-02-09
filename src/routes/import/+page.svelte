<script lang="ts">
	import { inputFilePathStore, filePathListStore, selectedPictureStore } from "../../stores";

  function read(): void {
    let fileDataList: any = [];
    for (let filePath of $inputFilePathStore.split("\n")) {
      if (filePath == '') continue;
      fileDataList.push([filePath, '']);
    }
    filePathListStore.set(fileDataList);
    console.log($filePathListStore);

    if ($filePathListStore.length > 0) {
      selectedPictureStore.set("#pic-0");
    }
  }

  function testData(): void {
    $inputFilePathStore = "http://141-lab.com/ruru_api/images/20230124182802.jpg\nhttp://141-lab.com/ruru_api/images/20230124192722.jpg\nhttp://141-lab.com/ruru_api/images/20230123210130.jpg";
    read();
  }
</script>

<div class="ui grid">
  <div class="one wide column"></div>
  <div class="fourteen wide column">
    <div class="ui form">
      <div class="field">
        <label>File pathes</label>
        <textarea id="textarea" bind:value={$inputFilePathStore}></textarea>
      </div>
      <button class="ui button" on:click={read}>Read</button>
      <button class="ui button" on:click={testData}>test data</button>
    </div>
  </div>
  <div class="one wide column"></div>
</div>

<style>
</style>