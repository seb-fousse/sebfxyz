export interface IImageData {
  title?: string;
  description?: string;
  tool?: string;
  src: string;
  width: number;
  height: number;
  blurPlaceholder: string;
  alt: string;
}

export interface IPostData {
  title: string;
  date: string;
  contentHtml: string | TrustedHTML;
}