export default function Hello() {
  console.log(process.env.NEXT_PUBLIC_WOOCOMMERCE_READ_ONLY_CONSUMER_SECRET);
  return <div>hello there</div>;
}
