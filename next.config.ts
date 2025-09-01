import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    additionalData: `
      @import "src/styles/_breakpoints";
      @import "src/styles/_mixins";
      @import "src/styles/_components";
    `
  }
};

export default nextConfig;
