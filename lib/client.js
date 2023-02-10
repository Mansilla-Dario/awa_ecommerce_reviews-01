import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId:'4zpaevom',
  dataset:'production',
  apiVersion:'2023-02-09',
  useCdn:true,
  token:process.env.NEX_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);
export const urlFor=(source)=>builder.image(source);