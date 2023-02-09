<script lang="ts">
  import { filePathListStore } from "../stores";
	import type { Unsubscriber } from "svelte/store";
	//import { onDestroy, onMount } from "svelte";
	import { onDestroy } from "svelte";

  let numerator:   number = 0;  // 分子
  let denominator: number = 0;  // 分母
  let percentage:  string = '0';

  const unsubscribe: Unsubscriber = filePathListStore.subscribe(value => {
    if ($filePathListStore == undefined) return;

    numerator = 0;
    denominator = $filePathListStore.length;

    for (let filePath of $filePathListStore) {
      if (filePath[1] != '') {
        numerator++;
      }
    }
    percentage = (numerator / denominator * 100).toFixed(0);
  });
  onDestroy(unsubscribe);
</script>

<span>
  <p>Progress</p>
  <progress max={denominator} value={numerator}></progress>
  <div class="label">{numerator} / {denominator} [{percentage}%]</div>
  <!--
  <div id="progress" class="ui progress" data-value={numerator} data-total={denominator}>
    <div class="bar">
      <div class="progress"></div>
    </div>
    <div class="label">{numerator} / {denominator} [{percentage}%]</div>
  </div>
-->
</span>

<style>
  progress {
    height: 50px;
    width: 350px;
  }
</style>