import React from "react";

export default function ArtistPage({
  params,
}: {
  params: { artistId: string | any };
}) {
  return <div>ArtistPage - {params.artistId}</div>;
}
