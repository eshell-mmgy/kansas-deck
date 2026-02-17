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
        title="Engagement Paths"
        bullets={[
          '"Welcome back" — not generic, but contextual. "Still thinking about Sanibel Island?" based on where they spent the most dwell time last session.',
          '"Pick up where you left off" — a compact card strip showing the 2–3 pieces they engaged with most deeply (scrolled past 60%, spent 30+ seconds, clicked into details). Each card has a clear CTA: "Keep exploring," "See availability," "Add to your trip."',
          '"Your conversation, continued" — if they used the Concierge last time, surface the last exchange with a prompt to reopen it. "You asked about waterfront dining for four — want to see what\'s available this weekend?" One tap reopens with full history intact.',
          '"Since you were here" — content published or updated since their last visit, filtered to demonstrated interests. A new restaurant opened in the neighborhood they were browsing? A deal dropped on the hotel they looked at? Surface it here.',
          '"Trending in Fort Myers" — real-time social proof showing what others are searching, saving, and booking right now. Filtered through their vibe profile — a foodie sees trending restaurants, an adventure seeker sees trending outdoor activities.',
          '"Your trip so far" — if they\'ve saved favorites or started building an itinerary, show it as a living artifact right on the page with a clear "Continue planning" action.',
        ]}
      />

      {/* 22 — Homepage Replacement Principle */}
      <QuoteSlide
        quote="This isn't a modal or a banner interrupting the normal homepage — it replaces the homepage entirely."
        highlightWords={['replaces the homepage entirely']}
        variant="dark"
      />

      {/* 23 — Consent Incentive */}
      <StatHighlightSlide
        stat=""
        headline="The Consent Incentive"
        description={
          <ul className="list-disc list-inside space-y-1">
            <li><strong>First visit</strong> — generic global experience</li>
            <li><strong>Second visit without consent</strong> — a little with session signals, but it resets</li>
            <li><strong>Second visit with consent</strong> — "Oh, it remembered everything"</li>
            <li>That contrast sells the opt-in naturally without a guilt-tripping cookie banner.</li>
          </ul>
        }
        variant="red"
      />

      {/* 24 — Relationship Deepening quote */}
      <QuoteSlide
        quote="The progression over multiple returns should feel like a relationship deepening — visit one is a brochure, visit two is a conversation, visit five is a unique, curated experience."
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
            number: 'TIER 1',
            headline: 'Thumbs-Up Economy',
            description:
              'One tap — "this was worth it." Aggregates into real-time social proof. "23 visitors gave this a thumbs-up this week."',
          },
          {
            number: 'TIER 2',
            headline: 'Micro-Reviews',
            description:
              'Short, casual — "Their smash burger was amazing!" Surfaced contextually, weighted by freshness. Two hours old = gold.',
          },
          {
            number: 'TIER 3',
            headline: 'Contributor Identity',
            description:
              '"You\'ve helped 47 travelers find great spots." Genuine recognition without gamification. Five seconds, someone benefits tonight.',
          },
        ]}
      />

      {/* Tier 1 — Thumbs-Up Economy */}
      <StatHighlightSlide
        stat="TIER 1"
        headline="The Thumbs-Up Economy"
        description={
          <ul className="list-disc list-inside space-y-1">
            <li>After visiting a location (detected via geofence or post-session prompt), one tap: "this was worth it." No form, no star rating, no text.</li>
            <li>Search results show <strong>"23 visitors gave this a thumbs-up this week"</strong></li>
            <li>The Concierge mentions <strong>"this spot has been getting a lot of love lately"</strong> when recommending</li>
            <li>A returning user's "Since you were here" section highlights newly popular spots based on peer signal, not just editorial content</li>
          </ul>
        }
        variant="light"
      />

      {/* Tier 2 — Micro-Reviews */}
      <StatHighlightSlide
        stat="TIER 2"
        headline="Micro-Reviews That Feel Like Texting a Friend"
        description={
          <ul className="list-disc list-inside space-y-1">
            <li>Short, casual sentences — not formal reviews. <strong>"Their smash burger was amazing!"</strong> or <strong>"Get the sunset table on the second floor."</strong></li>
            <li>Surfaced contextually: "Another visitor said 2 hours ago: 'Their smash burger was amazing!'"</li>
            <li>The Concierge weaves peer quotes into recommendations naturally: <strong>"Visitors this week are raving about the waterfront patio"</strong></li>
            <li>Recency matters — a tip from two hours ago is gold; six months ago is stale. The platform weights freshness heavily.</li>
          </ul>
        }
        variant="red"
      />

      {/* Tier 3 — Contributor Identity */}
      <StatHighlightSlide
        stat="TIER 3"
        headline="Contributor Identity & Meaningful Purpose"
        description={
          <ul className="list-disc list-inside space-y-1">
            <li><strong>"You've helped 47 travelers find great spots in Fort Myers."</strong> Genuine recognition — not gamification for its own sake.</li>
            <li>Must remain lightweight and unsolicited. The moment it feels like Yelp — with pressure to write detailed reviews or compete for badges — it loses its magic.</li>
            <li>Interaction model: you had a great time, you want to pay it forward, it takes five seconds, someone benefits tonight.</li>
            <li>Every peer interaction is a data signal — thumbs-ups feed the recommendation engine, micro-reviews train the Concierge, contribution patterns reveal which locations are delivering and which are slipping.</li>
          </ul>
        }
        variant="light"
      />

      {/* 27 — AI + Humans */}
      <QuoteSlide
        quote="The vision is a collaborative destination platform — the AI knows the data, the humans know the feeling, and together they create recommendations that neither could deliver alone."
        highlightWords={['AI', 'Humans']}
        variant="dark-image"
        image="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1200&h=900&fit=crop"
      />

            {/* 27 — AI + Humans */}
      <QuoteSlide
        quote='How do we create this higher level of personalization, brand loyalty and peer contribution without a mobile app?'
        highlightWords={['mobile app']}
        variant="dark-image"
        image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=900&fit=crop"
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
      <SplitImageContentSlide
        headline="Spotify"
        subhead="Algorithmic Discovery That Feels Serendipitous"
        body={
          <div className="space-y-4">
            <p><strong className="text-mmgy-red">What they do well:</strong> Spotify's "Discover Weekly" doesn't feel like a recommendation engine; it feels like a friend with great taste made you a mixtape. The magic is in mixing familiar signals with unexpected pulls from adjacent tastes.</p>
            <p><strong className="text-mmgy-red">What we should steal:</strong> A "Discover Fort Myers" feed that blends your known vibes with curated surprises — and like Spotify's "Daily Mix" vs. "Release Radar," offer different recommendation moods (comfort picks vs. adventurous picks).</p>
            <p><strong className="text-mmgy-red">What they miss:</strong> Spotify can't explain why it recommended something. We can — "Because you loved the waterfront last time and this place just opened with the same chef."</p>
          </div>
        }
        image="https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=1200&h=900&fit=crop"
        imagePosition="left"
        variant="dark"
      />

      {/* 30 — Netflix */}
      <SplitImageContentSlide
        headline="Netflix"
        subhead="The Entire UI Is a Recommendation"
        body={
          <div className="space-y-4">
            <p><strong className="text-mmgy-red">What they do well:</strong> Netflix doesn't have a "recommendations section." The entire interface is personalized — row order, artwork selection, category labels. Two people see completely different versions of the same app.</p>
            <p><strong className="text-mmgy-red">What we should steal:</strong> Every feature of a Horizon site should be a personalization decision, not just a "recommended for you" widget bolted onto a static page. Netflix also personalizes the artwork for the same title based on what will appeal to you — we could do the same with hero images for destinations.</p>
            <p><strong className="text-mmgy-red">What they miss:</strong> It's a passive lean-back experience. Travel planning requires active participation, so we need to blend Netflix-level personalization with interactive trip-building tools.</p>
          </div>
        }
        image="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&h=900&fit=crop"
        imagePosition="right"
        variant="dark"
      />

      {/* 31 — Airbnb */}
      <SplitImageContentSlide
        headline="Airbnb"
        subhead="Progressive Disclosure and Trust-Building"
        body={
          <div className="space-y-4">
            <p><strong className="text-mmgy-red">What they do well:</strong> Airbnb is masterful at progressive data collection that doesn't feel like a form. You start by searching, then they gently prompt for dates, then guests, then preferences — each step making results better. They also solved a massive trust problem through design: reviews, host profiles, neighborhood guides, and "what to expect" content.</p>
            <p><strong className="text-mmgy-red">What we should steal:</strong> Our data collection should follow this pattern — never a wall of form fields, always a natural conversation that makes the experience better at each step. We should also borrow the neighborhood guide concept but make it dynamic and personalized, not static pages.</p>
            <p><strong className="text-mmgy-red">What they miss:</strong> Airbnb's personalization resets between trips. There's no sense of a long-term relationship or evolving taste profile the way Spotify builds over years.</p>
          </div>
        }
        image="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=900&fit=crop"
        imagePosition="left"
        variant="dark"
      />

      {/* 32 — Duolingo */}
      <SplitImageContentSlide
        headline="Duolingo"
        subhead="Engagement Loops That Create Habits"
        body={
          <div className="space-y-4">
            <p><strong className="text-mmgy-red">What they do well:</strong> Duolingo turned something tedious (language learning) into a daily habit through streaks, XP, leagues, and perfectly timed nudges. Their re-engagement game is absurd — their push notifications are famous for being funny and effective.</p>
            <p><strong className="text-mmgy-red">What we should steal:</strong> Trip planning is naturally a multi-session activity, but most destination sites treat every visit as isolated. We should build lightweight engagement loops — a trip planning "streak," a vibe evolution tracker, a "you've explored 40% of Fort Myers" progress indicator — that make people want to come back.</p>
            <p><strong className="text-mmgy-red">What they miss:</strong> Gamification can feel juvenile or manipulative if overdone. We'd need to calibrate the tone carefully — travel inspiration should feel exciting, not like homework with a score.</p>
          </div>
        }
        image="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=900&fit=crop"
        imagePosition="right"
        variant="dark"
      />

      {/* 33 — Shopify */}
      <SplitImageContentSlide
        headline="Shopify"
        subhead="The Platform Play"
        body={
          <div className="space-y-4">
            <p><strong className="text-mmgy-red">What they do well:</strong> Shopify isn't interesting because of any single feature — it's interesting because it turned a complex technical problem (running an online store) into a product anyone can operate, then built an ecosystem around it (themes, apps, payments, fulfillment).</p>
            <p><strong className="text-mmgy-red">What we should steal:</strong> Horizon's long-term moat isn't any single feature, it's becoming the operating system for destination marketing. The admin experience, the training tools, the content workflows — these need to be so intuitive that DMO teams can run them without developers.</p>
            <p><strong className="text-mmgy-red">What they miss:</strong> Shopify stores can feel cookie-cutter. The challenge is making Horizon infinitely customizable on the frontend while keeping the backend standardized — every destination should feel unique, not like a template with different colors.</p>
          </div>
        }
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=900&fit=crop"
        imagePosition="left"
        variant="dark"
      />

      {/* 34 — VWVortex */}
      <SplitImageContentSlide
        headline="VWVortex"
        subhead="Community That Creates Careers"
        body={
          <div className="space-y-4">
            <p><strong className="text-mmgy-red">What they did well:</strong> VWVortex became a career incubator — successful people across the automotive industry trace their trajectory back to that community. The magic wasn't the UI or the content. The magic was purpose. People showed up because their knowledge mattered.</p>
            <p><strong className="text-mmgy-red">What we should steal:</strong> The forum UI model is dead, but the emotional architecture is something the modern web has largely lost. Horizon should capture that energy: micro-contributions that are fast, contextual, and immediately surfaced to the next visitor. The key insight is that the community is the product — not a bolt-on feature.</p>
            <p><strong className="text-mmgy-red">What they miss:</strong> Forums required enormous time investment with terrible signal-to-noise ratios. Horizon's version should extract the value — peer trust, real-time local knowledge, meaningful contribution — while eliminating the friction. AI becomes the moderator, the curator, and the search engine that forums never had.</p>
          </div>
        }
        image="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1200&h=900&fit=crop"
        imagePosition="right"
        variant="dark"
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
          'A senior dev prompts Opus with schema + design tokens + brand brief and rapidly gets generated production-quality pages without spending hours manually developing.',
          'Invest in: robust design token system, library of proven layout patterns, minimal baseline UI and quality gates for accessibility and performance.',
          'Suppliment the "component library" with a "generation playbook" and CLAUDE.MD — documented prompts, patterns, and standards.',
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
        title="Three Architecture Options"
        description="Each option trades off speed, uniqueness, and scalability differently. They're not mutually exclusive — rather a catalyst for discussion around progression."
        columns={[
          {
            number: 'OPTION A',
            headline: 'White Label Solution',
            description:
              'Single monorepo with a full, in-tact soltion. UI to be altered per client. Offers max reuse, but every destination looks somewhat similar. Best for 10+ clients at speed with minimal design variation.',
          },
          {
            number: 'OPTION B',
            headline: 'Shared Data + Bespoke UI',
            description:
              'Standardized data layer. Visual layer built fresh per client leaning on a lean white label component library. Every destination feels unique and premium. The sweet spot.',
          },
          {
            number: 'OPTION C',
            headline: 'AI-Generated + Curated',
            description:
              'Option B taken further. AI generates presentation from brand brief + tokens. Senior engineer curates and documents. Delivery team executes with Claude in hand. Dramatically faster with more brand/design flexability.',
          },
        ]}
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
              'Onboard a delivery team and split responsibilites between client development, ongoing maintenance and platform engineering'
          },
          {
            number: 4,
            date: 'Year 3+',
            description:
              'Team leads control the playbook and the platform roadmap. The playbook evolves into a delivery team master tool rapidly creating robust, unique experience within the shared data and AI infrastructure.',
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
