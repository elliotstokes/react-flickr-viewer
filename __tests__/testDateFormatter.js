'use strict';

jest.unmock('../app/helpers/dateFormatter');

import dateFormatter from '../app/helpers/dateFormatter';

describe('Date Formatter', () => {
  
  it('should be able to format an iso date', () => {
    const date = new Date(1995, 11, 17, 3, 24, 0);
    const formattedDate = dateFormatter.formatLongDate(date.toISOString());
    expect(formattedDate).toBe('December 17 1995, 03:24');
  });
});