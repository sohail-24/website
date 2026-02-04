import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Briefcase, FolderGit, Shield } from 'lucide-react';

const stats = [
  {
    icon: Briefcase,
    value: '3+',
    label: 'Years Experience',
    description: 'In DevOps & Cloud',
  },
  {
    icon: FolderGit,
    value: '15+',
    label: 'Projects',
    description: 'Production Systems',
  },
  {
    icon: Shield,
    value: '99.9%',
    label: 'Uptime',
    description: 'Reliability Focus',
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Content animation
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Stats cards stagger animation
      const statCards = statsRef.current?.querySelectorAll('.stat-card');
      if (statCards) {
        gsap.fromTo(
          statCards,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section relative"
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column - Content */}
          <div>
            <h2
              ref={headingRef}
              className="text-3xl sm:text-4xl font-bold mb-8"
            >
              About Me
            </h2>

            <div ref={contentRef} className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I am a{' '}
                <span className="text-foreground font-medium">
                  DevOps Engineer
                </span>{' '}
                based in Hyderabad, specializing in building{' '}
                <span className="text-foreground font-medium">
                  production-grade infrastructure
                </span>{' '}
                that scales. My work spans the full DevOps lifecycle—from
                infrastructure provisioning and CI/CD pipeline design to
                container orchestration and production monitoring.
              </p>

              <p>
                At{' '}
                <span className="text-foreground font-medium">
                  Visys Cloud Technology
                </span>
                , I work on real production systems, handling deployment
                automation, infrastructure maintenance, and system reliability. I
                approach DevOps as{' '}
                <span className="text-foreground font-medium">ownership</span>—
                taking end-to-end responsibility for systems that businesses
                depend on.
              </p>

              <p>
                My technical toolkit includes{' '}
                <span className="text-primary">AWS</span>,{' '}
                <span className="text-primary">Kubernetes</span>,{' '}
                <span className="text-primary">Docker</span>,{' '}
                <span className="text-primary">Terraform</span>,{' '}
                <span className="text-primary">Jenkins</span>, and{' '}
                <span className="text-primary">ArgoCD</span>. I focus on
                Infrastructure as Code, GitOps workflows, and building resilient
                systems that minimize downtime and maximize operational
                efficiency.
              </p>

              {/* Experience highlight */}
              <div className="pt-6 border-t border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-1">
                      DevOps Engineer
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Visys Cloud Technology • Dec 2025 – Present
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Driving DevOps practices for production systems, ensuring
                      reliability, scalability, and operational excellence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Stats */}
          <div ref={statsRef} className="space-y-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-card card-hover p-6 rounded-xl bg-card border border-border"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gradient mb-1">
                      {stat.value}
                    </div>
                    <div className="text-foreground font-medium">
                      {stat.label}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Quick info card */}
            <div className="stat-card p-6 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
              <h3 className="text-foreground font-semibold mb-3">
                Current Focus
              </h3>
              <div className="flex flex-wrap gap-2">
                {['GitOps', 'Kubernetes', 'Platform Engineering', 'SRE'].map(
                  (tag) => (
                    <span key={tag} className="tag tag-primary">
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
