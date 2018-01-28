import { createCopyBuilder, copyMatcher, cssMatcher, privateJsMatcher, publicJsMatcher,
  createPrivateJsBuilder, createCssBuilder, createPublicJsBuilder } from 'xazure-builder-common';

const source = 'src';
const dest = 'dist';

export default {
  source,
  dest,
  builders: [
    { name: 'publicJs', matcher: privateJsMatcher, builder: createPrivateJsBuilder(source, dest) },
    { name: 'privateJs', matcher: publicJsMatcher, builder: createPublicJsBuilder(source, dest) },
    { name: 'css', matcher: cssMatcher, builder: createCssBuilder(source, dest) },
    { name: 'copy', matcher: copyMatcher, builder: createCopyBuilder(source, dest) }
  ]
};