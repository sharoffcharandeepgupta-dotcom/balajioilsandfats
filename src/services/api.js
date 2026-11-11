// Balaji Pvt. Ltd. - API Service Preparation
import { products } from '../data/companyData';

// Simulated latency to mimic server network calls
const LATENCY = 400;

/**
 * Fetch all products from the catalog
 * Supports optional category filtering
 */
export const getProducts = async (category = 'all') => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (category === 'all') {
        resolve([...products]);
      } else {
        const filtered = products.filter(p => p.category === category);
        resolve(filtered);
      }
    }, LATENCY);
  });
};

/**
 * Fetch a single product details by its unique string ID
 */
export const getProductById = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find(p => p.id === id);
      if (product) {
        resolve({ ...product });
      } else {
        reject(new Error(`Product with ID '${id}' not found`));
      }
    }, LATENCY);
  });
};

/**
 * Submit general contact inquiry form
 */
export const submitContactEnquiry = async (formData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Basic input validation
      if (!formData.name || !formData.email || !formData.message) {
        reject(new Error("Please fill in all required fields (Name, Email, and Message)."));
        return;
      }
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        reject(new Error("Please enter a valid email address."));
        return;
      }
      
      console.log("%c[API REST Simulation] Post /api/enquiry/contact Success:", "color: green; font-weight: bold;", formData);
      resolve({
        success: true,
        message: "Your enquiry has been submitted successfully! Our team will contact you shortly."
      });
    }, LATENCY);
  });
};

/**
 * Submit specific product enquiry form
 */
export const submitProductEnquiry = async (productId, formData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find(p => p.id === productId);
      if (!product) {
        reject(new Error(`Invalid product enquiry targeting nonexistent product ID: '${productId}'`));
        return;
      }

      if (!formData.name || !formData.email || !formData.quantity) {
        reject(new Error("Please fill in all required fields (Name, Email, and Target Quantity)."));
        return;
      }
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        reject(new Error("Please enter a valid email address."));
        return;
      }

      console.log(
        `%c[API REST Simulation] Post /api/enquiry/product/${productId} Success:`, 
        "color: green; font-weight: bold;", 
        { productId, productName: product.name, ...formData }
      );
      resolve({
        success: true,
        message: `Your enquiry for ${product.name} has been submitted successfully! A sales executive will reach out to you within 24 business hours.`
      });
    }, LATENCY);
  });
};
