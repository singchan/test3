const site =  require('./_data/site.js')

module.exports = function(eleventyConfig) {

  // plugins
  const sitemap = require("@quasibit/eleventy-plugin-sitemap")
  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: site.url + site.baseurl,
    },
  })

  // copy folders
  eleventyConfig.addPassthroughCopy('assets')
  eleventyConfig.addPassthroughCopy('uploads')
  eleventyConfig.addPassthroughCopy('images')
  eleventyConfig.addPassthroughCopy('css/*.css')
  eleventyConfig.addPassthroughCopy('css/*.jpg') // favicon
  eleventyConfig.addPassthroughCopy('css/*.png') // favicon
  eleventyConfig.addPassthroughCopy('css/*.ico') // favicon
  eleventyConfig.addPassthroughCopy('js')
  eleventyConfig.addPassthroughCopy('CNAME')

  // other config
  return {
    dir: {
      layouts: '_layouts', // for now stastic and Silex publish only there
    },
  }
}
