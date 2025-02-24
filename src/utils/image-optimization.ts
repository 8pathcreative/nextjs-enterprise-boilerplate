import { ImageLoader } from 'next/image'

export const imageLoader: ImageLoader = ({ src, width, quality = 75 }) => {
  return `${process.env.NEXT_PUBLIC_CDN_URL}/image/${src}?w=${width}&q=${quality}`
}

export const imageSizes = {
  thumbnail: 240,
  small: 640,
  medium: 1080,
  large: 1920,
}

{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "types": ["node"],
}