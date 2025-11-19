import { test, expect } from '@playwright/test';

test.describe('Home / Splash Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Video Player Presence', async ({ page }) => {
    // Check if the TerminalVideo component's video element is present
    // The component likely renders a video tag
    const video = page.locator('video');
    await expect(video).toBeVisible();
    
    // Verify source attributes if possible, or just that it's loaded
    // Using JS property check is more robust for boolean attributes than checking HTML attribute string values
    await expect(video).toHaveJSProperty('autoplay', true);
    await expect(video).toHaveJSProperty('muted', true);
    await expect(video).toHaveAttribute('playsinline', '');
  });

  test('Enter Site Button', async ({ page }) => {
    // Check for the "Enter Here" link/button
    const enterLink = page.getByRole('link', { name: /enter here/i });
    await expect(enterLink).toBeVisible();
    
    // Verify it navigates to /welcome
    await expect(enterLink).toHaveAttribute('href', '/welcome');
    
    // Click and verify navigation
    await enterLink.click();
    await expect(page).toHaveURL(/\/welcome/);
  });
});