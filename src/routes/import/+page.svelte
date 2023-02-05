<script lang="ts">
	import { inputFilePathes, filePathList, selectedPicture } from "../../stores";

  function read(): void {
    let fileDataList: any = [];
    for (let filePath of $inputFilePathes.split("\n")) {
      fileDataList.push([filePath, '']);
    }
    filePathList.set(fileDataList);
    console.log($filePathList);

    if ($filePathList.length > 0) {
      selectedPicture.set("#pic-0");
    }
  }

  function testData(): void {
    $inputFilePathes = "http://141-lab.com/ruru_api/images/20230124182802.jpg\nhttp://141-lab.com/ruru_api/images/20230124192722.jpg\nhttp://141-lab.com/ruru_api/images/20230123210130.jpg\n";
    read();
  }
</script>

<div class="ui grid">
  <div class="one wide column"></div>
  <div class="fourteen wide column">
    <div class="ui form">
      <div class="field">
        <label>File pathes</label>
        <textarea id="textarea" bind:value={$inputFilePathes}></textarea>
      </div>
      <button class="ui button" on:click={read}>Read</button>
      <button class="ui button" on:click={testData}>test data</button>
    </div>
  </div>
  <div class="one wide column"></div>
</div>

<style>
</style>