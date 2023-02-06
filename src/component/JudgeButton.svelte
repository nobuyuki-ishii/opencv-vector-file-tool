<script lang="ts">
  import { rectList, selectedPicture, filePathList } from "../stores";

  $: buttonText = $rectList == undefined || $rectList.length > 0 ? 'Positive' : 'Negative';
  $: buttonClass = $rectList == undefined || $rectList.length > 0 ? 'ui button blue huge' : 'ui button red huge';

  function judge(): void {
    let idx: number = getSelectedPictureIndex();
    let fileName: string = getSelectedPictureFileName();

    if ($rectList.length > 0) {
      // positive
      console.log(fileName);
      $filePathList[idx][1] = fileName + ' ' + $rectList.length;
      for (let rect of $rectList) {
        $filePathList[idx][1] = $filePathList[idx][1] + ' ' + rect.join(" ");
      }
      console.log($filePathList);
    } else {
      // negative
      $filePathList[idx][1] = fileName;
      console.log($filePathList);
    }
  }

  function getSelectedPictureIndex(): number {
    let pic: any = document.querySelector($selectedPicture);
    return Number(pic.id.split("-")[1]);
  }

  function getSelectedPictureFileName(): string {
    let pic: any = document.querySelector($selectedPicture);
    let filePath: any = pic.getAttribute('src').split('/');
    return filePath[filePath.length - 1];
  }

</script>

<button class={buttonClass} on:click={judge}>{buttonText}</button>

<style>
  button {
    width: 160px;
  }
</style>