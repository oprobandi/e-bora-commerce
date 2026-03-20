# Contributing to E-Bora Commerce

## Branching

```
main        ← production (auto-deploys to Vercel)
└── develop
    └── feature/your-feature
    └── fix/bug-description
    └── style/design-change
```

Never commit directly to `main`.

## Commits (Conventional Commits)

```
feat:    new feature
fix:     bug fix
style:   CSS/visual change
content: copy/text/image updates
docs:    README, CHANGELOG, ADR
chore:   deps, config
perf:    performance
```

## PR Checklist

- [ ] Tested on mobile (375px) and desktop (1280px)
- [ ] No hardcoded colors — use Tailwind tokens from `tailwind.config.js`
- [ ] No `console.log` left in code
- [ ] CHANGELOG.md updated under `[Unreleased]`
- [ ] TODO.md updated if task completed

## Design Rules

1. Colors only from Tailwind config tokens
2. No blue, no red as primary action color
3. Single color per text element — no split-color headings
4. M-Pesa green (`brand-green`) stays semantic — payment UI only
5. All breakpoints mobile-first: base → `sm:` → `md:` → `lg:`
