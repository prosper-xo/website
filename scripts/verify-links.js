const ROUTES = [
  '/',
  '/welcome',
  '/why-prosper',
  '/team',
  '/ethos',
  '/events',
  '/get-involved',
  '/blog'
];

const BASE_URL = 'http://localhost:3000';

async function verifyLinks() {
  console.log(`Starting link verification against ${BASE_URL}...\n`);
  
  let failures = [];
  let successCount = 0;

  for (const route of ROUTES) {
    const url = `${BASE_URL}${route}`;
    try {
      // Set a timeout to avoid hanging indefinitely
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      const response = await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);

      const status = response.status;
      
      if (status === 200) {
        console.log(`✅ [${status}] ${route}`);
        successCount++;
      } else {
        console.log(`❌ [${status}] ${route}`);
        failures.push({ route, status, error: `Status ${status}` });
      }
    } catch (error) {
      console.log(`❌ [ERR] ${route}`);
      console.error(`    ${error.message}`);
      failures.push({ route, status: 'ERR', error: error.message });
    }
  }

  console.log('\n----------------------------------------');
  console.log(`Verification Complete.`);
  console.log(`Passed: ${successCount}`);
  console.log(`Failed: ${failures.length}`);

  if (failures.length > 0) {
    console.log('\nFailures details:');
    failures.forEach(f => console.log(`- ${f.route}: ${f.error}`));
    process.exit(1);
  } else {
    console.log('\nAll critical routes verified successfully!');
    process.exit(0);
  }
}

verifyLinks();