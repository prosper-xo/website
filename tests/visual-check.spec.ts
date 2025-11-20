import { test, expect } from '@playwright/test';

test('Visual check of Welcome page', async ({ page }) => {
  // 1. Navigate to /welcome
  // The baseURL is set in playwright.config.ts to http://localhost:3000
  await page.goto('/welcome');
  
  // Wait for the page to be ready
  await page.waitForLoadState('networkidle');

  console.log('--- Visual Check Report ---');

  // 2. Check Background
  // We'll inspect the body and the main element for background properties.
  const bodyBackground = await page.evaluate(() => {
    return window.getComputedStyle(document.body).backgroundImage;
  });
  console.log(`Body Background: ${bodyBackground}`);

  const mainBackground = await page.locator('main').first().evaluate((el) => {
    return window.getComputedStyle(el).backgroundImage;
  });
  console.log(`Main Background: ${mainBackground}`);
  
  // Check if a gradient is present in either
  const hasGradient = bodyBackground.includes('gradient') || mainBackground.includes('gradient');
  if (hasGradient) {
    console.log('✅ Background gradient detected.');
  } else {
    console.log('⚠️ No background gradient detected on body or main tag.');
  }

  // 3. Check Images
  const imagesToCheck = [
    { name: 'Monitor', alt: 'Monitor Screen' },
    { name: 'Arrows', alt: 'arrows' }
  ];

  for (const img of imagesToCheck) {
    const locator = page.getByAltText(img.alt).first();
    const isVisible = await locator.isVisible();
    
    if (isVisible) {
      // Check natural width to ensure it actually loaded
      const naturalWidth = await locator.evaluate((el) => (el as HTMLImageElement).naturalWidth);
      if (naturalWidth > 0) {
        console.log(`✅ ${img.name} image is visible and loaded (naturalWidth: ${naturalWidth}px).`);
      } else {
        console.log(`❌ ${img.name} image is visible but failed to load (naturalWidth: 0).`);
      }
    } else {
      console.log(`❌ ${img.name} image is NOT visible.`);
    }
  }

  // 4. Check Styles (CSS Modules verification)
  // We'll check the "Share with someone you know!" text for specific styles
  const sharePrompt = page.locator('text=Share with someone you know!');
  if (await sharePrompt.isVisible()) {
    const computedStyle = await sharePrompt.evaluate((el) => {
      const style = window.getComputedStyle(el);
      return {
        color: style.color,
        fontFamily: style.fontFamily,
        fontSize: style.fontSize
      };
    });
    console.log(`✅ "Share with someone you know!" text found.`);
    console.log(`   - Color: ${computedStyle.color}`);
    console.log(`   - Font Family: ${computedStyle.fontFamily}`);
    console.log(`   - Font Size: ${computedStyle.fontSize}`);
  } else {
    console.log('⚠️ "Share with someone you know!" text NOT found.');
  }

  // Also check a survey button style
  const artistBtn = page.getByRole('link', { name: 'Artist' }).first();
  if (await artistBtn.isVisible()) {
    const btnStyle = await artistBtn.evaluate((el) => {
      const style = window.getComputedStyle(el);
      return {
        backgroundColor: style.backgroundColor,
        color: style.color
      };
    });
    console.log(`✅ "Artist" button found.`);
    console.log(`   - Background Color: ${btnStyle.backgroundColor}`);
    console.log(`   - Color: ${btnStyle.color}`);
  } else {
    console.log('⚠️ "Artist" button NOT found.');
  }

  console.log('---------------------------');
});