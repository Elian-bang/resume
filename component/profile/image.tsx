export default function ProfileImage({
  src,
  name,
  initial,
}: {
  src?: string;
  name?: string;
  initial?: string;
}) {
  return (
    <div className="profile-image-wrap">
      {src ? (
        <img className="profile-image" src={src} alt={name || 'Profile'} />
      ) : (
        <div className="profile-image profile-initial" role="img" aria-label={name || 'Profile'}>
          {initial || (name ? name.slice(0, 1) : '')}
        </div>
      )}
    </div>
  );
}
