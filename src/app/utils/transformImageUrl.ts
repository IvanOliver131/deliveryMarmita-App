import { environment } from 'src/environments/environment';

const { productImagesServerUrl } = environment;

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export default function transformProductImageUrl(link: string): string {
  return `${productImagesServerUrl}${link}`;
}
