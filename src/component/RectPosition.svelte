<script lang="ts">
	import type { Unsubscriber } from "svelte/store";
	import { onDestroy } from "svelte";
  import { filePathListStore, rectListStore, selectedPictureStore } from "../stores";
  import { getSelectedPictureIndex } from "../lib/common";

  let rectText: string = '';

  let unsubscribe: Unsubscriber = rectListStore.subscribe(rectList => {
    if (rectList == undefined) return;

    setRectPoint(rectList);
/*    rectText = "";
    for (let rect of rectList) {
      rectText = rectText + rect.join(" ") + "\n";
    }*/
    //console.log(rectText);
  });
  onDestroy(unsubscribe);

  unsubscribe = selectedPictureStore.subscribe(selectedPicture => {
    if ($filePathListStore == undefined) return;

    const index: number = getSelectedPictureIndex();
    if (index < 0) return;
    // todo 復元時のデータの持ち方合わせたい
    //setRectPoint($filePathListStore[index][1]);
  });
  onDestroy(unsubscribe);

  function setRectPoint(rectList: any) {
    rectText = "";
    for (let rect of rectList) {
      rectText = rectText + rect.join(" ") + "\n";
    }
  }

</script>

<span>
  <div class="ui form">
    <div class="field">
      <p>Position</p>
      <textarea readonly>{rectText}</textarea>
    </div>
  </div>
</span>

<style>
</style>