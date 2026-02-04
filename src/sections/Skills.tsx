import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import {
  Cloud,
  Container,
  Workflow,
  Code2,
  Server,
  Gauge,
  Terminal,
  Database,
} from 'lucide-react';

const skillCategories = [
  {
    icon: Cloud,
    title: 'Cloud & Infrastructure',
    description: 'Building scalable, cost-effective cloud architectures',
    skills: [
      'AWS',
      'EC2',
      'VPC',
      'IAM',
      'S3',
      'ELB',
      'CloudWatch',
      'Route 53',
    ],
    color: 'from-orange-500/20 to-yellow-500/20',
  },
  {
    icon: Container,
    title: 'Containers & Orchestration',
    description: 'Containerization and cluster management at scale',
    skills: [
      'Docker',
      'Kubernetes',
      'EKS',
      'kubeadm',
      'Helm',
      'Ingress',
      'Services',
      'Pods',
    ],
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    icon: Workflow,
    title: 'CI/CD & Automation',
    description: 'Automated pipelines for faster, reliable releases',
    skills: [
      'Jenkins',
      'GitHub Actions',
      'GitLab CI',
      'ArgoCD',
      'GitOps',
      'Webhooks',
      'Artifacts',
    ],
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    icon: Code2,
    title: 'IaC & Scripting',
    description: 'Infrastructure as Code for reproducible environments',
    skills: [
      'Terraform',
      'Ansible',
      'Bash',
      'Python',
      'YAML',
      'JSON',
      'HCL',
      'Jinja2',
    ],
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    icon: Gauge,
    title: 'Monitoring & Observability',
    description: 'Full-stack visibility into system performance',
    skills: [
      'Prometheus',
      'Grafana',
      'ELK Stack',
      'Datadog',
      'CloudWatch',
      'Jaeger',
      'PagerDuty',
    ],
    color: 'from-red-500/20 to-rose-500/20',
  },
  {
    icon: Server,
    title: 'Systems & Networking',
    description: 'Linux systems administration and network design',
    skills: [
      'Linux',
      'Nginx',
      'Apache',
      'DNS',
      'TCP/IP',
      'TLS/SSL',
      'Firewalls',
      'VPN',
    ],
    color: 'from-indigo-500/20 to-violet-500/20',
  },
  {
    icon: Database,
    title: 'Databases & Storage',
    description: 'Data persistence and storage solutions',
    skills: [
      'PostgreSQL',
      'MySQL',
      'Redis',
      'MongoDB',
      'RDS',
      'S3',
      'EBS',
      'EFS',
    ],
    color: 'from-teal-500/20 to-cyan-500/20',
  },
  {
    icon: Terminal,
    title: 'DevSecOps & Best Practices',
    description: 'Security integrated into the development lifecycle',
    skills: [
      'Vault',
      'Trivy',
      'SonarQube',
      'OWASP',
      'RBAC',
      'Secrets Mgmt',
      'Compliance',
    ],
    color: 'from-amber-500/20 to-orange-500/20',
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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

      // Skill cards stagger animation
      const cards = gridRef.current?.querySelectorAll('.skill-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: gridRef.current,
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
      id="skills"
      ref={sectionRef}
      className="section relative"
    >
      <div className="section-container">
        {/* Header */}
        <div ref={headingRef} className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical Expertise
          </h2>
          <p className="text-muted-foreground text-lg">
            A comprehensive toolkit for building and operating production
            systems.
          </p>
        </div>

        {/* Skills grid */}
        <div
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="skill-card card-hover p-5 rounded-xl bg-card border border-border group"
            >
              {/* Header with icon */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}
                >
                  <category.icon className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="font-semibold text-foreground text-sm">
                  {category.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-xs text-muted-foreground mb-4">
                {category.description}
              </p>

              {/* Skills tags */}
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded text-[10px] font-medium bg-muted text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom highlight */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            Continuously learning and expanding my expertise in{' '}
            <span className="text-primary">Platform Engineering</span>,{' '}
            <span className="text-primary">SRE practices</span>, and{' '}
            <span className="text-primary">Cloud-native technologies</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
