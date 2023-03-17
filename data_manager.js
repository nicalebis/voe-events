const dataManager = {
  mainTrialsData: [],
  attentionCheckData: [],

  addMainTrialData: function (trialType, outcome, scene, reactionTimeDifference) {
    this.mainTrialsData.push({
      trialType: trialType,
      outcome: outcome,
      scene: scene,
      reactionTimeDifference: reactionTimeDifference,
    });
  },

  addAttentionCheckData: function (checkType, eventTime, reactionTime) {
    this.attentionCheckData.push({
      checkType: checkType,
      eventTime: eventTime,
      reactionTime: reactionTime,
    });
  },

  getMainTrialsData: function () {
    return this.mainTrialsData;
  },

  getAttentionCheckData: function () {
    return this.attentionCheckData;
  },
};
