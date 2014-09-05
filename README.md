# ndarray-pixel-sort [![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

A JS implementation of [Kim Asendorf](http://kimasendorf.tumblr.com/)'s
[pixel sort](http://kimasendorf.tumblr.com/post/32936480093/processing-source-code)
glitch technique using [ndarrays](http://github.com/mikolalysenko/ndarray).

Works in the browser using [browserify](http://browserify.org/), or server-side
with Node.

[![ndarray-pixel-sort](http://imgur.com/rVeSJIw.png)](http://hughsk.io/ndarray-pixel-sort)

## Usage

[![NPM](https://nodei.co/npm/ndarray-pixel-sort.png)](https://nodei.co/npm/ndarray-pixel-sort/)

### `sort(image, filterfn, sortfn)`

Applies a pixel sort to an image.

* `image`: the ndarray image to sort. Modified in-place.
* `filterfn(r, g, b)`: takes the color of a pixel and returns `true` if it
  should be sorted.
* `sortfn(a, b)`: a sort comparison function that takes two color `[r, g, b]`
  arrays – should return 0 if equal, above 0 if `a > b` and below 0 if `a < b`.

Check the code in `test.js` for example usage.

## License

MIT. See [LICENSE.md](http://github.com/hughsk/ndarray-pixel-sort/blob/master/LICENSE.md) for details.
