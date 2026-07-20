const BLOB_BASE_URL = 'https://2rrp2bupetql8xix.public.blob.vercel-storage.com'

// Large video assets are hosted on Vercel Blob rather than bundled through
// the app — Vercel's build doesn't resolve Git LFS pointers, and shipping
// ~90MB of video through the build output isn't a good idea anyway.
export const MEDIA = {
  heroVideo: `${BLOB_BASE_URL}/hero1.mp4`,
  testimonialsVideo: `${BLOB_BASE_URL}/testimonies.mp4`,
  transformationVideo: `${BLOB_BASE_URL}/transformation.mp4`,
  gymTourVideo: `${BLOB_BASE_URL}/gym-tour.mp4`,
  communityVideo: `${BLOB_BASE_URL}/community.mp4`,
} as const
