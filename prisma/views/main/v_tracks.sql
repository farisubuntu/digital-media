SELECT
  TRACK.Name,
  TRACK.Composer,
  TRACK.Milliseconds,
  ALBUM.Title,
  MEDIA_TYPE.Name,
  GENRE.Name
FROM
  TRACK
  JOIN ALBUM ON ALBUM.AlbumId = TRACK.AlbumId
  JOIN Media_Type ON Media_Type.MediaTypeId = TRACK.MediaTypeId
  JOIN GENRE ON Genre.GenreId = TRACK.GenreId;