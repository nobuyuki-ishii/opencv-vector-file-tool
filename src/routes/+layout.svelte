<script lang="ts">
</script>

<div class="container">
  <strong class="title-space">OpenCV vector file tool</strong>
  <div class="ui compact menu">
    <a class="item" href="/">
      Home
    </a>
    <a class="item" href="/import">
      Import
    </a>
    <a class="item" href="/positive">
      Positive List
      <div class="floating ui blue label">22</div>
    </a>
    <a class="item" href="/negative">
      Negative List
      <div class="floating ui red label">22</div>
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
</style>