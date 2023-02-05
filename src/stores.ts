import { writable } from 'svelte/store';

// importのtextareaに入力したファイルリスト
export const inputFilePathes: any = writable();
// ファイルパスのリスト
export const filePathList: any = writable();
// 選択中の写真
export const selectedPicture: any = writable();
// 描画した四角のリスト
export const rectList: any = writable();
// 写真を変更したか
export const isPictureChange: any = writable();
// positive listのパス
export const positiveListPath: any = writable();
// negative listのパス
export const negativeListPath: any = writable();
