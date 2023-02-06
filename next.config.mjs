const remarkGfm = require("remark-gfm");
const createMdx = require("@next/mdx");

const widthMDX = createMdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    // providerImportSource: '@mdx-js/react',
  },
});

const nextConfig = {
  swcMinify: true,
  reactStrictMode: false,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

export default widthMDX(nextConfig);
