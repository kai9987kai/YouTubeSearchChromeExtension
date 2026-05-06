(() => {
  'use strict';

  const YOUTUBE_FEED_BASE = 'https://www.youtube.com/feeds/videos.xml?channel_id=';

  async function loadLatestVideos(channelId, limit = 5) {
    if (!channelId || typeof channelId !== 'string') {
      throw new Error('Missing YouTube channel ID.');
    }

    const response = await fetch(`${YOUTUBE_FEED_BASE}${encodeURIComponent(channelId.trim())}`);
    if (!response.ok) {
      throw new Error(`YouTube feed returned HTTP ${response.status}.`);
    }

    const xmlText = await response.text();
    const documentXml = new DOMParser().parseFromString(xmlText, 'application/xml');
    const parseError = documentXml.querySelector('parsererror');
    if (parseError) {
      throw new Error('Could not parse YouTube feed XML.');
    }

    return [...documentXml.querySelectorAll('entry')].slice(0, limit).map((entry) => {
      const title = entry.querySelector('title')?.textContent?.trim() || 'Untitled video';
      const link = entry.querySelector('link')?.getAttribute('href') || 'https://www.youtube.com/';
      const published = entry.querySelector('published')?.textContent || '';
      const videoIdElement = entry.getElementsByTagName('yt:videoId')[0] || entry.querySelector('videoId');
      const videoId = videoIdElement?.textContent || '';
      return { title, link, published, videoId };
    });
  }

  window.StarWarsNuggetsFeed = { loadLatestVideos };
})();
