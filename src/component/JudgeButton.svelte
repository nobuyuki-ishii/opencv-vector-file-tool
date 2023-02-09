<script lang="ts">
  import { rectListStore, selectedPictureStore, filePathListStore } from "../stores";
  import { changePicture, getSelectedPictureIndex } from "../lib/common";

  $: buttonText = $rectListStore == undefined || $rectListStore.length > 0 ? 'Positive' : 'Negative';
  $: buttonClass = $rectListStore == undefined || $rectListStore.length > 0 ? 'ui button blue huge' : 'ui button red huge';

  function judge(): void {
    let idx: number = getSelectedPictureIndex();
    let fileName: string = getSelectedPictureFileName();

    if ($rectListStore.length > 0) {
      // positive
      console.log(fileName);
      $filePathListStore[idx][1] = fileName + ' ' + $rectListStore.length;
      for (let rect of $rectListStore) {
        $filePathListStore[idx][1] = $filePathListStore[idx][1] + ' ' + rect.join(" ");
      }
      console.log($filePathListStore);
    } else {
      // negative
      $filePathListStore[idx][1] = fileName;
      console.log($filePathListStore);
    }
    // 次の写真へ
    $rectListStore = [];
    changePicture(1);
  }

  function getSelectedPictureFileName(): string {
    let pic: any = document.querySelector($selectedPictureStore);
    let filePath: any = pic.getAttribute('src').split('/');
    return filePath[filePath.length - 1];
  }

</script>

<span>
  <button class={buttonClass} on:click={judge}>{buttonText}</button>
</span>

<style>
  button {
    width: 160px;
  }
</style>