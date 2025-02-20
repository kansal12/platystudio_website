module.exports = {
  siteUrl: "https://platy.studio", // Change this to your domain
  generateRobotsTxt: true, // Generate robots.txt
  sitemapSize: 5000, // Max URLs per sitemap file
  exclude: ["/admin", "/private"], // Exclude pages
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
    ],
  },
};
