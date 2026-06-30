<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" encoding="utf-8" />

  <xsl:template match="/">
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title><xsl:value-of select="/rss/channel/title" /></title>
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            background: #0d0d0d;
            color: #ccc;
            font-family: monospace;
            font-size: 14px;
            padding: 2rem;
          }
          a { color: #4a9eff; text-decoration: none; }
          a:hover { text-decoration: underline; }
          .feed-header {
            border-bottom: 1px solid #333;
            padding-bottom: 1.5rem;
            margin-bottom: 2rem;
          }
          .feed-header h1 {
            color: #ff8c00;
            font-size: 1.4rem;
            margin-bottom: 0.4rem;
          }
          .feed-header p {
            color: #888;
            font-size: 0.85rem;
          }
          .feed-header .feed-url {
            margin-top: 0.5rem;
            font-size: 0.8rem;
            color: #555;
          }
          .item {
            padding: 1rem 0;
            border-bottom: 1px solid #1e1e1e;
          }
          .item-title {
            color: #ff8c00;
            font-size: 1rem;
            font-weight: bold;
            margin-bottom: 0.3rem;
          }
          .item-title a { color: inherit; }
          .item-date {
            color: #4a9eff;
            font-size: 0.8rem;
            margin-bottom: 0.4rem;
          }
          .item-description {
            color: #aaa;
            font-size: 0.85rem;
            line-height: 1.5;
          }
        </style>
      </head>
      <body>
        <div class="feed-header">
          <h1><xsl:value-of select="/rss/channel/title" /></h1>
          <p><xsl:value-of select="/rss/channel/description" /></p>
          <p class="feed-url">
            <a>
              <xsl:attribute name="href"><xsl:value-of select="/rss/channel/link" /></xsl:attribute>
              <xsl:value-of select="/rss/channel/link" />
            </a>
          </p>
        </div>
        <xsl:for-each select="/rss/channel/item">
          <div class="item">
            <div class="item-title">
              <a>
                <xsl:attribute name="href"><xsl:value-of select="link" /></xsl:attribute>
                <xsl:value-of select="title" />
              </a>
            </div>
            <div class="item-date"><xsl:value-of select="pubDate" /></div>
            <div class="item-description"><xsl:value-of select="description" /></div>
          </div>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
