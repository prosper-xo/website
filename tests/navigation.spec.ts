import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  
  test.describe('Desktop', () => {
    test.use({ viewport: { width: 1280, height: 720 } });

    test('Header Navigation Links', async ({ page }) => {
      await page.goto('/welcome');

      // Logo
      await expect(page.getByRole('link', { name: 'Prosper XO' }).first()).toHaveAttribute('href', '/welcome');

      // Main Navigation
      const navLinks = [
        { name: 'WHY PROSPER', href: '/why-prosper' },
        { name: 'TEAM', href: '/team' },
        { name: 'ETHOS', href: '/ethos' },
        { name: 'EVENTS', href: '/events' },
        { name: 'GET INVOLVED', href: '/get-involved' },
      ];

      for (const link of navLinks) {
        // Using a specific selector or more specific locator if needed, 
        // but getByRole('link', { name: ... }) should work if they are visible text.
        // Note: Header.tsx has two sets of links (one in textNav, one in secondaryNav).
        // In desktop view, textNav should be visible.
        await expect(page.locator('nav').getByRole('link', { name: link.name }).first()).toBeVisible();
        await expect(page.locator('nav').getByRole('link', { name: link.name }).first()).toHaveAttribute('href', link.href);
      }
    });

    test('Footer Navigation Links', async ({ page }) => {
      await page.goto('/welcome');
      
      // Footer links
      const footerLinks = [
        { name: 'Home', href: '/' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms of Use', href: '/terms-of-use' },
        { name: 'Code of Conduct', href: '/code-of-conduct' },
      ];

      for (const link of footerLinks) {
        // Scoping to footer to avoid confusion with header or other links
        await expect(page.locator('footer').getByRole('link', { name: link.name })).toBeVisible();
        await expect(page.locator('footer').getByRole('link', { name: link.name })).toHaveAttribute('href', link.href);
      }
    });
  });

  test.describe('Mobile', () => {
    test.use({ viewport: { width: 375, height: 667 } }); // iPhone SE size

    test('Hamburger Menu', async ({ page }) => {
      await page.goto('/welcome');

      // Check for Hamburger Menu button
      const hamburgerBtn = page.getByRole('button', { name: 'Toggle menu' });
      await expect(hamburgerBtn).toBeVisible();

      // Open Menu
      await hamburgerBtn.click();

      // Check if menu is open (based on implementation, likely checking visibility of links)
      const mobileLink = page.locator('nav').getByRole('link', { name: 'WHY PROSPER' }).last(); // Using .last() as it might pick up the desktop one hidden?
      // Actually, CSS likely handles visibility. Playwright checks actual visibility.
      
      // We need to ensure we are targeting the mobile menu links.
      // In Header.tsx, secondaryNav has links.
      // When menu opens, secondaryNav gets .navOpen class.
      
      await expect(mobileLink).toBeVisible();
      
      // Close Menu
      await hamburgerBtn.click();
      // Or clicking a link closes it? 
      // The implementation says: <div className={...} onClick={closeMenu}>
    });
  });
});