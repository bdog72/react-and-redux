export default function auth () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'Brian Bycynski',
        avatar: '',
        uid: 'brianbycynski'
      })
    }, 2000)
  })
}
