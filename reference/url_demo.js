const url = require('url')

const myUrl = new URL('http://mywebsite.com:3000/hello.html?id=100&status=active')

// full URL
console.log(myUrl.href)
console.log(myUrl.toString())

// Host
console.log(myUrl.host)

// Hostname (does not include port)
console.log(myUrl.hostname)

// Pathname
console.log(myUrl.pathname)

// query
console.log(myUrl.search)

// Search params objects
console.log(myUrl.searchParams)

// Add param
myUrl.searchParams.append('name', 'jjyu')
console.log(myUrl.searchParams)

// Loop through params
myUrl.searchParams.forEach( (value, name) => console.log(`${name}: ${value}`))