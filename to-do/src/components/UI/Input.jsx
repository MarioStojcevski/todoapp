export default function Input({ name, placeholder, ...props }) {
  return <input name={name} id={name} placeholder={placeholder} {...props} />;
}
