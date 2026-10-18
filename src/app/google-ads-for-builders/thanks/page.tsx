import BuildersThanksClient from './BuildersThanksClient';

type SearchParams = Record<string, string | string[] | undefined>;

function readParam(value: string | string[] | undefined): string {
  return Array.isArray(value) ? (value[0] || '') : (value || '');
}

export default function BuildersThanksPage({ searchParams }: { searchParams: SearchParams }) {
  const id = readParam(searchParams.id);
  const ref = readParam(searchParams.l);
  const city = readParam(searchParams.city);

  return (
    <BuildersThanksClient
      hasRequest={Boolean(id)}
      initialId={id}
      initialRef={ref}
      initialCity={city}
    />
  );
}
