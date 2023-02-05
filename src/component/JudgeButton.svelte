<script lang="ts">
  import { rectList } from "../stores";

  $: buttonText = $rectList == undefined || $rectList.length > 0 ? 'Positive' : 'Negative';
  $: buttonClass = $rectList == undefined || $rectList.length > 0 ? 'ui button blue huge' : 'ui button red huge';

</script>

<!--<button class="ui button red huge">Negative</button>-->
<button class={buttonClass}>{buttonText}</button>

<style>

</style>