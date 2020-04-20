const data = require ('@begin/data')

exports.handler = async function http (req) {
  console.log('Begin API called')

  // await data.set({ table: 'recipes', key: 1, recipe: 'Spaghetti Squash Pad Thai' })
  const msg = await data.get({ table: 'recipes', key: 1 })

  return {
    headers: {
      'content-type': 'application/json; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: JSON.stringify({
      msg: msg
    })
  }
}
