class DataManager {
  constructor() {
    this.data = [];
  }

  addData(trialId, eventType, time) {
    this.data.push({
      trialId: trialId,
      eventType: eventType,
      time: time,
    });
  }

  sendDataToServer() {
    // Send the data to your server
    // You can use XMLHttpRequest, Fetch API, or any other method to send the data
    console.log("Sending data to server:", this.data);
  }
}

const dataManager = new DataManager();
