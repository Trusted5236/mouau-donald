export type Specialist = {
  id: string;
  fullName: string;
  specialty: string;
  qualifications: string[];
  availableDays: string[];
  availableHours: string;
};

export type Hospital = {
  id: string;
  name: string;
  address: string;
  state: string;
  lga: string;
  phone: string;
  email: string;
  type: "tertiary" | "secondary" | "primary" | "private";
  emergencyReady: boolean;
  isVerified: boolean;
  operatingHours: string;
  coordinates: { lat: number; lng: number };
  specialists: Specialist[];
};

export const SPECIALTIES = [
  "Cardiology", "Neurology", "Pediatrics", "Obstetrics & Gynecology",
  "Orthopedics", "Oncology", "Ophthalmology", "General Surgery",
];

export const CONDITION_MAP: Record<string, string> = {
  stroke: "Neurology",
  "heart attack": "Cardiology",
  "chest pain": "Cardiology",
  fracture: "Orthopedics",
  pregnancy: "Obstetrics & Gynecology",
  cancer: "Oncology",
};

export const HOSPITALS: Hospital[] = [
  {
    id: "h1",
    name: "Lagos University Teaching Hospital",
    address: "Idi-Araba, Surulere",
    state: "Lagos", lga: "Surulere",
    phone: "+234 801 234 5678", email: "info@luth.gov.ng",
    type: "tertiary", emergencyReady: true, isVerified: true,
    operatingHours: "24/7",
    coordinates: { lat: 6.5075, lng: 3.3605 },
    specialists: [
      { id: "s1", fullName: "Dr. Emeka Obi", specialty: "Cardiology", qualifications: ["MBBS", "FMCP"], availableDays: ["Mon","Wed","Fri"], availableHours: "8am - 4pm" },
      { id: "s2", fullName: "Dr. Aisha Bello", specialty: "Neurology", qualifications: ["MBBS","FWACP"], availableDays: ["Tue","Thu"], availableHours: "9am - 3pm" },
    ],
  },
  {
    id: "h2",
    name: "National Hospital Abuja",
    address: "Central Business District",
    state: "Abuja", lga: "AMAC",
    phone: "+234 909 876 5432", email: "contact@nhabuja.gov.ng",
    type: "tertiary", emergencyReady: true, isVerified: true,
    operatingHours: "24/7",
    coordinates: { lat: 9.0579, lng: 7.4951 },
    specialists: [
      { id: "s3", fullName: "Dr. Tunde Adekola", specialty: "Oncology", qualifications: ["MBBS","FMCP"], availableDays: ["Mon-Fri"], availableHours: "8am - 5pm" },
      { id: "s4", fullName: "Dr. Ngozi Eze", specialty: "Pediatrics", qualifications: ["MBBS","FWACP"], availableDays: ["Mon","Tue","Thu"], availableHours: "8am - 2pm" },
    ],
  },
  {
    id: "h3",
    name: "University of Nigeria Teaching Hospital",
    address: "Ituku-Ozalla",
    state: "Enugu", lga: "Nkanu West",
    phone: "+234 803 111 2222", email: "info@unth.edu.ng",
    type: "tertiary", emergencyReady: true, isVerified: true,
    operatingHours: "24/7",
    coordinates: { lat: 6.3528, lng: 7.4216 },
    specialists: [
      { id: "s5", fullName: "Dr. Chuka Nwosu", specialty: "Orthopedics", qualifications: ["MBBS","FWACS"], availableDays: ["Mon","Wed"], availableHours: "9am - 4pm" },
      { id: "s6", fullName: "Dr. Ifeoma Okeke", specialty: "Obstetrics & Gynecology", qualifications: ["MBBS","FMCOG"], availableDays: ["Tue","Fri"], availableHours: "10am - 4pm" },
    ],
  },
  {
    id: "h4",
    name: "Reddington Hospital",
    address: "Victoria Island",
    state: "Lagos", lga: "Eti-Osa",
    phone: "+234 700 100 2000", email: "care@reddington.com",
    type: "private", emergencyReady: true, isVerified: true,
    operatingHours: "24/7",
    coordinates: { lat: 6.4281, lng: 3.4219 },
    specialists: [
      { id: "s7", fullName: "Dr. Femi Soyinka", specialty: "Cardiology", qualifications: ["MBBS","MD"], availableDays: ["Mon-Fri"], availableHours: "8am - 6pm" },
      { id: "s8", fullName: "Dr. Yetunde Cole", specialty: "Ophthalmology", qualifications: ["MBBS","FWACS"], availableDays: ["Mon","Thu"], availableHours: "9am - 3pm" },
    ],
  },
  {
    id: "h5",
    name: "University of Port Harcourt Teaching Hospital",
    address: "Alakahia",
    state: "Rivers", lga: "Obio-Akpor",
    phone: "+234 802 555 7777", email: "info@upth.edu.ng",
    type: "tertiary", emergencyReady: true, isVerified: true,
    operatingHours: "24/7",
    coordinates: { lat: 4.8946, lng: 6.9252 },
    specialists: [
      { id: "s9", fullName: "Dr. Boma Ibinabo", specialty: "General Surgery", qualifications: ["MBBS","FWACS"], availableDays: ["Mon","Wed","Fri"], availableHours: "8am - 4pm" },
      { id: "s10", fullName: "Dr. Adaeze Okafor", specialty: "Neurology", qualifications: ["MBBS","FMCP"], availableDays: ["Tue","Thu"], availableHours: "9am - 2pm" },
    ],
  },
  {
    id: "h6",
    name: "Nnamdi Azikiwe University Teaching Hospital",
    address: "Nnewi",
    state: "Anambra", lga: "Nnewi North",
    phone: "+234 805 333 4444", email: "info@nauth.edu.ng",
    type: "tertiary", emergencyReady: false, isVerified: true,
    operatingHours: "6am - 10pm",
    coordinates: { lat: 6.0167, lng: 6.9167 },
    specialists: [
      { id: "s11", fullName: "Dr. Obinna Maduka", specialty: "Pediatrics", qualifications: ["MBBS","FWACP"], availableDays: ["Mon-Fri"], availableHours: "8am - 3pm" },
    ],
  },
];

export function haversine(lat1: number, lng1: number, lat2: number, lng2: number) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a = Math.sin(dLat/2) ** 2 + Math.cos(lat1*Math.PI/180) * Math.cos(lat2*Math.PI/180) * Math.sin(dLng/2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export function searchHospitals(opts: {
  specialty?: string; condition?: string; state?: string; emergency?: boolean;
  lat?: number; lng?: number;
}): Hospital[] {
  let spec = opts.specialty;
  if (!spec && opts.condition) {
    const key = Object.keys(CONDITION_MAP).find(k => opts.condition!.toLowerCase().includes(k));
    if (key) spec = CONDITION_MAP[key];
  }
  let results = HOSPITALS.filter(h => {
    if (spec && !h.specialists.some(s => s.specialty.toLowerCase().includes(spec!.toLowerCase()))) return false;
    if (opts.state && h.state.toLowerCase() !== opts.state.toLowerCase()) return false;
    if (opts.emergency && !h.emergencyReady) return false;
    return true;
  });
  if (opts.lat && opts.lng) {
    results = results.sort((a, b) =>
      haversine(opts.lat!, opts.lng!, a.coordinates.lat, a.coordinates.lng) -
      haversine(opts.lat!, opts.lng!, b.coordinates.lat, b.coordinates.lng),
    );
  }
  return results;
}
