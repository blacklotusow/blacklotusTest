function renderIndex({ props, render }) {
  return {
    index: render.index({
      appHtml: props.appContent.html,
      pageHtml: props.tagArticlesContent.html,
      styles: [props.appContent.style, props.tagArticlesContent.style],
      user: props.user,
      useDroidSansMono: true,
      bodyClass: 'page-TagArticles',
      prefetch: props.tagArticlesContent.content,
    }),
  };
}

export default renderIndex;
