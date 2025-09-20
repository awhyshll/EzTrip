// Type definitions using JSDoc comments for better IDE support

/**
 * @typedef {Object} Attraction
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {string} location
 * @property {'cultural'|'natural'|'historical'|'adventure'|'community'} category
 * @property {string[]} images
 * @property {number} rating
 * @property {number} reviews
 * @property {boolean} sustainable
 * @property {boolean} communityInvolved
 * @property {string[]} tags
 */

/**
 * @typedef {Object} TravelItinerary
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string} duration
 * @property {Attraction[]} attractions
 * @property {'easy'|'moderate'|'challenging'} difficulty
 * @property {string} theme
 * @property {number} estimatedCost
 * @property {number} sustainabilityScore
 */

/**
 * @typedef {Object} SustainabilityMetrics
 * @property {number} carbonFootprint
 * @property {number} wasteReduction
 * @property {number} localEmployment
 */

/**
 * @typedef {Object} TourismStats
 * @property {number} totalVisitors
 * @property {number} economicImpact
 * @property {number} communityBenefits
 * @property {SustainabilityMetrics} sustainabilityMetrics
 */

/**
 * @typedef {Object} ThemeTrail
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {string} color
 * @property {string} icon
 * @property {Attraction[]} attractions
 */

export {}