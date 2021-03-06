'use strict';

const Audit = require('lighthouse').Audit;

const MAX_CARD_TIME = 3000;

class LoadAudit extends Audit {
    static get meta() {
        return {
            id: 'card-audit',
            title: 'ratp_pwa',
            category: 'ratp_pwa',
            name: 'card-audit',
            description: 'Schedule card initialized and ready',
            failureDescription: 'Schedule Card slow to initialize',
            helpText: 'Used to measure time from navigationStart to when the schedule card is shown.',
            requiredArtifacts: ['TimeToCard']
        };
    }

    static audit(artifacts) {
        const loadedTime = artifacts.TimeToCard;
        const belowThreshold = loadedTime <= MAX_CARD_TIME;

        return {
            rawValue: loadedTime,
            score: Number(belowThreshold)
        };
    }
}

module.exports = LoadAudit;