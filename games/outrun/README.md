# Outrun-style pseudo-3d racing game in HTML5 and Javascript

### A note on performance

The performance of this game is **very** machine/browser dependent. It works quite well in modern browsers, especially those with GPU canvas acceleration, but a bad graphics driver can kill it stone dead. So your mileage may vary. There are controls provided to change the rendering resolution and the draw distance to scale to fit your machine.

###### Currently supported browsers include:

 * Firefox (v12+) works great, 60fps at high res - Nice!
 * Chrome (v19+) works great, 60fps at high res... provided you dont have a bad GPU driver
 * IE9 - ok, 30fps at medium res... not great, but at least it works

> _The current state of mobile browser performance is pretty dismal. Dont expect this to be playable on any mobile device._

> _NOTE: I havent actually spent anytime optimizing for performance yet. So it might be possible to make it play well on older browsers, but that's not really what this project is about._

---

###### A note on code structure

This project happens to be implemented in javascript (because its easy for prototyping) but is not intended to demonstrate javascript techniques or best practices. In fact, in order to keep it simple to understand it embeds the javascript for each example directly in the HTML page (horror!) and, even worse, uses global variables and functions (OMG!).

If I was building a real game I would have much more structure and organization to the code, but since its just a racing game tech demo, I have elected to [KISS](http://en.wikipedia.org/wiki/KISS_principle).
