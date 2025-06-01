# 🗣️ OpenComplaint

**OpenComplaint** is a public platform where real-world complaints, missing product features, or idea sparks are tracked, voted on, and brought to life by verified developers and designers. It's where **users' frustrations** are turned into **community-powered innovation**.

---

## 🚀 What It Does

- Let **anyone** post feature ideas, complaints, or suggestions for real-world or digital products.
- Users vote on posts they care about. The more traction an idea gets, the more likely it is to be taken up.
- Verified developers can **pick up ideas**, **bid on high-traction concepts**, and build solutions transparently.
- Designers submit concept art, wireframes, or UX flows — which can be free or sold/licensed.
- Projects evolve publicly with automated repo setup, live progress tracking, and community engagement.
- All actions, credits, and contributions are recorded transparently, with **verified identities** and **analytics**.

---

## 🧩 Core Features

### 🎯 For Users

- Post anonymously or with an account.
- Vote, subscribe, track project progress.
- Directly address companies (if registered on the platform).
- Social media integration (e.g. `web.app/complaint:your complaint here` auto-posts into system).

### 👨‍💻 For Developers

- Sign in via GitHub, GitLab, etc.
- Verified identity required.
- Auto-generated Git repos.
- Activity tracked via IDE plugin (similar to Wakatime).
- Auto-generated CVs, GitHub-based analytics, and public profiles.
- Optional hire mode for discovery by companies.

### 🎨 For Designers

- Submit concepts, UI/UX assets.
- License or sell designs to devs or companies.
- Contributions auto-attributed and watermarked.
- Appear in recommendations for visual-focused complaints.

### 🏢 For Companies

- Respond to or ignore public complaints about your products.
- Set bounties for desired features or fixes.
- Hire vetted developers or designers.
- Receive structured community reports via moderators.

---

## 💸 Currency System: Berries

- `1 Berry = $0.50 USD`
- Used for voting boosts, developer bounties, project tipping, and design licensing.
- High-vote complaints unlock **bidding** for developers — winner pays, others lose nothing.

---

## 📦 Project Lifecycle

1. A complaint or idea is posted.
2. Gemini AI checks for duplicates or similar entries.
3. Users vote — the idea gains visibility.
4. If highly upvoted, it moves into **"Bid Zone"** for devs to compete.
5. The winner gets a repo + setup; progress is tracked transparently.
6. Users monitor updates, beta test, comment, and sponsor the project.
7. Completion → release → crediting → archive.

---

## 🔐 Authentication & Roles

- Users: Email / Google login (vote, comment, subscribe).
- Developers: GitHub/GitLab required + email validation.
- Companies: Corporate email + human verification.
- Anonymous posting: allowed, but no voting or credit.
- 2FA: Required for devs, moderators, and company accounts.

---

## 🌍 Region-Awareness

- Complaints are geo-tagged.
- Users only see relevant regional complaints.
- Example: US-only complaint won’t be shown in South Africa feed.

---

## 🧠 AI Integration (Gemini)

- Duplicate detection
- Complaint summarization
- Developer recommendations
- Auto CV + profile generation
- Complaint structuring before posting

---

## 📊 Analytics & Performance Tracking

- Developer time tracked (via IDE plugin).
- Repo activity monitored (commits, tests, issues).
- Community feedback logged per project.
- Public dashboards show top ideas, regions, and categories.

---

## 🌈 Diversity-First

Supports identity visibility for:

- Women in Tech
- LGBTQIA+ in Tech
- Religious dev communities
- Cultural inclusion by region

---

## 🚀 Tech Stack

| Layer               | Stack / Tool                                                                                     |
| ------------------- | ------------------------------------------------------------------------------------------------ |
| **Frontend**        | [OpenNext.js](https://open-next.js.org)                                                          |
| **Hosting**         | [Cloudflare Pages](https://pages.cloudflare.com/)                                                |
| **Database**        | [Cloudflare D1](https://developers.cloudflare.com/d1/) + [Drizzle ORM](https://orm.drizzle.team) |
| **Storage**         | [Cloudflare R2](https://developers.cloudflare.com/r2/)                                           |
| **Auth**            | Supabase Auth _(or Cloudflare Workers Auth, optional)_                                           |
| **Design Import**   | [Figma Integration](https://www.figma.com)                                                       |
| **AI Assist**       | [Gemini AI](https://deepmind.google/technologies/gemini/) for deduplication & summarization      |
| **Payments**        | USDT (TRC-20) using internal currency "Berries"                                                  |
| **Version Control** | GitHub / GitLab                                                                                  |
| **Dev Activity**    | Custom Wakatime-like IDE plugin                                                                  |
| **ORM**             | [Drizzle ORM](https://orm.drizzle.team)                                                          |

---

## 🧠 Key Features

- 📢 **Post complaints or ideas** anonymously or with an account
- 👍 **Voting system** with authentication (anonymous users can’t vote)
- 🔄 **Complaint becomes a project** once it's claimed or funded
- 🏗️ **Verified developers** can bid to take up high-stake ideas
- 👥 **Designers** can contribute UI/UX, concept art, or product mocks
- 🎨 **Designs** are watermarked and optionally sellable or free
- 👩‍💻 **CV/resume generation** for developers based on GitHub and tracked activity
- 💰 **"Berries" token system** for funding, staking, and bounties
- 📡 **Public progress tracking**, project feeds, and milestone updates
- 🔗 **Automatic Git repo** generation when a dev starts working
- 📊 **Analytics** on idea categories, regions, and funding volume
- 📍 **Geofenced complaints** — only visible to users from relevant regions
- 💌 **Company feedback** requests are moderated and responses posted
- 🛡️ **Moderation**, **verification**, and opt-in hiring profiles

---

## 📢 Social Posting Format

You can post complaints from Twitter, Mastodon, etc. using this format:

````yaml

We'll pull this into the platform and attribute it to you (if connected) or as anonymous.

---

## 🤝 Contributing

To contribute:
- Fork the repo
- Clone & set up environment (see below)
- Send PRs with clear explanations
- Respect the [Code of Conduct](./CODE_OF_CONDUCT.md)

---

## 🛠 Local Development

```bash
# Clone project
git clone https://github.com/yourname/opencomplaint.git
cd opencomplaint

# Install dependencies
pnpm install

# Configure environment
cp .env.example .env
# Add Supabase keys, Netlify dev config, GitHub auth keys

# Start dev server
pnpm dev

````

## 📄 License

MIT – feel free to fork, adapt, and use.

## ✉️ Contact & Support

Discord (coming soon)

Email us

Twitter/X: @opencomplaint
