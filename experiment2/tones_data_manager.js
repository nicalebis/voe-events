const tonesDataManager = (() => {
  const data = {
    tones: [],
    intervals: [],
    keyPresses: [],
  };

  function addToneData(videoIndex, tone, time) {
    data.tones.push({
      videoIndex: videoIndex,
      tone: tone,
      time: time,
    });
  }

  function addToneInterval(videoIndex, tone, interval) {
    data.intervals.push({
      videoIndex: videoIndex,
      tone: tone,
      interval: interval,
    });
  }

  function addKeyPressData(videoIndex, key, time) {
    data.keyPresses.push({
      videoIndex: videoIndex,
      key: key,
      time: time,
    });
  }

  function exportData() {
    console.log("Exporting data:");
    console.log(data);
  }

  return {
    addToneData: addToneData,
    addToneInterval: addToneInterval,
    addKeyPressData: addKeyPressData,
    exportData: exportData,
    data: data,
  };
})();
