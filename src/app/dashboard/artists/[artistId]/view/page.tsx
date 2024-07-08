
export default function ArtistViewPage({
  params,
}: {
  params: { artistId: string | any };
}) {
  return <div>ArtistPage - {params.artistId}</div>;
}
