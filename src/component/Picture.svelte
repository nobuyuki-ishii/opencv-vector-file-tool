<script lang="ts">
	import { afterUpdate, onMount } from "svelte";
  import { filePathList, selectedPicture, rectList, isPictureChange } from "../stores";

  let startX: number = 0; // 四角の描画開始点x
  let startY: number = 0; // 四角の描画開始点y
  let endX: number = 0;   // 四角の描画終了点x
  let endY: number = 0;   // 四角の描画終了点y

  let beforeStartX: number = 0; // マウス移動直前に描画した四角の開始点x
  let beforeStartY: number = 0; // マウス移動直前に描画した四角の開始点y
  let beforeSizeX: number = 0;  // マウス移動直前に描画した四角の大きさx
  let beforeSizeY: number = 0;  // マウス移動直前に描画した四角の大きさy

  let isMouseClick: boolean = false;  // 四角描画中かどうか

  let canvas: any;
  let ctx: any;

  let width = 300 * 2.5;  // canvas幅   700
  let height = 200 * 2.5; // canvas高さ 500

  onMount(() => {
    canvas = document.querySelector("canvas");

    // 四角を描く mousedown
    canvas.addEventListener("mousedown", function(event: any) {
      isMouseClick = true;
      startX = event.offsetX;
      startY = event.offsetY;
      //let pic: any = document.querySelector($selectedPicture);
      //console.log("[" + startX + ", " + startY + "] => [" + Math.trunc(startX * pic.naturalWidth / width) + ", " + Math.trunc(startY * pic.naturalHeight / height) + "]");
      console.log("[" + startX + ", " + startY + "]");
    });

    // 四角を描く mousemove
    canvas.addEventListener("mousemove", function(event: any) {
      if (!isMouseClick) return; 
      drawingRect(event);
    });

    // 四角を描く mouseup
    canvas.addEventListener("mouseup", function(event: any) {
      console.log("called mouseup.");
      isMouseClick = false;
      endX = event.offsetX;
      endY = event.offsetY;

      // 四角になっていない場合、終了
      if (startX == endX) return;
      if (startY == endY) return;

      saveRect();
      console.log("[" + startX + ", " + startY + ", " + endX + ", " + endY + "]");
    });

    ctx = canvas.getContext("2d");
    $rectList = [];
    $isPictureChange = true;
  });

  afterUpdate(() => {
    // todo
    // import時だけここで処理するにする
    // 初期表示、next, prevによる写真変更及び四角のクリアで写真を再表示する
    if ($isPictureChange || $rectList.length == 0) {
      $isPictureChange = false;
      let pic: any = document.querySelector($selectedPicture);
      console.log(pic);
      if (pic != undefined) {
        if (pic.complete) {
          console.log("complete");
          updateCanvas();
        } else {
          pic.onload = function() {
            console.log("onload");
            updateCanvas();
          }
        }
      }
    }
  });

  // canvasに写真と描画済みの四角を描く
  function updateCanvas(): void {
    // 写真の表示
    let pic: any = document.querySelector($selectedPicture);
    canvas.style.width = String(pic.naturalWidth + "px");
    canvas.style.height = String(pic.naturalHeight + "px");
    canvas.width = pic.naturalWidth;
    canvas.height = pic.naturalHeight;
    ctx.drawImage(pic, 0, 0, width, height);

    // 描画ずみの四角を復元
    for (let i: number = 0; i < $rectList.length; i++) {
      drawRect2canvas($rectList[i][0], $rectList[i][1], $rectList[i][2], $rectList[i][3]);
    }
  }

  // マウス移動中の四角描画
  function drawingRect(event: any): void {
    // 直前に描画した四角を消す
    ctx.clearRect(beforeStartX, beforeStartY, beforeSizeX, beforeSizeY);
    // 写真、描画済みの四角を戻す
    updateCanvas();
    // カーソルの現在位置で四角を描く
    endX = event.offsetX;
    endY = event.offsetY;
    drawRect();
  }

  // 四角を描く
  function drawRect(): void {
    drawRect2canvas(startX, startY, endX - startX, endY - startY);
    
    // 直近の描画情報を更新
    setRectPoint();
  }

  // 四角の点情報を設定する
  function setRectPoint(): void {
    if (startX < endX && startY < endY) {
      // 始点から右下方向に四角を作成
      beforeStartX = startX;
      beforeSizeX  = endX - beforeStartX;
      beforeStartY = startY;
      beforeSizeY  = endY - beforeStartY;
    } else if (startX < endX && startY > endY) {
      // 始点から右上方向に四角を作成
      beforeStartX = startX;
      beforeSizeX  = endX - beforeStartX;
      beforeStartY = endY;
      beforeSizeY  = startY - beforeStartY;
    } else if (startX > endX && startY < endY) {
      // 始点から左下方向に四角を作成
      beforeStartX = endX;
      beforeSizeX  = startX - beforeStartX;
      beforeStartY = startY;
      beforeSizeY  = endY - beforeStartY;
    } else if (startX > endX && startY > endY) {
      // 始点から左上方向に四角を作成
      beforeStartX = endX;
      beforeSizeX  = startX - beforeStartX;
      beforeStartY = endY;
      beforeSizeY  = startY - beforeStartY;
    }
  }

  // canvasにrectを描く
  function drawRect2canvas(x: number, y: number, xSize: number, ySize: number): void {
      // パスをリセット
      ctx.beginPath();

      // 開始座標とサイズ
      ctx.rect(x, y, xSize, ySize);

      // 線の色
      ctx.strokeStyle = "white";

      // 線の太さ
      ctx.lineWidth = 2;

      // 線描画
      ctx.stroke();
  }

  // 描画した四角を保存する
  function saveRect(): void {
    // 直近描画情報を保存
    let rect: any = [beforeStartX, beforeStartY, beforeSizeX, beforeSizeY];
    $rectList = [...$rectList, rect];
    console.log($rectList);
  }
</script>

<div class="center">
  <canvas></canvas>
  {#if $filePathList != undefined}
    {#each $filePathList as filePath, i}
      <img id="pic-{String(i)}" src={filePath[0]} class="no-display" alt=""/>
    {/each}
  {/if}
</div>

<style>
  .center {
    width: 750px;
    height: 500px;
    margin: 0 auto;
  }

  .no-display {
    display: none;
  }
</style>