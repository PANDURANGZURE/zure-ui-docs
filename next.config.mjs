import  nextra  from "nextra"

/** @type {import('next').NextConfig} */
const nextConfig = {};

const withNextra = nextra({
  defaultShowCopyCode: true,
})

export default withNextra(nextConfig);