<script lang="ts">
  import { selectedPictureStore, filePathListStore } from "../stores";
	import type { Unsubscriber } from "svelte/store";
	import { onDestroy } from "svelte";

  let labelText: string = '';
  let labelClass: string = '';

  const unsubscribe: Unsubscriber = selectedPictureStore.subscribe(value => {
    if ($selectedPictureStore == undefined) return;

    const index: number = Number($selectedPictureStore.split("-")[1]);

    if ($filePathListStore[index][1] == '') {
      // 未判定
      labelText = 'Undecided';
      labelClass = 'ui label green large';
    } else if ($filePathListStore[index][1].split(" ").length > 1) {
      // positive
      labelText = 'Positive';
      labelClass = 'ui label blue large';
    } else {
      // negative
      labelText = 'Negative';
      labelClass = 'ui label red large';
    }
  });
  onDestroy(unsubscribe);

</script>

<span>
  <p>Judgement</p>
  <div class="{labelClass}">{labelText}</div>
</span>

<style>
</style>