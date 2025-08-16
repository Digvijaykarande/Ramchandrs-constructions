import { Routes, Route } from 'react-router-dom';
import HomePage from '../features/catalog/pages/HomePage';
import CategoryPage from '../features/catalog/pages/CategoryPage';
import ProductPage from '../features/catalog/pages/ProductPage';
import CartPage from '../features/cart/pages/CartPage';
import CheckoutPage from '../features/cart/pages/CheckoutPage';
import LoginPage from '../features/auth/pages/LoginPage';
import RegisterPage from '../features/auth/pages/RegisterPage';
import AboutPage from '../features/catalog/pages/AboutPage';


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/categories" element={<CategoryPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}