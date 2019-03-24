import { formatDate, getParamsFromUrl } from '..';

describe('index', () => {
  it('formatDate', () => {
    expect(formatDate('2019-03-24T00:00:00')).toBe('2019-03-24 00:00:00');
  });

  it('getParamsFromUrl', () => {
    window.location.hash = 'http://localhost:9099?test=test1';
    expect(getParamsFromUrl('test')).toBe('test1');
    window.location.hash = null;
  });
});