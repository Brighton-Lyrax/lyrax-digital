export const posts = [
  {
    slug: 'automation-checklist',
    title: 'An accountable automation checklist before you connect tools',
    date: '2026-07-22',
    category: 'Automation',
    excerpt: 'Before you connect n8n, WhatsApp, or email, lock down ownership, exceptions, and audit trails.',
    content: `Automation without ownership creates invisible failure modes.

1. Define trigger and responsible owner
2. Map exception paths
3. Preserve an audit trail
4. Keep consequential decisions human-visible
5. Add fallback behavior for API or provider outages

If you cannot explain the failure mode in one sentence, simplify the workflow.`,
  },
  {
    slug: 'portal-ownership',
    title: 'Client portal ownership: who owns the data, approvals, and handover?',
    date: '2026-07-21',
    category: 'Operations',
    excerpt: 'A useful portal separates operational data from user confusion by assigning clear owners.',
    content: `Most portal failures are ownership failures, not engineering failures.

- Assign a data owner per module
- Separate approval roles from viewer roles
- Publish handover docs that name owners and SLAs
- Retain logs for decisions that affect billing or access

Make ownership part of the launch checklist.`,
  },
  {
    slug: 'launch-to-retainer',
    title: 'From launch to retainer: a simple post-launch rhythm',
    date: '2026-07-20',
    category: 'Growth',
    excerpt: 'After launch, switch from project mode to a repeatable care rhythm.',
    content: `A useful retainer has clear boundaries.

- Weekly: exception handling and verified issues
- Monthly: analytics review and conversion improvements
- Quarterly: agreed improvements with measurable outcomes
- Always: maintain separation between support, new work, and infra ownership

This prevents drift and keeps cost predictable.`,
  },
]
