import Image from 'next/image';
import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'TEAM | Prosper XO',
  description:
    'Meet the team behind Prosper XO - artists, engineers, legal advocates, and creative technologists building a sustainable future for creators.',
  openGraph: {
    title: 'TEAM | Prosper XO',
    description:
      'Meet the team behind Prosper XO - artists, engineers, legal advocates, and creative technologists building a sustainable future for creators.',
    images: [
      {
        url: '/assets/thumbnail/prosper-website-thumbnail.jpg',
        width: 1200,
        height: 630,
        alt: 'Prosper XO Team',
      },
    ],
    url: 'https://www.prosperxo.com/team',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TEAM | Prosper XO',
    description:
      'Meet the team behind Prosper XO - artists, engineers, legal advocates, and creative technologists building a sustainable future for creators.',
    images: ['/assets/thumbnail/prosper-website-thumbnail.jpg'],
  },
};

interface SocialLink {
  href: string;
  icon: string;
  label: string;
}

interface TeamMember {
  name: string;
  title: string;
  image: string;
  bio: string | string[];
  socials: SocialLink[];
  cardClass: string;
}

export default function TeamPage() {
  const teamMembers: TeamMember[] = [
    {
      name: 'JOSEPH',
      title: 'Chief Experience Officer',
      image: '/assets/graphics/prosper-website-illustration-joseph.png',
      bio: 'As Chief Experience Officer at Prosper XO, Joseph leads the platform\'s UI/UX and helps shape the broader experience across events and community engagement. With a background in front-end development and creative technology, he blends artistic insight with technical execution to drive meaningful connections. An active artist and designer, Joseph brings firsthand knowledge of the music world and focuses on building tools that empower artists and spark lasting cultural impact.',
      socials: [
        {
          href: 'https://www.instagram.com/josephatprosperxodotcom',
          icon: 'fab fa-instagram',
          label: 'Instagram',
        },
        {
          href: 'https://linkedin.com/in/namejoseph',
          icon: 'fab fa-linkedin',
          label: 'LinkedIn',
        },
        {
          href: 'mailto:joseph@prosperxo.com',
          icon: 'fas fa-envelope',
          label: 'Email',
        },
      ],
      cardClass: styles.cardJoseph,
    },
    {
      name: 'JONNY',
      title: 'Chief Technology Officer',
      image: '/assets/graphics/prosper-website-illustration-jonny.png',
      bio: 'Our AI Engineer and Full Stack Developer is more than just a technologist—he\'s also a working artist who intimately understands the challenges of the creator economy and the ways traditional tech continues to leave artists behind. That shared frustration is part of what brought us together to build Prosper XO. He brings with him a deep generational connection to creative culture and community. His grandparents owned a community-run dance hall, a hub for music, movement, and gathering. His father, a professional magician, taught him the business and technological side of being an artist: the hustle, the strategy, and the lack of support creatives often face. His lived experience with art, family legacy, community, and technology gives him a unique and powerful lens on what we\'re building.',
      socials: [
        {
          href: 'https://www.instagram.com/jonnyjohns_n/',
          icon: 'fab fa-instagram',
          label: 'Instagram',
        },
        { href: 'https://www.jonnyjohnson.com/', icon: 'fas fa-globe', label: 'Website' },
        {
          href: 'mailto:jonny@prosperxo.com',
          icon: 'fas fa-envelope',
          label: 'Email',
        },
      ],
      cardClass: styles.cardJonny,
    },
    {
      name: 'GABE',
      title: 'Chief Product Officer',
      image: '/assets/graphics/prosper-website-illustration-gabe.png',
      bio: 'Gabe is a serial entrepreneur, systems engineer, and creative technologist who thrives where art and innovation collide. With over two decades of experience in systems and systems engineering, secure infrastructure, cloud platforms, and AI/ML innovation, he brings both precision and imagination to every project. From directing, editing, and projection design to lighting concerts, crafting motion graphics, and capturing moments behind the lens, Gabe\'s work in the arts fuels his vision for technology. He leads advanced AI initiatives, from multimodal analysis to personalization engines, always with the same goal: to build tools that empower artists to own their creative output, grow sustainable income streams, and connect authentically with their audiences.',
      socials: [
        {
          href: 'https://www.instagram.com/gabrielphoenix/',
          icon: 'fab fa-instagram',
          label: 'Instagram',
        },
        {
          href: 'mailto:gabe@prosperxo.com',
          icon: 'fas fa-envelope',
          label: 'Email',
        },
      ],
      cardClass: styles.cardGabe,
    },
    {
      name: 'CLINT',
      title: 'Entertainment Lawyer',
      image: '/assets/graphics/prosper-website-illustration-clinton.png',
      bio: 'Our startup and entertainment lawyer has represented artists fighting for ownership of their data, worked with music industry professionals to navigate complex contract structures, and brings deep knowledge of business formation and IP protection. As someone with a family rooted in the arts, he\'s personally committed to building a fairer future for creatives—and does it every day.',
      socials: [
        { href: 'https://adcoxfirm.com/', icon: 'fas fa-globe', label: 'Website' },
        {
          href: 'mailto:clint@adcoxfirm.com',
          icon: 'fas fa-envelope',
          label: 'Email',
        },
      ],
      cardClass: styles.cardClint,
    },
    {
      name: 'ZEALE',
      title: 'CMO & Cultural Strategist',
      image: '/assets/graphics/prosper-website-illustration-zeale.png',
      bio: [
        'ZEALE is an award-winning creative at the intersection of music, live hosting, event production, and cultural direction. A Recording Academy voting member, he has shared the stage at Madison Square Garden with Jellyroll and at the Hollywood Bowl with Gary Clark Jr., blending artistry with high-profile cultural moments.',
        'He has produced, hosted, and emceed for Gary Vee\'s Veecon, the Dallas Cowboys Training Camp, the EMLS World Championship, NBA All-Star Weekend, and UT Longhorns Football. His wide-ranging clientele includes Warner Music Group, Cartoon Network, Red Bull, Formula 1, Coca-Cola, and Topo Chico, as well as leading music-tech startups.',
        'With his unique positioning as both artist and brand strategist, ZEALE delivers insights that bridge brands and audiences in fresh, authentic ways. In his current role as Chief Marketing Officer and Cultural Visionary of Prosper XO, he brings this multi-hyphenated expertise to champion artists, build brand partnerships, and shape a new creative economy.',
      ],
      socials: [
        { href: 'https://www.instagram.com/zeale/', icon: 'fab fa-instagram', label: 'Instagram' },
        { href: 'https://x.com/zeale/', icon: 'fab fa-x-twitter', label: 'X' },
        {
          href: 'https://www.linkedin.com/in/valin-zeale-zamarron-86270b345/',
          icon: 'fab fa-linkedin',
          label: 'LinkedIn',
        },
        {
          href: 'mailto:zeale@prosperxo.com',
          icon: 'fas fa-envelope',
          label: 'Email',
        },
      ],
      cardClass: styles.cardZeale,
    },
    {
      name: 'DAVID',
      title: 'Founding Engineer, Product & Growth',
      image: '/assets/graphics/prosper-website-illustration-david.png',
      bio: 'As a founding Full Stack Developer, David specializes in creating innovative web applications that seamlessly integrate internal and external systems to transform data into actionable insights. With a robust background in music production, audio engineering, and software development, he uniquely bridges the gap between artistry and technology. Passionate about empowering artists, David applies his combined expertise to develop tools and platforms that enable musicians to achieve their creative visions, realize their professional goals, and remain true to their core values. Drawing from his own experience as a musician deeply immersed in technology, David continuously seeks new opportunities to leverage digital solutions that help artists thrive.',
      socials: [
        {
          href: 'https://www.instagram.com/david_curtains/',
          icon: 'fab fa-instagram',
          label: 'Instagram',
        },
        {
          href: 'https://www.linkedin.com/in/david-cortinas/',
          icon: 'fab fa-linkedin',
          label: 'LinkedIn',
        },
        {
          href: 'mailto:david@prosperxo.com',
          icon: 'fas fa-envelope',
          label: 'Email',
        },
      ],
      cardClass: styles.cardDavid,
    },
    {
      name: 'DEVIN',
      title: 'Full Stack Data Engineer',
      image: '/assets/graphics/prosper-website-illustration-devin.png',
      bio: [
        'Devin is a multidisciplinary artist and technologist with a background in music, education, and interactive technology. After earning a Master\'s in Music Performance from the San Francisco Conservatory of Music, he moved to Austin, TX to teach music. However, due to rising costs of living, he transitioned careers to IT working as a database administrator. This background and skillset is what led Devin to be our Full Stack Data Engineer.',
        'Devin has played an instrumental role in cultivating Austin\'s TouchDesigner community, leading courses at the local tech-art school and venue, dadaLab. His professional visual work has supported tours for acclaimed artists, appearing in major venues nationwide.',
        'Devin is fundamentally driven by a belief in the power of art and education to empower individuals; that providing people with the foundational tools to get started is often enough for them to grow and achieve their own success. He\'s experienced first-hand the struggles artists encounter to make ends meet and understands the challenges they face working in non-creative environments.',
      ],
      socials: [
        {
          href: 'https://www.instagram.com/devrasplexi',
          icon: 'fab fa-instagram',
          label: 'Instagram',
        },
        {
          href: 'https://www.linkedin.com/in/devincryan/',
          icon: 'fab fa-linkedin',
          label: 'LinkedIn',
        },
        {
          href: 'mailto:devin@prosperxo.com',
          icon: 'fas fa-envelope',
          label: 'Email',
        },
      ],
      cardClass: styles.cardDevin,
    },
    {
      name: 'COURTNEY',
      title: 'Senior Brand Designer',
      image: '/assets/graphics/prosper-website-illustration-Courtney.png',
      bio: 'Brand & web designer based in Austin, Texas, known for bold, strategic visual systems and storytelling. She\'s built brand identities, UX assets, and creative campaigns for clients like NASA-affiliated Translation Research Institute for Space Health, YETI, Whole Foods, and the Houston Symphony. Courtney brings a sharp sense of color, typography, and visual narrative, turning Prosper XO\'s mission into compelling graphics, in-app experiences, and brand appearances. With roots in brand, web, and UX design and expressive, culture-forward work, she helps ensure every visual touchpoint, whether sticker, app screen, or merch, feels intentional, vibrant, and deeply connected to artist culture.',
      socials: [
        {
          href: 'https://www.instagram.com/courtney_ann71/',
          icon: 'fab fa-instagram',
          label: 'Instagram',
        },
        {
          href: 'https://www.linkedin.com/in/courtney-ryan-57a6b127/',
          icon: 'fab fa-linkedin',
          label: 'LinkedIn',
        },
        {
          href: 'mailto:courtney@prosperxo.com',
          icon: 'fas fa-envelope',
          label: 'Email',
        },
      ],
      cardClass: styles.cardCourtney,
    },
    {
      name: 'SUE',
      title: 'Advisor',
      image: '/assets/graphics/prosper-website-illustration-sue.png',
      bio: 'With her early career rooted in SaaS tech startup operations as part of the team behind the first legal digital music subscription service, Sue has long been passionate about the intersection of innovation, music, and culture. Merging her operations and digital marketing background, Sue now supports event producers in creating experiences that spotlight emerging artists while aligning with brand values. Sue offers the local-business view, discussing why regional brands are eager to champion home-grown talent and how authentic partnerships drive mutual growth.',
      socials: [
        {
          href: 'https://www.linkedin.com/in/suekoch/',
          icon: 'fab fa-linkedin',
          label: 'LinkedIn',
        },
        {
          href: 'mailto:sue@prosperxo.com',
          icon: 'fas fa-envelope',
          label: 'Email',
        },
      ],
      cardClass: styles.cardSue,
    },
    {
      name: 'MONICA',
      title: 'Marketing Intern',
      image: '/assets/graphics/prosper-website-illustration-monica.png',
      bio: 'Our Marketing Intern, Monica, is extraordinary. She\'s not just running our TikTok; she\'s creating a living window into Prosper XO, where artists and community connect in real time. With her sharp storytelling and natural ability to capture culture in motion, Monica turns content into conversation and sparks into movements. As a Public Relations student at UT Austin, she\'s already represented local artists and honed her skills at a rising record label. Now she\'s bringing that same drive and creativity to Prosper XO, helping us shape a new narrative for artists everywhere.',
      socials: [
        {
          href: 'https://www.instagram.com/mony_beth_/',
          icon: 'fab fa-instagram',
          label: 'Instagram',
        },
        {
          href: 'https://www.linkedin.com/in/monicabethsanchez/',
          icon: 'fab fa-linkedin',
          label: 'LinkedIn',
        },
        {
          href: 'mailto:monybeth39@gmail.com',
          icon: 'fas fa-envelope',
          label: 'Email',
        },
      ],
      cardClass: styles.cardMonica,
    },
  ];

  return (
    <div className={styles.teamSection}>
      <Image
        src="/assets/text/prosper-website-stylizedtext-founding.png"
        alt="Founding Team"
        width={800}
        height={200}
        className={styles.textHeader}
        priority
      />

      {/* Lauren's special card */}
      <div className={styles.teamCardWrapper}>
        <div className={styles.laurenCard}>
          <div className={styles.imageContainer}>
            <Image
              src="/assets/graphics/prosper-website-illustration-lauren-landscape.png"
              alt="Lauren"
              width={1200}
              height={800}
              className={styles.laurenImg}
              priority
            />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.nameTitle}>
              <span className={styles.name}>LAUREN</span>
              <span className={styles.title}>Chief Executive Officer</span>
            </div>
            <div className={styles.teamSocialIcons}>
              <a
                href="https://www.instagram.com/lesrav1111/"
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lauren on Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/lauren-bruno-32658213a/"
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lauren on LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="mailto:lauren@prosperxo.com"
                className={styles.socialLink}
                aria-label="Email Lauren"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        <p className={`${styles.teamBio} ${styles.teamBioLauren}`}>
          Our founder is a lifelong artist who began performing and writing music in second grade.
          She went on to attend Berklee College of Music as a songwriting major, minoring in music
          business, and has spent her entire career working at the intersection of creativity,
          advocacy, and innovation. Based in Austin, TX, she also founded a local organization that
          connects the arts community with social justice movements bridging the gap between music
          and meaningful change. With experience directing large-scale community activations,
          booking festivals, managing artists, and navigating the music tech startup world, she
          brings a deep understanding of both the artistic journey and the business behind it. Her
          work extends to political advocacy for artists, and her lived experience gives her deep
          insight into what it means to survive as an artist and as a business. She&apos;s using
          that knowledge to build a more sustainable future and tools for the creative community.
        </p>
      </div>

      {/* Team Grid */}
      <div className={styles.teamGrid}>
        {teamMembers.map((member) => (
          <div key={member.name} className={styles.teamCardWrapper}>
            <div className={`${styles.teamCard} ${member.cardClass}`}>
              <div className={styles.imageContainer}>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={350}
                  height={467}
                  className={styles.teamImg}
                />
              </div>
              <div className={styles.textContainer}>
                <div className={styles.nameTitle}>
                  <span className={styles.name}>{member.name}</span>
                  <span className={styles.title}>{member.title}</span>
                </div>
                <div className={styles.teamSocialIcons}>
                  {member.socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className={styles.socialLink}
                      target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                      rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                      aria-label={`${member.name} ${social.label}`}
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            {Array.isArray(member.bio) ? (
              member.bio.map((paragraph, index) => (
                <p key={index} className={styles.teamBio}>
                  {paragraph}
                </p>
              ))
            ) : (
              <p className={styles.teamBio}>{member.bio}</p>
            )}
          </div>
        ))}
      </div>

      {/* Team Summary */}
      <div className={styles.teamSummaryBox}>
        <div className={styles.teamSummary}>
          <p>
            We&apos;re a team of artists, engineers, legal advocates, and creative technologists
            who have lived inside the music industry on both sides of the equation. We&apos;ve been
            the performers, the managers, the promoters, the designers, and the people chasing
            after checks after giving everything to our craft. We&apos;ve seen the beauty of the
            creative community, and also the burnout, the broken systems, and the lack of ownership
            and devaluation artists face every day.
          </p>
          <p>
            In addition to our core team, we&apos;re supported by a growing group of advisors
            ranging from high-level corporate technology leaders to experts on the ground floor of
            the music and creative industries. Their insight helps guide both our long-term strategy
            and our day-to-day product development, ensuring we stay rooted in both innovation and
            reality.
          </p>
          <p>
            We didn&apos;t just come together to build an app; we came together to build a
            sustainable future for the artist. Prosper XO is about shifting power back to the
            creators. We believe that when artists prosper, culture thrives. That&apos;s why
            we&apos;re building Prosper XO together.
          </p>
        </div>
      </div>
    </div>
  );
}