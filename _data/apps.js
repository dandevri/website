const original = [
  {
    title: "Notion",
    tag: "macOS-app",
    link: "https://www.notion.so",
    description: "My most used app, period. I use Notion for almost everything. This is where my to-do list lives, notes for meetings, interior design inspiration, projects to work on, bookmarked links and many more things.",
  },
  {
    title: "Fantastical",
    tag: "macOS-app",
    link: "https://flexibits.com/fantastical",
    description: "My calendar of choice. Great interface and design. I can't live without the calendar sets and conference calls feature.",
  },
  {
    title: "Apple Mail",
    tag: "macOS-app",
    link: "https://en.wikipedia.org/wiki/Apple_Mail",
    description: "The trusty default mail app. I've tried many different mail clients of but always come back to the default app.",
  },
  {
    title: "1Password",
    tag: "macOS-app",
    link: "https://1password.com",
    description: "The best password manager. Combine it with their browser plugins and you'll have your password and login credentials auto-filled in no-time.",
  },
  {
    title: "Alfred",
    tag: "utility",
    link: "https://www.alfredapp.com",
    description: "macOS swiss army knife and a great spotlight replacement. It's worth paying for a license you can add workflows.",
  },
  {
    title: "Bartender",
    tag: "utility",
    link: "https://www.macbartender.com",
    description: "Hides mac menu bar items and lets you organize them in a handy drop-down menu. Also useful for background apps that you want hidden permanently.",
  },
  {
    title: "Bitbar",
    tag: "utility",
    link: "https://github.com/matryer/bitbar",
    description: "Let's you put the output from any script or program in your Mac OS X Menu Bar. You can install plugins to have it show many different things.",
  },
  {
    title: "Objective-See",
    tag: "security",
    link: "https://objective-see.com",
    description: "I install basically every security and privacy utility from objective-see.Oversight, LuLu, BlockBlock etc. I have them all.",
  },
  {
    title: "Cloudfare Warp",
    tag: "internet",
    link: "https://cloudflarewarp.com",
    description: "A faster and better internet resolver made by Cloudfare.",
  },
  {
    title: "Figma",
    tag: "design",
    link: "https://www.figma.com/",
    description: "Most of my prototyping happens straight in the browser. I know my way around tools as Sketch, Invision Studio, Adobe XD, Framer X etc. but whenever I do some design work I'll fire up Figma.",
  },
  {
    title: "Firefox",
    tag: "browser",
    link: "https://www.mozilla.org/en-US/firefox/new/",
    description: "Main browser with the developer tools of my choice, especially for working with layout and typography. Also have almost any other browser installed for cross-browser testing.",
  },
  {
    title: "iStat Menus",
    tag: "utility",
    link: "https://bjango.com/mac/istatmenus/",
    description: "Mac system monitor but also useful for detailed battery status and time zone controls.",
  },
  {
    title: "Microsoft Teams",
    tag: "meetings",
    link: "https://www.microsoft.com/en-us/microsoft-teams/log-in",
    description: "Hate it but have to because our university uses everything from Microsoft. I try to stay far away from Microsoft products, but this is where we teach our students.",
  },
  {
    title: "ProtonVPN",
    tag: "internet",
    link: "https://protonvpn.com",
    description: "Don't have a VPN turned on 100% of my time but whenever I visit websites of big tech I like to keep my browsing history private.",
  },
  {
    title: "Rectangle",
    tag: "utility",
    link: "https://github.com/rxhanson/Rectangle",
    description: "Move and resize windows on macOS with keyboard shortcuts and snap areas",
  },
  {
    title: "Signal",
    tag: "messaging",
    link: "https://www.signal.org",
    description: "Privacy-friendly messaging, open-source and end-to-end encryption. No ads. No trackers. No kidding.",
  },
  {
    title: "Slack",
    tag: "messaging",
    link: "https://slack.com/intl/en-nl/",
    description: "Part of a couple of communities I like to follow that have Slack workspaces. I don't use it daily.",
  },
  {
    title: "Spotify",
    tag: "music",
    link: "https://www.spotify.com/",
    description: "Spotify all the way. I create a custom playlist every week and curate a lot of house music. The daily mixes and curated playlists are not that bad.",
  },
  {
    title: "Stack",
    tag: "cloud",
    link: "https://www.transip.nl/stack/",
    description: "Online cloud storage and back-up service. I use this for documents etc. that I use daily. The servers are in the Netherlands and for a small fee you get 2tb of storage.",
  },
  {
    title: "Transmit",
    tag: "cloud",
    link: "https://www.panic.com/transmit/",
    description: "More then just a FTP client. I use it to connect to servers and other cloud hosting services.",
  },
  {
    title: "Visual Studio Code",
    tag: "code",
    link: "https://code.visualstudio.com",
    description: "Code editor of choice and use the integrated terminal along with it. Switched from using Atom and Hyper. Currently using the Material Theme with Fira Code.",
  },
   {
    title: "Open Broadcast Software",
    tag: "recording",
    link: "https://obsproject.com",
    description: "Most people see OBS as live streaming software but it's also great to record your screen for courses and tutorials.",
  },
  {
    title: "IINA",
    tag: "media",
    link: "https://iina.io",
    description: "Modern open source media player for macOS. A better alternative to Quicktime. The UI is better and more configurable and plays back more file types.",
  },

]

const update1621 = [
  {
    title: "Notability",
    tag: "notes",
    link: "https://www.gingerlabs.com",
    description: "Note-taking that I use on my iPad. Great features, good syncing and back-up options to have your notes sync everywhere.",
  },
  {
    title: "Miro",
    tag: "notes",
    link: "https://miro.com",
    description: "Brainstorming and 'whiteboarding' tool. Whenever I need to think about a subject or collaborate on ideas Miro is my go-to.",
  },
  {
    title: "Apollo",
    tag: "social",
    link: "https://apolloapp.io",
    description: "Beautiful Reddit app that's really fast. Built by a former Apple employee and the interface is based on feedback of thousands of Redditors.",
  },
  {
    title: "Castro",
    tag: "podcast",
    link: "https://castro.fm",
    description: "Podcast app makes it easy to manage lots of podcasts. They have an unique approach to listening podcasts with their 'inbox' feature.",
  },
  {
    title: "Firefox Focus",
    tag: "browser",
    link: "https://www.mozilla.org/en-US/firefox/mobile/",
    description: "On mobile my main browser of choice is Firefox Focus. Usually to quickly search something and then closing the web page.",
  },
  {
    title: "Goodreads",
    tag: "reading",
    link: "https://www.goodreads.com",
    description: "To keep track of what I'm reading and to discover new books. I like to read books in the same category which the shelves features allows me to do.",
  },
  {
    title: "Halide",
    tag: "photography",
    link: "https://halide.cam",
    description: "The best camera app for iOS. And the Mark II version is even better. A complete redesign and tons of 'pro' tools and features.",
  },
  {
    title: "Hue",
    tag: "lighting",
    link: "https://www.philips-hue.com/en-us/explore-hue/apps",
    description: "For controlling the Hue lights and accessoires troughout my home. Also great for setting up routines.",
  },
  {
    title: "Oak",
    tag: "life",
    link: "https://www.oakmeditation.com",
    description: "Medidation on a consistent basis is quite hard for me. But Oak offers small guided (breathing) exercises with make it easier for me to do some small exercises troughout the day.",
  },
  {
    title: "Parcel",
    tag: "packages",
    link: "https://parcelapp.net",
    description: "Delivery tracking app where you can store all deliveries in one place. Just add the tracking numbers and no more search trough e-mails.",
  },
  {
    title: "Tweetbot",
    tag: "social",
    link: "https://tapbots.com/tweetbot/",
    description: "Third party client application for Twitter with some great power tools. Like timeline filters to make curated timelines.",
  },
  {
    title: "UniFi Network",
    tag: "internet",
    link: "https://apps.apple.com/us/app/unifi-network/id1057750338",
    description: "To manage my home network, reset access points, see network status, which devices are connected. Basically al the network information you expect in a clean interface.",
  },
]

const update1721 = [
  {
    title: "Jitsi",
    tag: "meetings",
    link: "https://meet.jit.si",
    description: "Secure and privacy-friendly video conferencing. Open-source and end-to-end encryption by default.",
  },
  {
    title: "Tresorit Send",
    tag: "files",
    link: "https://send.tresorit.com",
    description: "Privacy-friendly alternative to other file sharing services (like WeTransfer). End-to-end encrypted and completely GDPR compliant.",
  },
  {
    title: "Feedbin",
    tag: "news",
    link: "https://send.tresorit.com",
    description: "My RSS reeder of choice. Fantastic interface and great for subscribing to blogs and newsletters to keep my mail inbox clutter free.",
  },
  {
    title: "GitHub",
    tag: "code",
    link: "https://github.com",
    description: "I keep all my personal coding projects in public and  private repositories on GitHub, and have been doing it since I started coding.",
  },
  {
    title: "Netlify",
    tag: "code",
    link: "https://www.netlify.com",
    description: "Most of my websites are deployed on Netlify. Without thinking about servers or devops. It just works.",
  },
  {
    title: "TransIP",
    tag: "code",
    link: "https://send.tresorit.com",
    description: "Where I buy my domains and host my VPS. Maybe a bit more expensive then regular hosting but they are Dutch, have a great interface and offer good support.",
  },
  {
    title: "Grammarly",
    tag: "writing",
    link: "https://grammarly.com",
    description: "Helps me catch grammar mistakes and wording issues. It offers correction which you can apply with one click to your text.",
  },
  {
    title: "Hemmingway",
    tag: "writing",
    link: "http://www.hemingwayapp.com",
    description: "For the flow of text. It highlights complex sentences and common 'logic' errors.",
  },
]

module.exports = {
  original,
  update1621,
  update1721
}
