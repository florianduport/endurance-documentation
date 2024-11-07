---
sidebar_position: 1
---

# Cron

A CRON is a process that will be launched in a specific time 

You can create a "crons" folder in your module and a "xxx.cron.js" file. 

```js
import { loadCronJob } from 'endurance-core/lib/cron.js';
import Report from '../models/report.model.js';

// Fonction de génération des rapports
const generateDailyReport = async () => {
  try {
    const reports = await Report.generateDaily(); // Supposons que cette méthode génère un rapport quotidien
    console.log(`Daily report generated with ${reports.length} entries.`);
  } catch (error) {
    console.error('Error generating daily report:', error);
  }
};

// Charger un cron job qui génère un rapport quotidien à minuit
loadCronJob('generateDailyReport', '0 0 * * *', generateDailyReport);

export default {};
```
