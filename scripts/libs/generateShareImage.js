/* https://flaviocopes.com/canvas-node-generate-image/ */

const fs = require('fs')
const { createCanvas, loadImage } = require('canvas')

/* Canvas set-up */

const width = 1200
const height = 630

const canvas = createCanvas(width, height)
const context = canvas.getContext('2d')

/* Change the slug text here 👇 */

const type = 'Article';
const text = 'My Typical Day';
const author = '— Danny de Vries';
const slug = 'my-typical-day';

/* Set the background color */

context.fillStyle = '#dadada'
context.fillRect(0, 0, width, height)

context.textAlign = 'center'
context.fillStyle = '#000'

/* Write file to disk */

loadImage('./static/img/share-template.png').then(image => {
  context.drawImage(image, 0, -20)
  context.font = 'bold 30pt Menlo'
  context.fillText(type, 600, 105)
  context.font = 'bold 40pt Menlo'
  context.fillText(author, 600, 500)
  context.font = 'bold 80pt Menlo'
  context.fillText(text, 600, 350)
  const buffer = canvas.toBuffer('image/jpeg')
  fs.writeFileSync(`./static/img/share/${slug}.jpg`, buffer)
})
