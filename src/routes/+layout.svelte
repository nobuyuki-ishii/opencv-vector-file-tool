<script lang="ts">
  import { base } from "$app/paths";
  import { filePathListStore } from "../stores";
	import type { Unsubscriber } from "svelte/store";
	import { onDestroy } from "svelte";

  let positiveCount: number = 0;
  let negativeCount: number = 0;

  let isPositiveShow: string = 'no-display';
  let isNegativeShow: string = 'no-display';

  const unsubscribe: Unsubscriber = filePathListStore.subscribe(value => {
    if ($filePathListStore == undefined) return;

    positiveCount = 0;
    negativeCount = 0;

    for (let filePath of $filePathListStore) {
      if (filePath[1].split(" ").length > 1) {
        positiveCount++;
      } else {
        if (filePath[1] != '') {
          negativeCount++;
        }
      }
    }

    isPositiveShow = positiveCount > 0 ? "" : "no-display";
    isNegativeShow = negativeCount > 0 ? "" : "no-display";
  });
  onDestroy(unsubscribe);
</script>

<div class="container">
  <strong class="title-space">OpenCV vector file tool</strong>
  <div class="ui compact menu">
    <a class="item" href="{base}/">
      Home
    </a>
    <a class="item" href="{base}/import">
      Import
    </a>
    <a class="item" href="{base}/positive">
      Positive List
      <div class="floating ui blue label {isPositiveShow}">{positiveCount}</div>
    </a>
    <a class="item" href="{base}/negative">
      Negative List
      <div class="floating ui red label {isNegativeShow}">{negativeCount}</div>
    </a>
  </div>
  <hr>
</div>

<slot />

<style>
  .container {
    margin: 15px;
  }
  .title-space {
    margin-right: 20px;
  }
  .no-display {
    display: none;
  }
</style>