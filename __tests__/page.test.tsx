import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from '@/app/page'

describe("Landing Page", () => {
  test('renders landing page', () => {
    render(<Page />)
    expect(screen.getByRole('heading', { level: 2, name: 'Track Your Job Applications with Ease' })).toBeDefined();
  });

});
