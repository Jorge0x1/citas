# Vendored anti-slop Oxlint plugin

Source: [dmmulroy/anti-slop](https://github.com/dmmulroy/anti-slop), copied from the `install-anti-slop` skill's bundled `assets/anti-slop/` on 2026-10-12.

- Exact upstream commit: **unknown**. The skill was installed without a recorded revision.
- Skill snapshot at install time: `computedHash` `d92d8dbdf1bd96e11ee33945dca76306179a7c415e7339769084b2c211c6897c` (skill path `skills/install-anti-slop/SKILL.md`). The skill itself was later removed from the repository.

Installed plugin paths:

- `tools/oxlint/anti-slop/index.ts` — generic plugin, registered as `anti-slop` in `.oxlintrc.json`.
- `tools/oxlint/anti-slop/effect/index.ts` — Effect plugin, copied but **not registered** (no direct `effect` dependency).
- `tools/oxlint/anti-slop/vendor/eslint-stylistic/` — vendored Stylistic rule; see its own `UPSTREAM.md` and `LICENSE`.

Dependencies: `oxlint` and `@oxlint/plugins` pinned at `1.87.0` (root `devDependencies`).

Intentional deviations: none. Files are byte-identical to the skill assets apart from this record.
