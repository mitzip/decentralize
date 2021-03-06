module.exports = {
  services: {
    http: {
      port: 9201
    }
  },
  service: {
    name: 'DECENTRALIZE',
    authority: 'localhost:9201',
    proto: 'http',
    namespace: 'decentralize',
    mission: 'the podcast',
    description: 'The best place for learning about what\'s going on with the latest decentralized tech.',
    source: 'https://github.com/martindale/decentralize',
    points: []
  },
  source: {
    sockets: 'ws://',
    proto: 'http',
    host: 'localhost',
    port: '15005'
  },
  soundcloud: {
    clientID: '98ce66124fabdff2f33beb2f810a0a25',
    slug: 'decentralize-podcast'
  }
}
