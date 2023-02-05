<script lang="ts">
	import type { Unsubscriber } from "svelte/store";
	import { onDestroy } from "svelte";
  import { rectList } from "../stores";

  let rectText: string = '';

  const unsubscribe: Unsubscriber = rectList.subscribe(value => {
    if (value == undefined) return;

    rectText = "";
    for (let rect of value) {
      rectText = rectText + rect.join(" ") + "\n";
    }
    console.log(rectText);
  });
  onDestroy(unsubscribe);

</script>

<div class="ui form">
  <div class="field">
    <p>Position</p>
    <textarea readonly>{rectText}</textarea>
  </div>
</div>

<style>

</style>