import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { GitBranch, Shield, Activity, Zap, Lock, Eye } from 'lucide-react';

const philosophies = [
  {
    icon: GitBranch,
    title: 'Automation First',
    description:
      'Automate repetitive tasks to reduce human error and increase efficiency. Every manual process is a candidate for automation.',
    tags: ['CI/CD', 'IaC', 'Scripting'],
  },
  {
    icon: Shield,
    title: 'Security by Design',
    description:
      'Integrate security practices into every stage of the development lifecycle. Security is not an afterthought.',
    tags: ['DevSecOps', 'Compliance', 'Secrets Mgmt'],
  },
  {
    icon: Activity,
    title: 'Observability',
    description:
      'Monitor, log, and trace everything to ensure system health and quick recovery. You cannot fix what you cannot see.',
    tags: ['Monitoring', 'Logging', 'Alerting'],
  },
  {
    icon: Zap,
    title: 'Reliability Engineering',
    description:
      'Build systems that are resilient to failures. Design for redundancy, graceful degradation, and self-healing.',
    tags: ['SRE', 'Chaos Eng', 'HA Design'],
  },
  {
    icon: Lock,
    title: 'Infrastructure as Code',
    description:
      'Define infrastructure through code for consistency, version control, and reproducibility. No manual changes.',
    tags: ['Terraform', 'Ansible', 'GitOps'],
  },
  {
    icon: Eye,
    title: 'Continuous Improvement',
    description:
      'Constantly measure, analyze, and optimize. The best systems are those that evolve with the business needs.',
    tags: ['Metrics', 'Feedback', 'Iteration'],
  },
];

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

      // Cards stagger animation
      const cards = cardsRef.current?.querySelectorAll('.philosophy-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'back.out(1.2)',
            scrollTrigger: {
              trigger: cardsRef.current,
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
      id="philosophy"
      ref={sectionRef}
      className="section relative"
    >
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div ref={headingRef} className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            DevOps Philosophy
          </h2>
          <p className="text-muted-foreground text-lg">
            Principles that guide my approach to building and operating
            production systems.
          </p>
        </div>

        {/* Philosophy cards grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {philosophies.map((philosophy, index) => (
            <div
              key={index}
              className="philosophy-card card-hover p-6 rounded-xl bg-card border border-border group"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <philosophy.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {philosophy.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-5">
                {philosophy.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {philosophy.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
