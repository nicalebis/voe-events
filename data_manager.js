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

