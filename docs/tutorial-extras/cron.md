---
sidebar_position: 1
---

# Cron

A CRON is a process that will be launched in a specific time 

You can create a "crons" folder in your module and a "xxx.cron.js" file. 

```
const { loadCronJob } = require('endurance-core/lib/cron');
const Report = require('../models/report.model');

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
```
