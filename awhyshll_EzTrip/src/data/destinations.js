export const destinations = {
  'rajasthan': [
    {
      id: 1,
      name: "Jaipur",
      description: "The Pink City with magnificent palaces and forts",
      image: "https://images.unsplash.com/photo-1599661046827-dacde7914097?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true,
      highlights: ["Amber Fort", "City Palace", "Hawa Mahal"]
    },
    {
      id: 2,
      name: "Udaipur",
      description: "The City of Lakes with stunning architecture",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true,
      highlights: ["Lake Palace", "City Palace", "Jagdish Temple"]
    },
    {
      id: 3,
      name: "Jodhpur",
      description: "The Blue City with magnificent Mehrangarh Fort",
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
      highlights: ["Mehrangarh Fort", "Blue Houses", "Umaid Bhawan Palace"]
    }
  ],
  'kerala': [
    {
      id: 4,
      name: "Alleppey",
      description: "Venice of the East with beautiful backwaters",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true,
      highlights: ["Backwaters", "Houseboats", "Vembanad Lake"]
    },
    {
      id: 5,
      name: "Munnar",
      description: "Hill station with tea plantations and cool climate",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true,
      highlights: ["Tea Gardens", "Eravikulam National Park", "Mattupetty Dam"]
    },
    {
      id: 6,
      name: "Kochi",
      description: "Queen of the Arabian Sea with rich history",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
      highlights: ["Chinese Fishing Nets", "Fort Kochi", "Mattancherry Palace"]
    }
  ],
  'goa': [
    {
      id: 7,
      name: "North Goa",
      description: "Vibrant beaches and nightlife",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true,
      highlights: ["Baga Beach", "Calangute Beach", "Anjuna Market"]
    },
    {
      id: 8,
      name: "South Goa",
      description: "Peaceful beaches and Portuguese heritage",
      image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true,
      highlights: ["Palolem Beach", "Colva Beach", "Old Goa Churches"]
    }
  ],
  'himachal-pradesh': [
    {
      id: 9,
      name: "Shimla",
      description: "Queen of Hills with colonial charm",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true,
      highlights: ["Mall Road", "Jakhu Temple", "Christ Church"]
    },
    {
      id: 10,
      name: "Manali",
      description: "Adventure hub in the Himalayas",
      image: "https://images.unsplash.com/photo-1626621341517-bbce31429276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true,
      highlights: ["Rohtang Pass", "Solang Valley", "Hadimba Temple"]
    }
  ],
  'uttar-pradesh': [
    {
      id: 11,
      name: "Agra",
      description: "Home to the magnificent Taj Mahal",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true,
      highlights: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri"]
    },
    {
      id: 12,
      name: "Varanasi",
      description: "Spiritual capital with ancient ghats",
      image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true,
      highlights: ["Dashashwamedh Ghat", "Kashi Vishwanath Temple", "Sarnath"]
    }
  ]
};

export const states = [
  { value: 'rajasthan', label: 'Rajasthan' },
  { value: 'kerala', label: 'Kerala' },
  { value: 'goa', label: 'Goa' },
  { value: 'himachal-pradesh', label: 'Himachal Pradesh' },
  { value: 'uttar-pradesh', label: 'Uttar Pradesh' }
];

export const routes = [
  {
    id: 1,
    name: "Golden Triangle",
    description: "Delhi → Agra → Jaipur",
    duration: "7 days",
    destinations: ["Delhi", "Agra", "Jaipur"],
    highlights: ["Taj Mahal", "Red Fort", "Amber Fort"]
  },
  {
    id: 2,
    name: "Kerala Backwaters",
    description: "Kochi → Alleppey → Munnar",
    duration: "5 days",
    destinations: ["Kochi", "Alleppey", "Munnar"],
    highlights: ["Houseboats", "Tea Plantations", "Spice Gardens"]
  },
  {
    id: 3,
    name: "Rajasthan Royal",
    description: "Jaipur → Udaipur → Jodhpur",
    duration: "8 days",
    destinations: ["Jaipur", "Udaipur", "Jodhpur"],
    highlights: ["Palaces", "Forts", "Desert Safari"]
  }
];