export type ServiceContent = {
  slug: string;
  title: string;
  eyebrow: string;
  intro: string;
  cta: string;
  solvesTitle: string;
  solvesText: string[];
  modulesTitle: string;
  modules: {
    number: string;
    title: string;
    text: string;
  }[];
  frameworks: string[];
  frameworksNote: string;
  changeTitle: string;
  changeIntro: string;
  changes: {
    number: string;
    title: string;
    text: string;
  }[];
};

export const services: Record<string, ServiceContent> = {
  riskVisibility: {
    slug: "risk-visibility",
    eyebrow: "Risk Visibility",
    title: "See risk earlier, before it becomes expensive.",
    intro:
      "We help organisations connect scattered risk signals into one clear management view, so leadership can act earlier.",
    cta: "Start a project inquiry",
    solvesTitle: "What this service solves",
    solvesText: [
      "Risk signals often exist, but they are scattered across systems, teams and reports.",
      "Without a clear view, issues escalate, response is slow and leaders see the problem too late.",
      "We bring structure to those signals so you can see what is emerging, what is unresolved and where action is needed.",
    ],
    modulesTitle: "How we structure visibility",
    modules: [
      {
        number: "01",
        title: "Signal mapping",
        text: "We identify and connect risk signals across operations, systems and external sources.",
      },
      {
        number: "02",
        title: "Escalation logic",
        text: "We define clear rules for when and how issues escalate.",
      },
      {
        number: "03",
        title: "Ownership model",
        text: "We clarify who owns what, so nothing falls through the cracks.",
      },
      {
        number: "04",
        title: "Leadership view",
        text: "We build a simple view for leaders to focus on what matters most.",
      },
    ],
    frameworks: [
      "Human Rights Due Diligence",
      "Grievance Mechanism Principles",
      "Audit & Non-Conformity Management",
      "Corrective Action Frameworks",
      "Fairtrade Requirements",
      "Rainforest Alliance Requirements",
      "Buyer Due Diligence Requirements",
      "ESG & Sustainability Reporting",
    ],
    frameworksNote:
      "We help teams structure evidence and reporting around certification, audit and buyer requirements, including schemes such as Fairtrade and Rainforest Alliance where relevant.",
    changeTitle: "What changes after implementation",
    changeIntro:
      "We turn scattered signals into a clear, actionable view your organisation can rely on.",
    changes: [
      {
        number: "01",
        title: "Earlier visibility",
        text: "You see issues while they are emerging, not after they escalate.",
      },
      {
        number: "02",
        title: "Clearer ownership",
        text: "Everyone knows what they own and what needs their attention.",
      },
      {
        number: "03",
        title: "Stronger escalation",
        text: "The right issues reach the right people at the right time.",
      },
      {
        number: "04",
        title: "Cleaner evidence",
        text: "Audit and certification evidence is organised and gap-free.",
      },
      {
        number: "05",
        title: "Leadership-ready reporting",
        text: "Simple reporting supports faster decisions.",
      },
    ],
  },

  evidenceStructure: {
    slug: "evidence-structure",
    eyebrow: "Evidence Structure",
    title: "Make evidence easier to collect, trust and use.",
    intro:
      "We help teams organise evidence so it supports audits, buyer requests, management review and accountability.",
    cta: "Start a project inquiry",
    solvesTitle: "What this service solves",
    solvesText: [
      "Good work is often happening, but the proof sits across folders, emails, spreadsheets, forms and photos.",
      "When evidence is scattered, it becomes difficult to show what happened, who acted and whether the issue was closed.",
      "We structure evidence so teams can collect, review and use it with confidence.",
    ],
    modulesTitle: "How we structure evidence",
    modules: [
      {
        number: "01",
        title: "Evidence mapping",
        text: "We identify where evidence currently sits and where gaps exist.",
      },
      {
        number: "02",
        title: "Minimum standard",
        text: "We define what good evidence should contain.",
      },
      {
        number: "03",
        title: "Verification logic",
        text: "We clarify how evidence is checked, approved and closed.",
      },
      {
        number: "04",
        title: "Readiness view",
        text: "We shape evidence for audits, buyers and leadership review.",
      },
    ],
    frameworks: [
      "Audit Evidence Requirements",
      "Corrective Action Closure",
      "Fairtrade Requirements",
      "Rainforest Alliance Requirements",
      "Buyer Evidence Requests",
      "Internal Control Systems",
      "ESG Reporting",
      "Human Rights Due Diligence",
    ],
    frameworksNote:
      "We help teams organise evidence around audit, certification and buyer requirements, including Fairtrade and Rainforest Alliance where relevant.",
    changeTitle: "What changes after implementation",
    changeIntro:
      "Evidence becomes easier to find, verify and use when decisions matter.",
    changes: [
      {
        number: "01",
        title: "Cleaner evidence",
        text: "Records are structured and easier to retrieve.",
      },
      {
        number: "02",
        title: "Stronger proof",
        text: "Evidence shows action, ownership and closure.",
      },
      {
        number: "03",
        title: "Better audit readiness",
        text: "Teams can respond faster to audit and buyer requests.",
      },
      {
        number: "04",
        title: "Clearer accountability",
        text: "Everyone knows what evidence they are responsible for.",
      },
      {
        number: "05",
        title: "Less duplication",
        text: "Teams stop recreating evidence across multiple channels.",
      },
    ],
  },

  responseTracking: {
    slug: "response-tracking",
    eyebrow: "Response Tracking",
    title: "Track action until issues are actually closed.",
    intro:
      "We help teams move from reporting problems to tracking clear action, ownership and closure.",
    cta: "Start a project inquiry",
    solvesTitle: "What this service solves",
    solvesText: [
      "Many organisations record issues, but follow-up happens informally across emails, meetings and spreadsheets.",
      "This creates delays, unclear ownership and weak closure evidence.",
      "We structure response tracking so every issue has an owner, action, deadline and verification path.",
    ],
    modulesTitle: "How we structure response",
    modules: [
      {
        number: "01",
        title: "Case intake",
        text: "We define what gets recorded and how issues enter the system.",
      },
      {
        number: "02",
        title: "Assignment",
        text: "We clarify who owns follow-up and what action is expected.",
      },
      {
        number: "03",
        title: "Escalation",
        text: "We define what happens when action is delayed or unresolved.",
      },
      {
        number: "04",
        title: "Closure",
        text: "We structure verification so closure is evidence-based.",
      },
    ],
    frameworks: [
      "Corrective Action Management",
      "Grievance Response",
      "Audit Non-Conformities",
      "Incident Follow-Up",
      "Fairtrade Requirements",
      "Rainforest Alliance Requirements",
      "Internal SOPs",
      "Buyer Remediation Requirements",
    ],
    frameworksNote:
      "We help teams align response tracking with internal procedures, certification expectations and buyer remediation requirements.",
    changeTitle: "What changes after implementation",
    changeIntro:
      "Follow-up becomes visible, owned and easier to manage.",
    changes: [
      {
        number: "01",
        title: "Clear ownership",
        text: "Every action has a responsible person or team.",
      },
      {
        number: "02",
        title: "Fewer delays",
        text: "Deadlines and overdue items become visible.",
      },
      {
        number: "03",
        title: "Better closure",
        text: "Issues are closed with evidence, not assumptions.",
      },
      {
        number: "04",
        title: "Cleaner escalation",
        text: "Unresolved issues move to the right level.",
      },
      {
        number: "05",
        title: "Management confidence",
        text: "Leaders can see what is moving and what is stuck.",
      },
    ],
  },

  leadershipReporting: {
    slug: "leadership-reporting",
    eyebrow: "Leadership Reporting",
    title: "Turn operational signals into decision-ready reporting.",
    intro:
      "We help teams build focused reporting that shows leaders what needs attention, not just what happened.",
    cta: "Start a project inquiry",
    solvesTitle: "What this service solves",
    solvesText: [
      "Leadership reports often become too long, too late or too disconnected from action.",
      "Important signals get buried in operational detail.",
      "We structure reporting so leaders can see priorities, risks, actions and decisions clearly.",
    ],
    modulesTitle: "How we structure reporting",
    modules: [
      {
        number: "01",
        title: "Indicator logic",
        text: "We define what should be measured and why it matters.",
      },
      {
        number: "02",
        title: "Reporting rhythm",
        text: "We clarify when reports are reviewed and by whom.",
      },
      {
        number: "03",
        title: "Decision layer",
        text: "We connect reporting to actions and follow-up.",
      },
      {
        number: "04",
        title: "Dashboard structure",
        text: "We shape simple views for leadership oversight.",
      },
    ],
    frameworks: [
      "ESG Reporting",
      "Sustainability Reporting",
      "Human Rights Due Diligence",
      "Certification Reporting",
      "Buyer Reporting",
      "Board Reporting",
      "Risk Reporting",
      "Management Review",
    ],
    frameworksNote:
      "We help teams structure reporting around leadership needs, certification expectations, buyer requirements and internal governance.",
    changeTitle: "What changes after implementation",
    changeIntro:
      "Reporting becomes shorter, clearer and more useful for decisions.",
    changes: [
      {
        number: "01",
        title: "Sharper focus",
        text: "Reports highlight what needs attention.",
      },
      {
        number: "02",
        title: "Better decisions",
        text: "Leaders see risk, action and progress clearly.",
      },
      {
        number: "03",
        title: "Cleaner accountability",
        text: "Reports connect issues to owners and follow-up.",
      },
      {
        number: "04",
        title: "Less noise",
        text: "Operational detail supports the story without overwhelming it.",
      },
      {
        number: "05",
        title: "Stronger governance",
        text: "Reporting supports management review and oversight.",
      },
    ],
  },
};
