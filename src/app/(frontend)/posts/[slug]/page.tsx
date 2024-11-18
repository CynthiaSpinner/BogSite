import { sanityFetch } from '@/sanity/lib/live'
import { POST_QUERY } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import { components } from "@/sanity/portableTextComponents";
import { Post } from '@/components/Post'

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const {data: post} = await sanityFetch({query: POST_QUERY, params: await params})

  if (!post) {
    notFound()
  }

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      
      <Post {...post} />
      <Link href="/posts">&larr; Return to index</Link>
      
    </main>
  );
}


