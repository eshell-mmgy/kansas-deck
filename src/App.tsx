import { SlideContainer } from './components/core/SlideContainer'
import { TitleSlide } from './components/layouts/TitleSlide'
import { DividerSlide } from './components/layouts/DividerSlide'
import { BulletListSlide } from './components/layouts/BulletListSlide'
import { NumberedColumnsSlide } from './components/layouts/NumberedColumnsSlide'
import { SplitImageContentSlide } from './components/layouts/SplitImageContentSlide'
import { StatHighlightSlide } from './components/layouts/StatHighlightSlide'
import { QuoteSlide } from './components/layouts/QuoteSlide'
import { NextStepsSlide } from './components/layouts/NextStepsSlide'
import { ContactSlide } from './components/layouts/ContactSlide'
import { LadderSlide } from './components/layouts/LadderSlide'

function App() {
  return (
    <SlideContainer>
      {/* ============================================================
          COVER
          ============================================================ */}
      <TitleSlide
        clientName="HORIZON"
        subtitle="Workshop Talking Points"
        date="February 2026"
        meetingTopics={[
          'Session 1: The Website From 2030',
          'Session 2: There Is No Such Thing as an Original Idea',
          'Section 3: UI/UX Architecture & Planning for Delivery Teams',
        ]}
        backgroundImage="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=900&fit=crop"
      />

      {/* ============================================================
          SESSION 1 — THE WEBSITE FROM 2030
          ============================================================ */}

      {/* 2 — Session 1 Divider */}
      <DividerSlide
        title="The Website From 2030"
        headerOne="Session 1 — 75 minutes"
        subtitleOne="Open brainstorm, no constraints"
        headerTwo="The Premise"
        subtitleTwo="Unlimited resources. The most advanced destination platform on earth."
        variant="dark"
      />

      {/* 3 — The Premise */}
      <QuoteSlide
        quote="Build me the most advanced destination platform on earth. What would it do? What would it feel like?"
        highlightWords={['most advanced destination platform']}
        variant="dark"
      />

      {/* 4 — Memory Like a Concierge */}
      <BulletListSlide
        title="Memory Like a Concierge"
        bullets={[
          'Remembers your life chapter — visited with a partner two years ago, back with kids this time. Content, tone, and imagery reshape automatically.',
          'Fifth visit? Skips the intro entirely — "Welcome back. Here\'s what\'s new since October."',
          'Not just "you viewed beaches." A real understanding of who you are and why you\'re here.',
        ]}
      />

      {/* 5 — Platform Publishes Itself */}
      <SplitImageContentSlide
        headline="The Platform Publishes Itself"
        body="While the DMO sleeps, Horizon watches real-time signals — trending TikTok audio, search spikes, weather events — and autonomously generates, tags, and publishes content. A rainstorm hits? The homepage shifts to indoor experiences and spa deals before anyone wakes up."
        image="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=1200&h=900&fit=crop"
        imagePosition="left"
        variant="dark"
      />

      {/* 6 — AI Agents as Visitors */}
      <BulletListSlide
        title="AI Agents Are First-Class Visitors"
        bullets={[
          'By 2030, a huge chunk of "visitors" are autonomous AI agents booking trips on behalf of humans.',
          'The site has two front doors: one for people (emotional, inspirational), one for machines (structured data, availability feeds, preference-matching APIs). robost.txt vs llms.txt',
          'The platform serves a completely different experience layer to these agents — while the human-facing layer stays untouched.',
        ]}
      />

      {/* 7 — Destination Follows You */}
      <SplitImageContentSlide
        headline="The Destination Follows You Off the Site"
        body={`You're walking down a street in Fort Myers. Your phone gets a subtle nudge: "The shrimp tacos at Nervous Nellie's are 2 minutes away — 94% match for you." Post-trip, it sends a personalized memory reel of your visit. Six months later, it re-engages: "The sunset spot you loved just added live music on Thursdays." The relationship never ends.`}
        image="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1200&h=900&fit=crop"
        imagePosition="right"
        variant="dark"
      />

      {/* 8 — Emotionally Adaptive UI */}
      <BulletListSlide
        title="Emotionally Adaptive UI"
        bullets={[
          'Rapid scrolling detected — user is overwhelmed. Simplify to three curated picks.',
          'Slow browsing with saves — user is dreaming. Lean into lush imagery and storytelling.',
          'Rapid-fire search queries — user is planning urgently. Surface availability, pricing, and a zero-friction booking path.',
        ]}
      />

      {/* 9 — Trust Ladder divider */}
      <DividerSlide
        title="The Trust Ladder"
        headerOne="Generative AI as a Design Material"
        subtitleOne="A responsible progression model"
        variant="light"
      />

      {/* 10 — Trust Ladder 4 Rungs */}
      <LadderSlide
        title="The Trust Ladder"
        rungs={[
          {
            label: 'Rung 1',
            headline: 'AI Is Invisible Infrastructure',
            description:
              'Powers search relevance, content tagging, and recommendation logic behind the scenes. Users benefit without knowing AI is involved. No acceptance barrier.',
          },
          {
            label: 'Rung 2',
            headline: 'AI Is an Opt-In Assistant',
            description:
              'The Concierge chatbot, "write my itinerary" tools, smart summaries. The user consciously chooses to engage and can ignore it entirely. Clearly labeled "AI-suggested."',
          },
          {
            label: 'Rung 3',
            headline: 'AI Shapes the Experience',
            description:
              'Personalized layouts, dynamically generated copy, adaptive imagery. The UI itself is partially generated. Transparency matters most here — users can see why the page looks this way and override it. A "reset to default" should always exist.',
          },
          {
            label: 'Rung 4',
            headline: 'AI Is a Co-Creator',
            description:
              'Generates entirely new content formats on the fly — personalized video montages, custom audio walking tours, magazine-quality PDF trip plans. The user has built enough trust to want AI to take creative liberties.',
          },
        ]}
      />

      {/* 11 — Never jump rungs */}
      <QuoteSlide
        quote="Never jump rungs. A first-time visitor experiences Rungs 1 and 2. Returning engaged users earn Rungs 3 and 4."
        highlightWords={['Never jump rungs']}
        variant="light"
      />

      {/* 12 — Known Limitations */}
      <BulletListSlide
        title="Known Limitations"
        bullets={[
          'Hallucination — never generate "facts" like hours or prices. Always pull from structured data.',
          'Homogeneity — AI copy drifts toward the same voice. Brand training must be rigorous.',
          'Accessibility — generated layouts must meet WCAG. AI output needs a validation layer, not blind rendering.',
        ]}
      />

      {/* 13 — Delivery Team of 2030 */}
      <SplitImageContentSlide
        headline="The Delivery Team of 2030"
        subhead="Operating a Living Platform"
        body="If Horizon is a living organism that learns and evolves continuously, the team can't operate like a traditional agency. The model looks more like a product team running a SaaS platform — always on, always optimizing."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=900&fit=crop"
        imagePosition="right"
        variant="light"
      />

      {/* 14 — Core Team Structure */}
      <BulletListSlide
        title="Core Team Per Client"
        bullets={[
          'Platform Lead — owns the client relationship and roadmap. Part strategist, part product manager.',
          'AI/Content Strategist — manages brand training, prompt engineering, and the feedback loop between AI output and standards.',
          'Front-End Engineer(s) — component library, custom modules, performance, accessibility.',
          'Data/Personalization Analyst — monitors CDP, tunes personalization rules, interprets insights.',
          'Content Producer(s) — curates and refines AI drafts. Human editorial judgment remains essential.',
        ]}
      />

      {/* 15 — Three Work Lanes */}
      <NumberedColumnsSlide
        title="Three Work Lanes"
        description="A living platform needs three parallel workstreams, each with its own rhythm and staffing model."
        columns={[
          {
            number: '01',
            headline: 'Continuous Optimization',
            description:
              'Always running — A/B tests, personalization tuning, content freshness, performance monitoring. The "keep the organism healthy" lane.',
          },
          {
            number: '02',
            headline: 'Scheduled Enhancements',
            description:
              'Monthly/quarterly — new modules, integrations, seasonal campaigns, feature rollouts. Traditional sprint-style work.',
          },
          {
            number: '03',
            headline: 'Reactive & Real-Time',
            description:
              'As needed — crisis response, trending content, bug fixes, AI behavior corrections. Lightweight on-call rotation.',
          },
        ]}
      />

      {/* 16 — Critical New Roles */}
      <StatHighlightSlide
        stat="5"
        headline="Potential New Roles"
        description={
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Prompt Engineers</strong> — who understand brand voice</li>
            <li><strong>Data Analysts</strong> — for behavioral personalization</li>
            <li><strong>QA Specialists</strong> — for AI output accuracy</li>
            <li><strong>Platform Engineering Team</strong> — shared across clients</li>
            <li><strong>Brand Trainers</strong> — for content calibration</li>
          </ul>
        }
        variant="light"
      />

      {/* 17 — Intelligence Platform quote */}
      <QuoteSlide
        quote="We're not building a website. We're operating an intelligence platform that happens to have a website as its primary interface."
        highlightWords={['intelligence platform']}
        variant="dark"
      />

      {/* 18 — The Return Visit */}
      <SplitImageContentSlide
        headline="The Return Visit"
        subhead="Is a Completely Different Experience"
        body={`Most destination sites treat every visit like the first one — same hero, same "Discover Fort Myers" headline, same generic beach photo. By 2030, a returning visitor should never see a homepage. They should see their page. "Welcome back — still thinking about Sanibel Island?" Contextual, not generic. "Pick up where you left off" with the 2–3 pieces they engaged with most deeply. Reopen the Concierge with full history intact. New content filtered to their demonstrated interests. Real-time social proof — "Trending in Fort Myers" — filtered through their vibe profile.`}
        image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=900&fit=crop"
        imagePosition="left"
        variant="dark"
      />

      {/* 19 — Re-Engagement Module Intro */}
      <SplitImageContentSlide
        headline="The Re-Engagement Module"
        subhead="What Returning Visitors Actually See"
        body={`The moment we recognize a returning session — persistent ID with consent, or even session-based signals like a referral from a CRM email — the hero dissolves into a personalized re-engagement module. No generic homepage. No "Discover Fort Myers" for the fifth time. Their page, built from their history.`}
        image="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1200&h=900&fit=crop"
        imagePosition="right"
        variant="dark"
      />

      {/* 20 — Re-Engagement: First Three Modules */}
      <BulletListSlide
        title="Re-Engagement Modules - Part 1"
        bullets={[
          '"Welcome back" — not generic, but contextual. "Still thinking about Sanibel Island?" based on where they spent the most dwell time last session.',
          '"Pick up where you left off" — a compact card strip showing the 2–3 pieces they engaged with most deeply (scrolled past 60%, spent 30+ seconds, clicked into details). Each card has a clear CTA: "Keep exploring," "See availability," "Add to your trip."',
          '"Your conversation, continued" — if they used the Concierge last time, surface the last exchange with a prompt to reopen it. "You asked about waterfront dining for four — want to see what\'s available this weekend?" One tap reopens with full history intact.',
        ]}
      />

      {/* 21 — Re-Engagement: Next Three Modules */}
      <BulletListSlide
        title="Re-Engagement Modules - Part 2"
        bullets={[
          '"Since you were here" — content published or updated since their last visit, filtered to demonstrated interests. A new restaurant opened in the neighborhood they were browsing? A deal dropped on the hotel they looked at? Surface it here.',
          '"Trending in Fort Myers" — real-time social proof showing what others are searching, saving, and booking right now. Filtered through their vibe profile — a foodie sees trending restaurants, an adventure seeker sees trending outdoor activities.',
          '"Your trip so far" — if they\'ve saved favorites or started building an itinerary, show it as a living artifact right on the page with a clear "Continue planning" action.',
        ]}
      />

      {/* 22 — Homepage Replacement Principle */}
      <QuoteSlide
        quote="This isn't a modal or a banner interrupting the normal homepage — it replaces the homepage entirely. The traditional homepage is a fallback. For anyone we recognize, the entry point is a personalized dashboard that respects the time they've already invested."
        highlightWords={['replaces the homepage entirely']}
        variant="dark"
      />

      {/* 23 — Consent Incentive */}
      <StatHighlightSlide
        stat=""
        headline="The Consent Incentive"
        description={
          <ul className="list-disc list-inside space-y-1">
            <li><strong>First visit</strong> — great generic experience</li>
            <li><strong>Second visit without consent</strong> — a little with session signals, but it resets</li>
            <li><strong>Second visit with consent</strong> — "Oh, it remembered everything"</li>
            <li>That contrast sells the opt-in naturally without a guilt-tripping cookie banner.</li>
          </ul>
        }
        variant="red"
      />

      {/* 24 — Relationship Deepening quote */}
      <QuoteSlide
        quote="The progression over multiple returns should feel like a relationship deepening — visit one is a brochure, visit two is a conversation, visit five is a concierge who knows your name the feeds you accurate, curated content."
        highlightWords={['relationship deepening']}
        variant="dark"
      />

      {/* 25 — The Human Layer */}
      <SplitImageContentSlide
        headline="The Human Layer"
        subhead="Peer-to-Peer Community as a Living Data Source"
        body="AI is powerful, but peer trust is irreplaceable. Build a lightweight, frictionless community layer where real visitors contribute in real time — not reviews or forum posts, but micro-interactions that are fast, altruistic, and immediately useful."
        image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=900&fit=crop"
        imagePosition="left"
        variant="dark"
      />

      {/* 26 — Three Tiers of Community */}
      <NumberedColumnsSlide
        title="Three Tiers of Community"
        description='Layer peer contributions from effortless to meaningful — each tier builds on the last.  after visiting a location (detected via geofence or post-session prompt), a user can give a quick thumbs-up. No form, no star rating, no text — just a single tap that says "this was worth it."'
        columns={[
          {
            number: '01',
            headline: 'Thumbs-Up Economy',
            description:
              'One tap — "this was worth it." Aggregates into real-time social proof. "23 visitors gave this a thumbs-up this week."',
          },
          {
            number: '02',
            headline: 'Micro-Reviews',
            description:
              'Short, casual — "Their smash burger was amazing!" Surfaced contextually, weighted by freshness. Two hours old = gold.',
          },
          {
            number: '03',
            headline: 'Contributor Identity',
            description:
              '"You\'ve helped 47 travelers find great spots." Genuine recognition without gamification. Five seconds, someone benefits tonight.',
          },
        ]}
      />

      {/* 27 — AI + Humans */}
      <QuoteSlide
        quote="The vision is a destination platform where AI and humans collaborate — the AI knows the data, the humans know the feeling, and together they create recommendations that neither could deliver alone."
        highlightWords={['AI', 'Humans']}
        variant="dark-image"
        image="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1200&h=900&fit=crop"
      />

      {/* ============================================================
          SESSION 2 — THERE IS NO SUCH THING AS AN ORIGINAL IDEA
          ============================================================ */}

      {/* 28 — Session 2 Divider */}
      <DividerSlide
        title="There Is No Such Thing as an Original Idea"
        headerOne="Session 2 — 90 minutes"
        subtitleOne="Competitor & comparable platform analysis"
        variant="light"
      />

      {/* 29 — Spotify */}
      <BulletListSlide
        title="Spotify"
        bullets={[
          '"Discover Weekly" doesn\'t feel like an algorithm — it feels like a friend with great taste made you a mixtape.',
          'Steal: A "Discover Fort Myers" feed blending known vibes with curated surprises. Comfort picks vs. adventurous picks.',
          'What they miss: Spotify can\'t explain why it recommended something. We can — "Because you loved the waterfront and this chef just opened here."',
        ]}
      />

      {/* 30 — Netflix */}
      <SplitImageContentSlide
        headline="Netflix"
        body="Netflix doesn't have a 'recommendations section.' The entire interface is personalized — row order, artwork, category labels. Two people see completely different apps. Every pixel of Horizon should be a personalization decision, not a widget bolted onto a static page."
        image="https://images.unsplash.com/photo-1574375927938-d5a98e8d7e28?w=1200&h=900&fit=crop"
        imagePosition="left"
        variant="dark"
      />

      {/* 31 — Airbnb */}
      <BulletListSlide
        title="Airbnb"
        bullets={[
          'Masterful progressive data collection — search, then dates, then guests, then preferences. Each step makes results better, never a wall of form fields.',
          'Solved massive trust (stranger\'s home) through design: reviews, host profiles, neighborhood guides, "what to expect" content.',
          'What they miss: personalization resets between trips. No long-term relationship or evolving taste profile like Spotify builds over years.',
        ]}
      />

      {/* 27 — Duolingo */}
      <NumberedColumnsSlide
        title="Duolingo"
        description="The gold standard for turning repetitive tasks into daily habits through behavioral design."
        columns={[
          {
            number: '01',
            headline: 'Engagement Loops',
            description:
              'Turned tedious learning into daily habit through streaks, XP, leagues, and perfectly timed nudges. Their push notifications are famous.',
          },
          {
            number: '02',
            headline: 'Steal & Improve',
            description:
              'Trip planning is multi-session. Build lightweight loops — a planning "streak," vibe evolution tracker, "you\'ve explored 40% of Fort Myers."',
          },
          {
            number: '03',
            headline: 'Calibrate Carefully',
            description:
              'Gamification can feel juvenile if overdone. Travel inspiration should feel exciting, not like homework with a score.',
          },
        ]}
      />

      {/* 28 — Shopify */}
      <SplitImageContentSlide
        headline="Shopify — The Platform Play"
        body="Shopify isn't interesting because of any single feature — it turned a complex technical problem into a product anyone can operate. Horizon's moat is becoming the operating system for destination marketing. The admin, training tools, and content workflows must be so intuitive that DMO teams run them without developers."
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=900&fit=crop"
        imagePosition="right"
        variant="light"
      />

      {/* 29 — VWVortex */}
      <QuoteSlide
        quote="The magic wasn't the UI. The magic was purpose. People showed up because their knowledge mattered."
        highlightWords={['purpose']}
        variant="dark"
      />

      {/* 30 — Between users */}
      <QuoteSlide
        quote="The most enduring platforms create value between users, not just between the platform and the user."
        highlightWords={['between users']}
        variant="light"
      />

      {/* ============================================================
          SECTION 3 — ARCHITECTURE & DELIVERY
          ============================================================ */}

      {/* 31 */}
      <DividerSlide
        title="Architecture & Delivery"
        headerOne="Section 3 — Internal Discussion"
        subtitleOne="How do we build this to scale?"
        headerTwo="The Central Question"
        subtitleTwo="Does traditional white-label still make sense?"
        variant="dark"
      />

      {/* 32 — Central question */}
      <QuoteSlide
        quote="With AI capable of production-quality UI from structured data and design tokens, do we draw a fundamentally different line?"
        highlightWords={['fundamentally different line']}
        variant="dark-image"
        image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=900&fit=crop"
      />

      {/* 33 — Contract = Schema */}
      <BulletListSlide
        title="Contract Is the Schema"
        bullets={[
          'Standardize the data contract — content types, taxonomy, media handling in Drupal. Not the UI.',
          'GraphQL Compose generates a predictable schema. Concierge\'s data-fetching and transformers become shared infrastructure.',
          'Explicit boundary: everything below GraphQL = standardized and shared. Everything above = bespoke per destination.',
        ]}
      />

      {/* 34 — AI Changes Economics */}
      <BulletListSlide
        title="AI Changes the Economics"
        bullets={[
          'A senior dev prompts Opus with schema + design tokens + brand brief and gets production-quality pages in minutes, not hours.',
          'Invest in: robust design token system, library of proven layout patterns, quality gates for accessibility and performance.',
          'Replace "component library" with a "generation playbook" — documented prompts, patterns, and standards.',
        ]}
      />

      {/* 35 — Delegate vs Protect */}
      <NumberedColumnsSlide
        title="Delegate vs. Protect"
        description="Not all work requires senior talent. Draw a clear line between what can scale through delegation and what must stay close to architecture."
        columns={[
          {
            number: '01',
            headline: 'Highly Delegatable',
            description:
              'ADA/WCAG audits, SEO metadata, performance optimization, content entry and migration, unit and integration tests.',
          },
          {
            number: '02',
            headline: 'Requires Senior Engineering',
            description:
              'GraphQL schema design, personalization architecture, AI/RAG pipeline design, design system governance, security and privacy.',
          },
        ]}
      />

      {/* 36 — Four Architecture Options */}
      <NumberedColumnsSlide
        title="Four Architecture Options"
        description="Each option trades off speed, uniqueness, and scalability differently. They're not mutually exclusive — they're a progression."
        columns={[
          {
            number: 'A',
            headline: 'Shared Components',
            description:
              'Single monorepo, themed per client. Max reuse, but every destination looks similar. Best for 30+ clients at speed.',
          },
          {
            number: 'B',
            headline: 'Shared Data + Bespoke UI',
            description:
              'Standardize data layer. Visual layer built fresh per client. Every destination feels unique and premium. The sweet spot.',
          },
          {
            number: 'C',
            headline: 'AI-Generated + Curated',
            description:
              'Option B taken further. AI generates presentation from brand brief + tokens. Senior engineer curates. Dramatically faster.',
          },
          {
            number: 'D',
            headline: 'Module Marketplace',
            description:
              'Internal marketplace of self-contained modules. Non-devs can assemble. Long-term vision — Year 3+ once patterns stabilize.',
          },
        ]}
      />

      {/* 37 — The Sweet Spot */}
      <StatHighlightSlide
        stat="B → C"
        headline="The Sweet Spot"
        description="Start with Option B — shared data layer, bespoke presentation. Evolve to C as AI matures. Invest in making invisible layers rock-solid. Let visible layers be creative and unique per destination."
        variant="red"
      />

      {/* 38 — Recommended Path */}
      <NextStepsSlide
        steps={[
          {
            number: 1,
            date: 'Now',
            description:
              'Formalize the shared data layer. Extract GraphQL clients, types, hooks, and API routes into a reusable package.',
          },
          {
            number: 2,
            date: 'Next Client',
            description:
              'Use shared data + AI-assisted generation for the presentation layer. Document what works into a playbook.',
          },
          {
            number: 3,
            date: 'Clients 5–10',
            description:
              'Extract stabilized modules into a composable marketplace. Start with auth, search, Concierge, CRM.',
          },
          {
            number: 4,
            date: 'Year 3+',
            description:
              'Module marketplace matures. New clients assembled from proven modules + AI-generated custom + small hand-built bespoke.',
          },
        ]}
      />

      {/* 39 — Closing */}
      <ContactSlide
        headline="LET'S BUILD"
        date="02.2026"
        clientBrand="HORIZON"
        socialHandle="@mmgyglobal"
        email="hello@mmgyglobal.com"
      />
    </SlideContainer>
  )
}

export default App
