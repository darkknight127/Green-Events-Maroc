import manifest from "../../data/image-manifest.json";

export default function OptimizedImage({ src, srcSet, sizes = "(max-width: 767px) 100vw, 60vw", loading = "lazy", decoding = "async", ...props }) {
  let key = src;
  try { key = decodeURIComponent(src); } catch { /* Keep unmatched URLs unchanged. */ }
  const optimized = manifest[key];
  return <img {...props} src={optimized?.src ?? src} srcSet={srcSet ?? optimized?.srcSet} sizes={sizes} loading={loading} decoding={decoding} />;
}
