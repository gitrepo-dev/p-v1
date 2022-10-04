export default function swDev() {
  let swUrl = `${process.env.PUBLIC_URL}/sw.js`
  navigator.serviceWorker.register(swUrl).then((response: any) => console.warn(" response ", process.env.PUBLIC_URL))
}