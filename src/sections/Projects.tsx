import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'EKS GitOps Platform',
    status: 'LIVE',
    statusType: 'live',
    description:
      'Production-grade Kubernetes cluster on AWS EKS with GitOps-based deployments using ArgoCD. Features automated sync, drift detection, and multi-environment support.',
    architecture: [
      'Multi-node EKS cluster with managed node groups',
      'ArgoCD for GitOps-driven deployments',
      'NGINX Ingress Controller with SSL termination',
      'External DNS for automatic route management',
      'Cluster Autoscaler for dynamic scaling',
    ],
    responsibilities: [
      'Designed cluster architecture with high availability',
      'Implemented GitOps workflows with auto-sync policies',
      'Configured Ingress routing and TLS certificates',
      'Set up monitoring with Prometheus and Grafana',
    ],
    tech: ['EKS', 'ArgoCD', 'Kubernetes', 'Terraform', 'Helm'],
    github: 'https://github.com/sohail-24/chatapp-gitops',
    featured: true,
  },
  {
    title: 'AWS DevOps Automation',
    status: 'STABLE',
    statusType: 'stable',
    description:
      'Comprehensive automation suite for AWS infrastructure operations. Reduces manual effort and ensures consistent, repeatable deployments across environments.',
    architecture: [
      'Modular Terraform configurations',
      'Shell scripts for operational tasks',
      'AWS CLI automation workflows',
      'IAM policy management',
      'Cost optimization scripts',
    ],
    responsibilities: [
      'Automated EC2 lifecycle management',
      'Built IAM user and policy provisioning',
      'Implemented S3 bucket management',
      'Created VPC and networking automation',
    ],
    tech: ['AWS', 'Terraform', 'Bash', 'Python', 'AWS CLI'],
    github: 'https://github.com/sohail-24/aws-devops-automation',
    featured: false,
  },
  {
    title: 'Terraform EC2 Production',
    status: 'PROD',
    statusType: 'prod',
    description:
      'Enterprise-grade EC2 infrastructure with remote state management, secure keyless access via SSM, and compliance-ready configurations.',
    architecture: [
      'Remote state with S3 backend',
      'DynamoDB state locking',
      'SSM Session Manager for keyless SSH',
      'IAM instance profiles',
      'Security groups with least privilege',
    ],
    responsibilities: [
      'Designed secure infrastructure patterns',
      'Implemented remote state management',
      'Removed SSH key dependencies with SSM',
      'Established enterprise IaC practices',
    ],
    tech: ['Terraform', 'EC2', 'SSM', 'IAM', 'S3', 'DynamoDB'],
    github: 'https://github.com/sohail-24/terraform-ec2-basic',
    featured: false,
  },
  {
    title: 'Flask CI/CD Pipeline',
    status: 'ACTIVE',
    statusType: 'live',
    description:
      'End-to-end CI/CD pipeline for Flask applications with automated testing, Docker builds, and deployment orchestration.',
    architecture: [
      'GitHub Actions for CI automation',
      'Docker multi-stage builds',
      'Automated testing with pytest',
      'Container registry integration',
      'Deployment to AWS ECS',
    ],
    responsibilities: [
      'Built automated testing workflows',
      'Implemented Docker image builds',
      'Configured deployment pipelines',
      'Set up environment promotion',
    ],
    tech: ['GitHub Actions', 'Docker', 'Flask', 'Pytest', 'AWS ECS'],
    github: 'https://github.com/sohail-24/flask-cicd-demo',
    featured: false,
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

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

      // Project cards animation
      const cards = projectsRef.current?.querySelectorAll('.project-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: projectsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getStatusClass = (statusType: string) => {
    switch (statusType) {
      case 'live':
        return 'status-live';
      case 'stable':
        return 'status-stable';
      case 'prod':
        return 'status-prod';
      default:
        return 'status-stable';
    }
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section relative"
    >
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div ref={headingRef} className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Production-oriented infrastructure projects showcasing real DevOps
            ownership and system thinking.
          </p>
        </div>

        {/* Projects grid */}
        <div ref={projectsRef} className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card group relative rounded-xl bg-card border border-border overflow-hidden card-hover ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="tag tag-primary">Featured</span>
                </div>
              )}

              <div
                className={`${
                  project.featured ? 'grid md:grid-cols-2 gap-8' : ''
                }`}
              >
                {/* Left side - Main info */}
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span
                      className={`status-badge ${getStatusClass(
                        project.statusType
                      )}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      {project.status}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Documentation
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Right side - Architecture & Responsibilities */}
                <div className="p-6 bg-muted/30 border-t md:border-t-0 md:border-l border-border">
                  {/* Architecture */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                      Architecture
                    </h4>
                    <ul className="space-y-2">
                      {project.architecture.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Responsibilities */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                      My Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {project.responsibilities.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-secondary mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View more link */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/sohail-24"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-5 h-5" />
            View more projects on GitHub
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
