# Prosper XO Live Website Analysis

**Analysis Date**: November 20, 2025  
**Website URL**: https://www.prosperxo.com  
**Purpose**: Complete documentation for pixel-perfect replication

---

## Table of Contents
1. [Site Structure & Navigation](#site-structure--navigation)
2. [Global Design System](#global-design-system)
3. [Page-by-Page Analysis](#page-by-page-analysis)
4. [Interactive Elements](#interactive-elements)
5. [Typography & Colors](#typography--colors)
6. [Animations & Transitions](#animations--transitions)
7. [Technical Notes](#technical-notes)

---

## Site Structure & Navigation

### Site Architecture
```
/ (index.html)
  └─ /welcome (main landing page)
      ├─ /why-prosper
      ├─ /team
      ├─ /ethos
      ├─ /events
      └─ /get-involved
```

### Global Navigation Bar
- **Position**: Fixed at top, sticky header
- **Background**: Black (#000000)
- **Height**: ~80px
- **Layout**: Horizontal menu items

#### Navigation Items (left to right):
1. **WHY PROSPER** - Yellow/gold text
2. **TEAM** - Magenta/pink text
3. **ETHOS** - Green text
4. **EVENTS** - Cyan/blue text
5. **GET INVOLVED** - Yellow text

**Styling Notes**:
- Each nav item uses vibrant, distinct colors
- Hover states maintain color but may add underline or brightness effect
- Font appears to be bold, sans-serif, uppercase
- Letter spacing: slightly expanded

### Global Header
- **Background**: Gradient from pink/coral to pink
- **Height**: ~90px
- **Elements**:
  - **Left**: Hamburger menu icon (3 horizontal lines)
  - **Center**: Prosper XO logo (colorful dripping character mascot)
  - **Right**: Social media icons in black
    - Instagram
    - TikTok
    - X (Twitter)
    - LinkedIn
    - YouTube
    - Facebook

### Global Footer
- **Background**: Black (#000000)
- **Layout**: Centered content

#### Footer Elements:
1. **Heading**: "WE WANT TO HEAR FROM YOU" (white, large, bold)
2. **Contact Section** (2 columns):
   - **Left Column**:
     - "PRESS INQUIRIES" (yellow/gold)
     - press@prosperxo.com (yellow/gold link)
   - **Right Column**:
     - "GET INVOLVED" (pink/magenta)
     - info@prosperxo.com (pink/magenta link)

3. **Social Icons Row**:
   - TikTok (yellow icon)
   - Instagram (yellow icon)
   - X/Twitter (yellow icon)
   - LinkedIn (yellow icon)
   - YouTube (yellow icon)
   - Facebook (yellow icon)
   - Icons arranged horizontally, centered
   - Icon size: ~40-50px

4. **Logo**: 
   - Prosper XO logo with rainbow gradient text and colorful dripping mascot
   - Centered at bottom
   - Size: ~150px wide

**Spacing**: Generous padding (60-80px top/bottom)

---

## Global Design System

### Color Palette

#### Primary Colors:
- **Pink/Coral**: #FF6B9D (approx) - Headers, accents
- **Yellow/Gold**: #FFD700, #FFC700 - Nav items, CTAs, icons
- **Magenta**: #FF00FF, #E535AB - Nav items, links
- **Cyan/Blue**: #00D9FF, #00B4D8 - Nav items, accents
- **Green**: #00FF00, #7FFF00 - Nav items, accents
- **Black**: #000000 - Backgrounds, text
- **White**: #FFFFFF - Text on dark backgrounds

#### Gradient Backgrounds:
- **Rainbow gradient**: Used extensively across cards and headers
  - Transitions: Pink → Purple → Blue → Cyan → Green → Yellow → Orange → Red
  - Direction: Usually left-to-right or radial from center
  - Smooth color transitions with multiple stops

### Typography

#### Font Families:
- **Primary**: Sans-serif, bold weights (appears to be custom or similar to Impact/Arial Black)
- **Body**: Sans-serif, medium weight
- **Handwritten style**: Used for "PROSPER XO" logo text

#### Font Sizes:
- **H1/Hero**: 60-80px (large display text)
- **H2**: 40-50px (section headers)
- **H3**: 28-36px (card titles)
- **Body**: 16-20px
- **Navigation**: 18-22px

#### Text Styling:
- **Uppercase**: Used extensively for headers and navigation
- **Letter spacing**: Slightly expanded for headers
- **Line height**: 1.2-1.4 for headers, 1.5-1.6 for body
- **Text shadow**: Used on some headers for contrast

### Spacing System
- **Small**: 8-16px
- **Medium**: 24-32px
- **Large**: 48-64px
- **Extra Large**: 80-120px (section spacing)

---

## Page-by-Page Analysis

### 1. Homepage (/) - Landing/Splash Page

#### Layout:
- **Background**: Pure black (#000000)
- **Content**: Centered, full viewport height

#### Hero Section:
1. **CRT Monitor Illustration**:
   - **Style**: Realistic vintage CRT monitor (beige/cream colored)
   - **Screen**: Dark gray/black with green terminal text
   - **Position**: Centered on page
   - **Size**: ~800-900px wide
   - **Details**: 
     - Monitor has realistic depth/shadow
     - Power button and controls visible on bottom right
     - Slight texture/aging on monitor casing
     - Prosper XO logo on bottom left of monitor frame
     - "When Artists Prosper, Culture Thrives" tagline below logo

2. **Terminal Text Animation**:
   - **Text**: "The Future of Music Is Artist-Owned"
   - **Color**: Bright green (#00FF00) - classic terminal green
   - **Font**: Monospace, appears to be Courier or similar
   - **Animation**: Types out character by character (typewriter effect)
   - **Cursor**: Blinking block cursor after text
   - **Timing**: ~2-3 seconds for full animation

3. **Play Button**:
   - **Position**: Overlaid on monitor screen, centered
   - **Style**: Green outline rectangle
   - **Text**: "PLAY ▶" in green
   - **Size**: ~200px wide x 80px tall
   - **State Changes**:
     - Default: Green outline, transparent fill
     - Hover: Possibly filled or brighter
   - **Behavior**: When clicked, plays video/animation and reveals full tagline

4. **"ENTER HERE" Text**:
   - **Position**: Below monitor, centered
   - **Text**: "ENTER HERE"
   - **Style**: Rainbow gradient text effect
   - **Colors**: Red → Orange → Yellow → Green → Cyan → Blue → Purple
   - **Size**: Large, ~60-80px height
   - **Font**: Bold, slightly distorted/stylized
   - **Behavior**: Clickable link to /welcome page
   - **Hover**: Possibly animated or brightens

#### Technical Details:
- Monitor appears to be an SVG or high-quality PNG with transparency
- Terminal text animation likely CSS animation or JavaScript
- Video element hidden until play button clicked
- Smooth transition to welcome page

---

### 2. Welcome Page (/welcome) - Main Landing

This is the primary entry point after the splash screen.

#### Header Section:
- Same global header as described above
- Pink gradient background flows into page content

#### Hero Section:
- **Background**: Vibrant gradient (pink → purple → blue → cyan)
- **Layout**: Centered content

##### Main Tagline:
- **Text**: "WHEN ARTISTS PROSPER, CULTURE THRIVES"
- **Font Size**: 70-80px
- **Color**: Yellow with black outline/shadow
- **Font**: Bold, condensed sans-serif
- **Position**: Centered, top third of hero
- **Styling**: 
  - Strong text shadow for readability
  - Letters slightly compressed horizontally
  - High impact, poster-style typography

#### Definition Cards Section:
- **Background**: Continues gradient background
- **Layout**: Two cards side-by-side (desktop), stacked (mobile)
- **Spacing**: 40-60px between cards

##### Card 1 - "prosper" Definition:
- **Background**: White with subtle shadow
- **Padding**: 40-50px
- **Border Radius**: 12-16px
- **Content**:
  ```
  pros·per verb  / prä·spər/
  1. To grow vigorously; to flourish or succeed.
  2. To gain financial empowerment and thrive in one's career.
  • pros'per·er n.  • pros'per·ous adj.
  ```
- **Typography**:
  - Dictionary-style formatting
  - Bold for word and pronunciation
  - Numbered list for definitions
  - Italics for word forms

##### Card 2 - "XO" Definition:
- **Background**: White with subtle shadow
- **Similar styling to Card 1**
- **Content**:
  ```
  XO noun  /,eks'ōs/
  1. A universal symbol of partnership and collaboration
  2. (fig.) An emblem of shared creativity and collective impact,
     highlighting the power of working together.
  ```

#### Monitor Section:
- **Background**: Continues gradient (now yellow → orange → pink → purple)
- **Content**: Same CRT monitor from homepage
- **Terminal Text**: "The Future of Music Is Artist-Owned" (static, fully visible)
- **Position**: Centered
- **Size**: Slightly smaller than homepage version (~600-700px wide)

#### Mission Statement:
- **Background**: Black section
- **Text**: "PROSPER XO IS A MOVEMENT ROOTED IN ARTIST SUSTAINABILITY, RADICAL TRANSPARENCY, AND TRUE EQUITY."
- **Font Size**: 40-50px
- **Color**: Yellow/gold
- **Font**: Bold, condensed
- **Position**: Centered
- **Styling**: All caps, high impact

#### Problem Statement Section:
- **Background**: Black
- **Heading**: "IN A SYSTEM THAT'S LONG PROFITED OFF OUR TALENT WHILE KEEPING US UNDERPAID AND UNDERVALUED, WE BELIEVE IT'S TIME FOR SOMETHING BETTER."
- **Font Size**: 32-40px
- **Color**: Yellow
- **Styling**: All caps, centered

##### "READ ME" Buttons:
- **Heading**: "READ ME" in yellow, large text (~60px)
- **Arrows**: Three red/pink arrows pointing down to buttons
- **Buttons**: Three colorful buttons in a row:
  1. **DEAR AUSTIN MUSIC INDUSTRY**
     - Background: Coral/salmon gradient
     - Text: Yellow
     - Size: ~300px wide x 150px tall
  2. **DEAR ARTISTS**
     - Background: Yellow/gold gradient
     - Text: Black
     - Same size as others
  3. **DEAR GLOBAL MUSIC INDUSTRY**
     - Background: Pink/magenta gradient
     - Text: Yellow
     - Same size as others
- **Styling**: 
  - Rounded corners (~16px radius)
  - All caps text
  - Bold font
  - Slight shadow/depth effect

#### "YOUR VOICE MATTERS" Section:
- **Background**: Black
- **Heading**: "YOUR VOICE MATTERS"
  - **Text**: "YOUR VOICE" in beige/cream, "MATTERS" in pink gradient
  - **Font Size**: 60-70px
  - **Styling**: Bold, mixed colors for emphasis
- **Subheading**: "Whether you're an emerging musician, a seasoned creative, or someone passionate about reshaping the industry..."
  - **Color**: Yellow/gold
  - **Font Size**: 20-24px
  - **Styling**: Regular weight

##### Mission Text:
```
We believe in listening first, so everything we build starts with your voice. 
Because artists aren't just participants in culture. You are the culture.

Let's build a future where creativity is sustainable.
Let's build a future together.
```
- **Color**: Gradient text (blue → cyan → pink → purple)
- **Font Size**: 24-28px
- **Styling**: Medium weight, centered

##### Logo Showcase:
- **Element**: Large Prosper XO mascot logo
- **Style**: Colorful dripping character with "XO" face
- **Colors**: Rainbow gradient (yellow → green → cyan → blue → purple)
- **Size**: ~400px height
- **Position**: Centered
- **Animation**: Possibly subtle floating or pulsing

##### Call to Action:
- **Text**: "We want to know more about what YOU want"
- **Color**: White
- **Font Size**: 28-32px
- **Arrow**: Red curved arrow pointing down
- **Position**: Below logo, centered

#### Survey Section:
- **Heading**: "TAKE A SURVEY BELOW"
  - **Color**: Yellow
  - **Font Size**: 40-48px
  - **Styling**: Bold, all caps

##### Survey Buttons (4 buttons in a row):
1. **ARTIST**
   - Background: Coral/orange gradient
   - Text: Yellow
   - Size: ~250px wide x 100px tall
   - Border radius: ~16px

2. **VENUE**
   - Background: Pink/magenta gradient
   - Text: Yellow
   - Same size

3. **BRAND**
   - Background: Yellow gradient
   - Text: Black
   - Same size

4. **FAN**
   - Background: Blue gradient
   - Text: White
   - Same size

**Styling Notes**:
- All buttons have rounded corners
- Slight shadow for depth
- Hover state likely brightens or scales slightly

#### Share Section:
- **Text**: "Share with someone you know!"
- **Color**: White
- **Font Size**: 24px
- **Button**:
  - Text: "SHARE"
  - Background: Yellow
  - Text color: Black
  - Size: ~200px wide x 60px tall
  - Rounded corners
  - Bold text

#### "Why Artists Don't Prosper" Section:
- **Background**: Purple/blue gradient
- **Heading**: "WHY ARTISTS DON'T PROSPER"
  - **Color**: White
  - **Font Size**: 50-60px
  - **Styling**: Bold, all caps, centered

##### Statistics Cards:
Two information cards displayed with icon + text:

**Card 1**:
- **Icon**: Headphones with money bag
- **Illustration style**: Simple, bold line art
- **Colors**: Teal green for money bag, black for headphones
- **Text**: 
  - Number: "5" (large, bold)
  - Description: "Platforms weren't built for artists."
  - Detail: "Most independent artists are shut out of meaningful revenue."
- **Background**: Light beige/cream
- **Layout**: Icon on left, text stacked on right

**Card 2**:
- **Number**: "2"
- **Text**: "The top 1% take 90% of all streams."
- **Similar styling to Card 1**

#### Bottom CTA Cards Section:
- **Background**: Gradient (pink → purple → blue → cyan → yellow)
- **Layout**: Four cards in a row (2x2 grid on mobile)
- **Spacing**: ~20-30px gap between cards

##### Card 1: "THE FUTURE OF MUSIC IS ARTIST OWNED"
- **Background**: Yellow gradient card
- **Title**: "THE FUTURE OF MUSIC IS ARTIST OWNED"
  - Color: Pink/magenta
  - Font size: 32-36px
  - Bold, all caps
- **Subtitle**: "a letter from the founder"
  - Color: Pink
  - Font size: 18-20px
- **Size**: ~300px wide x 400px tall
- **Border**: Black rounded border (~16px radius)
- **Clickable**: Links to founder's letter

##### Card 2: "PRESS INQUIRIES"
- **Background**: Green gradient
- **Visual**: Yellow burst/star shape
- **Text**: "PRESS INQUIRIES"
  - Color: Black
  - Font size: 32-40px
  - Bold, centered in burst
- **Same size as Card 1**
- **Clickable**: Likely opens modal or links to contact

##### Card 3: "JOIN THE WAITLIST"
- **Background**: Blue gradient
- **Title**: "JOIN THE WAITLIST"
  - Color: White
  - Font size: 48-56px
  - Bold, condensed
  - Stacked vertically
- **Subtitle**: "SIGN-UP"
  - Color: White with red background bar
  - Font size: 24px
  - Bottom of card
- **Same size as others**
- **Clickable**: Links to waitlist form

##### Card 4: "why PROSPER XO ?"
- **Background**: Red/orange gradient
- **Visual**: Cartoon character (mascot style)
  - Black outline illustration
  - Character appears happy/energetic
  - Yellow accents
- **Text**: 
  - "why" in black script
  - "PROSPER" in yellow, bold
  - "XO" in yellow with stylized letters
  - "?" in black
- **Same size as others**
- **Clickable**: Links to /why-prosper page

**Card Styling Notes**:
- All cards have black borders with rounded corners
- Slight shadow/elevation effect
- Hover state likely scales or brightens
- Vibrant gradient backgrounds throughout

#### Footer:
- Standard footer as described in Global Footer section

---

### 3. Why Prosper Page (/why-prosper)

#### Layout:
- **Background**: Gradient (pink → purple → blue → cyan)
- **Content**: Centered, minimal design

#### Header:
- Same global header/navigation

#### Main Content:
##### Video Player:
- **Container**: Large video player, centered
- **Size**: ~1100px wide x 620px tall (16:9 aspect ratio)
- **Border**: Black border around video frame
- **Video Content**:
  - Features Lauren Bruno (CEO)
  - Wearing colorful outfit (orange, yellow, blue, pink color blocks)
  - Subtitle overlay: "creators and world my name is Lauren Bruno"
  - Professional video production quality
- **Controls**: 
  - Standard HTML5 video controls
  - Play/pause button
  - Timeline scrubber
  - Volume control
  - Fullscreen button
  - Current time display (starts at 0:00)
- **Background**: Gradient continues behind video

#### Footer:
- Standard footer as described above

**Page Notes**:
- Very clean, focused page
- Video is the primary content
- No additional text or CTAs on page body
- Gradient background provides visual interest
- Page designed to keep focus on video message

---

### 4. Team Page (/team)

#### Header:
- Same global header/navigation
- Background: Pink gradient

#### Hero Section:
##### "FOUNDING TEAM" Header:
- **Background**: Purple/pink gradient
- **Text**: "FOUNDING TEAM"
  - Color: Yellow with black outline
  - Font size: 70-80px
  - Bold, condensed font
  - All caps
  - Centered
  - High-impact poster style

##### Hero Illustration:
- **Image**: Large illustrated portrait
  - Art style: Flat design, cartoon illustration
  - Character: Person with dark hair, flower crown (white daisies)
  - Background: Circular frame with landscape elements
    - Hills/mountains in teal/green
    - Sky with birds
    - Sun/moon in background
    - Water/lake element
  - Hand gesture: Showing flower symbol on palm
  - Clothing: Black top
  - Jewelry: Necklace visible
- **Size**: ~700px wide circular frame
- **Position**: Centered below heading

#### Team Member Cards Section:
- **Background**: Gradient transitions (pink → purple → blue → cyan → green)
- **Layout**: Grid layout (3 columns desktop, adjusts for mobile)
- **Spacing**: ~30-40px gaps between cards

##### Individual Card Structure:
Each team member card follows this pattern:

**Card Design**:
- **Shape**: Rounded rectangle (~20px border radius)
- **Border**: Black border, 4-6px thick
- **Shadow**: Subtle drop shadow for depth
- **Size**: ~400px wide x variable height

**Card Sections**:
1. **Portrait Section** (top):
   - Illustrated portrait (custom art for each member)
   - Art style: Bold line art, flat colors
   - Background color varies per card (different gradient or solid)
   - Portrait fills top ~60% of card

2. **Info Section** (bottom):
   - Gradient background (unique per card, often coral/pink/orange/yellow blends)
   - Name in large bold text (black)
   - Title/Role below name (black, smaller)
   - Social media icons row:
     - Instagram icon
     - LinkedIn icon
     - Email icon
     - Icons in black, ~30px size
     - Clickable links

3. **Bio Section** (below card, not part of card):
   - Background: Continues page gradient
   - Text: White or light colored
   - Font size: 16-18px
   - Line height: 1.6
   - Width: Matches card width or spans multiple columns
   - Paragraph style with good readability

##### Team Member Details:

**1. LAUREN (CEO/Chief Executive Officer)**
- **Portrait**: Woman with black hair, wearing black patterned top, flower crown
- **Card background**: Peach/coral gradient to yellow
- **Bio position**: Below hero illustration
- **Social icons**: Instagram, LinkedIn, Email

**2. JOSEPH (Chief Experience Officer)**
- **Portrait**: Person with long black hair, gray hoodie
- **Card background**: Blue gradient
- **Portrait style**: Casual, friendly
- **Social icons**: Instagram, LinkedIn, Email

**3. JONNY (Chief Technology Officer)**
- **Portrait**: Person with long wavy blonde hair, thinking pose
- **Card background**: Green/teal gradient
- **Portrait style**: Thoughtful expression
- **Social icons**: Instagram, Website, Email

**4. GABE (Chief Product Officer)**
- **Portrait**: Person with curly hair, glasses, olive jacket
- **Card background**: Gray/sage gradient
- **Portrait style**: Smiling, friendly
- **Social icons**: Instagram, Email

**5. CLINT (Entertainment Lawyer)**
- **Portrait**: Man with beard, formal black suit and tie
- **Card background**: Yellow gradient
- **Portrait style**: Professional, formal
- **Social icons**: Website, Email

**6. ZEALE (CMO & Cultural Strategist)**
- **Portrait**: Person with short curly hair, sunglasses, leopard print jacket
- **Card background**: Orange gradient
- **Portrait style**: Cool, confident pose
- **Social icons**: Instagram, X/Twitter, LinkedIn, Email

**7. DAVID (Founding Engineer, Product & Growth)**
- **Portrait**: Man with wavy hair, glasses, smiling, tan jacket
- **Card background**: Gray gradient with pink tint
- **Portrait style**: Warm, approachable smile
- **Social icons**: Instagram, LinkedIn, Email

**8. DEVIN (Full Stack Data Engineer)**
- **Portrait**: Person with blonde hair, holding orange cat
- **Card background**: Orange/peach gradient
- **Portrait style**: Casual, warm with pet
- **Social icons**: Instagram, LinkedIn, Email

**9. COURTNEY (Senior Brand Designer)**
- **Portrait**: Person with long dark wavy hair, glasses, sleeveless top
- **Card background**: Purple gradient
- **Portrait style**: Confident, creative
- **Social icons**: Instagram, LinkedIn, Email

**10. SUE (Advisor)**
- **Portrait**: Woman with curly blonde/orange hair, smiling, teal shirt
- **Card background**: Purple/lavender gradient
- **Portrait style**: Friendly, experienced
- **Social icons**: LinkedIn, Email

**11. MONICA (Marketing Intern)**
- **Portrait**: Person with long curly brown hair, professional attire
- **Card background**: Pink/peach gradient
- **Portrait style**: Professional, enthusiastic
- **Social icons**: Instagram, LinkedIn, Email

#### Bio Section Layout:
- Each team member has detailed bio text
- Bios are positioned between team member rows
- White or light colored text on gradient backgrounds
- 2-4 paragraphs per person
- Professional yet personal tone
- Highlights experience, expertise, and connection to mission

#### Closing Section:
- **Background**: Pink/purple gradient card with rounded corners and black border
- **Text**: Team philosophy and mission statement
- **Content**: 
  ```
  We're a team of artists, engineers, legal advocates, and creative technologists 
  who have lived inside the music industry on both sides of the equation...
  
  In addition to our core team, we're supported by a growing group of advisors...
  
  We didn't just come together to build an app; we came together to build a 
  sustainable future for the artist...
  ```
- **Styling**:
  - White text
  - Center-aligned
  - Large padding (60-80px)
  - Font size: 20-24px
  - Line height: 1.6

#### Footer:
- Standard footer

**Page Notes**:
- Extensive content, requires significant scrolling
- Each team member gets equal visual treatment
- Illustrations add personality and uniqueness
- Bios provide depth and credibility
- Design balances professionalism with creative flair

---

### 5. Ethos Page (/ethos)

#### Header:
- Same global header/navigation

#### Hero Section:
- **Background**: Rainbow gradient stripe at top
  - Colors flow: Orange → Pink → Purple → Blue → Cyan → Yellow
  - Height: ~120px
  - Full width

#### Main Content Section:
- **Background**: Black
- **Layout**: Grid of value cards (3 columns x 2 rows on desktop)
- **Spacing**: ~30-40px gaps between cards

##### Value Card Structure:
Each card follows this design:

**Card Dimensions**:
- Width: ~400px
- Height: ~500px
- Border: Black border, thick (6-8px)
- Border radius: 20-24px
- Shadow: Strong drop shadow for elevation

**Card Design Elements**:
1. **Gradient Background**: Each card has unique vibrant gradient
2. **Title Section** (top ~40%):
   - Large bold text
   - All caps
   - Color varies (yellow, white, pink) for maximum contrast
   - Font size: 48-64px
   - Condensed bold font
3. **Description Text** (middle):
   - Smaller body text
   - Color: Black or white depending on background
   - Font size: 18-22px
   - Padding: 30-40px
   - Multiple lines explaining the value
4. **Logo** (bottom):
   - Prosper XO logo (script text + mascot)
   - Positioned at bottom of card
   - Color: Black or dark for contrast
   - Size: ~150px wide

##### Individual Value Cards:

**Card 1: ARTISTS FIRST**
- **Gradient**: Purple → Orange → Pink
- **Title Color**: Yellow
- **Description**: "We exist to empower artists, not extract from them. Every decision we make begins with one question: 'Does this truly serve the artist?'"
- **Position**: Top left

**Card 2: RADICAL TRANSPARENCY**
- **Gradient**: Blue → Green → Yellow → Pink
- **Title Color**: White
- **Title**: "RADICAL TRANSPARENCY"
- **Description**: "No smoke. No mirrors. We believe in clarity around data, contracts, payment, and opportunity. Trust is built when nothing is hidden."
- **Position**: Top center

**Card 3: EQUITY IN ACTION**
- **Gradient**: Orange → Yellow → Green → Blue (rainbow)
- **Title Color**: Pink/Magenta
- **Title**: "EQUITY IN ACTION"
- **Description**: "We don't just uplift a few. We design systems that redistribute access, visibility, and value to the overlooked, the emerging, and the community-rooted."
- **Position**: Top right

**Card 4: SUSTAINABILITY OVER STARDOM**
- **Gradient**: Orange → Rainbow → Purple
- **Title Color**: Black
- **Title**: "SUSTAINABILITY OVER STARDOM"
- **Description**: "We reject the 'starving artist' myth. Prosper XO is about long-term creative careers, not fleeting virality."
- **Position**: Bottom left

**Card 5: CO-CREATION WITH COMMUNITY**
- **Gradient**: Orange → Yellow → Pink
- **Title Color**: Pink/Magenta
- **Title**: "CO-CREATION WITH COMMUNITY"
- **Description**: "We don't build in isolation; we listen, we learn, and we co-create alongside the artists, fans, venues, and local partners who make culture real."
- **Position**: Bottom center

**Card 6: DATA IS POWER AND IT BELONGS TO THE ARTIST**
- **Gradient**: Green → Yellow → Pink → Purple (rainbow)
- **Title Color**: White
- **Title**: "DATA IS POWER AND IT BELONGS TO THE ARTIST"
- **Description**: "We help artists see their value in numbers and story. What platforms have hidden, we return with tools that transform data into freedom."
- **Position**: Bottom right

#### Design Notes:
- Each card is highly distinctive with unique gradient
- Gradients are vibrant and saturated
- Strong contrast between title text and backgrounds
- Cards appear to have slight 3D depth effect
- Hover state may add scale or brightness

#### Footer:
- Standard footer as described above

**Page Notes**:
- Visually striking page with bold color usage
- Clear, concise messaging
- Each value gets equal visual weight
- Design reinforces brand personality (bold, creative, vibrant)
- Easy to scan and understand core values

---

### 6. Events Page (/events)

**Note**: This page was not fully explored in the browser session, but based on the navigation structure, it likely contains:
- Upcoming events calendar or list
- Event details (date, location, description)
- Registration or RSVP functionality
- Past events archive

---

### 7. Get Involved Page (/get-involved)

**Note**: This page was not fully explored, but based on context clues from other pages, it likely contains:
- Multiple ways to participate (artist, venue, brand, fan)
- Survey or onboarding forms
- Waitlist signup
- Newsletter subscription
- Contact information

---

## Interactive Elements

### Buttons

#### Primary Button Style:
- **Shape**: Rounded rectangle
- **Border radius**: 12-16px
- **Padding**: 20px 40px (varies by size)
- **Font**: Bold, all caps
- **Font size**: 18-24px
- **Shadow**: Subtle drop shadow
- **Hover state**: Likely brightens or scales slightly (1.05x)
- **Transition**: Smooth (~0.3s)

#### Button Variants:

1. **CTA Buttons** (large, primary):
   - Background: Solid vibrant color (yellow, pink, blue)
   - Text: Contrasting color
   - Size: 200-300px wide x 60-80px tall
   - Used for: Surveys, main actions

2. **Card Buttons** (medium):
   - Background: Often gradient
   - Text: White or black depending on background
   - Size: Fills card width or ~250px
   - Used for: Letter links, press inquiries

3. **Icon Buttons** (small):
   - Size: 40-50px square
   - Background: Transparent or solid color
   - Icon only, no text
   - Used for: Social media links

### Links

#### Text Links:
- **Default**: Underline, color matches context (yellow, pink, cyan)
- **Hover**: Color brightens or changes
- **Active**: Slightly darker or different color
- **Transition**: 0.2s ease

#### Navigation Links:
- **Default**: Colored text (each nav item different color)
- **Hover**: Possibly underline appears or text brightens
- **Active**: Current page indicator (possibly underline or brightness)

### Video Player:
- **Type**: HTML5 video element
- **Controls**: Standard browser controls
- **Features**:
  - Play/pause
  - Seek bar
  - Volume control
  - Fullscreen toggle
  - Captions (if available)
- **Autoplay**: No (user initiated)
- **Loop**: Probably no

### Terminal Text Animation:
- **Type**: CSS animation or JavaScript typed effect
- **Speed**: ~50-100ms per character
- **Cursor**: Blinking block cursor
- **Behavior**: Types out text character by character
- **Used on**: 
  - Homepage CRT monitor
  - Welcome page CRT monitor

### Hamburger Menu:
- **Appearance**: Three horizontal lines
- **Color**: Black
- **Size**: ~30px x 30px
- **Position**: Top left of header
- **Behavior**: Opens side navigation panel (assumed)
- **Animation**: Lines may transform to X when open

### Social Media Icons:
- **Type**: SVG icons or icon font
- **Size**: 40-50px (header), 30px (cards)
- **Color**: Black (header), Black (footer), varies by context
- **Hover**: Likely color change or scale effect
- **Links**: Direct to respective social platforms

---

## Typography & Colors

### Font Families:

#### Display/Headers:
- **Font**: Custom or similar to Impact, Arial Black
- **Weights**: Bold (700), Extra Bold (800-900)
- **Style**: Condensed for large headers
- **Usage**: Page titles, section headers, card titles

#### Body Text:
- **Font**: Sans-serif, possibly Helvetica, Arial, or custom
- **Weights**: Regular (400), Medium (500), Semibold (600)
- **Usage**: Paragraphs, descriptions, bios

#### Monospace:
- **Font**: Courier New or similar
- **Usage**: Terminal text animation
- **Color**: Bright green (#00FF00)

### Font Sizes (Desktop):

#### Display:
- **Hero Title**: 70-80px
- **H1**: 60-70px
- **H2**: 48-56px
- **H3**: 36-42px
- **H4**: 28-32px

#### Body:
- **Large**: 20-24px
- **Regular**: 16-18px
- **Small**: 14-16px

#### Navigation:
- **Main Nav**: 18-22px
- **Footer Links**: 16-18px

### Color Palette (Expanded):

#### Primary Brand Colors:
- **Pink**: #FF6B9D, #FF69B4
- **Yellow**: #FFD700, #FFED4E
- **Cyan**: #00D9FF, #1E90FF
- **Magenta**: #FF00FF, #E535AB
- **Green**: #00FF41, #7FFF00 (terminal green)
- **Orange**: #FF8C00, #FFA500

#### Neutrals:
- **Black**: #000000
- **White**: #FFFFFF
- **Dark Gray**: #1A1A1A, #2C2C2C
- **Light Gray**: #F5F5F5, #CCCCCC

#### Gradients:
Common gradient combinations:
- Pink → Purple → Blue
- Yellow → Orange → Pink
- Cyan → Blue → Purple
- Green → Cyan → Blue
- Orange → Yellow → Green (rainbow spectrum)
- Multi-color rainbow: Red → Orange → Yellow → Green → Cyan → Blue → Purple

#### Text Colors by Context:
- **On black background**: White, Yellow, Cyan, Pink
- **On white background**: Black, Dark Gray
- **On gradient backgrounds**: Black or White depending on darkness
- **Links**: Yellow, Pink, Cyan (context dependent)

### Text Effects:

#### Shadows:
- **Headers on gradients**: 
  - text-shadow: 2px 2px 4px rgba(0,0,0,0.3)
- **High contrast needs**:
  - text-shadow: 0 0 10px black (for glow effect)

#### Outlines:
- **Yellow text on dark**: Sometimes black stroke/outline
- **Implementation**: -webkit-text-stroke: 2px black

---

## Animations & Transitions

### On-Load Animations:

#### Terminal Text Effect:
- **Type**: Sequential character reveal
- **Duration**: 2-3 seconds
- **Timing**: Linear or ease-in
- **Cursor**: Blinking effect (0.5s interval)
- **Implementation**: Likely JavaScript with setTimeout/setInterval

#### Fade-In Effects:
- **Elements**: Sections, cards, images
- **Duration**: 0.5-1s
- **Timing**: ease-out
- **Trigger**: On scroll into viewport (intersection observer)

### Hover Animations:

#### Buttons:
- **Effect**: Scale slightly larger (transform: scale(1.05))
- **Duration**: 0.3s
- **Timing**: ease-in-out
- **Additional**: Brightness increase or color shift

#### Cards:
- **Effect**: Lift effect (increase shadow, slight scale)
- **Duration**: 0.3s
- **Timing**: ease-out
- **Transform**: translateY(-5px) scale(1.02)

#### Navigation Links:
- **Effect**: Underline slide-in or color brightness
- **Duration**: 0.2s
- **Timing**: ease

#### Social Icons:
- **Effect**: Color change and/or scale
- **Duration**: 0.2s
- **Timing**: ease-in-out

### Scroll Animations:

#### Parallax Effects:
- **Elements**: Background gradients may have subtle parallax
- **Speed**: Slower than foreground content
- **Implementation**: CSS or JavaScript

#### Fade/Slide In:
- **Elements**: Cards, sections, team members
- **Direction**: Usually from bottom or side
- **Distance**: 20-50px
- **Duration**: 0.6-0.8s
- **Stagger**: Cards animate in sequence (0.1-0.2s delay each)

### Video Play Animation:
- **Button**: Play button likely fades out
- **Video**: Fades in or scales in
- **Duration**: 0.5s
- **Timing**: ease-in-out

### Navigation Transitions:
- **Page transitions**: Likely fade or slide effect
- **Duration**: 0.3-0.5s
- **Timing**: ease-in-out

---

## Responsive Behavior

### Breakpoints (Estimated):

```css
/* Mobile */
@media (max-width: 768px) { }

/* Tablet */
@media (min-width: 769px) and (max-width: 1024px) { }

/* Desktop */
@media (min-width: 1025px) { }
```

### Mobile Adaptations (375px - 768px):

#### Navigation:
- Hamburger menu visible
- Main nav items hidden in drawer/sidebar
- Social icons may reduce in size or hide some
- Logo remains centered

#### Hero Sections:
- Large text reduces: 70px → 40-48px
- Single column layout
- Cards stack vertically
- More padding reduction

#### CRT Monitor:
- Scales down proportionally
- Maintains aspect ratio
- ~350-400px wide on mobile

#### Definition Cards:
- Stack vertically (one per row)
- Full width minus padding
- Maintain aspect ratio

#### Team Member Cards:
- Single column layout
- Cards ~90% viewport width
- Bios full width below each card

#### Value Cards (Ethos):
- Single column layout
- Cards ~90% viewport width
- Vertical scrolling

#### Four-Card CTA Section:
- 2x2 grid or single column
- Cards stack vertically

#### Footer:
- Single column layout
- Social icons may reduce to 2 rows
- Text size reduces slightly

### Tablet Adaptations (768px - 1024px):

#### Navigation:
- May show full nav or hamburger depending on design
- More space than mobile

#### Layout:
- Often 2-column grid for cards
- Hero text: 60-70px
- More breathing room than mobile

#### Cards:
- 2 per row for team members
- 2 per row for value cards
- Maintains good sizing

---

## Forms & Validation

**Note**: Form details were not fully visible during exploration, but based on buttons and CTAs:

### Expected Form Elements:

#### Survey Forms:
- Radio buttons or checkboxes for selections
- Text inputs for open responses
- Dropdown menus for categories
- Submit button (styled as primary CTA)

#### Waitlist Form:
- Email input (required)
- Name input (possibly required)
- Optional fields (role, location, etc.)
- Subscribe checkbox
- Submit button

#### Contact Forms:
- Name field
- Email field
- Message textarea
- Subject dropdown
- Submit button

### Validation Patterns (Expected):

#### Email Validation:
- Pattern: RFC 5322 email format
- Error message: "Please enter a valid email"
- Visual: Red border or error text below field

#### Required Fields:
- Marked with asterisk (*)
- Error on submit if empty
- Visual indicator (red border, error message)

#### Success States:
- Confirmation message
- Possible redirect to thank you page
- Email confirmation sent

---

## Technical Notes

### Browser Compatibility:
- **Modern browsers**: Chrome, Firefox, Safari, Edge (last 2 versions)
- **Mobile browsers**: iOS Safari, Chrome Mobile
- **Tailwind CSS**: Using CDN version (should upgrade to production build)

### Performance Considerations:

#### Assets:
- Large gradient backgrounds (CSS gradients preferred over images)
- SVG icons for scalability
- Optimized images (WebP format recommended)
- Video should be optimized/compressed

#### Loading Strategy:
- Hero content loads first
- Lazy load images below fold
- Defer non-critical JavaScript
- Inline critical CSS

### Accessibility:

#### Required Features:
- Alt text for all images
- ARIA labels for icon buttons
- Keyboard navigation support
- Focus indicators visible
- Sufficient color contrast (WCAG AA minimum)
- Semantic HTML structure
- Screen reader friendly

### SEO Considerations:
- Proper heading hierarchy (H1 → H2 → H3)
- Meta descriptions
- Open Graph tags for social sharing
- Structured data markup
- Sitemap
- robots.txt

---

## Console Warnings/Errors Observed:

1. **Tailwind CSS CDN Warning**:
   ```
   cdn.tailwindcss.com should not be used in production
   ```
   - **Issue**: Using CDN version not recommended for production
   - **Solution**: Install Tailwind as PostCSS plugin

2. **Manifest 404**:
   ```
   Manifest fetch from site.webmanifest failed, code 404
   ```
   - **Issue**: Missing web app manifest file
   - **Solution**: Create manifest file for PWA support

3. **Connection Refused**:
   ```
   Failed to load resource: net::ERR_CONNECTION_REFUSED
   ```
   - **Issue**: Some resource attempted to load from localhost
   - **Solution**: Check for hardcoded localhost URLs

---

## Assets Inventory

### Images:
- CRT monitor illustration (PNG or SVG)
- Team member illustrations (11 custom portraits)
- Icons (social media, various UI elements)
- Logo (text + mascot character)
- Background textures (if any)

### Videos:
- Why Prosper video (Lauren Bruno)
- Possibly terminal text video (or CSS animation)

### Fonts:
- Bold display font (likely custom)
- Body text font (sans-serif)
- Monospace font (Courier or similar)

### Icons:
- Social media icons (Instagram, TikTok, X, LinkedIn, YouTube, Facebook)
- UI icons (hamburger menu, play button, arrows)

---

## Recommended Implementation Approach

### Phase 1: Foundation
1. Set up proper build system with Tailwind PostCSS
2. Create design tokens (colors, spacing, fonts)
3. Build component library (Button, Card, etc.)
4. Implement global layout (Header, Footer, Navigation)

### Phase 2: Core Pages
1. Homepage/splash screen with animation
2. Welcome page with all sections
3. Footer component (reusable across all pages)

### Phase 3: Content Pages
1. Why Prosper (video player)
2. Team page (card grid system)
3. Ethos page (value cards)

### Phase 4: Interactive Features
1. Hamburger menu with drawer
2. Survey forms
3. Waitlist signup
4. Contact forms

### Phase 5: Polish
1. Animations and transitions
2. Responsive refinement
3. Accessibility audit
4. Performance optimization
5. SEO implementation

---

## Measurements Summary

### Key Dimensions:

#### Desktop (1280px+):
- **Max content width**: 1200-1400px
- **Header height**: 80-90px
- **Nav bar height**: 60-70px
- **Footer height**: Variable (~400-500px)
- **Card width**: 350-400px
- **Card height**: 400-500px (varies)
- **Gap between cards**: 30-40px
- **Section padding**: 80-120px vertical

#### Tablet (768px - 1024px):
- **Content width**: 90% of viewport
- **Card width**: 45% of container
- **Gap between cards**: 20-30px
- **Section padding**: 60-80px vertical

#### Mobile (320px - 767px):
- **Content width**: 90% of viewport
- **Card width**: 95% of viewport
- **Gap between cards**: 20px
- **Section padding**: 40-60px vertical

---

## Color Codes Reference

### Exact Colors (Where Identified):

```css
/* Primary Brand Colors */
--pink-primary: #FF6B9D;
--yellow-primary: #FFD700;
--cyan-primary: #00D9FF;
--magenta-primary: #FF00FF;
--green-terminal: #00FF00;

/* Gradients */
--gradient-rainbow: linear-gradient(90deg, 
  #FF0000 0%, 
  #FF8C00 14%, 
  #FFD700 28%, 
  #00FF00 42%, 
  #00D9FF 56%, 
  #0000FF 70%, 
  #8B00FF 84%, 
  #FF00FF 100%
);

--gradient-pink-purple: linear-gradient(135deg, 
  #FF6B9D 0%, 
  #B565D8 50%, 
  #6366F1 100%
);

--gradient-warm: linear-gradient(135deg, 
  #FF8C00 0%, 
  #FFD700 50%, 
  #FF6B9D 100%
);

/* Neutrals */
--black: #000000;
--white: #FFFFFF;
--gray-dark: #1A1A1A;
```

---

## End of Analysis

This document provides comprehensive details for creating a pixel-perfect replica of the Prosper XO website. All visual elements, interactions, and design patterns have been documented for reference during development.

**Last Updated**: November 20, 2025