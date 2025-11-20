import { test, expect } from '@playwright/test';

test.describe('Responsive Design Tests', () => {
  
  test('Hamburger menu should be hidden on desktop', async ({ page }) => {
    // Set viewport to a standard desktop size
    await page.setViewportSize({ width: 1280, height: 720 });
    
    await page.goto('/');
    
    const menuButton = page.getByLabel('Toggle menu');
    
    // Check if the button is hidden
    await expect(menuButton).toBeHidden();
  });

  test('Hamburger menu should be visible on mobile', async ({ page }) => {
    // Set viewport to a mobile size (e.g., iPhone SE)
    await page.setViewportSize({ width: 375, height: 667 });
    
    await page.goto('/');
    
    const menuButton = page.getByLabel('Toggle menu');
    
    // Check if the button is visible
    await expect(menuButton).toBeVisible();
  });

});