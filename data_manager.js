class DataManager {
  constructor() {
    this.data = [];
  }

  addData(trialId, eventType, time, videoTime, relativeTime) {
    this.data.push({
      trialId: trialId,
      eventType: eventType,
      time: time,
      videoTime: videoTime,
      relativeTime: relativeTime,
    });
  }

  exportData() {
    const json = JSON.stringify(this.data);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.json';
    a.click();
  }
}

const dataManager = new DataManager();

// sendDataToServer() {
//     // Convert data to CSV format and download it
//     const csvData = convertToCSV(this.data);
//     const blob = new Blob([csvData], { type: "text/csv" });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = "experiment_data.csv";
//     link.click();
//     URL.revokeObjectURL(url);
//     console.log("CSV file downloaded:", this.data);
//   }
// }

// function convertToCSV(data) {
//   const header = ["Trial ID", "Event", "Timestamp", "Video Time", "Relative Time"];
//   const csvRows = [header.join(",")];
// 
//   for (const row of data) {
//     csvRows.push(Object.values(row).join(","));
//   }
// 
//   return csvRows.join("\n");
// }
// 
// const dataManager = new DataManager();
