module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({
    './src/assets/styles': 'styles/',
    './src/assets/img': 'img/',
    './src/assets/fonts': 'fonts/',
    './src/assets/favicon_io': 'favicon/',
    './src/assets/scripts': 'scripts/',
  });
  eleventyConfig.addUrlTransform(({ url }) => {
    // `url` is guaranteed to be a string here even if you’re using `permalink: false`
    if (url.match(/\.[a-z]{2}\.html$/i)) {
      return url.slice(0, -1 * '.en.html'.length) + '/';
    }

    // Returning undefined skips the url transform.
  });

  eleventyConfig.addWatchTarget('./src/assets/');

  // Laad de JavaScript-data en geef het door aan Eleventy als partners variabele
  eleventyConfig.addJavaScriptFunction(
    'partners',
    require('./src/_data/partners.js')
  );

  return {
    dir: {
      input: './src/pages/',
      output: 'build',
      includes: '../_partials',
      layouts: '../_layouts',
    },
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    templateFormats: ['html', 'njk', 'md'],
  };
};
