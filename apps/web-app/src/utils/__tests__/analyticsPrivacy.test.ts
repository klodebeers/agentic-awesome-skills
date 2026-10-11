import { describe, expect, it } from 'vitest';
import { redactAnalyticsUrl } from '../analyticsPrivacy';

describe('analytics URL privacy', () => {
  it('removes searches and shared fragments while preserving the public route', () => {
    expect(redactAnalyticsUrl('https://aaskills.tech/core/?q=private+project#selection=secret')).toBe('https://aaskills.tech/core/');
    expect(redactAnalyticsUrl('https://aaskills.tech/share/#selection=secret')).toBe('https://aaskills.tech/share/');
    expect(redactAnalyticsUrl('/teams/')).toBe('/teams/');
  });
});
