import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SuspensionPolicyPage } from '@/components/SuspensionPolicyPage';
import { getSuspensionPolicy, suspensionPolicies } from '@/data/suspension-policies';

type PageProps = { params: Promise<{ slug:string }> };

export function generateStaticParams(){ return suspensionPolicies.map(p=>({slug:p.slug})); }

export async function generateMetadata({params}:PageProps):Promise<Metadata>{
  const {slug}=await params;
  const policy=getSuspensionPolicy(slug);
  if(!policy)return {};
  const url=`https://rkdigitalmedia.in/services/google-ads-suspension-recovery/policies/${policy.slug}`;
  return {title:`${policy.h1} | R.K Digital Media`,description:policy.intro,robots:{index:false,follow:true},alternates:{canonical:url},openGraph:{title:`${policy.h1} | R.K Digital Media`,description:policy.intro,type:'website',url,siteName:'R.K Digital Media'}};
}

export default async function Page({params}:PageProps){
  const {slug}=await params;
  const policy=getSuspensionPolicy(slug);
  if(!policy)notFound();
  return <SuspensionPolicyPage policy={policy}/>;
}
