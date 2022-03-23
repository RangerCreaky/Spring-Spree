export default function Image({
  alt = "",
  src = "",
  backup = "/assets/images/placeholder.jpg",
  ...other
}) {
  const handleError = ({ currentTarget }) => {
    currentTarget.onerrr = null;
    currentTarget.src = backup;
  };

  return <img onError={handleError} {...other} src={src} alt={alt} />;
}
