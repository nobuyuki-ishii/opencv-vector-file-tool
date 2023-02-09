import { writable } from 'svelte/store';

// importのtextareaに入力したファイルリスト
export const inputFilePathStore: any = writable();
// ファイルパスのリスト
export const filePathListStore: any = writable();
// 選択中の写真
export const selectedPictureStore: any = writable();
// 描画した四角のリスト
export const rectListStore: any = writable();
// 写真を変更したか
export const isPictureChangeStore: any = writable();
// positive listのパス
export const positiveListPathStore: any = writable('');
// negative listのパス
export const negativeListPathStore: any = writable('');
