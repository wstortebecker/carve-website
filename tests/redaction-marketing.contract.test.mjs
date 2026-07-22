import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import test from 'node:test';

const projectRoot = process.cwd();
const contentRoot = path.join(projectRoot, 'src', 'content', 'marketing');
const home = readFileSync(path.join(contentRoot, 'home.html'), 'utf8');
const lockedPages = ['home.html', 'how-it-works.html', 'pricing.html'].map(file => ({
  file,
  source: readFileSync(path.join(contentRoot, file), 'utf8'),
}));

test('uses the local Redaction display face across every locked marketing page', () => {
  for (const page of lockedPages) {
    assert.match(page.source, /@font-face\s*\{[^}]*font-family:'Redaction'/s, page.file);
    assert.match(page.source, /--serif:'Redaction'/, page.file);
    assert.doesNotMatch(page.source, /Cormorant Garamond/, page.file);
  }
});

test('ships every Redaction cut used by the hero scrub', () => {
  for (const grade of ['regular', '10', '20', '35', '50', '70', '100']) {
    assert.ok(
      existsSync(path.join(projectRoot, 'public', 'fonts', 'redaction', `redaction-${grade}.otf`)),
      `missing Redaction ${grade}`,
    );
  }
});

test('renders one accessible hero phrase with seven visual cuts', () => {
  assert.match(home, /<section class="hero" data-signal-grade="35">/);
  assert.match(home, /class="signal-word" aria-label="Can shoppers find them\?"/);
  const layers = home.match(/signal-word__layer--(?:regular|10|20|35|50|70|100)" aria-hidden="true"/g) ?? [];
  assert.equal(layers.length, 7);
});

test('wires pointer scrubbing while preserving a static reduced-motion state', () => {
  assert.match(home, /const redactionGrades = \['regular', '10', '20', '35', '50', '70', '100'\]/);
  assert.match(home, /if \(!redactionHero \|\| reduceMotion \|\| !redactionHoverQuery\.matches \|\| !redactionPointerQuery\.matches\) return/);
  assert.match(home, /redactionHero\.addEventListener\('pointermove', updateGrade\)/);
  assert.match(home, /redactionHero\.addEventListener\('pointerleave', resetRedactionGrade\)/);
});
