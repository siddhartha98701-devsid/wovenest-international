import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBgfQscqaYAq4nFEHSNA4aSKg12moFPU_8",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "wovenest-3f270.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "wovenest-3f270",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "wovenest-3f270.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "984336131364",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:984336131364:web:22cd9d9b0305246bb37fb1",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-MGXHFQE4TF",
};

// Initialize Firebase safely
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);

// Optional Analytics initialization if supported in current environment
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      getAnalytics(app);
    }
  }).catch(() => {
    // Ignore analytics unsupported environment warnings
  });
}

/**
 * Submit an inquiry to Firestore
 * @param {Object} data 
 * @returns {Promise<string>} Document ID
 */
export async function submitInquiry(data) {
  try {
    const docRef = await addDoc(collection(db, 'inquiries'), {
      ...data,
      status: 'pending',
      createdAt: serverTimestamp(),
      source: 'web_inquiry_modal',
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding inquiry to Firestore:', error);
    throw error;
  }
}

/**
 * Register an email to the newsletter subscribers collection in Firestore
 * @param {string} email 
 * @returns {Promise<string>} Document ID
 */
export async function subscribeNewsletter(email) {
  try {
    const docRef = await addDoc(collection(db, 'newsletter_subscribers'), {
      email,
      subscribedAt: serverTimestamp(),
      status: 'active',
      source: 'footer_registry',
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding subscriber to Firestore:', error);
    throw error;
  }
}
