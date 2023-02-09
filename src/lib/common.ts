import { filePathListStore, selectedPictureStore } from "../stores";
import { get } from "svelte/store";

export function changePicture(cnt: number): void {
  const selectedPicture: any = get(selectedPictureStore);
  const filePathList: any = get(filePathListStore);
  const index: number = Number(selectedPicture.split("-")[1]);

  let newIndex: number = index + cnt;
  if (newIndex < 0) {
    newIndex = filePathList.length - 1;
  } else if (newIndex > filePathList.length - 1) {
    newIndex = 0;
  }
  selectedPictureStore.set("#pic-" + String(newIndex));
  console.log(newIndex);
}

export function getSelectedPictureIndex(): number {
  const selectedPicture: any = get(selectedPictureStore);
  let pic: any = document.querySelector(selectedPicture);
  if (pic == undefined) return -1;

  return Number(pic.id.split("-")[1]);
}